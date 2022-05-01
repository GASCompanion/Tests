// Copyright 2021 Mickael Daniel. All Rights Reserved.

#include "GASCompanionTestsLog.h"
#include "Components/GSCAbilityInputBindingComponent.h"
#include "Abilities/GSCAbilitySystemComponent.h"
#include "Abilities/Attributes/GSCAttributeSet.h"
#include "ModularGameplayActors/GSCModularCharacter.h"
#include "Utils/ModularActorTestSuite.h"

class FAbilityInputBindingTestSuite : public FModularActorTestSuite
{
public:
	FAbilityInputBindingTestSuite(UWorld* WorldIn, FAutomationTestBase* TestIn)
		: FModularActorTestSuite(WorldIn, TestIn)
	{
		UGSCAbilityInputBindingComponent* InputBindingComponent = SourceActor->FindComponentByClass<UGSCAbilityInputBindingComponent>();
		if (InputBindingComponent == nullptr)
		{
			InputBindingComponent = NewObject<UGSCAbilityInputBindingComponent>(SourceActor, TEXT("AbilityInputBindingComponent_Test_0"));
			InputBindingComponent->RegisterComponent();
		}

		UGSCAbilitySystemComponent* ModularSourceASC = Cast<UGSCAbilitySystemComponent>(SourceASC);
		if (ModularSourceASC)
		{
			FGSCAbilityInputMapping AbilityInputMapping;
			AbilityInputMapping.Ability = UGameplayAbility::StaticClass();

			InputActionFixture = Cast<UInputAction>(StaticLoadObject(UInputAction::StaticClass(), nullptr, TEXT("/GASCompanionTests/Fixtures/IA_Test_Fixture.IA_Test_Fixture")));
			AbilityInputMapping.InputAction = InputActionFixture;
			check(AbilityInputMapping.InputAction);

			ModularSourceASC->GrantedAbilities.Add(AbilityInputMapping);

			ModularSourceASC->GrantDefaultAbilitiesAndAttributes(SourceActor, SourceActor);
		}
	}

	void Test_GetBoundInputActionForAbility()
	{
		UGSCAbilityInputBindingComponent* SourceInputBindingComponent = SourceActor->FindComponentByClass<UGSCAbilityInputBindingComponent>();
		Test->TestTrue("Source Actor has UGSCAbilityInputBindingComponent", SourceInputBindingComponent != nullptr);

		const TSubclassOf<UGameplayAbility> AbilityToActivate = UGameplayAbility::StaticClass();
		const UGameplayAbility* AbilityCDO = AbilityToActivate.GetDefaultObject();

		bool bSuccess = false;

		UGameplayAbility* ActivatedAbility = nullptr;
		TArray<FGameplayAbilitySpec> ActivatableAbilities = SourceASC->GetActivatableAbilities();
		for (const FGameplayAbilitySpec& Spec : ActivatableAbilities)
		{
			if (Spec.Ability == AbilityCDO)
			{
				bSuccess |= SourceASC->InternalTryActivateAbility(Spec.Handle, FPredictionKey(), &ActivatedAbility);
				break;
			}
		}

		if (!bSuccess)
		{
			Test->TestEqual("Failed to activate ability", bSuccess, true);
			return;
		}

		UInputAction* BoundInput = SourceInputBindingComponent->GetBoundInputActionForAbility(ActivatedAbility);
		Test->TestTrue("AbilityInputBindingComponent::GetBoundInputActionForAbility() should return an InputAction", BoundInput != nullptr);
		Test->TestEqual("Returned InputAction for GetBoundInputActionForAbility() should be the same as the one in granted abilities array", BoundInput, InputActionFixture);
	}

protected:
	UInputAction* InputActionFixture = nullptr;
};

IMPLEMENT_COMPLEX_AUTOMATION_TEST(AbilityInputBindingTests, "GASCompanionTests.AbilityInputBinding", EAutomationTestFlags::EditorContext | EAutomationTestFlags::EngineFilter)

void AbilityInputBindingTests::GetTests(TArray<FString>& OutBeautifiedNames, TArray<FString>& OutTestCommands) const
{
	TArray<FTestDefinition> TestDefinitions = {
		FTestDefinition("Test_GetBoundInputActionForAbility", "Should return bound input action for a granted ability")
	};

	for (FTestDefinition TestDefinition : TestDefinitions)
	{
		OutBeautifiedNames.Add(FString::Printf(TEXT("%s (%s)"), *TestDefinition.Description, *TestDefinition.FunctionName));
		OutTestCommands.Add(TestDefinition.FunctionName);
	}
}

bool AbilityInputBindingTests::RunTest(const FString& Parameters)
{
	const FString TestFuncName = Parameters;
	TESTS_LOG(Display, TEXT("Running test ... %s (Param: %s)"), *TestName, *TestFuncName)

	typedef void (FAbilityInputBindingTestSuite::*TestFunc)();

	// Find the matching test
	TMap<FString, TestFunc> NameToTestFunc;
	NameToTestFunc.Add("Test_GetBoundInputActionForAbility", &FAbilityInputBindingTestSuite::Test_GetBoundInputActionForAbility);

	const TestFunc TestFunction = NameToTestFunc.FindChecked(TestFuncName);
	if (TestFunction == nullptr)
	{
		return false;
	}

	// Setup tests
	UWorld* World = UWorld::CreateWorld(EWorldType::Game, false);
	FWorldContext& WorldContext = GEngine->CreateNewWorldContext(EWorldType::Game);
	WorldContext.SetCurrentWorld(World);

	FURL URL;
	World->InitializeActorsForPlay(URL);
	World->BeginPlay();

	// Actual Test
	const uint64 InitialFrameCounter = GFrameCounter;
	{
		FAbilityInputBindingTestSuite Tester(World, this);
		(Tester.*TestFunction)();
	}
	GFrameCounter = InitialFrameCounter;

	// Teardown tests
	GEngine->DestroyWorldContext(World);
	World->DestroyWorld(false);

	return true;
}
