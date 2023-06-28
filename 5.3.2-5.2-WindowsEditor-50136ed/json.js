const json = {
    "devices": [
        {
            "deviceName": "DESKTOP-TAT57NG",
            "instance": "DESKTOP-TAT57NG-D1883FBA49B94F4D23EEFA9DFEF304E8-4C4844DC47890914789849AAE01CC514",
            "platform": "WindowsEditor",
            "oSVersion": "Windows 11 (22H2) [10.0.22621.1848] ",
            "model": "Default",
            "gPU": "NVIDIA GeForce RTX 3080",
            "cPUModel": "AMD Ryzen 9 7950X 16-Core Processor            ",
            "rAMInGB": 64,
            "renderMode": "SM5",
            "rHI": "",
            "appInstanceLog": ""
        }
    ],
    "reportCreatedOn": "2023.06.28-22.30.47",
    "succeeded": 18,
    "succeededWithWarnings": 0,
    "failed": 0,
    "notRun": 0,
    "inProcess": 0,
    "totalDuration": 56.60570526123047,
    "comparisonExported": false,
    "comparisonExportDirectory": "",
    "tests": [
        {
            "testDisplayName": "has definitions",
            "fullTestPath": "GASCompanion.Editor.GSCCreationMenu.Gameplay Effects.has definitions",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.020625300705432892,
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
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
            "duration": 0.05916989967226982,
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
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
                    "timestamp": "2023.06.28-20.29.46"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "About to save BP for filename: C:/runners/GSC/_work/GASCompanion-Plugin/GASCompanion-Plugin/TP_Blank/Content/Developers/GASCompanion/GSCCreationMenu/GE_Damage (/Game/Developers/GASCompanion/GSCCreationMenu/GE_Damage)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.46"
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
            "duration": 0.01419689878821373,
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
            "duration": 0.024375196546316147,
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
            "duration": 0.012574899941682816,
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
            "duration": 0.01269419863820076,
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
            "duration": 0.012207001447677612,
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
            "duration": 0.012669801712036133,
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
                    "timestamp": "2023.06.28-20.29.47"
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
                    "timestamp": "2023.06.28-20.29.47"
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
            "duration": 12.908215522766113,
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
                    "timestamp": "2023.06.28-20.29.49"
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
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Test Abilities Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Has at least one abilities granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (First ability name matching the one granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Test Attributes Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Has at least one attribute set granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Has Attribute Set granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Float assertion passed (Attribute Health initialized to expected value)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Test Effects Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Has at least one gameplay effect granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Test Abilities Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Abilities are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Test Attributes Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Attributes are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Test Effects Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Effects are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
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
                    "timestamp": "2023.06.28-20.29.49"
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
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.49"
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
                    "timestamp": "2023.06.28-20.29.49"
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
                    "timestamp": "2023.06.28-20.29.49"
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
                    "timestamp": "2023.06.28-20.29.49"
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
                    "timestamp": "2023.06.28-20.29.49"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.52"
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
                    "timestamp": "2023.06.28-20.29.54"
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
                    "timestamp": "2023.06.28-20.29.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.57"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.57"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Try Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.58"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Try Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.58"
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
                    "timestamp": "2023.06.28-20.29.58"
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
                    "timestamp": "2023.06.28-20.29.58"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.29.58"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.01"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Done Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.01"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.01"
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
            "duration": 12.958647727966309,
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
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Test Abilities Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Has at least one abilities granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (First ability name matching the one granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Test Attributes Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Has at least one attribute set granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Has Attribute Set granted from Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Float assertion passed (Attribute Health initialized to expected value)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Test Effects Feature Enabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Has at least one gameplay effect granted from the Game Feature)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Test Abilities Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Abilities are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Test Attributes Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Attributes are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Test Effects Feature Disabled",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Effects are removed on Game Feature deactivation)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
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
                    "timestamp": "2023.06.28-20.30.02"
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
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.02"
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
                    "timestamp": "2023.06.28-20.30.02"
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
                    "timestamp": "2023.06.28-20.30.02"
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
                    "timestamp": "2023.06.28-20.30.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_1",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.05"
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
                    "timestamp": "2023.06.28-20.30.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Try Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Try Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.11"
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
                    "timestamp": "2023.06.28-20.30.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Received Event: Ability Ended GA_GameFeatureTest_Jump_C_3",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Done Input After Respawn",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameFeature_GASCompanion_PlayerState_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.14"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_AbilitySets_Test",
            "fullTestPath": "Project.Functional Tests.GASCompanionTests.FunctionalTests.F_AbilitySets.F_AbilitySets_Level.F_AbilitySets_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 4.222352504730225,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Prepare Test F_AbilitySets_Test_C_1 - IsServer: true, IsDedicatedServer: false, IsStandalone:  true",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Abilities Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Abilities are removed on Ability Set removal)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Effects Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Effects are removed on Ability Set removal)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Attributes Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Has expected number of Attributes)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Owned Tags Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Owned Tags are removed)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Abilities Granted",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Abilities are added on Ability Set granting)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Ability name matching the one granted from Ability Set (actual: GA_AS_Test_Jump_02_C_0))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Effects Granted",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Gameplay Effect was added by the Set)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Attributes Granted",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Has expected number of Attributes)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Has Attribute Set granted from Set)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Float assertion passed (Attribute initialized to expected value)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Owned Tags Granted",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Expected Owned Tags are there)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Received Event: Ability Ended GA_AS_Test_Jump_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: String assertion passed (AbilitySetPathName of the handle doesn't correspond)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: String assertion passed (Checking debug output)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Checking debug verbose output\r\n\r\nExpected\r\n----------\r\nAbilitySetPathName: /GASCompanionTests/FunctionalTests/F_AbilitySets/Abilities/AS_FunctionalTest.AS_FunctionalTest, Abilities Handles: 1, Effect Handles: 1, Attribute Sets: 1, Owned Tags: 2\r\n\r\nActual\r\n-------\r\nAbilitySetPathName: /GASCompanionTests/FunctionalTests/F_AbilitySets/Abilities/AS_FunctionalTest.AS_FunctionalTest, Abilities Handles: 1, Effect Handles: 1, Attribute Sets: 1, Owned Tags: 2\r\nAbilities Handles: 1\r\n\t - Ability Handle: 18\r\nEffect Handles: 1\r\n\t - Effect Handle: 14\r\nAttribute Sets: 1\r\n\t - Attribute Set: TestAbilitySetAttributes_03_0\r\nOwned Tags: 2\r\n\t - Owned Tags: GASCompanionTests.State.Test_05, GASCompanionTests.State.Test_06\r\n)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.18"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Abilities Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Abilities are removed on Ability Set removal)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Effects Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Effects are removed on Ability Set removal)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Attributes Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Has expected number of Attributes)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Owned Tags Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.19"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Owned Tags are removed)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.19"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_AbilitySets_Test",
            "fullTestPath": "Project.Functional Tests.GASCompanionTests.FunctionalTests.F_AbilitySets.F_AbilitySets_PlayerState_Level.F_AbilitySets_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 4.197470188140869,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Prepare Test F_AbilitySets_Test_C_1 - IsServer: true, IsDedicatedServer: false, IsStandalone:  true",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Abilities Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Abilities are removed on Ability Set removal)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Effects Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Effects are removed on Ability Set removal)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Attributes Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Has expected number of Attributes)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Owned Tags Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Owned Tags are removed)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Abilities Granted",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Abilities are added on Ability Set granting)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Ability name matching the one granted from Ability Set (actual: GA_AS_Test_Jump_02_C_0))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Effects Granted",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Gameplay Effect was added by the Set)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Attributes Granted",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Has expected number of Attributes)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Has Attribute Set granted from Set)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Float assertion passed (Attribute initialized to expected value)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Owned Tags Granted",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Expected Owned Tags are there)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.20"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Received Event: Ability Ended GA_AS_Test_Jump_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: String assertion passed (AbilitySetPathName of the handle doesn't correspond)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: String assertion passed (Checking debug output)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Checking debug verbose output\r\n\r\nExpected\r\n----------\r\nAbilitySetPathName: /GASCompanionTests/FunctionalTests/F_AbilitySets/Abilities/AS_FunctionalTest.AS_FunctionalTest, Abilities Handles: 1, Effect Handles: 1, Attribute Sets: 1, Owned Tags: 2\r\n\r\nActual\r\n-------\r\nAbilitySetPathName: /GASCompanionTests/FunctionalTests/F_AbilitySets/Abilities/AS_FunctionalTest.AS_FunctionalTest, Abilities Handles: 1, Effect Handles: 1, Attribute Sets: 1, Owned Tags: 2\r\nAbilities Handles: 1\r\n\t - Ability Handle: 24\r\nEffect Handles: 1\r\n\t - Effect Handle: 17\r\nAttribute Sets: 1\r\n\t - Attribute Set: TestAbilitySetAttributes_03_0\r\nOwned Tags: 2\r\n\t - Owned Tags: GASCompanionTests.State.Test_05, GASCompanionTests.State.Test_06\r\n)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Abilities Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Abilities are removed on Ability Set removal)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Effects Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Effects are removed on Ability Set removal)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Attributes Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Bool assertion passed (Has expected number of Attributes)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Test Owned Tags Removed",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AbilitySets_Test: Assertion passed (Owned Tags are removed)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.23"
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
            "duration": 3.813418388366699,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Prepare Test F_AnimInstance_Test_C_1 - IsServer: true, IsDedicatedServer: false, IsStandalone:  true",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.25"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.27"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.27"
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
            "duration": 3.759911298751831,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Prepare Test F_AnimInstance_Test_C_1 - IsServer: true, IsDedicatedServer: false, IsStandalone:  true",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.30"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.30"
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
            "duration": 3.7526519298553467,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Prepare Test F_AnimInstance_Test_C_1 - IsServer: true, IsDedicatedServer: false, IsStandalone:  true",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.32"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Assertion passed (Anim Instance Jump property succesfully turned true on Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.34"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_AnimInstance_Test: Assertion passed (Anim Instance Tag Count property was succesfully updated while Jumping)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.34"
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
            "duration": 2.93013858795166,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Prepare Test F_GameplayTagInterface_Test_C_1 - IsServer: true, IsDedicatedServer: false, IsStandalone:  true",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularCharacter_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularCharacter_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularCharacter_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularCharacter_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularActor_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularActor_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularActor_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularActor_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularActor_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularActor_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularActor_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularDefaultPawn_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularDefaultPawn_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularDefaultPawn_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularPawn_C_1: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularPawn_C_1: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPawn_C_1 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPawn_C_1 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPawn_C_1 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularPlayerStateCharacter_C_0: ASC Owned Tags GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Start Test for BP_Test_GSCModularPlayerStateCharacter_C_0: Character Owned Tags GASCompanionTests.State.Test, Character Owned Tags direct reference: GASCompanionTests.State.Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Owned Tags are the same for ASC and Character)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has Any Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has All Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has All  Matching Gameplay Tags OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GameplayTagInterface_Test: Assertion passed (BP_Test_GSCModularPlayerStateCharacter_C_0 => via Gameplay Tag Asset Interface Has Matching Gameplay Tag OK)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.36"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_GrantAbilityWithInput_Test",
            "fullTestPath": "Project.Functional Tests.GASCompanionTests.FunctionalTests.F_GrantAbilityWithInput.F_GrantAbilityWithInput_Level.F_GrantAbilityWithInput_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 3.9473562240600586,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GrantAbilityWithInput_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.40"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GrantAbilityWithInput_Test: Received Event: Ability Ended GA_AS_Test_Jump_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.43"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GrantAbilityWithInput_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.43"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GrantAbilityWithInput_Test: Unimplemented",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.43"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_GrantAbilityWithInput_Test",
            "fullTestPath": "Project.Functional Tests.GASCompanionTests.FunctionalTests.F_GrantAbilityWithInput.F_GrantAbilityWithInput_PlayerState_Level.F_GrantAbilityWithInput_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 3.947028875350952,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GrantAbilityWithInput_Test: Try Activate granted ability via Input",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.44"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GrantAbilityWithInput_Test: Received Event: Ability Ended GA_AS_Test_Jump_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.47"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GrantAbilityWithInput_Test: Assertion passed (Received Input Event, meaning ability activation via input was successful)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.47"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_GrantAbilityWithInput_Test: Unimplemented",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.06.28-20.30.47"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        }
    ]
};
