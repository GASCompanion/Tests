const json = {
    "devices": [
        {
            "deviceName": "DESKTOP-TAT57NG",
            "instance": "DESKTOP-TAT57NG-6168",
            "platform": "WindowsEditor",
            "oSVersion": "Windows 11 (22H2) [10.0.22621.1555] ",
            "model": "Default",
            "gPU": "NVIDIA GeForce RTX 3080",
            "cPUModel": "AMD Ryzen 9 7950X 16-Core Processor            ",
            "rAMInGB": 64,
            "renderMode": "SM5",
            "rHI": ""
        }
    ],
    "reportCreatedOn": "2023.04.12-16.27.05",
    "succeeded": 14,
    "succeededWithWarnings": 0,
    "failed": 0,
    "notRun": 0,
    "inProcess": 0,
    "totalDuration": 44.39272689819336,
    "comparisonExported": false,
    "comparisonExportDirectory": "",
    "tests": [
        {
            "testDisplayName": "has definitions",
            "fullTestPath": "GASCompanion.Editor.GSCCreationMenu.Gameplay Effects.has definitions",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Damage|Instant, BaseName: Damage, ParentClass: BP_GE_Template_Damage_Instant_C, AssetPrefix: GE_, TooltipText: Instant Damage Effect\n\nInstant Gameplay Effect that apply Damage (and substracts health)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 50,
                    "timestamp": "2023.04.12-14.26.17"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Damage|Periodic, BaseName: Damage_Periodic, ParentClass: BP_GE_Template_Damage_Periodic_C, AssetPrefix: GE_, TooltipText: Damage Over Time Effect\n\nGameplay Effect with a set Duration that periodically apply Damage (and substracts health)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 50,
                    "timestamp": "2023.04.12-14.26.17"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Heal|Instant, BaseName: Heal, ParentClass: BP_GE_Template_Heal_Instant_C, AssetPrefix: GE_, TooltipText: Instant Heal Effect\n\nInstant Gameplay Effect that increase Health by a set amount",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 50,
                    "timestamp": "2023.04.12-14.26.17"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Heal|Periodic, BaseName: Heal_Periodic, ParentClass: BP_GE_Template_Heal_Periodic_C, AssetPrefix: GE_, TooltipText: Heal Over Time Effect\n\nGameplay Effect with a set Duration that periodically increase the Health Attribute",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 50,
                    "timestamp": "2023.04.12-14.26.17"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Cost, BaseName: Cost, ParentClass: BP_GE_Template_Cost_C, AssetPrefix: GE_, TooltipText: Cost Gameplay Effect\n\nInstant Gameplay meant to be used as a Cost Gameplay Effect in Abilities, substracts one more more Attributes",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 50,
                    "timestamp": "2023.04.12-14.26.17"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Attributes|Regen, BaseName: Regen, ParentClass: BP_GE_Template_Regen_C, AssetPrefix: GE_, TooltipText: Gameplay Effect with an Infinite Duration that periodically increase one or more Attributes",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 50,
                    "timestamp": "2023.04.12-14.26.17"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Attributes|Regen Negative, BaseName: Regen_Negative, ParentClass: BP_GE_Template_Regen_Negative_C, AssetPrefix: GE_, TooltipText: Gameplay Effect an with Infinite Duration that periodically decrease one or more Attributes",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 50,
                    "timestamp": "2023.04.12-14.26.17"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should create Gameplay Effect blueprint",
            "fullTestPath": "GASCompanion.Editor.GSCCreationMenu.Gameplay Effects.should create Gameplay Effect blueprint",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "About to create BP from definition: MenuPath: Abilities|Damage|Instant, BaseName: Damage, ParentClass: BP_GE_Template_Damage_Instant_C, AssetPrefix: GE_, TooltipText: Instant Damage Effect\n\nInstant Gameplay Effect that apply Damage (and substracts health)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 70,
                    "timestamp": "2023.04.12-14.26.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Successfully found 'Blueprint GeneratedClass' to contain \"BlueprintGeneratedClass'/Game/Developers/GASCompanion/GSCCreationMenu/GE_Damage.GE_Damage_C'\", it was \"BlueprintGeneratedClass'/Game/Developers/GASCompanion/GSCCreationMenu/GE_Damage.GE_Damage_C'\".",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 110,
                    "timestamp": "2023.04.12-14.26.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Successfully found 'Blueprint NativeParentClassPath' to contain \"Class'/Script/GameplayAbilities.GameplayEffect'\", it was \"Class'/Script/GameplayAbilities.GameplayEffect'\".",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 118,
                    "timestamp": "2023.04.12-14.26.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Successfully found 'Blueprint ParentClass' to contain \"Class'/Script/GameplayAbilities.GameplayEffect'\", it was \"Class'/Script/GameplayAbilities.GameplayEffect'\".",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 126,
                    "timestamp": "2023.04.12-14.26.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "About to save BP for filename: ../../../../../../runners/GSC/_work/GASCompanion-Plugin/GASCompanion-Plugin/TP_Blank/Content/Developers/GASCompanion/GSCCreationMenu/GE_Damage (/Game/Developers/GASCompanion/GSCCreationMenu/GE_Damage)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanionEditor\\Private\\Tests\\GSCCreationMenu.spec.cpp",
                    "lineNumber": 140,
                    "timestamp": "2023.04.12-14.26.18"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "Should return bound input action for a granted ability",
            "fullTestPath": "GASCompanion.Runtime.Ability Input Binding.Should return bound input action for a granted ability",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\AbilityInputBinding.spec.cpp",
                    "lineNumber": 30,
                    "timestamp": "2023.04.12-14.26.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Bound Input for GameplayAbility_0 is InputAction_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\AbilityInputBinding.spec.cpp",
                    "lineNumber": 102,
                    "timestamp": "2023.04.12-14.26.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\AbilityInputBinding.spec.cpp",
                    "lineNumber": 110,
                    "timestamp": "2023.04.12-14.26.19"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should trigger OnAttributeChange once",
            "fullTestPath": "GASCompanion.Runtime.Core Component.should trigger OnAttributeChange once",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Received gameplay event ... GASCompanionTests.Event.AttributeChangeCalled - TimesCalled: 1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\CoreComponent.spec.cpp",
                    "lineNumber": 82,
                    "timestamp": "2023.04.12-14.26.21"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "New Health: 990.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\CoreComponent.spec.cpp",
                    "lineNumber": 100,
                    "timestamp": "2023.04.12-14.26.21"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Tags: (GameplayTags=)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\CoreComponent.spec.cpp",
                    "lineNumber": 109,
                    "timestamp": "2023.04.12-14.26.21"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\CoreComponent.spec.cpp",
                    "lineNumber": 118,
                    "timestamp": "2023.04.12-14.26.21"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "Should have AttributeSet granted and initialized",
            "fullTestPath": "GASCompanion.Runtime.Modular Characters.Should have AttributeSet granted and initialized",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\ModularCharacters.spec.cpp",
                    "lineNumber": 28,
                    "timestamp": "2023.04.12-14.26.22"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\ModularCharacters.spec.cpp",
                    "lineNumber": 163,
                    "timestamp": "2023.04.12-14.26.22"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "Should health be reduced using Damage Meta Attribute",
            "fullTestPath": "GASCompanion.Runtime.Modular Characters.Should health be reduced using Damage Meta Attribute",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\ModularCharacters.spec.cpp",
                    "lineNumber": 28,
                    "timestamp": "2023.04.12-14.26.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\ModularCharacters.spec.cpp",
                    "lineNumber": 163,
                    "timestamp": "2023.04.12-14.26.23"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "Should health be reduced via GameplayEffect",
            "fullTestPath": "GASCompanion.Runtime.Modular Characters.Should health be reduced via GameplayEffect",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\ModularCharacters.spec.cpp",
                    "lineNumber": 28,
                    "timestamp": "2023.04.12-14.26.24"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\ModularCharacters.spec.cpp",
                    "lineNumber": 163,
                    "timestamp": "2023.04.12-14.26.24"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "Should spawned actor be initialized with an AbilitySystemComponent",
            "fullTestPath": "GASCompanion.Runtime.Modular Characters.Should spawned actor be initialized with an AbilitySystemComponent",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\ModularCharacters.spec.cpp",
                    "lineNumber": 28,
                    "timestamp": "2023.04.12-14.26.25"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Source\\GASCompanionTests\\Private\\Tests\\ModularCharacters.spec.cpp",
                    "lineNumber": 163,
                    "timestamp": "2023.04.12-14.26.25"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_GameFeature_GASCompanion_Test",
            "fullTestPath": "Project.Functional Tests./GameFeature_GSC_Test/GASCompanion/F_GameFeature_Pawn/F_GameFeature_Level.F_GameFeature_GASCompanion_Test",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_1, Avatar: BP_Test_GameFeature_Character_C_1, Original Actor: BP_Test_GameFeature_Character_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_0, Avatar: BP_Test_GameFeature_Character_C_0, Original Actor: BP_Test_GameFeature_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Abilities Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one abilities granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1404,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (First ability name matching the one granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Attributes Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one attribute set granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1404,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has Attribute Set granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Float assertion passed (Attribute Health initialized to expected value)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Effects Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one gameplay effect granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1404,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Abilities Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Abilities are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Attributes Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Attributes are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Effects Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Effects are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_1, Avatar: BP_Test_GameFeature_Character_C_1, Original Actor: BP_Test_GameFeature_Character_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_0, Avatar: BP_Test_GameFeature_Character_C_0, Original Actor: BP_Test_GameFeature_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.30"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.30"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_1, Avatar: BP_Test_GameFeature_Character_C_1, Original Actor: BP_Test_GameFeature_Character_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.31"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_0, Avatar: BP_Test_GameFeature_Character_C_0, Original Actor: BP_Test_GameFeature_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.31"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.31"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.35"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.35"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.35"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.35"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_1, Avatar: BP_Test_GameFeature_Character_C_1, Original Actor: BP_Test_GameFeature_Character_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.35"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_2, Avatar: BP_Test_GameFeature_Character_C_2, Original Actor: BP_Test_GameFeature_Character_C_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.35"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.35"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.39"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Done Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.39"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.39"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: ",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1150,
                    "timestamp": "2023.04.12-14.26.39"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_GameFeature_GASCompanion_PlayerState_Test",
            "fullTestPath": "Project.Functional Tests./GameFeature_GSC_Test/GASCompanion/F_GameFeature_PlayerState/F_GameFeature_PlayerState_Level.F_GameFeature_GASCompanion_PlayerState_Test",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: GSCModularPlayerState_0, Avatar: BP_Test_GameFeature_PlayerState_Character_C_0, Original Actor: GSCModularPlayerState_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Abilities Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one abilities granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1404,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (First ability name matching the one granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Attributes Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one attribute set granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1404,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has Attribute Set granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Float assertion passed (Attribute Health initialized to expected value)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Effects Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one gameplay effect granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1404,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Abilities Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Abilities are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Attributes Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Attributes are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Effects Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Effects are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: GSCModularPlayerState_0, Avatar: BP_Test_GameFeature_PlayerState_Character_C_0, Original Actor: GSCModularPlayerState_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.43"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.43"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: GSCModularPlayerState_0, Avatar: BP_Test_GameFeature_PlayerState_Character_C_0, Original Actor: GSCModularPlayerState_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.45"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.45"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Trying to add actor abilities from Game Feature action for Owner: GSCModularPlayerState_0, Avatar: BP_Test_GameFeature_PlayerState_Character_C_1, Original Actor: GSCModularPlayerState_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanion\\Source\\GASCompanion\\Private\\GameFeatures\\Actions\\GSCGameFeatureAction_AddAbilities.cpp",
                    "lineNumber": 182,
                    "timestamp": "2023.04.12-14.26.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_3",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Done Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.26.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: ",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1150,
                    "timestamp": "2023.04.12-14.26.52"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_AnimInstance_Test",
            "fullTestPath": "Project.Functional Tests./GASCompanionTests/FunctionalTests/F_AnimInstance/F_AnimInstance_Character_Level.F_AnimInstance_Test",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.55"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.55"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: ",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1150,
                    "timestamp": "2023.04.12-14.26.55"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_AnimInstance_Test",
            "fullTestPath": "Project.Functional Tests./GASCompanionTests/FunctionalTests/F_AnimInstance/F_AnimInstance_ModularCharacter_Level.F_AnimInstance_Test",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.58"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.26.58"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: ",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1150,
                    "timestamp": "2023.04.12-14.26.58"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_AnimInstance_Test",
            "fullTestPath": "Project.Functional Tests./GASCompanionTests/FunctionalTests/F_AnimInstance/F_AnimInstance_PlayerStateModularCharacter_Level.F_AnimInstance_Test",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.01"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.01"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: ",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1150,
                    "timestamp": "2023.04.12-14.27.01"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_GameplayTagInterface_Test",
            "fullTestPath": "Project.Functional Tests./GASCompanionTests/FunctionalTests/F_GameplayTagInterface/F_GameplayTagInterface_Level.F_GameplayTagInterface_Test",
            "state": "Success",
            "deviceInstance": "DESKTOP-TAT57NG-6168",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Prepare Test: BP_Test_GSCModularPlayerStateCharacter_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularCharacter_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularCharacter_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularActor_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularActor_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularDefaultPawn_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularDefaultPawn_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularPawn_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularPawn_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularPlayerStateCharacter_C_0: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularPlayerStateCharacter_C_0: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\GSC\\_work\\GASCompanion-Plugin\\GASCompanion-Plugin\\TP_Blank\\Plugins\\GASCompanionTests\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\GASCompanionTestUtils\\GASCompanionTestsBlueprintLibrary.gen.cpp",
                    "lineNumber": 26,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1414,
                    "timestamp": "2023.04.12-14.27.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: ",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1150,
                    "timestamp": "2023.04.12-14.27.04"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        }
    ]
};