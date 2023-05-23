const json = {
    "devices": [
        {
            "deviceName": "DESKTOP-TAT57NG",
            "instance": "DESKTOP-TAT57NG-0AC177C74E54BBCE08D1D2A3DB9F1C52",
            "platform": "WindowsEditor",
            "oSVersion": "Windows 11 (22H2) [10.0.22621.1555] ",
            "model": "Default",
            "gPU": "NVIDIA GeForce RTX 3080",
            "cPUModel": "AMD Ryzen 9 7950X 16-Core Processor            ",
            "rAMInGB": 64,
            "renderMode": "SM5",
            "rHI": "",
            "appInstanceLog": ""
        }
    ],
    "reportCreatedOn": "2023.04.12-16.22.48",
    "succeeded": 14,
    "succeededWithWarnings": 0,
    "failed": 0,
    "notRun": 0,
    "inProcess": 0,
    "totalDuration": 32.316471099853516,
    "comparisonExported": false,
    "comparisonExportDirectory": "",
    "tests": [
        {
            "testDisplayName": "has definitions",
            "fullTestPath": "GASCompanion.Editor.GSCCreationMenu.Gameplay Effects.has definitions",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.023914698511362076,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Damage|Instant, BaseName: Damage, ParentClass: BP_GE_Template_Damage_Instant_C, AssetPrefix: GE_, TooltipText: Instant Damage Effect\n\nInstant Gameplay Effect that apply Damage (and substracts health)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Damage|Periodic, BaseName: Damage_Periodic, ParentClass: BP_GE_Template_Damage_Periodic_C, AssetPrefix: GE_, TooltipText: Damage Over Time Effect\n\nGameplay Effect with a set Duration that periodically apply Damage (and substracts health)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Heal|Instant, BaseName: Heal, ParentClass: BP_GE_Template_Heal_Instant_C, AssetPrefix: GE_, TooltipText: Instant Heal Effect\n\nInstant Gameplay Effect that increase Health by a set amount",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Heal|Periodic, BaseName: Heal_Periodic, ParentClass: BP_GE_Template_Heal_Periodic_C, AssetPrefix: GE_, TooltipText: Heal Over Time Effect\n\nGameplay Effect with a set Duration that periodically increase the Health Attribute",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Abilities|Cost, BaseName: Cost, ParentClass: BP_GE_Template_Cost_C, AssetPrefix: GE_, TooltipText: Cost Gameplay Effect\n\nInstant Gameplay meant to be used as a Cost Gameplay Effect in Abilities, substracts one more more Attributes",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Attributes|Regen, BaseName: Regen, ParentClass: BP_GE_Template_Regen_C, AssetPrefix: GE_, TooltipText: Gameplay Effect with an Infinite Duration that periodically increase one or more Attributes",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking against definition: MenuPath: Attributes|Regen Negative, BaseName: Regen_Negative, ParentClass: BP_GE_Template_Regen_Negative_C, AssetPrefix: GE_, TooltipText: Gameplay Effect an with Infinite Duration that periodically decrease one or more Attributes",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
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
            "deviceInstance": [],
            "duration": 0.07180240005254745,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "About to create BP from definition: MenuPath: Abilities|Damage|Instant, BaseName: Damage, ParentClass: BP_GE_Template_Damage_Instant_C, AssetPrefix: GE_, TooltipText: Instant Damage Effect\n\nInstant Gameplay Effect that apply Damage (and substracts health)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Successfully found 'Blueprint GeneratedClass' to contain \"BlueprintGeneratedClass'/Game/Developers/GASCompanion/GSCCreationMenu/GE_Damage.GE_Damage_C'\", it was \"/Script/Engine.BlueprintGeneratedClass'/Game/Developers/GASCompanion/GSCCreationMenu/GE_Damage.GE_Damage_C'\".",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Successfully found 'Blueprint NativeParentClassPath' to contain \"Class'/Script/GameplayAbilities.GameplayEffect'\", it was \"/Script/CoreUObject.Class'/Script/GameplayAbilities.GameplayEffect'\".",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Successfully found 'Blueprint ParentClass' to contain \"Class'/Script/GameplayAbilities.GameplayEffect'\", it was \"/Script/CoreUObject.Class'/Script/GameplayAbilities.GameplayEffect'\".",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "About to save BP for filename: ../../../../../../runners/GSC/_work/GASCompanion-Plugin/GASCompanion-Plugin/TP_Blank/Content/Developers/GASCompanion/GSCCreationMenu/GE_Damage (/Game/Developers/GASCompanion/GSCCreationMenu/GE_Damage)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
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
            "deviceInstance": [],
            "duration": 0.01147729903459549,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Bound Input for GameplayAbility_0 is InputAction_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.13"
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
            "deviceInstance": [],
            "duration": 0.02140910178422928,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Received gameplay event ... GASCompanionTests.Event.AttributeChangeCalled - TimesCalled: 1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "New Health: 990.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Tags: (GameplayTags=)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
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
            "deviceInstance": [],
            "duration": 0.0111394003033638,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
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
            "deviceInstance": [],
            "duration": 0.01117439940571785,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
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
            "deviceInstance": [],
            "duration": 0.011032503098249435,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
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
            "deviceInstance": [],
            "duration": 0.01134449988603592,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.14"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_GameFeature_GASCompanion_Test",
            "fullTestPath": "Project.Functional Tests.GameFeature_GSC_Test.GASCompanion.F_GameFeature_Pawn.F_GameFeature_Level.F_GameFeature_GASCompanion_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 12.852416038513184,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_1, Avatar: BP_Test_GameFeature_Character_C_1, Original Actor: BP_Test_GameFeature_Character_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_0, Avatar: BP_Test_GameFeature_Character_C_0, Original Actor: BP_Test_GameFeature_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Abilities Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one abilities granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (First ability name matching the one granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Attributes Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one attribute set granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has Attribute Set granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Float assertion passed (Attribute Health initialized to expected value)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Effects Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one gameplay effect granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Abilities Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Abilities are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Attributes Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Attributes are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Effects Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Effects are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogGameFeatures: ChangeGameFeatureDestination: Attempting to cancel transition for Game Feature GameFeature_GSC_Test. Desired [Active, Active]. Current [Terminal, Loaded]",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogGameFeatures: ChangeGameFeatureDestination: Attempting to cancel transition for Game Feature GameFeature_GSC_Test. Desired [Active, Active]. Current [Terminal, Loaded]",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_1, Avatar: BP_Test_GameFeature_Character_C_1, Original Actor: BP_Test_GameFeature_Character_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_0, Avatar: BP_Test_GameFeature_Character_C_0, Original Actor: BP_Test_GameFeature_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogGameFeatures: ChangeGameFeatureDestination: OnCanceled, set Game Feature GameFeature_GSC_Test Destination State to [Active, Active]",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogGameFeatures: ChangeGameFeatureDestination: OnCanceled, set Game Feature GameFeature_GSC_Test Destination State to [Active, Active]",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_1, Avatar: BP_Test_GameFeature_Character_C_1, Original Actor: BP_Test_GameFeature_Character_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_0, Avatar: BP_Test_GameFeature_Character_C_0, Original Actor: BP_Test_GameFeature_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.24"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.24"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_1, Avatar: BP_Test_GameFeature_Character_C_1, Original Actor: BP_Test_GameFeature_Character_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.24"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: BP_Test_GameFeature_Character_C_2, Avatar: BP_Test_GameFeature_Character_C_2, Original Actor: BP_Test_GameFeature_Character_C_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.24"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.24"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Done Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.27"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_GameFeature_GASCompanion_PlayerState_Test",
            "fullTestPath": "Project.Functional Tests.GameFeature_GSC_Test.GASCompanion.F_GameFeature_PlayerState.F_GameFeature_PlayerState_Level.F_GameFeature_GASCompanion_PlayerState_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 12.926299095153809,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: GSCModularPlayerState_0, Avatar: BP_Test_GameFeature_PlayerState_Character_C_0, Original Actor: GSCModularPlayerState_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Abilities Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one abilities granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (First ability name matching the one granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Attributes Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one attribute set granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has Attribute Set granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Float assertion passed (Attribute Health initialized to expected value)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Effects Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Has at least one gameplay effect granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Abilities Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Abilities are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Attributes Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Attributes are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Test Effects Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Effects are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogGameFeatures: ChangeGameFeatureDestination: Attempting to cancel transition for Game Feature GameFeature_GSC_Test. Desired [Active, Active]. Current [Terminal, Loaded]",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogGameFeatures: ChangeGameFeatureDestination: Attempting to cancel transition for Game Feature GameFeature_GSC_Test. Desired [Active, Active]. Current [Terminal, Loaded]",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: GSCModularPlayerState_0, Avatar: BP_Test_GameFeature_PlayerState_Character_C_0, Original Actor: GSCModularPlayerState_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogGameFeatures: ChangeGameFeatureDestination: OnCanceled, set Game Feature GameFeature_GSC_Test Destination State to [Active, Active]",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogGameFeatures: ChangeGameFeatureDestination: OnCanceled, set Game Feature GameFeature_GSC_Test Destination State to [Active, Active]",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.32"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.32"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: GSCModularPlayerState_0, Avatar: BP_Test_GameFeature_PlayerState_Character_C_0, Original Actor: GSCModularPlayerState_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.34"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.34"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.37"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.37"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.38"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.38"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogAbilitySystemCompanion: Trying to add actor abilities from Game Feature action for Owner: GSCModularPlayerState_0, Avatar: BP_Test_GameFeature_PlayerState_Character_C_1, Original Actor: GSCModularPlayerState_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.38"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.38"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_3",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Done Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test_C_1: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.41"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_AnimInstance_Test",
            "fullTestPath": "Project.Functional Tests.GASCompanionTests.FunctionalTests.F_AnimInstance.F_AnimInstance_Character_Level.F_AnimInstance_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 1.817542552947998,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.43"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.43"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_AnimInstance_Test",
            "fullTestPath": "Project.Functional Tests.GASCompanionTests.FunctionalTests.F_AnimInstance.F_AnimInstance_ModularCharacter_Level.F_AnimInstance_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 1.8160326480865479,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.45"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.45"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_AnimInstance_Test",
            "fullTestPath": "Project.Functional Tests.GASCompanionTests.FunctionalTests.F_AnimInstance.F_AnimInstance_PlayerStateModularCharacter_Level.F_AnimInstance_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 1.800580620765686,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.47"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test_C_1: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.47"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_GameplayTagInterface_Test",
            "fullTestPath": "Project.Functional Tests.GASCompanionTests.FunctionalTests.F_GameplayTagInterface.F_GameplayTagInterface_Level.F_GameplayTagInterface_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.9303044080734253,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Prepare Test: BP_Test_GSCModularPlayerStateCharacter_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularCharacter_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularCharacter_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularActor_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularActor_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularDefaultPawn_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularDefaultPawn_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularPawn_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularPawn_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularPlayerStateCharacter_C_0: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Start Test for BP_Test_GSCModularPlayerStateCharacter_C_0: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test_C_1: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.04.12-14.22.48"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        }
    ]
};