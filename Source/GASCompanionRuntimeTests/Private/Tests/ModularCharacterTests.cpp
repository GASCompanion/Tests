// Copyright 2021 Mickael Daniel. All Rights Reserved.

#include "GASCompanionTestsLog.h"
#include "Abilities/MGCAbilitySystemComponent.h"
#include "Abilities/Attributes/GSCAttributeSet.h"
#include "ModularGameplayActors/ModularCharacter.h"
#include "Utils/ModularActorTestSuite.h"

#define GET_FIELD_CHECKED(Class, Field) FindFieldChecked<FProperty>(Class::StaticClass(), GET_MEMBER_NAME_CHECKED(Class, Field))
#define CONSTRUCT_CLASS(Class, Name) Class* Name = NewObject<Class>(GetTransientPackage(), FName(TEXT(#Name)))

class FModularCharacterTestSuite : public FModularActorTestSuite
{
public:
	FModularCharacterTestSuite(UWorld* WorldIn, FAutomationTestBase* TestIn)
		: FModularActorTestSuite(WorldIn, TestIn)
	{
		UMGCAbilitySystemComponent* ModularSourceASC = Cast<UMGCAbilitySystemComponent>(SourceASC);
		if (ModularSourceASC)
		{
			FMGCAttributeSetDefinition AttributesDefinition;
			AttributesDefinition.AttributeSet = UGSCAttributeSet::StaticClass();
			AttributesDefinition.InitializationData = CreateAttributesDataTable();
			ModularSourceASC->GrantedAttributes.Add(AttributesDefinition);

			ModularSourceASC->GrantDefaultAbilitiesAndAttributes(SourceActor, SourceActor);
		}

		UMGCAbilitySystemComponent* ModularTargetASC = Cast<UMGCAbilitySystemComponent>(TargetASC);
		if (ModularTargetASC)
		{
			FMGCAttributeSetDefinition AttributesDefinition;
			AttributesDefinition.AttributeSet = UGSCAttributeSet::StaticClass();
			AttributesDefinition.InitializationData = CreateAttributesDataTable();
			ModularTargetASC->GrantedAttributes.Add(AttributesDefinition);

			ModularTargetASC->GrantDefaultAbilitiesAndAttributes(TargetActor, TargetActor);
		}
	}

	void Test_Basics()
	{
		UMGCAbilitySystemComponent* SourceModularASC = SourceActor->FindComponentByClass<UMGCAbilitySystemComponent>();
		Test->TestTrue("Source Actor has UMGCAbilitySystemComponent", SourceModularASC != nullptr);
		Test->TestTrue("Source Actor ASC is the same returned by IAbilitySystemInterface", SourceModularASC == SourceASC);

		UMGCAbilitySystemComponent* TargetModularASC = TargetActor->FindComponentByClass<UMGCAbilitySystemComponent>();
		Test->TestTrue("Target Actor has UMGCAbilitySystemComponent", TargetModularASC != nullptr);
		Test->TestTrue("Source Actor ASC is the same returned by IAbilitySystemInterface", TargetModularASC == TargetASC);

		Test->TestNotEqual("Source and Target ASCs are not the same address", SourceModularASC, TargetModularASC);
	}

	void Test_Attributes()
	{
		Test->TestTrue("Source ASC has UGSCAttributeSet granted", SourceASC->HasAttributeSetForAttribute(UGSCAttributeSet::GetHealthAttribute()));
		Test->TestTrue("Target ASC has UGSCAttributeSet granted", TargetASC->HasAttributeSetForAttribute(UGSCAttributeSet::GetHealthAttribute()));

		Test->TestEqual("Source ASC AttributeSet Health is initialized to 500.f", SourceASC->GetNumericAttributeBase(UGSCAttributeSet::GetHealthAttribute()), 500.f);
		Test->TestEqual("Target ASC AttributeSet Health is initialized to 500.f", TargetASC->GetNumericAttributeBase(UGSCAttributeSet::GetHealthAttribute()), 500.f);
	}

	void Test_InstantDamage()
	{
		constexpr float DamageValue = 5.f;
		const float StartingHealth = TargetASC->GetNumericAttributeBase(UGSCAttributeSet::GetHealthAttribute());

		// just try and reduce the health attribute
		{
			CONSTRUCT_CLASS(UGameplayEffect, BaseDmgEffect);
			AddModifier(BaseDmgEffect, GET_FIELD_CHECKED(UGSCAttributeSet, Health), EGameplayModOp::Additive, FScalableFloat(-DamageValue));
			BaseDmgEffect->DurationPolicy = EGameplayEffectDurationType::Instant;

			SourceASC->ApplyGameplayEffectToTarget(BaseDmgEffect, TargetASC, 1.f);
		}

		// make sure health was reduced
		Test->TestEqual(TEXT("Health Reduced"), TargetASC->GetNumericAttributeBase(UGSCAttributeSet::GetHealthAttribute()), StartingHealth - DamageValue);
	}

