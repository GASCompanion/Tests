// Copyright 2021 Mickael Daniel. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"

GASCOMPANIONRUNTIMETESTS_API DECLARE_LOG_CATEGORY_EXTERN(LogGASCompanionTests, Display, All);

#define TESTS_LOG(Verbosity, Format, ...) \
{ \
    UE_LOG(LogGASCompanionTests, Verbosity, Format, ##__VA_ARGS__); \
}
