var i=Object.defineProperty;var r=(t,e,o)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var a=(t,e,o)=>(r(t,typeof e!="symbol"?e+"":e,o),o);class n{}a(n,"attritionJson",`{
    "Infantry/Weapons/AK-AS": {
        "ToolName": "AK-AS",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Semiautomatic",
        "MagazineSize": 6,
        "StartingAmmo": 42,
        "RateOfFire": 1.6,
        "EnvPiercing": 0.5,
        "AimTimeMult": 1,
        "MovementAimPenaltyMult": 1,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 1.5,
        "RecoilLeft": -0.2,
        "RecoilRight": 0.8,
        "BulletSpeed": 1200,
        "BulletDamage": 150,
        "MinDamage": 100,
        "MinRange": 25,
        "MaxRange": 150,
        "MaxSpreadBloom": 5,
        "SpreadBloom": 5,
        "BloomDecayRate": 2,
        "ProjectileSpread": 2.5,
        "BulletSpread": 1,
        "AimBulletSpread": 0.4,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 32,
        "ReloadTime": 1.75,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Ammo",
                "Type": "Shotgun_Ammo",
                "Default": "Ammo_Buckshot"
            },
            {
                "Slot": "Muzzle",
                "Type": "Shotgun_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537404"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781327"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/AKR": {
        "ToolName": "AKR",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Automatic",
        "MagazineSize": 30,
        "StartingAmmo": 217,
        "RateOfFire": 10.833333333333334,
        "BulletSpeed": 1600,
        "AimTimeMult": 1,
        "MovementAimPenaltyMult": 1,
        "FirstShotRecoilMult": 2,
        "VerticalRecoil": 0.25,
        "RecoilLeft": 0.15,
        "RecoilRight": 0.05,
        "MaxSpreadBloom": 5.5,
        "SpreadBloom": 0.06666666666666667,
        "BloomDecayRate": 1,
        "EnvPiercing": 1,
        "BulletDamage": 26.5,
        "MinDamage": 18,
        "MinRange": 60,
        "MaxRange": 600,
        "BulletSpread": 3,
        "AimBulletSpread": 0.275,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 1.75,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.5,
        "FireSoundDistanceCutoff": 500,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891615"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891661"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781538"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/AK_Type_E": {
        "ToolName": "AK Type E",
        "ToolType": "BaseGun",
        "ToolCategory": "Equipment",
        "Action": "Semiautomatic",
        "MagazineSize": 0,
        "StartingAmmo": 12,
        "RateOfFire": 1.5,
        "AimTimeMult": 1.25,
        "MovementAimPenaltyMult": 0.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 1.5,
        "RecoilLeft": -0.15,
        "RecoilRight": 1,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.75,
        "BloomDecayRate": 0.5,
        "BulletSpeed": 240,
        "ArmorPiercing": 0.6,
        "EnvPiercing": 0.5,
        "BulletDamage": 100,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.52,
        "TerrainIntensity": 1.75,
        "BulletSpread": 3,
        "AimBulletSpread": 0.4,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "ProjectilesPerRound": 1,
        "ReloadTime": 1,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Ammo",
                "Type": "Ammo_40mm",
                "Default": "HE_40mm"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7203385466"
                ],
                "MinDistance": 50,
                "MaxDistance": 250,
                "Volume": 1
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 0
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891446"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891410"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781842"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/AT_Mines": {
        "ToolName": "AT Mines",
        "ToolType": "PlaceableDeployable",
        "ToolCategory": "Equipment",
        "NoAim": true,
        "DeployableRange": 10,
        "CanActivate": false,
        "Charges": 4,
        "MaxDeployables": 8,
        "LimitType": "Destroy",
        "StructureId": "AT_Mine",
        "BlueprintId": "Default",
        "Attachments": [
            {
                "Slot": "Blueprint",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ]
    },
    "Infantry/Weapons/AWM": {
        "ToolName": "AWM",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Semiautomatic",
        "MagazineSize": 5,
        "StartingAmmo": 24,
        "RateOfFire": 0.75,
        "AimTimeMult": 1.5,
        "MovementAimPenaltyMult": 1.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 1.1,
        "RecoilLeft": 0.2,
        "RecoilRight": 0.2,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.55,
        "BloomDecayRate": 0.95,
        "EnvPiercing": 1,
        "BulletDamage": 110,
        "MinDamage": 55,
        "MinRange": 15,
        "MaxRange": 400,
        "BulletSpeed": 2500,
        "BulletSpread": 4,
        "AimBulletSpread": 0.015,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 2,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1.25,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Scope_12x"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7202781161",
                    "rbxassetid://7202781441",
                    "rbxassetid://7202781111",
                    "rbxassetid://7202781041"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781233"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/Dynamite": {
        "ToolName": "Dynamite",
        "ToolType": "ThrowableDeployable",
        "ToolCategory": "Equipment",
        "NoAim": true,
        "ProjectileModel": "Dynamite",
        "ProjectileHitModule": "Deployable",
        "Refillable": true,
        "DeployableRange": 10,
        "CanActivate": false,
        "Charges": 2,
        "MaxDeployables": 1,
        "LimitType": "Prevent",
        "StructureId": "Dynamite",
        "BlueprintId": "Default",
        "Attachments": [
            {
                "Slot": "Blueprint",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ]
    },
    "Infantry/Weapons/MG-42": {
        "ToolName": "MG-42",
        "ToolType": "BaseGun",
        "ToolCategory": "Equipment",
        "Action": "Automatic",
        "CanDeploy": true,
        "DeployedAim": true,
        "MagazineSize": 200,
        "StartingAmmo": 603,
        "RateOfFire": 13.333333333333334,
        "BulletSpeed": 1600,
        "AimTimeMult": 2,
        "MovementAimPenaltyMult": 3.5,
        "FirstShotRecoilMult": 1.1,
        "VerticalRecoil": 0.8,
        "RecoilLeft": 0.1,
        "RecoilRight": 0.5,
        "MaxSpreadBloom": 15,
        "SpreadBloom": 0.1,
        "BloomDecayRate": 0.75,
        "EnvPiercing": 1,
        "BulletDamage": 32.5,
        "MinDamage": 20.5,
        "MinRange": 50,
        "MaxRange": 800,
        "BulletSpread": 7.5,
        "AimBulletSpread": 0.4,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 3.5,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1.5,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781273"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/Mortar": {
        "ToolName": "Mortar",
        "ToolType": "TrajectoryGun",
        "ToolCategory": "Equipment",
        "AimZoom": 1,
        "NoAim": true,
        "CanDeploy": true,
        "DeployedFire": true,
        "StationaryDeploy": true,
        "ThirdPersonCameraOffset": {
            "x": 0,
            "y": 5,
            "z": 5
        },
        "FirstPersonCameraOffset": {
            "x": 0,
            "y": 2.5,
            "z": 1
        },
        "DeployOffset": -4,
        "DeployRayLength": 5,
        "DeployPollWidth": 2,
        "Action": "Semiautomatic",
        "BulletDamage": 100,
        "ArmorPiercing": 0.75,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 1.25,
        "MagazineSize": 0,
        "StartingAmmo": 5,
        "MovementAimPenaltyMult": 0,
        "FirstShotRecoilMult": 2.25,
        "VerticalRecoil": 1,
        "RecoilLeft": 0.225,
        "RecoilRight": 0.15,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 1,
        "BloomDecayRate": 0.25,
        "BulletSpread": 0.25,
        "AimBulletSpread": 0,
        "RateOfFire": 3.3333333333333335,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "ReloadTime": 1,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.5,
        "WalkSpeedMult": 0,
        "BulletSpeed": 200,
        "ProjectilesPerRound": 1,
        "ProjectileLifeTime": 40,
        "AimMethod": "Indirect",
        "Attachments": [
            {
                "Slot": "Ammo",
                "Type": "Mortar_Ammo",
                "Default": "Stock_Shells"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://388710371"
                ],
                "MinDistance": 50,
                "MaxDistance": 600,
                "Volume": 1
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://388710371"
                ],
                "MinDistance": 50,
                "MaxDistance": 1000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781273"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/Pistol": {
        "ToolName": "Pistol",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Semiautomatic",
        "MagazineSize": 16,
        "StartingAmmo": 68,
        "RateOfFire": 8.333333333333334,
        "BulletSpeed": 1250,
        "AimTimeMult": 0.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 0.45,
        "RecoilLeft": 0.3,
        "RecoilRight": 0.3,
        "MovementAimPenaltyMult": 0,
        "MaxSpreadBloom": 5.5,
        "SpreadBloom": 0.1,
        "BloomDecayRate": 1,
        "EnvPiercing": 1,
        "BulletDamage": 27,
        "MinDamage": 12.1,
        "MinRange": 60,
        "MaxRange": 300,
        "BulletSpread": 0.7,
        "AimBulletSpread": 0.35,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 1.3,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.3,
        "FireSoundDistanceCutoff": 500,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891615"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891661"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781538"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/PTRS-41": {
        "ToolName": "PTRS-41",
        "ToolType": "BaseGun",
        "ToolCategory": "Equipment",
        "Action": "BoltAction",
        "CanDeploy": true,
        "DeployedAim": true,
        "MagazineSize": 5,
        "StartingAmmo": 12,
        "RateOfFire": 0.5,
        "BulletSpeed": 2200,
        "AimTimeMult": 2,
        "MovementAimPenaltyMult": 4,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 10,
        "RecoilLeft": 1,
        "RecoilRight": 1,
        "MaxSpreadBloom": 15,
        "SpreadBloom": 1,
        "BloomDecayRate": 0.5,
        "EnvPiercing": 2,
        "ArmorPiercing": 0.175,
        "BulletDamage": 200,
        "MinDamage": 65,
        "MinRange": 800,
        "MaxRange": 1800,
        "BulletSpread": 7.5,
        "AimBulletSpread": 0.1,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 3,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 1.5,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7202781161",
                    "rbxassetid://7202781441",
                    "rbxassetid://7202781111",
                    "rbxassetid://7202781041"
                ],
                "MinDistance": 50,
                "MaxDistance": 1000,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 650,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 5000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891495"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891571"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781233"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/RPG-7": {
        "ToolName": "RPG-7",
        "ToolType": "BaseGun",
        "ToolCategory": "Equipment",
        "Action": "Semiautomatic",
        "MagazineSize": 0,
        "StartingAmmo": 4,
        "RateOfFire": 3,
        "AimTimeMult": 1.75,
        "MovementAimPenaltyMult": 2.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 2.25,
        "RecoilLeft": -0.1,
        "RecoilRight": 1,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.75,
        "BloomDecayRate": 0.5,
        "EnvPiercing": 1,
        "ArmorPiercing": 0.7,
        "BulletDamage": 175,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 1,
        "FlakMult": 5,
        "BulletSpeed": 300,
        "BulletSpread": 4,
        "AimBulletSpread": 0.35,
        "ProjectileType": "RocketProjectile",
        "ProjectileHitModule": "Explosive",
        "ProjectilesPerRound": 1,
        "ReloadTime": 2.5,
        "ReloadStages": [
            0.35,
            0.75
        ],
        "ChamberTime": 2,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Rockets",
                "Type": "RPG_Ammo",
                "Default": "RPG_Stock"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://134012322"
                ],
                "MinDistance": 50,
                "MaxDistance": 300,
                "Volume": 1
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 0
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891446"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891410"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781842"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/RPK": {
        "ToolName": "RPK",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Automatic",
        "MagazineSize": 75,
        "StartingAmmo": 304,
        "RateOfFire": 10,
        "AimTimeMult": 1.5,
        "MovementAimPenaltyMult": 2,
        "FirstShotRecoilMult": 1.35,
        "VerticalRecoil": 0.35,
        "RecoilLeft": 0.2,
        "RecoilRight": 0.1,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.05,
        "BloomDecayRate": 0.85,
        "BulletSpeed": 1650,
        "EnvPiercing": 1,
        "BulletDamage": 22.5,
        "MinDamage": 18,
        "MinRange": 60,
        "MaxRange": 800,
        "BulletSpread": 3.25,
        "AimBulletSpread": 0.2,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 1.75,
        "ReloadStages": [
            0.15,
            0.75
        ],
        "ChamberTime": 1,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "Bipod"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891446"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891410"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781842"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/SMG": {
        "ToolName": "SMG",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Automatic",
        "MagazineSize": 30,
        "StartingAmmo": 217,
        "RateOfFire": 15.833333333333334,
        "BulletSpeed": 1200,
        "AimTimeMult": 0.75,
        "FirstShotRecoilMult": 2,
        "VerticalRecoil": 0.35,
        "RecoilLeft": 0.2,
        "RecoilRight": 0.4,
        "MovementAimPenaltyMult": 0.25,
        "MaxSpreadBloom": 5.5,
        "SpreadBloom": 0.03333333333333333,
        "BloomDecayRate": 1,
        "EnvPiercing": 1,
        "BulletDamage": 18,
        "MinDamage": 12,
        "MinRange": 60,
        "MaxRange": 400,
        "BulletSpread": 1,
        "AimBulletSpread": 0.5,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 2.4,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.25,
        "FireSoundDistanceCutoff": 500,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Ironsights"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537518",
                    "rbxassetid://7197537457",
                    "rbxassetid://7197537193",
                    "rbxassetid://7197537251"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 3500,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891615"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891661"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202781538"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Infantry/Weapons/SVD": {
        "ToolName": "SVD",
        "ToolType": "BaseGun",
        "ToolCategory": "Primary",
        "Action": "Semiautomatic",
        "MagazineSize": 10,
        "StartingAmmo": 44,
        "RateOfFire": 2.5,
        "AimTimeMult": 1.5,
        "MovementAimPenaltyMult": 1.5,
        "FirstShotRecoilMult": 1,
        "VerticalRecoil": 0.95,
        "RecoilLeft": 0.2,
        "RecoilRight": 0.07,
        "MaxSpreadBloom": 10,
        "SpreadBloom": 0.4,
        "BloomDecayRate": 0.95,
        "EnvPiercing": 1,
        "BulletDamage": 55,
        "MinDamage": 40,
        "MinRange": 40,
        "MaxRange": 500,
        "BulletSpeed": 2000,
        "BulletSpread": 3.5,
        "AimBulletSpread": 0.075,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "ProjectilesPerRound": 1,
        "ReloadTime": 2,
        "ReloadStages": [
            0.15,
            0.7
        ],
        "ChamberTime": 0.85,
        "Attachments": [
            {
                "Slot": "Sights",
                "Type": "Rifle_Sights",
                "Default": "Scope_12x"
            },
            {
                "Slot": "Barrel",
                "Type": "Rifle_Barrel",
                "Default": "Standard_Barrel"
            },
            {
                "Slot": "Foregrip",
                "Type": "Rifle_Fore_Grip",
                "Default": "No_Grip"
            },
            {
                "Slot": "Skin",
                "Type": "Generic_Skin",
                "Default": "None"
            }
        ],
        "SoundData": {
            "FireNear": {
                "SoundIds": [
                    "rbxassetid://7197537404"
                ],
                "MinDistance": 50,
                "MaxDistance": 500,
                "Volume": 1
            },
            "FireSilenced": {
                "SoundIds": [
                    "rbxassetid://318018333"
                ],
                "MinDistance": 15,
                "MaxDistance": 325,
                "Volume": 0.3
            },
            "FireFar": {
                "SoundIds": [
                    "rbxassetid://7197537295"
                ],
                "MinDistance": 50,
                "MaxDistance": 4000,
                "Volume": 1
            },
            "FireDry": {
                "SoundIds": [
                    "rbxassetid://7197537126",
                    "rbxassetid://7197537043",
                    "rbxassetid://7197536979",
                    "rbxassetid://7197537349"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.2
            },
            "MagOut": {
                "SoundIds": [
                    "rbxassetid://7202891352"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "MagIn": {
                "SoundIds": [
                    "rbxassetid://7202891530"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            },
            "Chamber": {
                "SoundIds": [
                    "rbxassetid://7202783156"
                ],
                "MinDistance": 5,
                "MaxDistance": 15,
                "Volume": 0.5
            }
        }
    },
    "Vehicles/Attack_Helicopter": {
        "Name": "Attack Helicopter",
        "HUDType": "Helicopter",
        "VehicleGroup": "AirHelicopterCombat",
        "ControllerType": "Helicopter",
        "ScrapYieldMultiplier": 4,
        "BaseCost": 2000,
        "UsesFlak": true,
        "DestructionBonus": 5,
        "ControlProperties": {
            "MitigateVTOL": true,
            "ImpulseTolerance": 1250,
            "ImpulseToleranceVTOL": 4500,
            "DeathImpulse": 10000,
            "MaxLateralSpeed": 135,
            "EngineResponsiveness": 2.25,
            "BaseThrust": 0.9,
            "ThrustToWeight": 2.5,
            "ForwardThrust": 0.25,
            "DragLateral": 2.95,
            "DragUp": 3.9,
            "DragDown": 3.35,
            "TorqueResistance": 0.5,
            "MinRollAngle": 45,
            "MaxRollAngle": 85,
            "MinPitchAngle": 65,
            "MaxPitchAngle": 85,
            "PitchSpeed": 90,
            "YawSpeed": 65,
            "RollSpeed": 105,
            "RotorAngularVelocity": 15,
            "EngineVolume": 4.25,
            "StartupTime": 4.25,
            "EngineBasePitch": 0.95
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": false,
            "ShowControllerGui": false,
            "CameraLockedToRoot": true,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 7.5,
                "Health": 175,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "ThrustToWeight_mult": 0,
                        "YawSpeed_mult": 0,
                        "RotorAngularVelocity_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Rotor": {
                "Armor": 7.5,
                "Health": 100,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "DragLateral_mult": 1.1,
                        "ThrustToWeight_mult": 0.75,
                        "YawSpeed_mult": 0.5,
                        "RollSpeed_mult": 0.5,
                        "RotorAngularVelocity_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "DragLateral_mult": 1.25,
                        "ThrustToWeight_mult": 0.25,
                        "YawSpeed_mult": 0.2,
                        "RollSpeed_mult": 0.2,
                        "RotorAngularVelocity_mult": 0.25
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0.4,
                "ExplosionMultiplier": 0
            },
            "Gunner": {
                "DamageMultiplier": 0.4,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Attack_Heli_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Weapons",
                "Type": "Aircraft_Mounted_Med",
                "Default": "Aircraft_Rockets",
                "Section": "Weapons",
                "Owner": "Driver"
            },
            {
                "Slot": "Gunner Turret",
                "Type": "Aircraft_Turret_Small",
                "Default": "Air_15mm_Turret",
                "Section": "Gunner",
                "Owner": "Gunner"
            },
            {
                "Slot": "Rotor",
                "Type": "Vehicle_Rotor",
                "Default": "Default_Rotor",
                "Section": "Rotor"
            }
        ]
    },
    "Vehicles/Attack_Jet": {
        "Name": "Attack Jet",
        "HUDType": "Helicopter",
        "ControllerType": "Jet",
        "VehicleGroup": "AirJet",
        "GunThirdPersonOffset": 5,
        "ScrapYieldMultiplier": 5,
        "BaseCost": 3000,
        "UsesFlak": true,
        "DestructionBonus": 8,
        "ControlProperties": {
            "JetEffectSpeedScale": 40,
            "HardMaxSpeed": 500,
            "SoftMaxSpeed": 400,
            "HardMaxAltitude": 3000,
            "SoftMaxAltitude": 2400,
            "ImpulseTolerance": 3200,
            "DeathImpulse": 10000,
            "EngineAcceleration": 0.16,
            "BaseThrottle": 450000,
            "AngleOfAttack": 10,
            "Drag": 3,
            "Lift": 2.5,
            "PitchSpeed": 1,
            "RollSpeed": 1.6,
            "YawSpeed": 0.4,
            "Torque": 15,
            "EngineVolume": 1.5,
            "StartupTime": 0.1,
            "EngineBasePitch": 1.125
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": true,
            "FreeRotation": true,
            "CameraLockedToRoot": false,
            "CameraReturnsToCenter": true,
            "OrientationLockThreshold": 1,
            "Mode": "ThirdPerson",
            "RootPart": "Vehicle",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 80,
            "MinZoom": 25,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 11.5,
                "Health": 200,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "PitchSpeed_mult": 0,
                        "YawSpeed_mult": 0,
                        "RollSpeed_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Wings": {
                "Armor": 7.5,
                "Health": 75,
                "HullDamageMult": 0.75,
                "Damaged": {
                    "Properties": {
                        "PitchSpeed_mult": 0.65,
                        "YawSpeed_mult": 0.7,
                        "RollSpeed_mult": 0.7
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "PitchSpeed_mult": 0.3,
                        "YawSpeed_mult": 0.35,
                        "RollSpeed_mult": 0.35
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Engine": {
                "Armor": 8.5,
                "Health": 100,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "BaseThrottle_mult": 0.7
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "BaseThrottle_mult": 0.35
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0.5,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Aircraft_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Cannon",
                "Type": "Aircraft_Turret_Med",
                "Default": "Air_30mm_Turret",
                "Owner": "Driver",
                "Section": "Turret",
                "Priority": 0
            },
            {
                "Slot": "Mounted Weapons",
                "Type": "Attack_Jet_Mounted",
                "Default": "Jet_Rocket_Pods",
                "Owner": "Driver",
                "Section": "Weapons",
                "Priority": 1,
                "IgnoreName": true
            },
            {
                "Slot": "Engines",
                "Type": "Jet_Engines",
                "Section": "Engine",
                "Default": "Default_Engines"
            }
        ]
    },
    "Vehicles/Battle_Tank": {
        "Name": "Tank",
        "ControllerType": "TankChassis",
        "VehicleGroup": "LandHeavyArmor",
        "ScrapYieldMultiplier": 3,
        "BaseCost": 1750,
        "DestructionBonus": 5,
        "ControlProperties": {
            "DrivingTorque": 1000000,
            "BrakingTorque": 1000000,
            "MaxSpeed": 40,
            "ReverseSpeed": 25,
            "MaxSteer": 0.5,
            "StrutSpringDampingFront": 7000,
            "StrutSpringDampingRear": 6000,
            "StrutSpringStiffnessFront": 225000,
            "StrutSpringStiffnessRear": 225000,
            "TorsionSpringDamping": 100,
            "TorsionSpringStiffness": 10000,
            "WheelFriction": 1.6,
            "TreadSoundPitch": 0.9,
            "TreadSoundVolume": 2.5,
            "EngineSoundPitch": 0.7,
            "EngineSoundVolume": 1.6
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 20,
                "Health": 325,
                "HullDamageMult": 1,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "MaxSteer_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 20,
                "Health": 125,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "DrivingTorque_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0,
                        "MaxSteer_mult": 0.75
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Treads": {
                "Armor": 15,
                "HullDamageMult": 0.8,
                "Health": 150,
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0.4,
                        "ReverseSpeed_mult": 0.4
                    },
                    "Effects": {
                        "RemoveTagged": "Treads"
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0,
                "ExplosionMultiplier": 0
            },
            "Gunner": {
                "DamageMultiplier": 0.75
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Tank_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Turret",
                "Type": "Ground_Turret_Large",
                "Default": "Main_Cannon",
                "Owner": "Driver",
                "Section": "Turret",
                "Priority": 0
            },
            {
                "Slot": "Engine",
                "Type": "LTV_Engine",
                "Default": "Default_Engine",
                "Section": "Engine"
            },
            {
                "Slot": "Treads",
                "Type": "Tank_Treads",
                "Default": "Default_Treads",
                "Section": "Treads"
            }
        ]
    },
    "Vehicles/Combat_Truck": {
        "Name": "Truck",
        "ControllerType": "CarChassis",
        "VehicleGroup": "LandArtillery",
        "GlobalDamageMultiplier": 0.75,
        "GloblExplosionMultiplier": 0,
        "ScrapYieldMultiplier": 2,
        "BaseCost": 400,
        "DestructionBonus": 2,
        "ControlProperties": {
            "DrivingTorque": 215000,
            "BrakingTorque": 220000,
            "MaxSpeed": 50,
            "ReverseSpeed": 30,
            "MaxAllowedSpeed": 70,
            "MaxSteer": 0.5,
            "StrutSpringDampingFront": 7000,
            "StrutSpringDampingRear": 5000,
            "StrutSpringStiffnessFront": 225000,
            "StrutSpringStiffnessRear": 350000,
            "TorsionSpringDamping": 100,
            "TorsionSpringStiffness": 10000,
            "WheelFriction": 1.6,
            "IgnitionTime": 3,
            "EngineIgnitionVolume": 6.5,
            "EngineIdlePitch": 0.9,
            "EngineIdleVolume": 2,
            "EngineAccelPitch": 0.9,
            "EngineAccelVolume": 0.7
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "SpecialAction": {
            "Toggle_Deployed": {
                "Name": "Toggle Artillery Deployed",
                "Type": "Method",
                "Object": "ToggleDeployAttachment",
                "Val": "Truck_Mounted"
            },
            "Toggle_PistonFL": {
                "Name": "Toggle Deployed Piston",
                "Type": "Constraint",
                "Object": "DeployPistonFL",
                "Enabled": {
                    "TargetPosition": -1.75
                },
                "Disabled": {
                    "TargetPosition": 0
                }
            },
            "Toggle_PistonFR": {
                "Name": "Toggle Deployed Piston",
                "Type": "Constraint",
                "Object": "DeployPistonFR",
                "Enabled": {
                    "TargetPosition": -1.75
                },
                "Disabled": {
                    "TargetPosition": 0
                }
            },
            "Toggle_PistonRL": {
                "Name": "Toggle Deployed Piston",
                "Type": "Constraint",
                "Object": "DeployPistonRL",
                "Enabled": {
                    "TargetPosition": -1.75
                },
                "Disabled": {
                    "TargetPosition": 0
                }
            },
            "Toggle_PistonRR": {
                "Name": "Toggle Deployed Piston",
                "Type": "Constraint",
                "Object": "DeployPistonRR",
                "Enabled": {
                    "TargetPosition": -1.75
                },
                "Disabled": {
                    "TargetPosition": 0
                }
            }
        },
        "Sections": {
            "Hull": {
                "Armor": 10,
                "Health": 150,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "MaxSteer_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 10.5,
                "Health": 75,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "MaxSpeed_mult": 0.75,
                        "ReverseSpeed_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Wheels": {
                "Armor": 6,
                "Health": 65,
                "HullDamageMult": 0.8,
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0.4,
                        "ReverseSpeed_mult": 0.4
                    },
                    "Effects": {
                        "RemoveTagged": "Tires"
                    }
                }
            }
        },
        "SeatData": [],
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Truck_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Truck Bed",
                "Type": "Truck_Bed",
                "Default": "Large_Turret_Mount"
            },
            {
                "Slot": "Engine",
                "Type": "LTV_Engine",
                "Default": "Default_Engine",
                "Section": "Engine"
            },
            {
                "Slot": "Wheels",
                "Type": "LTV_Wheels",
                "Default": "Default_Wheels",
                "Section": "Wheels"
            }
        ]
    },
    "Vehicles/Fighter_Plane": {
        "Name": "Fighter",
        "HUDType": "Helicopter",
        "ControllerType": "Plane",
        "VehicleGroup": "AirFighter",
        "GlobalDamageMultiplier": 0.5,
        "GloblExplosionMultiplier": 0,
        "GunThirdPersonOffset": 5,
        "ScrapYieldMultiplier": 3,
        "BaseCost": 1500,
        "UsesFlak": true,
        "DestructionBonus": 5,
        "ControlProperties": {
            "JetEffectSpeedScale": 40,
            "HardMaxSpeed": 275,
            "SoftMaxSpeed": 200,
            "HardMaxAltitude": 2250,
            "SoftMaxAltitude": 1500,
            "ImpulseTolerance": 1600,
            "DeathImpulse": 5000,
            "BaseThrottle": 45000,
            "AngleOfAttack": 7.5,
            "Drag": 0.9,
            "Lift": 2,
            "PitchSpeed": 1,
            "RollSpeed": 2,
            "YawSpeed": 0.5,
            "Torque": 20,
            "EngineAcceleration": 0.16,
            "PropellerAngularVelocity": 40,
            "EngineVolume": 1.5,
            "StartupTime": 0.1,
            "EngineBasePitch": 1.125
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": true,
            "FreeRotation": true,
            "CameraLockedToRoot": false,
            "CameraReturnsToCenter": true,
            "OrientationLockThreshold": 1,
            "Mode": "ThirdPerson",
            "RootPart": "Vehicle",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 65,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 7.5,
                "Health": 175,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "PitchSpeed_mult": 0,
                        "YawSpeed_mult": 0,
                        "RollSpeed_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 7.5,
                "Health": 85,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "BaseThrottle_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "BaseThrottle_mult": 0.5
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Wings": {
                "Armor": 7.5,
                "Health": 65,
                "HullDamageMult": 0.75,
                "Damaged": {
                    "Properties": {
                        "PitchSpeed_mult": 0.8,
                        "YawSpeed_mult": 0.8,
                        "RollSpeed_mult": 0.85
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "PitchSpeed_mult": 0.35,
                        "YawSpeed_mult": 0.35,
                        "RollSpeed_mult": 0.35
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": [],
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Plane_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Hardpoints",
                "Type": "Plane_Hardpoints",
                "Default": "Med_Machine_Guns",
                "Owner": "Driver",
                "Section": "Weapons",
                "Priority": 0
            },
            {
                "Slot": "Under Mount",
                "Type": "Plane_Under_Mount",
                "Default": "Empty",
                "Owner": "Driver",
                "Section": "Weapons",
                "Priority": 1
            },
            {
                "Slot": "Engine",
                "Type": "Plane_Engine",
                "Section": "Engine",
                "Default": "Default_Engine"
            }
        ]
    },
    "Vehicles/Light_Helicopter": {
        "Name": "Helicopter",
        "HUDType": "Helicopter",
        "ControllerType": "Helicopter",
        "VehicleGroup": "AirHelicopterCombat",
        "GlobalDamageMultiplier": 0.75,
        "ScrapYieldMultiplier": 2,
        "TransportVehicle": true,
        "BaseCost": 1250,
        "UsesFlak": true,
        "DestructionBonus": 4,
        "ControlProperties": {
            "MitigateVTOL": true,
            "ImpulseTolerance": 1500,
            "ImpulseToleranceVTOL": 6000,
            "DeathImpulse": 8000,
            "MaxLateralSpeed": 110,
            "EngineResponsiveness": 4,
            "BaseThrust": 0.9,
            "ThrustToWeight": 3,
            "ForwardThrust": 0,
            "DragLateral": 2.4,
            "DragUp": 3.2,
            "DragDown": 2.75,
            "TorqueResistance": 0.75,
            "MinRollAngle": 65,
            "MinPitchAngle": 65,
            "MaxRollAngle": 85,
            "MaxPitchAngle": 85,
            "PitchSpeed": 120,
            "YawSpeed": 75,
            "RollSpeed": 150,
            "RotorAngularVelocity": 20,
            "EngineVolume": 2,
            "StartupTime": 3.5,
            "EngineBasePitch": 1.075
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": false,
            "ShowControllerGui": false,
            "CameraLockedToRoot": true,
            "Mode": "ThirdPerson",
            "RootPart": "Vehicle",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 30,
            "MinZoom": 10,
            "PivotOffset": {
                "x": 0,
                "y": 4
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 5,
                "Health": 130,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "ThrustToWeight_mult": 0,
                        "YawSpeed_mult": 0,
                        "RotorAngularVelocity_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Rotor": {
                "Armor": 5,
                "Health": 60,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "DragLateral_mult": 1.1,
                        "ThrustToWeight_mult": 0.75,
                        "YawSpeed_mult": 0.5,
                        "RollSpeed_mult": 0.5,
                        "RotorAngularVelocity_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "DragLateral_mult": 1.25,
                        "ThrustToWeight_mult": 0.25,
                        "YawSpeed_mult": 0.2,
                        "RollSpeed_mult": 0.2,
                        "RotorAngularVelocity_mult": 0.25
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0.5,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Light_Heli_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Weapons",
                "Type": "Aircraft_Mounted_Small",
                "Default": "Aircraft_Miniguns",
                "Section": "Weapons"
            },
            {
                "Slot": "Rotor",
                "Type": "Vehicle_Rotor",
                "Default": "Default_Rotor",
                "Section": "Rotor"
            }
        ]
    },
    "Vehicles/Light_Tank": {
        "Name": "APC",
        "ControllerType": "CarChassis",
        "VehicleGroup": "LandHeavyArmor",
        "GlobalDamageMultiplier": 0.75,
        "ScrapYieldMultiplier": 2,
        "BaseCost": 1200,
        "DestructionBonus": 3,
        "ControlProperties": {
            "DrivingTorque": 1290000,
            "BrakingTorque": 1320000,
            "MaxSpeed": 55,
            "ReverseSpeed": 30,
            "MaxAllowedSpeed": 65,
            "MaxSteer": 0.6,
            "StrutSpringDampingFront": 20000,
            "StrutSpringDampingRear": 20000,
            "StrutSpringStiffnessFront": 170000,
            "StrutSpringStiffnessRear": 170000,
            "TorsionSpringDamping": 200,
            "TorsionSpringStiffness": 5000,
            "WheelFriction": 1.6,
            "IgnitionTime": 0.5,
            "EngineIgnitionVolume": 0,
            "EngineIdlePitch": 0.6,
            "EngineIdleVolume": 3,
            "EngineAccelPitch": 0.85,
            "EngineAccelVolume": 2
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "SpecialAction": {
            "Toggle_Hatch": {
                "Name": "Toggle Back Hatch Open",
                "Type": "Constraint",
                "Object": "BackDoorHinge",
                "Enabled": {
                    "TargetAngle": 50
                },
                "Disabled": {
                    "TargetAngle": 0
                }
            }
        },
        "Sections": {
            "Hull": {
                "Armor": 16,
                "Health": 250,
                "HullDamageMult": 1,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "MaxSteer_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 15,
                "Health": 125,
                "HullDamageMult": 1,
                "Damaged": {
                    "Properties": {
                        "MaxSpeed_mult": 0.75,
                        "ReverseSpeed_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0.5
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Wheels": {
                "Armor": 12.5,
                "Health": 150,
                "HullDamageMult": 0.8,
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0.4,
                        "ReverseSpeed_mult": 0.4
                    },
                    "Effects": {
                        "RemoveTagged": "Tires"
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0,
                "ExplosionMultiplier": 0
            },
            "Gunner": {
                "DamageMultiplier": 0,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "APC_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Hull Style",
                "Type": "Light_Tank_Hull",
                "Default": "APC_Hull",
                "Section": "Hull"
            },
            {
                "Slot": "Main Turret",
                "Type": "Ground_Turret_Med",
                "Default": "APC_Cannon",
                "Owner": "Driver",
                "Section": "Turret",
                "Priority": 1
            },
            {
                "Slot": "Gunner Turret",
                "Type": "Ground_Turret_Small",
                "Default": "LMG_Turret",
                "Owner": "Gunner",
                "Section": "Gunner",
                "Priority": 0,
                "IgnoreName": true
            },
            {
                "Slot": "Engine",
                "Type": "LTV_Engine",
                "Default": "Default_Engine",
                "Section": "Engine"
            },
            {
                "Slot": "Wheels",
                "Type": "LTV_Wheels",
                "Default": "Default_Wheels",
                "Section": "Wheels"
            }
        ]
    },
    "Vehicles/Light_Transport": {
        "Name": "LTV",
        "ControllerType": "CarChassis",
        "VehicleGroup": "LandLightArmor",
        "ScrapYieldMultiplier": 1,
        "BaseCost": 100,
        "DestructionBonus": 1,
        "ControlProperties": {
            "DrivingTorque": 215000,
            "BrakingTorque": 220000,
            "MaxSpeed": 85,
            "ReverseSpeed": 40,
            "MaxAllowedSpeed": 100,
            "MaxSteer": 0.7,
            "StrutSpringDampingFront": 7000,
            "StrutSpringDampingRear": 6000,
            "StrutSpringStiffnessFront": 200000,
            "StrutSpringStiffnessRear": 200000,
            "TorsionSpringDamping": 150,
            "TorsionSpringStiffness": 10000,
            "WheelFriction": 1.6,
            "IgnitionTime": 3,
            "EngineIgnitionVolume": 7.5,
            "EngineIdlePitch": 0.8,
            "EngineIdleVolume": 3,
            "EngineAccelPitch": 0.8,
            "EngineAccelVolume": 1
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "SpecialAction": {
            "Toggle_Hitch": {
                "Name": "Detach Hitched",
                "Type": "Method",
                "Object": "DetachHitch",
                "Val": "Hitch"
            }
        },
        "Sections": {
            "Hull": {
                "Armor": 8,
                "Health": 100,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "MaxSteer_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Engine": {
                "Armor": 9,
                "Health": 60,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "MaxSpeed_mult": 0.75,
                        "ReverseSpeed_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0,
                        "ReverseSpeed_mult": 0,
                        "DrivingTorque_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            },
            "Wheels": {
                "Armor": 5,
                "Health": 50,
                "HullDamageMult": 0.8,
                "Destroyed": {
                    "Properties": {
                        "MaxSpeed_mult": 0.4,
                        "ReverseSpeed_mult": 0.4
                    },
                    "Effects": {
                        "RemoveTagged": "Tires"
                    }
                }
            }
        },
        "SeatData": [],
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "LTV_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Engine",
                "Type": "LTV_Engine",
                "Default": "Default_Engine",
                "Section": "Engine"
            },
            {
                "Slot": "Trunk",
                "Type": "LTV_Trunk",
                "Default": "Seats_Gunner"
            },
            {
                "Slot": "Hitch",
                "Type": "LTV_Hitched",
                "Default": "Empty"
            },
            {
                "Slot": "Wheels",
                "Type": "LTV_Wheels",
                "Default": "Default_Wheels",
                "Section": "Wheels"
            }
        ]
    },
    "Vehicles/Towed_Field_Gun": {
        "Name": "Field Gun",
        "ControllerType": "TowedGunChassis",
        "VehicleGroup": "LandArtillery",
        "ScrapYieldMultiplier": 1,
        "BaseCost": 750,
        "DestructionBonus": 4,
        "ControlProperties": {
            "DrivingTorque": 215000,
            "BrakingTorque": 220000,
            "MaxSpeed": 75,
            "ReverseSpeed": 40,
            "MaxAllowedSpeed": 90,
            "MaxSteer": 0.7,
            "StrutSpringDampingFront": 7000,
            "StrutSpringDampingRear": 6000,
            "StrutSpringStiffnessFront": 200000,
            "StrutSpringStiffnessRear": 200000,
            "TorsionSpringDamping": 150,
            "TorsionSpringStiffness": 10000,
            "WheelFriction": 1.6,
            "IgnitionTime": 3,
            "EngineIgnitionVolume": 7.5,
            "EngineIdlePitch": 0.8,
            "EngineIdleVolume": 3,
            "EngineAccelPitch": 0.8,
            "EngineAccelVolume": 1
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": true,
            "ShowControllerGui": false,
            "FreeRotation": true,
            "CameraLockedToRoot": false,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "Sections": {
            "Hull": {
                "Armor": 20,
                "Health": 120,
                "Damaged": {
                    "Properties": {},
                    "Effects": {}
                },
                "Destroyed": {
                    "Properties": {},
                    "Effects": {
                        "DestroyVehicle": true
                    }
                }
            }
        },
        "SeatData": [],
        "Attachments": [
            {
                "Slot": "Field_Gun_Turret",
                "Type": "Field_Gun_Turret",
                "Default": "Field_Gun_Turret",
                "Section": "Gun"
            }
        ]
    },
    "Vehicles/Transport_Helicopter": {
        "Name": "Transport Helicopter",
        "HUDType": "Helicopter",
        "ControllerType": "Helicopter",
        "VehicleGroup": "AirHelicopterTransport",
        "GlobalDamageMultiplier": 0.75,
        "ScrapYieldMultiplier": 3,
        "BaseCost": 2000,
        "UsesFlak": true,
        "DestructionBonus": 6,
        "ControlProperties": {
            "MitigateVTOL": true,
            "ImpulseTolerance": 1750,
            "ImpulseToleranceVTOL": 5500,
            "DeathImpulse": 8500,
            "MaxLateralSpeed": 130,
            "EngineResponsiveness": 2,
            "BaseThrust": 0.9,
            "ThrustToWeight": 1.75,
            "ForwardThrust": 0.25,
            "DragLateral": 2.6,
            "DragUp": 3.4,
            "DragDown": 3,
            "TorqueResistance": 0.4,
            "MinRollAngle": 45,
            "MaxRollAngle": 80,
            "MinPitchAngle": 55,
            "MaxPitchAngle": 80,
            "PitchSpeed": 70,
            "YawSpeed": 35,
            "RollSpeed": 105,
            "RotorAngularVelocity": 20,
            "EngineVolume": 2,
            "StartupTime": 5,
            "EngineBasePitch": 0.9
        },
        "CameraProperties": {
            "HideMouse": true,
            "MouseControlsCamera": false,
            "ShowControllerGui": false,
            "CameraLockedToRoot": true,
            "Mode": "ThirdPerson",
            "RootPart": "Turret",
            "Sensitivity": 3,
            "BaseFov": 70,
            "MaxFovSpeed": 20,
            "MaxZoom": 40,
            "MinZoom": 15,
            "PivotOffset": {
                "x": 0,
                "y": 8
            },
            "CameraTweenStrength": 2,
            "HeadingAdjustStrength": 1.5
        },
        "SpecialAction": {
            "Toggle_LeftDoor": {
                "Name": "Toggle Left Door Open",
                "Type": "Constraint",
                "Object": "LeftDoorHinge",
                "Enabled": {
                    "TargetPosition": 0
                },
                "Disabled": {
                    "TargetPosition": 6
                }
            },
            "Toggle_RightDoor": {
                "Name": "Toggle Right Door Open",
                "Type": "Constraint",
                "Object": "RightDoorHinge",
                "Enabled": {
                    "TargetPosition": 0
                },
                "Disabled": {
                    "TargetPosition": 6
                }
            }
        },
        "Sections": {
            "Hull": {
                "Armor": 11.5,
                "Health": 210,
                "Damaged": {
                    "Properties": {},
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "ThrustToWeight_mult": 0,
                        "YawSpeed_mult": 0,
                        "RotorAngularVelocity_mult": 0
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true,
                        "DestroyVehicle": true
                    }
                }
            },
            "Rotor": {
                "Armor": 10,
                "Health": 100,
                "HullDamageMult": 1.2,
                "Damaged": {
                    "Properties": {
                        "DragLateral_mult": 1.1,
                        "ThrustToWeight_mult": 0.75,
                        "YawSpeed_mult": 0.5,
                        "RollSpeed_mult": 0.5,
                        "RotorAngularVelocity_mult": 0.75
                    },
                    "Effects": {
                        "SmokeEffect": true
                    }
                },
                "Destroyed": {
                    "Properties": {
                        "DragLateral_mult": 1.25,
                        "ThrustToWeight_mult": 0.25,
                        "YawSpeed_mult": 0.2,
                        "RollSpeed_mult": 0.2,
                        "RotorAngularVelocity_mult": 0.25
                    },
                    "Effects": {
                        "FireEffect": true,
                        "SmokeEffect": true
                    }
                }
            }
        },
        "SeatData": {
            "Driver": {
                "DamageMultiplier": 0.4,
                "ExplosionMultiplier": 0
            },
            "FrontPassenger": {
                "DamageMultiplier": 0.4,
                "ExplosionMultiplier": 0
            }
        },
        "Attachments": [
            {
                "Slot": "Armor",
                "Type": "Aircraft_Armor",
                "Default": "Default_Armor",
                "Section": "Hull"
            },
            {
                "Slot": "Hull Style",
                "Type": "Transport_Heli_Hull",
                "Default": "Troop_Transport",
                "Section": "Hull"
            },
            {
                "Slot": "Rotor",
                "Type": "Vehicle_Rotor",
                "Default": "Default_Rotor",
                "Section": "Rotor"
            }
        ]
    },
    "Vehicles/Weapons/AA_18mm": {
        "WeaponName": "18mm AA",
        "Automatic": true,
        "MultiBarrel": true,
        "SoundLooping": true,
        "FireSoundBasePitch": 1.25,
        "Overheats": true,
        "OverheatGain": 0.0048,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 750,
        "StockpileSize": 150,
        "BulletSpeed": 4500,
        "BulletDamage": 6,
        "ArmorPiercing": 0.05,
        "MinDamage": 2,
        "MinRange": 800,
        "MaxRange": 1200,
        "FlakMult": 3,
        "FireRate": 33.333333333333336,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 1,
        "ReloadTime": 4,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/AA_25mm": {
        "WeaponName": "25mm AA",
        "Automatic": true,
        "MultiBarrel": true,
        "SoundLooping": true,
        "FireSoundBasePitch": 1.1,
        "Overheats": true,
        "OverheatGain": 0.0058,
        "OverheatLoss": 0.2,
        "UsesAmmoPool": true,
        "ClipSize": 1200,
        "StockpileSize": 200,
        "BulletSpeed": 4900,
        "BulletDamage": 10,
        "ArmorPiercing": 0.05,
        "MinDamage": 3,
        "MinRange": 800,
        "MaxRange": 1200,
        "FlakMult": 2,
        "FireRate": 36.666666666666664,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 1,
        "ReloadTime": 5,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/AP_Cannon_120mm": {
        "WeaponName": "120mm Cannon AP",
        "BaseCost": 50,
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 16,
        "BulletSpeed": 975,
        "BulletDamage": 220,
        "ArmorPiercing": 0.675,
        "FlakMult": 3,
        "ExplosionRadius": 4.5,
        "ExplosionIntensity": 0.9,
        "TerrainIntensity": 2,
        "ExplosionInvisible": true,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.15,
        "ReloadTime": 2.5,
        "AmmoRegen": 9
    },
    "Vehicles/Weapons/AP_Cannon_25mm": {
        "WeaponName": "25mm Cannon AP",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 3,
        "ClipSize": 8,
        "StockpileSize": 32,
        "BulletSpeed": 925,
        "BulletDamage": 100,
        "ArmorPiercing": 0.475,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.2,
        "TerrainIntensity": 0.3,
        "ExplosionInvisible": true,
        "FireRate": 3,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.5,
        "ReloadTime": 3,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/AP_Cannon_80mm": {
        "WeaponName": "80mm Cannon AP",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 8,
        "BulletSpeed": 1750,
        "BulletDamage": 185,
        "ArmorPiercing": 0.675,
        "FlakMult": 3,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.8,
        "TerrainIntensity": 2,
        "ExplosionInvisible": true,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.075,
        "ReloadTime": 4,
        "AmmoRegen": 8
    },
    "Vehicles/Weapons/AP_Light_Cannon_15mm": {
        "WeaponName": "15mm Cannon AP",
        "BaseCost": 50,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "ClipSize": 32,
        "StockpileSize": 80,
        "BulletSpeed": 1100,
        "BulletDamage": 50,
        "ArmorPiercing": 0.25,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.15,
        "TerrainIntensity": 0.25,
        "ExplosionInvisible": true,
        "FireRate": 6.666666666666667,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.6,
        "ReloadTime": 7.5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/AP_Light_Cannon_25mm": {
        "WeaponName": "25mm Cannon AP",
        "BaseCost": 75,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "ClipSize": 24,
        "StockpileSize": 60,
        "BulletSpeed": 1000,
        "BulletDamage": 65,
        "ArmorPiercing": 0.25,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.25,
        "TerrainIntensity": 0.25,
        "ExplosionInvisible": true,
        "FireRate": 5.333333333333333,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.75,
        "ReloadTime": 7.5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/AP_Self_Defense_Rocket": {
        "WeaponName": "AV Defense Rocket",
        "Automatic": true,
        "MultiBarrel": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 8,
        "StockpileSize": 16,
        "BulletSpeed": 300,
        "BulletDamage": 125,
        "ArmorPiercing": 0.55,
        "ExplosionRadius": 4,
        "ExplosionIntensity": 0.7,
        "FireRate": 6,
        "ProjectileType": "SmallRocketProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.75,
        "ReloadTime": 6,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/Artillery_Cannon_120mm": {
        "WeaponName": "120mm Artillery",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 12,
        "BulletSpeed": 650,
        "BulletDamage": 250,
        "ArmorPiercing": 1,
        "FlakMult": 5,
        "ExplosionRadius": 32,
        "ExplosionIntensity": 3,
        "TerrainIntensity": 1.5,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.15,
        "ReloadTime": 8,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/Berserker_30mm": {
        "WeaponName": "Berserker 30mm",
        "BaseCost": 50,
        "Automatic": true,
        "SoundLooping": true,
        "Overheats": true,
        "OverheatGain": 0.0147,
        "OverheatLoss": 0.25,
        "FireSoundBasePitch": 3.5,
        "UsesAmmoPool": true,
        "ClipSize": 450,
        "StockpileSize": 150,
        "BulletSpeed": 3000,
        "BulletDamage": 51,
        "FlakMult": 0.15,
        "ArmorPiercing": 0.15,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 0.145,
        "TerrainIntensity": 0.25,
        "ExplosionInvisible": true,
        "FireRate": 65,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.666,
        "ReloadTime": 5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Canister_40mm": {
        "WeaponName": "40mm Canister",
        "Automatic": true,
        "FireSoundBasePitch": 1.2,
        "Overheats": true,
        "OverheatGain": 0.1,
        "OverheatLoss": 0.5,
        "OverheatDelay": 0.125,
        "UsesAmmoPool": true,
        "ClipSize": 24,
        "StockpileSize": 6,
        "ProjectilesPerRound": 32,
        "BulletSpeed": 1560,
        "BulletDamage": 200,
        "ArmorPiercing": 0.025,
        "FireRate": 1.6666666666666667,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.75,
        "ProjectileSpread": 1,
        "ReloadTime": 6,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/Cannon_120mm": {
        "WeaponName": "120mm Cannon",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 16,
        "BulletSpeed": 850,
        "BulletDamage": 220,
        "ArmorPiercing": 0.6,
        "FlakMult": 4,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 1,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.2,
        "ReloadTime": 2.5,
        "AmmoRegen": 9
    },
    "Vehicles/Weapons/Cannon_25mm": {
        "WeaponName": "25mm Cannon",
        "Automatic": true,
        "FireSoundBasePitch": 3,
        "ClipSize": 8,
        "StockpileSize": 32,
        "BulletSpeed": 850,
        "BulletDamage": 100,
        "ArmorPiercing": 0.4,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 0.3,
        "TerrainIntensity": 0.2,
        "FireRate": 3,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.6,
        "ReloadTime": 3,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Cannon_80mm": {
        "WeaponName": "80mm Cannon",
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 8,
        "BulletSpeed": 1600,
        "BulletDamage": 185,
        "ArmorPiercing": 0.6,
        "FlakMult": 3.5,
        "ExplosionRadius": 10,
        "ExplosionIntensity": 0.9,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.1,
        "ReloadTime": 4,
        "AmmoRegen": 8
    },
    "Vehicles/Weapons/FLAK_30mm": {
        "WeaponName": "30mm FLAK",
        "BaseCost": 50,
        "Automatic": true,
        "MultiBarrel": true,
        "SoundLooping": true,
        "FireSoundBasePitch": 0.8,
        "Overheats": true,
        "OverheatGain": 0.007,
        "OverheatLoss": 0.2,
        "UsesAmmoPool": true,
        "ClipSize": 900,
        "StockpileSize": 150,
        "BulletSpeed": 3500,
        "BulletDamage": 10,
        "ArmorPiercing": 0.05,
        "MinDamage": 3,
        "MinRange": 1200,
        "MaxRange": 2000,
        "FlakMult": 2.8,
        "FireRate": 26.666666666666668,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.85,
        "ReloadTime": 5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/HE_40mm": {
        "WeaponName": "40mm HE",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "Overheats": true,
        "OverheatGain": 0.1,
        "OverheatLoss": 0.5,
        "OverheatDelay": 0.125,
        "UsesAmmoPool": true,
        "ClipSize": 24,
        "StockpileSize": 6,
        "BulletSpeed": 160,
        "BulletDamage": 120,
        "ArmorPiercing": 0.25,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.75,
        "TerrainIntensity": 0.25,
        "FireRate": 1.6666666666666667,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 1.25,
        "UsesVelocityInheritance": true,
        "ReloadTime": 6,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/HE_Cannon_120mm": {
        "WeaponName": "120mm Cannon HE",
        "BaseCost": 50,
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 16,
        "BulletSpeed": 700,
        "BulletDamage": 220,
        "ArmorPiercing": 0.525,
        "FlakMult": 5,
        "ExplosionRadius": 16,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 1.25,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.25,
        "ReloadTime": 2.5,
        "AmmoRegen": 9
    },
    "Vehicles/Weapons/HE_Cannon_25mm": {
        "WeaponName": "25mm Cannon HE",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 3,
        "ClipSize": 8,
        "StockpileSize": 32,
        "BulletSpeed": 775,
        "BulletDamage": 100,
        "ArmorPiercing": 0.325,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.55,
        "TerrainIntensity": 0.2,
        "FireRate": 3,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.7,
        "ReloadTime": 3,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/HE_Cannon_80mm": {
        "WeaponName": "80mm Cannon HE",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 8,
        "BulletSpeed": 1500,
        "BulletDamage": 185,
        "ArmorPiercing": 0.525,
        "FlakMult": 5,
        "ExplosionRadius": 14,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 1,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.125,
        "ReloadTime": 4,
        "AmmoRegen": 8
    },
    "Vehicles/Weapons/HE_Rocket_70mm": {
        "WeaponName": "70mm HE Rocket",
        "MultiBarrel": true,
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "UsesAmmoPool": true,
        "ClipSize": 20,
        "StockpileSize": 20,
        "BulletSpeed": 300,
        "BulletDamage": 65,
        "ArmorPiercing": 0.15,
        "ExplosionRadius": 20,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 1.2,
        "FireRate": 4,
        "ProjectileType": "RocketArcProjectile",
        "ProjectileLifeTime": 15,
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 1,
        "ReloadTime": 8,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/HE_Self_Defense_Rocket": {
        "WeaponName": "HE Defense Rocket",
        "Automatic": true,
        "MultiBarrel": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 8,
        "StockpileSize": 16,
        "BulletSpeed": 250,
        "BulletDamage": 125,
        "ArmorPiercing": 0.4,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.7,
        "FireRate": 6,
        "ProjectileType": "SmallRocketProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.85,
        "ReloadTime": 6,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/HMG_12mm": {
        "WeaponName": "12mm HMG",
        "BaseCost": 0,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "Overheats": true,
        "OverheatGain": 0.006,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 500,
        "StockpileSize": 75,
        "BulletSpeed": 3300,
        "FlakMult": 1.5,
        "BulletDamage": 40.5,
        "MinDamage": 15,
        "MinRange": 500,
        "MaxRange": 1500,
        "ArmorPiercing": 0.07,
        "FireRate": 11.666666666666666,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.175,
        "ReloadTime": 5,
        "AmmoRegen": 25
    },
    "Vehicles/Weapons/HMG_762mm": {
        "WeaponName": "7.62mm MG",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "Overheats": true,
        "OverheatGain": 0.0098,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 500,
        "StockpileSize": 100,
        "BulletSpeed": 2000,
        "BulletDamage": 32.5,
        "MinDamage": 25.5,
        "MinRange": 75,
        "MaxRange": 750,
        "ArmorPiercing": 0.05,
        "FireRate": 10.833333333333334,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.125,
        "ReloadTime": 5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Light_Cannon_15mm": {
        "WeaponName": "15mm Cannon",
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "ClipSize": 32,
        "StockpileSize": 96,
        "BulletSpeed": 1000,
        "BulletDamage": 50,
        "ArmorPiercing": 0.175,
        "ExplosionRadius": 10,
        "ExplosionIntensity": 0.35,
        "TerrainIntensity": 0.35,
        "ExplosionInvisible": true,
        "FireRate": 6.666666666666667,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.85,
        "ReloadTime": 7.5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Light_Cannon_25mm": {
        "WeaponName": "25mm Cannon",
        "BaseCost": 50,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "ClipSize": 24,
        "StockpileSize": 72,
        "BulletSpeed": 900,
        "BulletDamage": 65,
        "ArmorPiercing": 0.175,
        "ExplosionRadius": 14,
        "ExplosionIntensity": 0.5,
        "TerrainIntensity": 0.35,
        "ExplosionInvisible": true,
        "FireRate": 5.333333333333333,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 1,
        "ReloadTime": 8.5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/LMG_65mm": {
        "WeaponName": "6.5mm MG",
        "Automatic": true,
        "FireSoundBasePitch": 2,
        "Overheats": true,
        "OverheatGain": 0.0098,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 600,
        "StockpileSize": 150,
        "BulletSpeed": 2250,
        "BulletDamage": 25.5,
        "MinDamage": 20,
        "MinRange": 50,
        "MaxRange": 550,
        "ArmorPiercing": 0,
        "FlakMult": 0.75,
        "FireRate": 13.333333333333334,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.35,
        "ReloadTime": 3,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/LVG_40mm": {
        "WeaponName": "40mm LVG",
        "Automatic": true,
        "FireSoundBasePitch": 2,
        "Overheats": true,
        "OverheatGain": 0.1,
        "OverheatLoss": 0.5,
        "OverheatDelay": 0.125,
        "UsesAmmoPool": true,
        "ClipSize": 24,
        "StockpileSize": 6,
        "BulletSpeed": 100,
        "BulletDamage": 120,
        "ArmorPiercing": 0,
        "ExplosionRadius": 16,
        "ExplosionIntensity": 0.8,
        "TerrainIntensity": 0.8,
        "ProjectileLifeTime": 3,
        "FireRate": 1.6666666666666667,
        "ProjectileType": "PhysicalProjectile",
        "ProjectileHitModule": "TimedExplosive",
        "BulletSpread": 1.25,
        "UsesVelocityInheritance": true,
        "WorldModel": "Grenade_40mm",
        "ReloadTime": 6,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/Minigun_8mm": {
        "WeaponName": "8mm Minigun",
        "Automatic": true,
        "MultiBarrel": true,
        "SoundLooping": true,
        "FireSoundBasePitch": 1.3,
        "Overheats": true,
        "OverheatGain": 0.0050,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 1200,
        "StockpileSize": 300,
        "BulletSpeed": 2400,
        "BulletDamage": 16,
        "MinDamage": 8,
        "MinRange": 100,
        "MaxRange": 350,
        "ArmorPiercing": 0.025,
        "FlakMult": 0.75,
        "FireRate": 100,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 1.5,
        "ReloadTime": 5,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/MMG_9mm": {
        "WeaponName": "9mm MMG",
        "BaseCost": 0,
        "Automatic": true,
        "FireSoundBasePitch": 1.25,
        "Overheats": true,
        "OverheatGain": 0.01,
        "OverheatLoss": 0.25,
        "UsesAmmoPool": true,
        "ClipSize": 800,
        "StockpileSize": 200,
        "BulletSpeed": 3750,
        "FlakMult": 1.5,
        "BulletDamage": 32.5,
        "MinDamage": 12,
        "MinRange": 350,
        "MaxRange": 1250,
        "ArmorPiercing": 0.05,
        "FireRate": 20,
        "ProjectileType": "StandardProjectile",
        "ProjectileHitModule": "Bullet",
        "BulletSpread": 0.25,
        "ReloadTime": 5,
        "AmmoRegen": 25
    },
    "Vehicles/Weapons/Rocket_70mm": {
        "NamePrefix": "Support",
        "WeaponName": "70mm 'Incinerators'",
        "BaseCost": 50,
        "Automatic": true,
        "MultiBarrel": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 16,
        "StockpileSize": 32,
        "BulletSpeed": 350,
        "BulletDamage": 110,
        "ArmorPiercing": 0.15,
        "ExplosionRadius": 20,
        "ExplosionIntensity": 0.4,
        "FireRate": 8,
        "ProjectileType": "SmallRocketProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 2.25,
        "ReloadTime": 8,
        "AmmoRegen": 30
    },
    "Vehicles/Weapons/Rocket_85mm": {
        "NamePrefix": "AV",
        "WeaponName": "85mm 'Pulverizers'",
        "Automatic": true,
        "MultiBarrel": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 8,
        "StockpileSize": 16,
        "BulletSpeed": 800,
        "BulletDamage": 120,
        "ArmorPiercing": 0.5,
        "ExplosionRadius": 16,
        "ExplosionIntensity": 0.51,
        "FireRate": 2.5,
        "ProjectileType": "RocketProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.25,
        "ReloadTime": 6,
        "AmmoRegen": 20
    },
    "Vehicles/Weapons/SDB_AP": {
        "WeaponName": "SDB-P",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 2,
        "BulletSpeed": 0,
        "BulletDamage": 300,
        "ArmorPiercing": 1,
        "FlakMult": 3,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 3,
        "TerrainIntensity": 2,
        "FireRate": 10,
        "ProjectileType": "DumbfireBombProjectile",
        "ProjectileLifeTime": 20,
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0,
        "ReloadTime": 8,
        "AmmoRegen": 30,
        "UsesVelocityInheritance": true,
        "WorldModel": "Bomb_Deployed"
    },
    "Vehicles/Weapons/SDB_HE": {
        "WeaponName": "SDB-HE",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "ClipSize": 1,
        "StockpileSize": 2,
        "BulletSpeed": 0,
        "BulletDamage": 250,
        "ArmorPiercing": 0.5,
        "FlakMult": 3,
        "ExplosionRadius": 48,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 4,
        "FireRate": 10,
        "ProjectileType": "DumbfireBombProjectile",
        "ProjectileLifeTime": 20,
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0,
        "ReloadTime": 8,
        "AmmoRegen": 30,
        "UsesVelocityInheritance": true,
        "WorldModel": "Bomb_Deployed"
    },
    "Vehicles/Weapons/Smoke_40mm": {
        "WeaponName": "40mm HE",
        "Automatic": true,
        "FireSoundBasePitch": 1,
        "Overheats": true,
        "OverheatGain": 0.1,
        "OverheatLoss": 0.5,
        "OverheatDelay": 0.125,
        "UsesAmmoPool": true,
        "ClipSize": 24,
        "StockpileSize": 6,
        "BulletSpeed": 160,
        "BulletDamage": 120,
        "ArmorPiercing": 0.25,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 0.52,
        "TerrainIntensity": 1.75,
        "FireRate": 2.0833333333333335,
        "ProjectileType": "LargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 1.25,
        "UsesVelocityInheritance": true,
        "ReloadTime": 6,
        "AmmoRegen": 10
    },
    "Vehicles/Weapons/TEMP_TOW_Rocket": {
        "WeaponName": "Temp Rocket",
        "Automatic": false,
        "FireSoundBasePitch": 1,
        "UsesAmmoPool": true,
        "ClipSize": 4,
        "StockpileSize": 1,
        "BulletSpeed": 350,
        "EnvPiercing": 1,
        "ArmorPiercing": 0.7,
        "BulletDamage": 150,
        "ExplosionRadius": 12,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 1.5,
        "FlakMult": 2,
        "FireRate": 0.33,
        "ProjectileType": "RocketProjectile",
        "ProjectileLifeTime": 15,
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.25,
        "ReloadTime": 2,
        "AmmoRegen": 6.5
    },
    "Vehicles/Weapons/Thanatos_AP": {
        "WeaponName": "Thanatos 80mm AP",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 6,
        "BulletSpeed": 3000,
        "BulletDamage": 240,
        "ArmorPiercing": 0.8,
        "FlakMult": 1,
        "ExplosionRadius": 8,
        "ExplosionIntensity": 1,
        "TerrainIntensity": 2,
        "ExplosionInvisible": true,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.075,
        "ReloadTime": 2,
        "AmmoRegen": 8
    },
    "Vehicles/Weapons/Thanatos_HE": {
        "WeaponName": "Thanatos 80mm HE",
        "BaseCost": 25,
        "Automatic": true,
        "FireSoundBasePitch": 1.5,
        "ClipSize": 1,
        "StockpileSize": 6,
        "BulletSpeed": 1900,
        "BulletDamage": 150,
        "ArmorPiercing": 0.567,
        "FlakMult": 1,
        "ExplosionRadius": 19.6,
        "ExplosionIntensity": 0.75,
        "TerrainIntensity": 1,
        "FireRate": 1,
        "ProjectileType": "VeryLargeProjectile",
        "ProjectileHitModule": "Explosive",
        "BulletSpread": 0.125,
        "ReloadTime": 2,
        "AmmoRegen": 8
    },
    "Infantry/Components/AK-AS/Ammo_Buckshot": {
        "Name": "Buckshot 12G",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/AK-AS/Ammo_Flechette": {
        "Name": "Flechette 12G",
        "Overrides": {
            "ArmorPiercing": 0.075
        },
        "Modifiers": {
            "ProjectilesPerRound": -0.25,
            "BulletDamage": -0.1,
            "MinDamage": -0.1,
            "MinRange": 0.25,
            "MaxRange": 0.25,
            "EnvPiercing": 0.5
        }
    },
    "Infantry/Components/AK-AS/Ammo_Slugs": {
        "Name": "Slugs 12G",
        "Overrides": {
            "EnvPiercing": 1,
            "ProjectilesPerRound": 1,
            "MinRange": 25,
            "MaxRange": 450,
            "MinDamage": 42.5,
            "ProjectileSpread": 0,
            "BulletSpread": 2,
            "AimBulletSpread": 0.1
        },
        "Modifiers": {
            "BulletSpeed": 0.75,
            "BulletDamage": -0.25
        }
    },
    "Infantry/Components/AK-AS/Shotgun_Choke": {
        "Name": "Shotgun Choke",
        "Overrides": {},
        "Modifiers": {
            "MinDamage": -0.1,
            "ProjectileSpread": -0.45,
            "AimBulletSpread": -0.1,
            "BulletSpeed": -0.2
        }
    },
    "Infantry/Components/AK-AS/Shotgun_Suppressor": {
        "Name": "Shotgun Suppressor",
        "Overrides": {
            "Silent": true,
            "NoFlash": true
        },
        "Modifiers": {
            "BulletDamage": -0.1,
            "BulletSpread": -0.1,
            "AimBulletSpread": -0.1,
            "BulletSpeed": -0.2
        }
    },
    "Infantry/Components/AK-AS/Standard_Barrel": {
        "Name": "Standard Barrel",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/AK_Type_E/Canister_40mm": {
        "Name": "40mm Canister",
        "Overrides": {
            "ProjectilesPerRound": 24,
            "ProjectileSpread": 2.75,
            "ProjectileHitModule": "Bullet",
            "BulletSpeed": 1560,
            "BulletDamage": 320,
            "MinDamage": 100,
            "MinRange": 30,
            "MaxRange": 150,
            "ArmorPiercing": 0.02,
            "ProjectileLifeTime": 0.75
        },
        "Modifiers": {}
    },
    "Infantry/Components/AK_Type_E/FLAK_40mm": {
        "Name": "40mm FLAK",
        "Overrides": {
            "ProjectilesPerRound": 36,
            "ProjectileSpread": 2,
            "ProjectileHitModule": "Bullet",
            "BulletSpeed": 2200,
            "BulletDamage": 200,
            "MinDamage": 50,
            "MinRange": 100,
            "MaxRange": 400,
            "ArmorPiercing": 0.02,
            "FlakMult": 4,
            "ProjectileLifeTime": 0.35
        },
        "Modifiers": {}
    },
    "Infantry/Components/AK_Type_E/HE_40mm": {
        "Name": "40mm HE",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/AK_Type_E/LVG_40mm": {
        "Name": "40mm LVG",
        "Overrides": {
            "BulletSpeed": 100,
            "BulletDamage": 120,
            "ArmorPiercing": 0,
            "ExplosionRadius": 12,
            "ExplosionIntensity": 0.75,
            "TerrainIntensity": 0.25,
            "ProjectileLifeTime": 3,
            "ProjectileType": "PhysicalProjectile",
            "ProjectileHitModule": "TimedExplosive",
            "WorldModel": "Grenade_40mm"
        },
        "Modifiers": {}
    },
    "Infantry/Components/Mortar/Stock_Shells": {
        "Name": "Stock Shells",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/Rifle/Bipod": {
        "Name": "Bipod",
        "Overrides": {
            "CanDeploy": true
        },
        "Modifiers": {
            "MovementAimPenaltyMult": 0.25,
            "VerticalRecoil": 0.1,
            "RecoilLeft": 0.05,
            "RecoilRight": 0.05
        }
    },
    "Infantry/Components/Rifle/Heavy_Barrel": {
        "Name": "Heavy Barrel",
        "Overrides": {},
        "Modifiers": {
            "BulletSpeed": 0.2,
            "BulletSpread": 0.5,
            "AimBulletSpread": -0.25,
            "VerticalRecoil": 0.125,
            "RecoilLeft": -0.1,
            "RecoilRight": -0.1
        }
    },
    "Infantry/Components/Rifle/Ironsights": {
        "Name": "Ironsights",
        "Overrides": {
            "AimZoom": 1.5
        },
        "Modifiers": {}
    },
    "Infantry/Components/Rifle/No_Grip": {
        "Name": "No Foregrip",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/Rifle/Scope_12x": {
        "Name": "12x Scope",
        "Overrides": {
            "AimZoom": 12,
            "AimOverride": true,
            "AimOffset": {
                "x": 0.011,
                "y": 0.117,
                "z": 1.25
            },
            "ReticleDetail": "rbxassetid://7188939083"
        },
        "Modifiers": {
            "AimTimeMult": 1,
            "AimBulletSpread": -0.1,
            "BulletSpread": 2.5
        }
    },
    "Infantry/Components/Rifle/Scope_4x": {
        "Name": "4x ACOG",
        "Overrides": {
            "AimZoom": 4,
            "AimOverride": true,
            "AimOffset": {
                "x": 0.004,
                "y": 0.048,
                "z": 0.85
            },
            "ReticleCenter": "rbxassetid://2833743852",
            "ReticleDetail": "rbxassetid://7188939160"
        },
        "Modifiers": {
            "AimTimeMult": 0.05,
            "AimBulletSpread": -0.05,
            "BulletSpread": 0.5
        }
    },
    "Infantry/Components/Rifle/Sights_Reflex": {
        "Name": "Reflex Sight",
        "Overrides": {
            "AimZoom": 1.5,
            "AimOverride": true,
            "AimOffset": {
                "x": 0,
                "y": 0.04,
                "z": 0.5
            },
            "ReticleCenter": "rbxassetid://2833588656"
        },
        "Modifiers": {
            "BulletSpread": -0.2,
            "AimTimeMult": -0.25
        }
    },
    "Infantry/Components/Rifle/Standard_Barrel": {
        "Name": "Standard Barrel",
        "Overrides": {},
        "Modifiers": {}
    },
    "Infantry/Components/Rifle/Suppressor": {
        "Name": "Suppressor",
        "Overrides": {
            "Silent": true,
            "NoFlash": true
        },
        "Modifiers": {
            "BulletDamage": -0.2,
            "BulletSpread": -0.2,
            "AimBulletSpread": -0.2,
            "BulletSpeed": -0.35
        }
    },
    "Infantry/Components/Rifle/Vertical_Grip": {
        "Name": "Vertical Grip",
        "Overrides": {},
        "Modifiers": {
            "MovementAimPenaltyMult": -0.5,
            "BulletSpread": -0.25,
            "AimBulletSpread": 0.25,
            "RecoilLeft": -0.15,
            "RecoilRight": -0.15
        }
    },
    "Infantry/Components/RPG-7/RPG_Cluster": {
        "Name": "Cluster Rockets",
        "Overrides": {
            "ProjectilesPerRound": 5,
            "BulletSpread": 1,
            "AimBulletSpread": 0.5,
            "ProjectileSpread": 4,
            "ExplosionIntensity": 0.35,
            "StartingAmmo": 3,
            "FlakMult": 2
        },
        "Modifiers": {
            "BulletDamage": -0.6,
            "ArmorPiercing": -0.25,
            "BulletSpeed": -0.5
        }
    },
    "Infantry/Components/RPG-7/RPG_Flak": {
        "Name": "Flak Rockets",
        "Overrides": {
            "ExplosionIntensity": 0.25,
            "StartingAmmo": 4,
            "FlakMult": 4
        },
        "Modifiers": {
            "BulletDamage": -0.65,
            "BulletSpeed": 1.00,
            "ExplosionRadius": -0.5
        }
    },
    "Infantry/Components/RPG-7/RPG_HV": {
        "Name": "High Velocity Rockets",
        "Overrides": {
            "ExplosionIntensity": 0.35,
            "StartingAmmo": 3,
            "FlakMult": 2
        },
        "Modifiers": {
            "EnvPiercing": 0.25,
            "ArmorPiercing": 0.1,
            "BulletSpeed": 0.15,
            "ExplosionRadius": -0.3
        }
    },
    "Infantry/Components/RPG-7/RPG_Stock": {
        "Name": "Stock Rockets",
        "Overrides": {},
        "Modifiers": {}
    },
    "Vehicles/Components/Vehicle_Optics/Optics_3x": {
        "Name": "3x Optics",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Vehicle_Optics/Optics_6x": {
        "Name": "6x Optics",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50
    },
    "Vehicles/Components/Aircraft_Armor/Aerodynamic_Frame": {
        "Name": "Aerodynamic Frame",
        "Description": "Lighter materials and less armoring, allowing for greater aerial maneuverability",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "HardMaxSpeed": 0.2,
                "MaxLateralSpeed": 0.10,
                "PitchSpeed": 0.1,
                "YawSpeed": 0.1,
                "RollSpeed": 0.1,
                "Drag": -0.05,
                "DragLateral": -0.075,
                "DragUp": -0.05,
                "DragDown": -0.05
            }
        }
    },
    "Vehicles/Components/Aircraft_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock air vehicle armor, offering a balance between protection and maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": [],
            "SettingMultipliers": {
                "Drag": 0
            }
        }
    },
    "Vehicles/Components/Aircraft_Armor/Reinforced_Hull": {
        "Name": "Reinforced Hull",
        "Description": "Reinforcing vulnerable instruments on the vehicle, offering greater protection, at the cost of maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.125,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "SoftMaxSpeed": -0.1,
                "MaxLateralSpeed": -0.1,
                "PitchSpeed": -0.15,
                "YawSpeed": -0.15,
                "RollSpeed": -0.15,
                "Drag": 0.05,
                "DragLateral": 0.075,
                "DragUp": 0.05,
                "DragDown": 0.05
            }
        }
    },
    "Vehicles/Components/Aircraft_Gunner_Turret/Machine_Gun_Turret": {
        "Name": "Machine Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 50,
            "MinPitch": -65,
            "LimitYaw": true,
            "MaxYaw": 100,
            "MinYaw": -110,
            "MaxYawOmega": 9.42477796076938,
            "MaxPitchOmega": 4.71238898038469
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Gunner_Turret/Minigun_Turret": {
        "Name": "Minigun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 150,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 50,
            "MinPitch": -65,
            "LimitYaw": true,
            "MaxYaw": 100,
            "MinYaw": -110,
            "MaxYawOmega": 9.42477796076938,
            "MaxPitchOmega": 4.71238898038469
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Minigun",
                "Default": "Minigun_8mm",
                "Modifiers": {
                    "MultiBarrel": false
                },
                "ModifierMult": {
                    "OverheatGain": 0.5
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Med/Aircraft_Rockets": {
        "Name": "Mounted Rockets",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Main_Rockets_Air",
                "Default": "Rocket_70mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Med/Machine_Guns": {
        "Name": "Heavy Machine Guns",
        "NamePrefix": "Gunner",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 250,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_HMG",
                "Modifiers": {
                    "MultiBarrel": true,
                    "ClipSize": 300,
                    "StockpileSize": 50,
                    "BulletSpeed": 2000,
                    "FlakMult": 1
                },
                "ModifierMult": {
                    "OverheatGain": 2.5,
                    "FireRate": 0.8,
                    "BulletSpread": 1.1
                },
                "Default": "HMG_12mm",
                "Priority": 0
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Light_Cannon": {
        "Name": "Light Cannon",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 500,
        "NamePrefix": "Light Support",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Light_Cannon_Air",
                "Default": "Cannon_15mm",
                "Modifiers": {
                    "MultiBarrel": true
                },
                "ModifierMult": {
                    "ClipSize": 0.75,
                    "StockpileSize": 0.5,
                    "FiringRate": 0.8,
                    "ExplosionRadius": 0.75,
                    "ExplosionIntensity": 0.5,
                    "BulletSpeed": 0.65
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Machine_Guns": {
        "Name": "Mounted Machine Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "NamePrefix": "Scout",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            },
            {
                "Slot": "Weapons",
                "Type": "Turret_Mounted_Med",
                "Default": "Mounted_Rocket_Pods"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Mounted_Small/Aircraft_Miniguns": {
        "Name": "Mounted Miniguns",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 250,
        "NamePrefix": "Light",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Minigun",
                "Default": "Minigun_8mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Med/Air_30mm_Turret": {
        "Name": "Berserker Minigun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "NamePrefix": "AV",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "LimitYaw": true,
            "MaxYaw": 0,
            "MinYaw": 0,
            "MaxYawOmega": 2.5132741228718345,
            "MaxPitchOmega": 1.5707963267948966
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Med_Cannon",
                "Default": "Berserker_30mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Med/Air_40mm_Turret": {
        "Name": "Polaris Grenade Launcher",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 75,
        "NamePrefix": "Light Support",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 5,
            "MinPitch": -15,
            "LimitYaw": true,
            "MaxYaw": 10,
            "MinYaw": -10,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Polaris",
                "Default": "Polaris_HEC_40mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 13,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Med/Air_50mm_Turret": {
        "Name": "Apex Chaingun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 50,
        "NamePrefix": "Light Support",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 5,
            "MinPitch": -85,
            "LimitYaw": false,
            "MaxYaw": 180,
            "MinYaw": -180,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_Chaingun",
                "Default": "Apex_50mm_HE"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 12,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Med/Air_80mm_Turret": {
        "Name": "Thanatos Cannon",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 750,
        "NamePrefix": "Support",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "LimitYaw": true,
            "MaxYaw": 0,
            "MinYaw": 0,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Thanatos",
                "Default": "Thanatos_HE"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 15,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Aircraft_Turret_Small/Air_15mm_Turret": {
        "Name": "Light Cannon Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 25,
            "MinPitch": -75,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Light_Cannon_Air",
                "Default": "Cannon_25mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/APC_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock armor for a light armored vehicle.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/APC_Armor/Lighter_Alloy": {
        "Name": "Light Alloy Armor",
        "Description": "Lighter alloy armor that trades durability and protection for a lower weight and greater speeds.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.05
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.1,
                "MaxSpeed": 0.15,
                "ReverseSpeed": 0.075
            }
        }
    },
    "Vehicles/Components/APC_Armor/Slat_Armor": {
        "Name": "Slat Armor",
        "Description": "Armor consisting of a metal grid around the vehicle that offers significant protection against large protectiles, at the cost of agility.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "NamePrefix": "Armored",
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.1,
                "Armor": 0.05
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.1,
                "ReverseSpeed": -0.05
            }
        }
    },
    "Vehicles/Components/Attack_Heli_Armor/Aerodynamic_Frame": {
        "Name": "Aerodynamic Frame",
        "Description": "Lighter materials and less armoring, allowing for greater aerial maneuverability",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 200,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "HardMaxSpeed": 0.2,
                "MaxLateralSpeed": 0.10,
                "PitchSpeed": 0.1,
                "YawSpeed": 0.1,
                "RollSpeed": 0.1,
                "Drag": -0.05,
                "DragLateral": -0.075,
                "DragUp": -0.05,
                "DragDown": -0.05
            }
        }
    },
    "Vehicles/Components/Attack_Heli_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock air vehicle armor, offering a balance between protection and maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": [],
            "SettingMultipliers": {
                "Drag": 0
            }
        }
    },
    "Vehicles/Components/Attack_Heli_Armor/Reinforced_Hull": {
        "Name": "Reinforced Hull",
        "Description": "Reinforcing vulnerable instruments on the vehicle, offering greater protection, at the cost of maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 350,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.125,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "SoftMaxSpeed": -0.1,
                "MaxLateralSpeed": -0.1,
                "PitchSpeed": -0.15,
                "YawSpeed": -0.15,
                "RollSpeed": -0.15,
                "Drag": 0.05,
                "DragLateral": 0.075,
                "DragUp": 0.05,
                "DragDown": 0.05
            }
        }
    },
    "Vehicles/Components/Attack_Jet_Mounted/Empty": {
        "Name": "None",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Attack_Jet_Mounted/Jet_Bombs": {
        "Name": "Mounted Bombs",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 200,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Bombs",
                "Modifiers": {
                    "MultiBarrel": true
                },
                "ModifierMult": {
                    "ClipSize": 2,
                    "StockpileSize": 2
                },
                "Default": "SDB_HE"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Attack_Jet_Mounted/Jet_Rocket_Pods": {
        "Name": "Mounted Rockets",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Main_Rockets_Air",
                "Default": "Rocket_70mm",
                "ModifierMult": {
                    "ClipSize": 3,
                    "StockpileSize": 3,
                    "FireRate": 1.5
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Field_Gun_Turret/Field_Gun_Turret": {
        "Name": "Mounted Field Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 30,
            "MinPitch": -20,
            "MaxYawOmega": 1.3962634015954636,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Artillery_Cannon",
                "Default": "HE_Cannon_120mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 135,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Gunner_Turret/Empty": {
        "Name": "No Gunner",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Ground_Gunner_Turret/Gunner_MG": {
        "Name": "Machine Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 50,
        "NamePrefix": "MG",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true,
            "MaxZoom": 12,
            "MinZoom": 6
        },
        "GunControls": {
            "MaxPitch": 30,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            }
        ],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Gunner_Turret/Manned_Grenade_Launcher": {
        "Name": "Grenade Launcher",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 125,
        "NamePrefix": "GL",
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true,
            "MaxZoom": 12,
            "MinZoom": 6
        },
        "GunControls": {
            "MaxPitch": 30,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Grenade_40mm",
                "Default": "HE_40mm",
                "Modifiers": {
                    "UsesVelocityInheritance": true
                },
                "ModifierMult": {
                    "ClipSize": 0.25,
                    "StockpileSize": 0.5,
                    "FireRate": 0.75,
                    "AmmoRegen": 0.65
                }
            }
        ],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Gunner_Turret/Manned_TOW_Launcher": {
        "Name": "TOW Launcher",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 300,
        "NamePrefix": "TOW",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true,
            "MaxZoom": 12,
            "MinZoom": 6
        },
        "GunControls": {
            "MaxPitch": 25,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_TOW_Missiles",
                "Default": "TEMP_TOW_Rocket"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Large/AA_Turret": {
        "Name": "Anti-Air Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 200,
        "NamePrefix": "AA",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 75,
            "MinPitch": -5,
            "MaxYawOmega": 5.026548245743669,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_AA",
                "Default": "AA_25mm"
            },
            {
                "Slot": "Secondary",
                "Type": "Weapon_Heavy_AA_Rockets",
                "Default": "HE_Self_Defense_Rocket"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 120,
            "HullDamageMult": 0.9,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Large/Main_Cannon": {
        "Name": "Battle Tank Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "NamePrefix": "Battle",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 25,
            "MinPitch": -15,
            "MaxYawOmega": 1.3962634015954636,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_Cannon",
                "Default": "Cannon_120mm"
            },
            {
                "Slot": "Secondary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            },
            {
                "Slot": "Gunner Mount",
                "Type": "Ground_Gunner_Turret",
                "Default": "Gunner_MG",
                "Section": "Gunner",
                "Owner": "Gunner",
                "IgnoreName": true
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 135,
            "HullDamageMult": 0.9,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Med/APC_AA_Turret": {
        "Name": "Anti-Air Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 150,
        "NamePrefix": "AA",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 70,
            "MinPitch": -1.25,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_AA",
                "Default": "AA_25mm",
                "Modifiers": {
                    "MultiBarrel": false
                },
                "ModifierMult": {
                    "ClipSize": 0.75,
                    "StockpileSize": 0.75,
                    "FiringRate": 0.75
                }
            },
            {
                "Slot": "Mounted Weapons",
                "Type": "Turret_Mounted_Med",
                "Default": "Mounted_Rocket_Pods",
                "Section": "Weapons",
                "Owner": "Driver",
                "Priority": 2,
                "IgnoreName": true
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 17.5,
            "Health": 110,
            "HullDamageMult": 0.85,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Med/APC_Cannon": {
        "Name": "IFV Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 50,
        "NamePrefix": "IFV",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 30,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Light_Cannon",
                "Default": "Cannon_25mm"
            },
            {
                "Slot": "Secondary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 17.5,
            "Health": 120,
            "HullDamageMult": 0.85,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Med/APC_Grenade_Turret": {
        "Name": "Grenade Launcher Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "NameSuffix": "GL",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 60,
            "MinPitch": -20,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Grenade_40mm",
                "Default": "HE_40mm",
                "Modifiers": {}
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 17.5,
            "Health": 125,
            "HullDamageMult": 0.85,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Med/APC_Heavy_Cannon": {
        "Name": "Destroyer Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "NamePrefix": "Destroyer",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 15,
            "MinPitch": -7.5,
            "MaxYawOmega": 1.3962634015954636,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Cannon_80mm",
                "Default": "Cannon_80mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 17.5,
            "Health": 120,
            "HullDamageMult": 0.9,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Small/AA_Mounted_Turret": {
        "Name": "Anti-Air Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "NamePrefix": "AA",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 75,
            "MinPitch": 0,
            "MaxYawOmega": 5.026548245743669,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Light_AA",
                "Default": "AA_18mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 100,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Small/Grenade_Launcher_Turret": {
        "Name": "Grenade Launcher Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 120,
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 70,
            "MinPitch": -25,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Grenade_40mm",
                "Default": "HE_40mm",
                "Modifiers": {
                    "UsesVelocityInheritance": true
                },
                "ModifierMult": {
                    "ClipSize": 0.25,
                    "StockpileSize": 0.5,
                    "FireRate": 0.75,
                    "AmmoRegen": 0.65
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Ground_Turret_Small/LMG_Turret": {
        "Name": "Machine Gun Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 60,
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 70,
            "MinPitch": -25,
            "MaxYawOmega": 6.283185307179586,
            "MaxPitchOmega": 3.141592653589793
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Machine_Gun",
                "Default": "LMG_65mm"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Jet_Engines/Default_Engines": {
        "Name": "Stock Engines",
        "Description": "Standard Jet Turbines that give decent thrust with moderate protection",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Jet_Engines/Performance_Engines": {
        "Name": "Performance Engines",
        "Description": "Higher powered jet engines that are capable of higher speed, and higher altitudes, but less protection.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "BaseThrottle": 0.1,
                "HardMaxSpeed": 0.1,
                "SoftMaxSpeed": 0.1,
                "HardMaxAltitude": 0.2,
                "SoftMaxAlitude": 0.2
            }
        }
    },
    "Vehicles/Components/Jet_Engines/Reinforced_Engines": {
        "Name": "Reinforced Engines",
        "Description": "Reinforced casing that keeps the turbines safer, but lowers their performance.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 75,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "BaseThrottle": -0.1,
                "HardMaxSpeed": -0.1,
                "SoftMaxSpeed": -0.1
            }
        }
    },
    "Vehicles/Components/Light_Heli_Armor/Aerodynamic_Frame": {
        "Name": "Aerodynamic Frame",
        "Description": "Lighter materials and less armoring, allowing for greater aerial maneuverability",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "HardMaxSpeed": 0.2,
                "MaxLateralSpeed": 0.10,
                "PitchSpeed": 0.1,
                "YawSpeed": 0.1,
                "RollSpeed": 0.1,
                "Drag": -0.05,
                "DragLateral": -0.075,
                "DragUp": -0.05,
                "DragDown": -0.05
            }
        }
    },
    "Vehicles/Components/Light_Heli_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock air vehicle armor, offering a balance between protection and maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": [],
            "SettingMultipliers": {
                "Drag": 0
            }
        }
    },
    "Vehicles/Components/Light_Heli_Armor/Reinforced_Hull": {
        "Name": "Reinforced Hull",
        "Description": "Reinforcing vulnerable instruments on the vehicle, offering greater protection, at the cost of maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.125,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "SoftMaxSpeed": -0.1,
                "MaxLateralSpeed": -0.1,
                "PitchSpeed": -0.15,
                "YawSpeed": -0.15,
                "RollSpeed": -0.15,
                "Drag": 0.05,
                "DragLateral": 0.075,
                "DragUp": 0.05,
                "DragDown": 0.05
            }
        }
    },
    "Vehicles/Components/Light_Tank_Hull/APC_Hull": {
        "Name": "APC Model",
        "Description": "A hull style designed for transportation. Contains additional seating for personnel.",
        "AttachmentType": "DefaultComponent",
        "TransportVehicle": true,
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": {
                "Armor": 0
            },
            "SettingMultipliers": []
        }
    },
    "Vehicles/Components/Light_Tank_Hull/IFV_Hull": {
        "Name": "IFV Model",
        "Description": "A hull style designed for engaging targets. Has additional utilities for ammo supply and protection, at the cost of transport capabilities.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 250,
        "SectionData": {
            "SectionMultipliers": {
                "Armor": 0.1
            },
            "SettingMultipliers": []
        }
    },
    "Vehicles/Components/LTV_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Standard stock armor plating for light transports.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/LTV_Armor/Extra_Plating": {
        "Name": "Extra Plating",
        "NamePrefix": "MRAP",
        "AttachmentType": "DefaultComponent",
        "Description": "MRAP style armor protects the occupants, at the expense of speed.",
        "BaseCost": 150,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.4,
                "Armor": 0.4
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.1,
                "ReverseSpeed": -0.075
            }
        }
    },
    "Vehicles/Components/LTV_Armor/Lighter_Alloy": {
        "Name": "Lighter Alloy",
        "AttachmentType": "DefaultComponent",
        "Description": "Lighter alloys and Chassis mods that reduce weight to improve speed, at the cost of protection and armor durability.",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.1,
                "MaxSpeed": 0.1,
                "ReverseSpeed": 0.075
            }
        }
    },
    "Vehicles/Components/LTV_Engine/Default_Engine": {
        "Name": "Stock Engine",
        "Description": "Standard stock engine for light transports.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/LTV_Engine/Performance_Engine": {
        "Name": "Performance Engine",
        "Description": "Powerful engine that delivers higher performance than standard engines. Its intricate parts make it more susceptible to damage.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.15,
                "HullDamageMult": 0.1
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.2,
                "MaxSpeed": 0.2,
                "ReverseSpeed": 0.1
            }
        }
    },
    "Vehicles/Components/LTV_Engine/Reinforced_Engine": {
        "Name": "Reinforced Engine",
        "Description": "An engine that's been encased in a protective slot. It runs at a reduced setting to avoid overheating.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.1,
                "Armor": 0.2,
                "HullDamageMult": -0.2
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.1,
                "ReverseSpeed": 0.05
            }
        }
    },
    "Vehicles/Components/LTV_Hitched/Empty": {
        "Name": "None",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/LTV_Hitched/Towed_Field_Gun": {
        "Name": "Towed Field Gun",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 600
    },
    "Vehicles/Components/LTV_Trunk/LTV_Driver_Turret": {
        "Name": "Driver Turret",
        "AttachmentType": "BridgeComponent",
        "BaseCost": 500,
        "Attachments": [
            {
                "Slot": "Turret",
                "Type": "Ground_Turret_Small",
                "Default": "AA_Mounted_Turret",
                "Section": "Turret",
                "Owner": "Driver"
            }
        ]
    },
    "Vehicles/Components/LTV_Trunk/Seats_Gunner": {
        "Name": "Passenger Seats",
        "AttachmentType": "BridgeComponent",
        "TransportVehicle": true,
        "BaseCost": 0,
        "Attachments": [
            {
                "Slot": "Gunner Mount",
                "Type": "Ground_Gunner_Turret",
                "Default": "Empty",
                "Section": "Turret",
                "Owner": "Gunner"
            }
        ]
    },
    "Vehicles/Components/LTV_Wheels/All_Terrain_Wheels": {
        "Name": "All-Terrain Tires",
        "Description": "Tires specifically catered for off-road environments. More control, but heavier overall.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.1,
                "Armor": 0.15
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": -0.1,
                "MaxSpeed": -0.05,
                "ReverseSpeed": 0.025,
                "MaxSteer": 0.15,
                "WheelFriction": 0.25
            }
        }
    },
    "Vehicles/Components/LTV_Wheels/Default_Wheels": {
        "Name": "Stock Wheels",
        "AttachmentType": "DefaultComponent",
        "Description": "Stock tires for Light Transports.",
        "BaseCost": 0
    },
    "Vehicles/Components/LTV_Wheels/Light_Wheels": {
        "Name": "Light Tires",
        "Description": "Tires that have been optimized for speed, but have worse handling than stock tires.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.05,
                "Armor": -0.05
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.1,
                "MaxSpeed": 0.1,
                "ReverseSpeed": 0.05,
                "MaxSteer": -0.15,
                "WheelFriction": -0.15
            }
        }
    },
    "Vehicles/Components/Plane_Armor/Aerodynamic_Frame": {
        "Name": "Aerodynamic Frame",
        "Description": "Lighter materials and less armoring, allowing for greater aerial maneuverability",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "NamePrefix": "Light",
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "HardMaxSpeed": 0.2,
                "MaxLateralSpeed": 0.10,
                "PitchSpeed": 0.1,
                "YawSpeed": 0.1,
                "RollSpeed": 0.1,
                "Drag": -0.05,
                "DragLateral": -0.075,
                "DragUp": -0.05,
                "DragDown": -0.05
            }
        }
    },
    "Vehicles/Components/Plane_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock plane Fuselage, offering a balance between protection and maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": [],
            "SettingMultipliers": {
                "Drag": 0
            }
        }
    },
    "Vehicles/Components/Plane_Armor/Reinforced_Hull": {
        "Name": "Reinforced Hull",
        "Description": "Reinforces vulnerable instruments on the plane, offering greater protection, at the cost of maneuverability.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "NamePrefix": "Heavy",
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.125,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "SoftMaxSpeed": -0.1,
                "MaxLateralSpeed": -0.1,
                "PitchSpeed": -0.15,
                "YawSpeed": -0.15,
                "RollSpeed": -0.15,
                "Drag": 0.05,
                "DragLateral": 0.075,
                "DragUp": 0.05,
                "DragDown": 0.05
            }
        }
    },
    "Vehicles/Components/Plane_Engine/Default_Engine": {
        "Name": "Stock Engine",
        "Description": "Standard propeller engine that gives decent thrust with moderate protection.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Plane_Engine/Performance_Engine": {
        "Name": "Performance Engines",
        "Description": "Higher powered propeller engine that is capable of higher speeds, and higher altitudes, but has less protection.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 100,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "BaseThrottle": 0.1,
                "HardMaxSpeed": 0.1,
                "SoftMaxSpeed": 0.1,
                "HardMaxAltitude": 0.2,
                "SoftMaxAlitude": 0.2
            }
        }
    },
    "Vehicles/Components/Plane_Engine/Reinforced_Engine": {
        "Name": "Reinforced Engines",
        "Description": "Reinforced casing that keeps the Engine safer, but lowers its performance.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 75,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.1
            },
            "SettingMultipliers": {
                "BaseThrottle": -0.1,
                "HardMaxSpeed": -0.1,
                "SoftMaxSpeed": -0.1
            }
        }
    },
    "Vehicles/Components/Plane_Hardpoints/Heavy_Machine_Guns": {
        "Name": "Heavy Machine Guns",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 75,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_HMG",
                "Modifiers": {
                    "MultiBarrel": true
                },
                "Default": "HMG_12mm",
                "Priority": 0
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Plane_Hardpoints/Med_Machine_Guns": {
        "Name": "Med. Machine Guns",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 0,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_MMG",
                "Modifiers": {
                    "MultiBarrel": true
                },
                "Default": "MMG_9mm",
                "Priority": 0
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Plane_Under_Mount/Empty": {
        "Name": "None",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Plane_Under_Mount/Plane_Bombs": {
        "Name": "Mounted Bombs",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 200,
        "NameSuffix": "Bomber",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Bombs",
                "Default": "SDB_HE"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Plane_Under_Mount/Plane_Rocket_Pods": {
        "Name": "Mounted Rockets",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 125,
        "NamePrefix": "Attack",
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Main_Rockets_Air",
                "Default": "Rocket_70mm",
                "ModifierMult": {
                    "ClipSize": 2,
                    "StockpileSize": 2
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 10,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Tank_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Stock armor for a Battle Tank. Provides protection against small arms fire, and moderate protection against large projectiles.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Armor/Lighter_Alloy": {
        "Name": "Minimal Armor",
        "Description": "Armor reduced to its very essentials, resulting in higher top speeds, but less overall protection",
        "NamePrefix": "Light",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 75,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.15,
                "Armor": -0.05
            },
            "SettingMultipliers": {
                "MaxSpeed": 0.2,
                "ReverseSpeed": 0.1
            }
        }
    },
    "Vehicles/Components/Tank_Armor/Side_Plating": {
        "Name": "Side Plating",
        "Description": "Heavy reinforced siding that increases the durability and protectiveness of the hull, with the drawback of slower speeds.",
        "NamePrefix": "Heavy",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 75,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.05
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.2,
                "ReverseSpeed": -0.1
            }
        }
    },
    "Vehicles/Components/Tank_Engine/Default_Engine": {
        "Name": "Empty",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Engine/Performance_Engine": {
        "Name": "Empty",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Engine/Reinforced_Engine": {
        "Name": "Empty",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Treads/Chained_Treads": {
        "Name": "Chained Treads",
        "Description": "Treads that come fitted with chains to allow for better grip on loose terrain, better handling, but reduced speeds.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.15
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.05,
                "ReverseSpeed": 0.025,
                "MaxSteer": 0.15,
                "WheelFriction": 0.25
            }
        }
    },
    "Vehicles/Components/Tank_Treads/Default_Treads": {
        "Name": "Stock Treads",
        "Description": "Standard, stock tank treads.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Tank_Treads/Light_Treads": {
        "Name": "Performance Treads",
        "Description": "Treads that can operate at higher rates than standard, less durable, but considerably faster.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 50,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1
            },
            "SettingMultipliers": {
                "MaxSpeed": 0.15,
                "ReverseSpeed": 0.075,
                "MaxSteer": -0.1,
                "WheelFriction": -0.15
            }
        }
    },
    "Vehicles/Components/Transport_Heli_Hull/Troop_Transport": {
        "Name": "Troop Transport Model",
        "Description": "A hull style designed for transportation. Contains Gunner mounts and passenger seating.",
        "AttachmentType": "BridgeComponent",
        "TransportVehicle": true,
        "VehicleGroup": "AirHelicopterTransport",
        "BaseCost": 0,
        "Attachments": [
            {
                "Slot": "Left Gunner",
                "Type": "Aircraft_Gunner_Turret",
                "Default": "Machine_Gun_Turret",
                "Owner": "LeftGunner",
                "Section": "Left Gunner",
                "Mirrored": true
            },
            {
                "Slot": "Right Gunner",
                "Type": "Aircraft_Gunner_Turret",
                "Default": "Machine_Gun_Turret",
                "Owner": "RightGunner",
                "Section": "Right Gunner"
            }
        ]
    },
    "Vehicles/Components/Truck_Armor/Default_Armor": {
        "Name": "Stock Armor",
        "Description": "Standard stock armor plating for military trucks.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Truck_Armor/Extra_Plating": {
        "Name": "Extra Plating",
        "NamePrefix": "Heavy",
        "AttachmentType": "DefaultComponent",
        "Description": "Heavier materials and extra plating around the windows to protect occupants, at the expense of speed.",
        "BaseCost": 50,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.05
            },
            "SettingMultipliers": {
                "MaxSpeed": -0.15,
                "ReverseSpeed": -0.075
            }
        }
    },
    "Vehicles/Components/Truck_Armor/Lighter_Alloy": {
        "Name": "Lighter Alloy",
        "AttachmentType": "DefaultComponent",
        "Description": "Lighter alloys that increase the vehicle's agility, at the expense of armor protection.",
        "BaseCost": 25,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.05
            },
            "SettingMultipliers": {
                "MaxAllowedSpeed": 0.1,
                "MaxSpeed": 0.15,
                "ReverseSpeed": 0.075
            }
        }
    },
    "Vehicles/Components/Truck_Bed/Large_Turret_Mount": {
        "Name": "Large Turret Bed",
        "AttachmentType": "BridgeComponent",
        "BaseCost": 400,
        "VehicleGroup": "LandArtillery",
        "Attachments": [
            {
                "Slot": "Truck_Mounted",
                "Type": "Truck_Mounted",
                "Default": "Artillery_Rocket_Launcher",
                "Owner": "Driver",
                "Section": "Turret",
                "Priority": 0
            }
        ]
    },
    "Vehicles/Components/Truck_Bed/Troop_Transport": {
        "Name": "Troop Transport",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "NamePrefix": "Transport",
        "TransportVehicle": true,
        "VehicleGroup": "LandLightArmor"
    },
    "Vehicles/Components/Truck_Mounted/Artillery_Rocket_Launcher": {
        "Name": "Rocket Artillery Turret",
        "AttachmentType": "BaseVehicleWeapon",
        "Deployable": true,
        "BaseCost": 350,
        "NamePrefix": "Artillery",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 75,
            "MinPitch": -5,
            "MaxYawOmega": 1.0471975511965976,
            "MaxPitchOmega": 1.5707963267948966
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Rockets",
                "Default": "HE_Rocket_70mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 11.5,
            "Health": 100,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Truck_Mounted/Field_Gun_Mounted_Turret": {
        "Name": "Mounted Field Gun",
        "AttachmentType": "BaseVehicleWeapon",
        "Deployable": true,
        "BaseCost": 450,
        "NamePrefix": "Gun",
        "UsesTargettingHUD": true,
        "Overrides": {
            "OverrideRootPart": true,
            "CameraLockedToRoot": true
        },
        "GunControls": {
            "MaxPitch": 15,
            "MinPitch": -12,
            "MaxYawOmega": 1.0471975511965976,
            "MaxPitchOmega": 1.5707963267948966
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Artillery_Cannon",
                "Default": "HE_Cannon_120mm"
            },
            {
                "Slot": "Optics",
                "Type": "Vehicle_Optics",
                "Default": "Optics_3x"
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 11.5,
            "Health": 100,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Turret_Mounted_Med/Empty": {
        "Name": "Empty",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Turret_Mounted_Med/Mounted_Rocket_Pods": {
        "Name": "Mounted Rocket Pods",
        "AttachmentType": "BaseVehicleWeapon",
        "BaseCost": 100,
        "UsesTargettingHUD": true,
        "Overrides": [],
        "GunControls": {
            "MaxPitch": 0,
            "MinPitch": 0,
            "MaxYawOmega": 0,
            "MaxPitchOmega": 0
        },
        "Attachments": [
            {
                "Slot": "Primary",
                "Type": "Weapon_Heavy_AA_Rockets",
                "Default": "HE_Self_Defense_Rocket",
                "Modifiers": {},
                "ModifierMult": {
                    "ClipSize": 0.5,
                    "StockpileSize": 0.5
                }
            }
        ],
        "Weapons": [],
        "SectionData": {
            "Armor": 20,
            "Health": 75,
            "Destroyed": {
                "Properties": {},
                "Effects": {
                    "Usable": false
                }
            }
        },
        "ControlAnimations": {
            "YawControl": "Rotate_Turret",
            "PitchControl": "Pivot_Cannon"
        }
    },
    "Vehicles/Components/Vehicle_Rotor/Default_Rotor": {
        "Name": "Stock Rotor",
        "Description": "Stock Helicopter rotor that balances protection and thrust.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0
    },
    "Vehicles/Components/Vehicle_Rotor/Performance_Rotor": {
        "Name": "Performance Rotor",
        "Description": "Powerful helicopter rotor that sacrifices protection for thrust power.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": {
                "Health": -0.1,
                "Armor": -0.1,
                "HullDamageMult": 0.1
            },
            "SettingMultipliers": {
                "MaxLateralSpeed": 0.10,
                "ThrustToWeight": 0.10
            }
        }
    },
    "Vehicles/Components/Vehicle_Rotor/Protected_Rotor": {
        "Name": "Reinforced Rotor",
        "Description": "Heavier rotor that has more protection against projectiles, at the cost of power.",
        "AttachmentType": "DefaultComponent",
        "BaseCost": 0,
        "SectionData": {
            "SectionMultipliers": {
                "Health": 0.15,
                "Armor": 0.1,
                "HullDamageMult": -0.2
            },
            "SettingMultipliers": {
                "MaxLateralSpeed": -0.1,
                "ThrustToWeight": -0.1,
                "PitchSpeed": -0.1,
                "YawSpeed": -0.1,
                "RollSpeed": -0.1
            }
        }
    }
}`);export{n as Resources};
