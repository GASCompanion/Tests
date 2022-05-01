// Copyright 2022 Mickael Daniel. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
#include "GameplayTagContainer.h"
#include "GameplayTagsManager.h"

// ReSharper disable once CppPolymorphicClassWithNonVirtualPublicDestructor
struct GASCOMPANIONRUNTIMETESTS_API FGASCompanionTestsNativeTags : public FGameplayTagNativeAdder
{
	FGameplayTag EventLanded;
	FGameplayTag AbilityJump;

	FORCEINLINE static const FGASCompanionTestsNativeTags& Get() { return NativeTags; }

	virtual void AddTags() override
	{
		UGameplayTagsManager& Manager = UGameplayTagsManager::Get();

		EventLanded = Manager.AddNativeGameplayTag(TEXT("GASCompanionTests.Event.Landed"));
		AbilityJump = Manager.AddNativeGameplayTag(TEXT("GASCompanionTests.Ability.Jump"));
	}

private:

	static FGASCompanionTestsNativeTags NativeTags;

};
