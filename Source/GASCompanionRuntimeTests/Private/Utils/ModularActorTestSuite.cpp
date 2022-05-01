// Copyright 2021 Mickael Daniel. All Rights Reserved.

#include "Utils/ModularActorTestSuite.h"

#include "Abilities/Attributes/GSCAttributeSet.h"
#include "ModularGameplayActors/GSCModularCharacter.h"

FModularActorTestSuite::FModularActorTestSuite(UWorld* WorldIn, FAutomationTestBase* TestIn)
	: World(WorldIn)
	, Test(TestIn)
{
	// run before each test

	// set up the source actor
	SourceActor = World->SpawnActor<AGSCModularCharacter>();
	SourceASC = SourceActor->GetAbilitySystemComponent();

	// set up the destination actor
	TargetActor = World->SpawnActor<AGSCModularCharacter>();
	TargetASC = TargetActor->GetAbilitySystemComponent();
}

FModularActorTestSuite::~FModularActorTestSuite()
{
	// run after each test

	// destroy the actors
	if (SourceActor)
	{
		World->EditorDestroyActor(SourceActor, false);
	}

	if (TargetActor)
	{
		World->EditorDestroyActor(TargetActor, false);
	}
}

UDataTable* FModularActorTestSuite::CreateAttributesDataTable()
{
	FString CSV(TEXT("---,BaseValue,MinValue,MaxValue,DerivedAttributeInfo,bCanStack"));
	CSV.Append(TEXT("\r\nGSCAttributeSet.MaxHealth,\"500.000000\",\"0.000000\",\"1.000000\",\"\",\"False\""));
	CSV.Append(TEXT("\r\nGSCAttributeSet.Health,\"500.000000\",\"0.000000\",\"1.000000\",\"\",\"False\""));
	CSV.Append(TEXT("\r\nGSCAttributeSet.MaxStamina,\"90.000000\",\"0.000000\",\"1.000000\",\"\",\"False\""));
	CSV.Append(TEXT("\r\nGSCAttributeSet.Stamina,\"90.000000\",\"0.000000\",\"1.000000\",\"\",\"False\""));
	CSV.Append(TEXT("\r\nGSCAttributeSet.MaxMana,\"100.000000\",\"0.000000\",\"1.000000\",\"\",\"False\""));
	CSV.Append(TEXT("\r\nGSCAttributeSet.Mana,\"100.000000\",\"0.000000\",\"1.000000\",\"\",\"False\""));
	CSV.Append(TEXT("\r\nGSCAttributeSet.StaminaRegenRate,\"45.000000\",\"0.000000\",\"1.000000\",\"\",\"False\""));

	UDataTable* DataTable = NewObject<UDataTable>(GetTransientPackage(), FName(TEXT("TempDataTable")));
	DataTable->RowStruct = FAttributeMetaData::StaticStruct();
	DataTable->CreateTableFromCSVString(CSV);

	const FAttributeMetaData* Row = (const FAttributeMetaData*)DataTable->GetRowMap()["GSCAttributeSet.MaxHealth"];
	if (Row)
	{
		check(Row->BaseValue == 500.f);
	}
	return DataTable;
}
