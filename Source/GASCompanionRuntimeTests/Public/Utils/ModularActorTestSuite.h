// Copyright 2021 Mickael Daniel. All Rights Reserved.

#pragma once

#include "GameplayEffect.h"

class AGSCModularCharacter;
class UAbilitySystemComponent;

struct FTestDefinition
{
	FString FunctionName;
	FString Description;

	FTestDefinition(const FString& FunctionName, const FString& Description)
		: FunctionName(FunctionName),
		  Description(Description)
	{
	}
};

class FModularActorTestSuite
{
public:

	FModularActorTestSuite(UWorld* WorldIn, FAutomationTestBase* TestIn);
	~FModularActorTestSuite();

protected:
	UWorld* World;
	FAutomationTestBase* Test;

	AGSCModularCharacter* SourceActor;
	UAbilitySystemComponent* SourceASC;

	AGSCModularCharacter* TargetActor;
	UAbilitySystemComponent* TargetASC;

	// Test Helpers

	static UDataTable* CreateAttributesDataTable();

	template <typename MODIFIER_T>
	FGameplayModifierInfo& AddModifier(UGameplayEffect* Effect, FProperty* Property, EGameplayModOp::Type Op, const MODIFIER_T& Magnitude)
	{
		int32 Idx = Effect->Modifiers.Num();
		Effect->Modifiers.SetNum(Idx + 1);
		FGameplayModifierInfo& Info = Effect->Modifiers[Idx];
		Info.ModifierMagnitude = Magnitude;
		Info.ModifierOp = Op;
		Info.Attribute.SetUProperty(Property);
		return Info;
	}
};