	void Test_DamageAttribute()
	{
		constexpr float DamageValue = 5.f;
		const float StartingHealth = TargetASC->GetNumericAttributeBase(UGSCAttributeSet::GetHealthAttribute());

		// just try and reduce the health attribute, using damage meta attribute
		{
			CONSTRUCT_CLASS(UGameplayEffect, BaseDmgEffect);
			AddModifier(BaseDmgEffect, GET_FIELD_CHECKED(UGSCAttributeSet, Damage), EGameplayModOp::Additive, FScalableFloat(DamageValue));
			BaseDmgEffect->DurationPolicy = EGameplayEffectDurationType::Instant;

			SourceASC->ApplyGameplayEffectToTarget(BaseDmgEffect, TargetASC, 1.f);
		}

		// Now we should have lost some health
		Test->TestEqual(TEXT("Health Reduced via Damage Attribute (Additive Operation)"), TargetASC->GetNumericAttributeBase(UGSCAttributeSet::GetHealthAttribute()), StartingHealth - DamageValue);

		// Confirm the damage attribute itself was reset to 0 when it was applied to health
		Test->TestEqual(TEXT("Damage Applied"), TargetASC->GetSet<UGSCAttributeSet>()->GetDamage(), 0.f);

		// just try and reduce the health attribute, using damage meta attribute (now using override operation)
		{
			CONSTRUCT_CLASS(UGameplayEffect, BaseDmgEffect);
			AddModifier(BaseDmgEffect, GET_FIELD_CHECKED(UGSCAttributeSet, Damage), EGameplayModOp::Override, FScalableFloat(DamageValue));
			BaseDmgEffect->DurationPolicy = EGameplayEffectDurationType::Instant;

			SourceASC->ApplyGameplayEffectToTarget(BaseDmgEffect, TargetASC, 1.f);
		}

		// make sure health was reduced
		Test->TestEqual(TEXT("Health Reduced via Damage Attribute (Override Operation)"), TargetASC->GetNumericAttributeBase(UGSCAttributeSet::GetHealthAttribute()), StartingHealth - (DamageValue * 2));

		// Confirm the damage attribute itself was reset to 0 when it was applied to health
		Test->TestEqual(TEXT("Damage Applied"), TargetASC->GetNumericAttributeBase(UGSCAttributeSet::GetDamageAttribute()), 0.f);
	}
};

IMPLEMENT_COMPLEX_AUTOMATION_TEST(ModularCharacterTests, "GASCompanionTests.ModularCharacter", EAutomationTestFlags::EditorContext | EAutomationTestFlags::EngineFilter)

void ModularCharacterTests::GetTests(TArray<FString>& OutBeautifiedNames, TArray<FString>& OutTestCommands) const
{
	TArray<FTestDefinition> TestDefinitions = {
		FTestDefinition("Test_Basics", "Should spawned actor be initialized with an AbilitySystemComponent"),
		FTestDefinition("Test_Attributes", "Should have AttributeSet granted and initialized"),
		FTestDefinition("Test_InstantDamage", "Should health be reduced via GameplayEffect"),
		FTestDefinition("Test_DamageAttribute", "Should health be reduced using Damage Meta Attribute"),
	};

	for (FTestDefinition TestDefinition : TestDefinitions)
	{
		OutBeautifiedNames.Add(FString::Printf(TEXT("%s (%s)"), *TestDefinition.Description, *TestDefinition.FunctionName));
		OutTestCommands.Add(TestDefinition.FunctionName);
	}
}

bool ModularCharacterTests::RunTest(const FString& Parameters)
{
	const FString TestFuncName = Parameters;
	TESTS_LOG(Display, TEXT("Running test ... %s (Param: %s)"), *TestName, *TestFuncName)

	typedef void (FModularCharacterTestSuite::*TestFunc)();

	// Find the matching test
	TMap<FString, TestFunc> NameToTestFunc;
	NameToTestFunc.Add("Test_Basics", &FModularCharacterTestSuite::Test_Basics);
	NameToTestFunc.Add("Test_Attributes", &FModularCharacterTestSuite::Test_Attributes);
	NameToTestFunc.Add("Test_InstantDamage", &FModularCharacterTestSuite::Test_InstantDamage);
	NameToTestFunc.Add("Test_DamageAttribute", &FModularCharacterTestSuite::Test_DamageAttribute);

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
		FModularCharacterTestSuite Tester(World, this);
		(Tester.*TestFunction)();
	}
	GFrameCounter = InitialFrameCounter;

	// Teardown tests
	GEngine->DestroyWorldContext(World);
	World->DestroyWorld(false);

	return true;
}
