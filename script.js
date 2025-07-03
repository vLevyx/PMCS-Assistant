// ========================================
// DATA SECTION
// ========================================

const pmcsData = [
    {
        itemNumber: "1",
        interval: "Before",
        location: "Left Front, Side Exterior",
        system: "Fluid Systems",
        keywords: ["oil leak", "fluid leak", "coolant leak", "transfer case", "external damage", "body damage", "front damage", "left side damage"],
        commonFaults: ["Oil dripping under vehicle", "Coolant leak", "Transfer case oil leak", "Body damage", "External damage"],
        procedure: "DRIVER CAUTION If leaks are detected in the area of the transfer case oil cooler, do not attempt to tighten retaining nuts; internal damage to the transfer case oil cooler may result. Notify unit maintenance.\n\nNOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak. a. Visually check underneath vehicle for any evidence of fluid leakage. b. Visually check front and left side of vehicle for obvious damage that would impair operation.",
        notFullyMissionCapable: "a. Any brake fluid leak, class III leak of oil, fuel, or coolant. b. Any damage that will prevent operation."
    },
    {
        itemNumber: "2",
        interval: "Before",
        location: "Left Side Tires",
        system: "Tires/Wheels",
        keywords: ["tire flat", "tire low", "deflated tire", "underinflated", "tire pressure", "missing tire", "damaged tire", "left tire"],
        commonFaults: ["Flat tire", "Low tire pressure", "Tire missing", "Damaged tire", "Underinflated tire, Low PSI"],
        procedure: "DRIVER WARNING Operating a vehicle with a tire in an underinflated condition or with a questionable defect may lead to premature tire failure and may cause equipment damage and injury or death to personnel. Visually check tires for presence and under inflation.",
        notFullyMissionCapable: "Tire missing, deflated, or unserviceable."
    },
    {
        itemNumber: "3",
        interval: "Before",
        location: "Rear Exterior",
        system: "Fluid Systems",
        keywords: ["rear leak", "fluid leak", "oil leak", "coolant leak", "brake fluid leak", "rear damage", "bumper crack", "towing damage"],
        commonFaults: ["Fluid leak at rear", "Rear body damage", "Bumper crack", "Towing equipment damage"],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak. a. Visually check underneath vehicle for evidence of fluid leakage. b. Visually check rear of vehicle for obvious damage that would impair operation. c. Inspect bumper supports for cracks before towing trailer.",
        notFullyMissionCapable: "a. Any brake fluid leak; class III leak of oil, fuel, or coolant. b. Any damage that would prevent operation. c. Any damage that would prevent operation."
    },
    {
        itemNumber: "4",
        interval: "Before",
        location: "Exhaust Louvers",
        system: "Engine",
        keywords: ["exhaust blocked", "louvers clogged", "debris", "air flow restricted", "ventilation blocked", "cooling blocked"],
        commonFaults: ["Exhaust louvers blocked", "Debris in louvers", "Restricted air flow"],
        procedure: "DRIVER (M996 and M996A1 only) Check air exhaust louvers to ensure they are clear and free of debris that would restrict air flow. Clean any dirt or debris from louvers.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "5",
        interval: "Before",
        location: "Right Front, Side Exterior",
        system: "Fluid Systems",
        keywords: ["oil leak", "fluid leak", "coolant leak", "right side damage", "front damage", "external damage", "body damage"],
        commonFaults: ["Oil dripping under vehicle", "Coolant leak", "Right side damage", "Front body damage"],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak. a. Visually check underneath vehicle for evidence of fluid leakage. b. Visually check front and right side of vehicle for obvious damage that would impair operation.",
        notFullyMissionCapable: "a. Any brake fluid leak; class III leak of oil, fuel, or coolant. b. Any damage that would prevent operation."
    },
    {
        itemNumber: "6",
        interval: "Before",
        location: "Right Side Tires",
        system: "Tires/Wheels",
        keywords: ["tire flat", "tire low", "deflated tire", "underinflated", "tire pressure", "missing tire", "damaged tire", "right tire"],
        commonFaults: ["Flat tire", "Low tire pressure", "Tire missing", "Damaged tire", "Underinflated tire"],
        procedure: "DRIVER WARNING Operating a vehicle with a tire in an underinflated condition or with a questionable defect may lead to premature tire failure and may cause equipment damage and injury or death to personnel. Visually check tires for presence and under inflation.",
        notFullyMissionCapable: "Tire missing, deflated, or unserviceable."
    },
    {
        itemNumber: "7",
        interval: "Before",
        location: "Front",
        system: "Fluid Systems",
        keywords: ["front damage", "oil leak", "fluid leak", "coolant leak", "brake fluid leak", "front end damage", "grille damage"],
        commonFaults: ["Front end damage", "Fluid leak at front", "Body damage affecting operation"],
        procedure: "DRIVER NOTE If leakage is detected, investigation is needed to determine the location and cause of the leak. a. Visually check front of vehicle for obvious damage that would impair operation. b. Visually check underneath vehicle for evidence of fluid leakage.",
        notFullyMissionCapable: "a. Any damage that will prevent operation. b. Any brake fluid leak; class III leak of oil, fuel, or coolant."
    },
    {
        itemNumber: "7.1",
        interval: "Before",
        location: "Power Steering Reservoir",
        system: "Steering",
        keywords: ["power steering fluid", "steering fluid low", "steering hard", "power steering leak", "steering reservoir", "fluid level"],
        commonFaults: ["Power steering fluid low", "Steering fluid leak", "Hard steering"],
        procedure: "DRIVER CAUTION • Do not permit dirt, dust, or grit to enter power steering reservoir. Damage to power steering system will result if power steering fluid becomes contaminated. • Do not overfill power steering reservoir. Damage to power steering system will result. Check fluid in power steering reservoir. Fluid should be between \"HOT\" and \"COLD\" mark. Add fluid if level is below \"COLD\" mark.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "8",
        interval: "Before",
        location: "Cooling System",
        system: "Engine",
        keywords: ["coolant low", "overheating", "radiator", "coolant leak", "engine hot", "cooling system", "coolant level", "antifreeze"],
        commonFaults: ["Engine overheating", "Coolant low", "Radiator leak", "Cooling system leak"],
        procedure: "DRIVER WARNING If engine has been recently operated, do not remove radiator cap to check coolant level. Cooling system is under pressure, and escaping steam or coolant can cause burns. CAUTION Overheating, caused by lack of coolant, will cause engine damage. Check coolant level in coolant tank. Level should be at or above the \"FULL COLD\" line Add coolant if below the \"FULL\" line.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "9",
        interval: "Before",
        location: "Seat and Seatbelts",
        system: "Safety Systems",
        keywords: ["seatbelt broken", "seat won't adjust", "safety belt", "seat adjustment", "seatbelt damaged", "buckle broken"],
        commonFaults: ["Seatbelt damaged", "Seat won't adjust", "Buckle broken", "Safety strap damaged"],
        procedure: "DRIVER NOTE Vehicle operation with inoperative seatbelts may violate AR 385-55. a. Check all seatbelts, including troop seat safety strap for security, damage, and operation of buckle and clasp ends. b. Check operation of seat adjusting mechanism (driver's seat only).",
        notFullyMissionCapable: "a. Seat adjustment lock broken or missing."
    },
    {
        itemNumber: "10",
        interval: "Before",
        location: "Fire Extinguisher",
        system: "Safety Systems",
        keywords: ["fire extinguisher missing", "extinguisher broken", "fire suppression", "extinguisher pressure", "safety equipment"],
        commonFaults: ["Fire extinguisher missing", "Extinguisher damaged", "Low pressure", "Broken seal"],
        procedure: "DRIVER a. Check for missing or damaged fire extinguisher. b. Check gauge for proper pressure of about 150 psi (1034 kPa). c. Check for damaged or missing seal.",
        notFullyMissionCapable: "a. Fire extinguisher missing or damaged. b. Pressure gauge needle in recharge area. c. Seal broken or missing."
    },
    {
        itemNumber: "12",
        interval: "Before",
        location: "Instrument Panel",
        system: "Electrical",
        keywords: ["engine won't start", "warning lights", "gauges not working", "instrument panel", "wait to start light", "oil pressure", "voltmeter", "fuel gauge", "temperature gauge"],
        commonFaults: ["Engine won't start", "Warning lights not working", "Gauges inoperative", "Oil pressure low", "Charging system problems"],
        procedure: "DRIVER WARNING If gauges, instruments, or instrument lights are inoperable or not within ranges described in these checks, immediately shut off engine and notify supervisor or unit maintenance personnel. Continued operation of vehicle may result in injury or damage to equipment. NOTE If engine is warm, wait-to-start light may not come on. During cranking or after starting, light may go on and off a few times. a. Check wait-to-start light and brake warning light. Turn rotary switch to \"RUN\". Wait-to-start and brake warning light should come on. b. Start engine and check the following: c. Engine oil pressure gauge. d. Voltmeter. e. Air restriction gauge. f. Brake warning light should go off when hand brake is released. g. Check fuel gauge. h. Check coolant temperature gauge.",
        notFullyMissionCapable: "a. Wait-to-start light does not come on when engine is cold or wait light stays on continually. Brake warning light does not come on. b. Engine will not start. c. Oil pressure is less than 6 psi (103 kPa) at idle. d. Voltmeter needle stays in yellow or red range. e. Air restriction indicator reaches red zone. f. Brake warning light stays on after hand brake is released or comes on while driving. h. Coolant temperature gauge inoperative or reads greater than 230°F (110°C)."
    },
    {
        itemNumber: "14",
        interval: "Before",
        location: "Brakes",
        system: "Brakes",
        keywords: ["brakes not working", "brake pedal", "parking brake", "brakes won't stop", "brake travel", "brakes grab", "brake pedal spongy"],
        commonFaults: ["Brakes won't stop vehicle", "Parking brake not working", "Brake pedal travel excessive", "Brake safety mechanism broken"],
        procedure: "DRIVER NOTE Engine must be warmed up and idling, transmission in \"D\" (drive), transfer in \"H\" (high), and parking brake released to perform the following check. a. Check brake pedal travel. With vehicle at idle, transfer in H, and transmission in D, allow vehicle to move forward. As vehicle moves, slowly depress brake pedal. Pedal should travel 1 to 1-1/2 inches before brakes take hold. After brakes take hold, pedal may exceed the 1 to 1-1/2 inch travel. This is normal. b. Check parking brake. With parking brake fully applied, transmission in D or R, and transfer in H, vehicle should not move. c. Check parking brake lever safety mechanism (if equipped) to ensure that it latches when parking brake is applied.",
        notFullyMissionCapable: "a. Brakes will not stop the vehicle. b. Parking brake inoperable or unable to hold vehicle. c. Parking brake lever safety mechanism (if equipped) is not functioning properly."
    },
    {
        itemNumber: "15",
        interval: "Before",
        location: "NBC System",
        system: "Safety Systems",
        keywords: ["nbc system"],
        commonFaults: ["NBC system inoperative"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only) a. Check NBC system power switch for proper operation and security of mounting. All system fuses, including spares, should be present. b. Check NBC heater for proper operation. When knob is turned clockwise, the light should come on, indicating heater is working. c. Check for steady flow of air at hose outlets. If light does not come on, notify supervisor, and record on DA Form 2404.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "16",
        interval: "Before",
        location: "Weapon Station",
        system: "Weapon Systems",
        keywords: ["weapon station"],
        commonFaults: ["Weapon station binding"],
        procedure: "DRIVER (TOW and armament carriers, M966, M966A1, M1036, M1045, M1045A1, M1045A2, M1046, M1046A1, M1025, M1025A1, M1025A2, M1026, M1026A1, M1043, M1043A1, M1043A2, M1044, M1044A1, and M1121 only) NOTE Weapon station binding should be checked with weapon system or equivalent weight applied to turret. Refer to appropriate system TM to determine weight of weapon system. a. Check weapon station for binding by rotating 360 degrees in both directions at least five times. b. (Armament carriers only). Check armament mounting plate and bearing sleeve for security of mounting and obvious damage that would impair operation. c. (TOW vehicles only). Check inclinometer for proper operation. Check level vial for breaks and/or bubbles.",
        notFullyMissionCapable: "a. Weapon station binds. b. Armament weapons required for mission: Mounting plate or bearing sleeve missing or any damage that will prevent or impair mounting of armament weapons. c. Level vial is broken or no bubble is present."
    },
    {
        itemNumber: "17",
        interval: "During",
        location: "Controls and Indicators",
        system: "Electrical",
        keywords: ["gauges not working"],
        commonFaults: ["Oil pressure low"],
        procedure: "DRIVER a. Monitor all gauges. b. Check speedometer operation. c. (Marine Corps only.) Check hour/tachometer operation.",
        notFullyMissionCapable: "a. Engine oil pressure gauge reads less than approximately 40 psi (276 kPa) under normal driving conditions or less than 6 psi (41 kPa) at idle. Coolant temperature gauge reads greater than 230°F (110°C). Air restriction gauge indicates restriction in the air cleaner. Voltmeter indicates a loss of voltage."
    },
    {
        itemNumber: "18",
        interval: "During",
        location: "Brakes",
        system: "Brakes",
        keywords: ["brakes pulling"],
        commonFaults: ["Brakes pull to one side"],
        procedure: "DRIVER Check brakes for pulling or grabbing.",
        notFullyMissionCapable: "Brakes pull or grab."
    },
    {
        itemNumber: "19",
        interval: "During",
        location: "Steering",
        system: "Steering",
        keywords: ["steering problems"],
        commonFaults: ["Steering loose"],
        procedure: "DRIVER Be alert for excessive sway, leaning to one side, or unstable handling. Check steering response for unusual free play, binding, or shimmy.",
        notFullyMissionCapable: "Handling is unstable turning is difficult or free play, binding, or shimming detected."
    },
    {
        itemNumber: "19.1",
        interval: "During",
        location: "Accelerator Pedal",
        system: "Engine",
        keywords: ["accelerator sticking"],
        commonFaults: ["Accelerator pedal sticking"],
        procedure: "DRIVER Check response to accelerator feed. Check for sticking or binding pedal.",
        notFullyMissionCapable: "Pedal sticking or binding."
    },
    {
        itemNumber: "20",
        interval: "During",
        location: "Power-train",
        system: "Engine",
        keywords: ["engine noise"],
        commonFaults: ["Engine making noise"],
        procedure: "DRIVER Be alert for unusual noises or vibrations from engine, transmission, transfer, differentials, propeller shafts (especially under load), axle shafts, or wheels.",
        notFullyMissionCapable: "Unusual noise or vibration detected."
    },
    {
        itemNumber: "21",
        interval: "During",
        location: "Transmission",
        system: "Transmission",
        keywords: ["transmission slipping"],
        commonFaults: ["Transmission slipping"],
        procedure: "DRIVER Check transmission for proper operation.",
        notFullyMissionCapable: "Transmission slips or will not shift."
    },
    {
        itemNumber: "22",
        interval: "During",
        location: "Ambulance Air-conditioner",
        system: "Climate Control",
        keywords: ["air conditioning"],
        commonFaults: ["Air conditioning not working"],
        procedure: "DRIVER NOTE Perform the following inspection only if the air conditioner is required for climatic conditions. Turn air conditioner on and set blower to maximum cooling speed settings. Wait 5 minutes to allow temperature to stabilize. Check outlet ducts for cool air.",
        notFullyMissionCapable: "Climatic conditions require air-conditioning and A/C is inoperable, and if outlet duct air is not cooler than ambient temperature."
    },
    {
        itemNumber: "22.1",
        interval: "After",
        location: "Gear Shifter Lever",
        system: "Transmission",
        keywords: ["gear shifter"],
        commonFaults: ["Gear shifter binding"],
        procedure: "DRIVER a. Check transmission shift lever operation. Shift transmission through all operating ranges. Lever should move freely through all range positions. b. Check transfer shift lever operation. With transmission in \"N,\" shift transfer lever through all range positions. Lever should move freely through all range positions.",
        notFullyMissionCapable: "a. Lever inoperable or binds between range detents. b. Lever inoperable or does not engage in all ranges with engine not running."
    },
    {
        itemNumber: "23",
        interval: "After",
        location: "Transmission fluid",
        system: "Transmission",
        keywords: ["transmission fluid"],
        commonFaults: ["Transmission fluid low"],
        procedure: "DRIVER CAUTION • Do not permit dirt, dust, fluid or grit to enter transmission oil dipstick tube. Internal transmission damage will result if transmission oil becomes contaminated. • Do not overfill transmission. Damage to transmission will result. An over-full transmission can also indicate a transfer case fluid leak. Notify unit maintenance if transmission fluid is above crosshatch mark. NOTE • Apply brake and move shift lever through each gear range. Pause for about three seconds in each range, ending in \"P\". • Transmission fluid level should be checked with engine running, parking brake set, transmission shift level in \"N\", and vehicle on level ground. Fluid level should be at crosshatch marks on dipstick. • Let the vehicle idle with all accessories off for three minutes. • Engine operating temperature of 190-230°F (88-110°C) must be reached before performing AFTER checks. Check transmission fluid level. If level is below the crosshatch marks, add sufficient fluid to bring the level to the crosshatch marks.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "24",
        interval: "After",
        location: "Fuel Filter",
        system: "Engine",
        keywords: ["fuel contaminated"],
        commonFaults: ["Contaminated fuel"],
        procedure: "DRIVER WARNING Do not perform fuel system checks, inspections, or maintenance while smoking or near fire, flames, or sparks. Fuel may ignite, causing damage to vehicle and injury or death to personnel. NOTE A rubber hose can be attached to drain valve to catch fuel in container before opening drain valve. If fuel is clear, put fuel back in fuel tank. a. Check fuel for contamination. With engine running, open drain valve. Allow fuel to drain in suitable container until it runs clear. Close valve. NOTE Fuel retained in the drain-valve may drip when vehicle vibrations occur. This is normal and does not constitute a leak. Wipe drain valve with rag until excess fuel is removed. b. Check for leaks. c. Stop engine and remove rubber hose from drain valve, if installed.",
        notFullyMissionCapable: "a. Fuel is not clear after draining 1 pint (0.47 L) b. Class III leakage evident."
    },
    {
        itemNumber: "25",
        interval: "After",
        location: "Left Side Tires",
        system: "Tires/Wheels",
        keywords: ["tire damage"],
        commonFaults: ["Tire puncture"],
        procedure: "DRIVER WARNING Operating a vehicle with a tire in an underinflated condition or with questionable defect may lead to premature tire failure and may cause equipment damage and injury or death to personnel. Visually check tires for under-inflation, cuts, gouges, cracks, or bulges. Remove all penetrating objects.",
        notFullyMissionCapable: "Tire deflated or otherwise unserviceable."
    },
    {
        itemNumber: "26",
        interval: "After",
        location: "Mirror (Left Side)",
        system: "Safety Systems",
        keywords: ["mirror broken"],
        commonFaults: ["Mirror cracked"],
        procedure: "DRIVER NOTE Vehicle operation with damaged or missing outside rearview mirrors may violate AR 385-55. Check mirror for presence, cracks, and serviceability.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "27",
        interval: "After",
        location: "Left Front, Side Exterior",
        system: "Fluid Systems",
        keywords: ["cv boots torn"],
        commonFaults: ["CV boots torn"],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak. a. Visually check underneath vehicle for evidence of fluid leakage. b. Visually check halfshaft cv boots and ball joint boots for presence, rips, tears, or cuts. c. Inspect frame crossmembers and underbody support for missing hardware, cracks, bends, and breaks. Notify unit maintenance if rust is present, but the base metal is sound. d. Visually check for body damage that would impair operation of vehicle.",
        notFullyMissionCapable: "a. Any brake fluid leak; Class III leak of oil, fuel, or coolant. c. Crossmembers or underbody support are missing any hardware, broken, cracked, or if a bent or rusted-through condition is present that would affect vehicle operation. d. Any damage that will prevent operation."
    },
    {
        itemNumber: "28",
        interval: "After",
        location: "Rear Exterior",
        system: "Fluid Systems",
        keywords: ["rear cv boots"],
        commonFaults: ["Rear CV boots torn"],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak. a. Visually check underneath vehicle for evidence of fluid leakage. b. Visually check halfshaft cv boots and ball joint boots for presence, rips, tears, or cuts. c. Inspect frame cross-members and underbody support for missing hardware, cracks, bends, and breaks. Notify unit maintenance if rust is present, but the base metal is sound. d. Inspect bumper or cross-member and inner braces in area around towing pintle for cracks or breaks.",
        notFullyMissionCapable: "a. Any brake fluid leak; class III leak of oil, fuel, or coolant. c. Crossmembers or underbody support are missing any hardware, broken, cracked, or if a bent or rusted-through condition is present that would affect vehicle operation. d. Bumper, cross-member or an inner brace is cracked or broken."
    },
    {
        itemNumber: "29",
        interval: "After",
        location: "Patient Compartment",
        system: "Safety Systems",
        keywords: ["ambulance lights"],
        commonFaults: ["Ambulance lights not working"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only) WARNING Be sure cables are securely connected to the steps before using. Failure to do so may cause injury to personnel. a. Check presence and operation of ceiling white lights, blackout lights, and spotlights. b. Check operation of blackout switches at rear step, rear doors, and bulk-head door. c. Inspect condition and security of litter racks and components. d. Inspect upper litter rack hinges and latches for proper operation, damage, or missing components. e. Inspect tension straps, support straps, litter straps, and footman loops for security of mounting, damage, and missing components. f. Inspect oxygen bottles and mounting components for security of stowage when oxygen bottles are in stowed position. g. Inspect IV straps and hangers for security of mounting, damage, and missing components. h. Check operation of rear doors, handles, and latching mechanisms. Check for loose or missing components. Door should not bind and should close securely when latched shut. i. Inspect rear door seals, step seals, bulkhead door and rear door vent seals (M996 and M996A1 only) for proper installation and condition. Door seals must not allow emission of light signature under blackout conditions.",
        notFullyMissionCapable: "a. One or more lights inoperative or unserviceable. b. Any blackout switch inoperable. d. Hinges or latches inoperative, damaged, or missing. h. Rear door handles and latching mechanisms do not operate properly. Missing or damaged components. Rear doors do not operate properly. i. Door seals allow emission of light signature under blackout conditions (detectable from 50 ft [15 ml of vehicle)."
    },
    {
        itemNumber: "30",
        interval: "After",
        location: "Right Side Tires",
        system: "Tires/Wheels",
        keywords: ["tire damage"],
        commonFaults: ["Tire puncture"],
        procedure: "DRIVER WARNING Operating a vehicle with a tire in an underinflated condition or with questionable defect may lead to premature tire failure and may cause equipment damage and injury or death to personnel. Visually check tires for under-inflation, cuts, gouges, cracks, or bulges. Remove all penetrating objects.",
        notFullyMissionCapable: "Tire deflated or otherwise unserviceable."
    },
    {
        itemNumber: "31",
        interval: "After",
        location: "Mirror (Right Side)",
        system: "Safety Systems",
        keywords: ["mirror broken"],
        commonFaults: ["Mirror cracked"],
        procedure: "DRIVER NOTE Vehicle operation with damaged or missing outside rearview mirrors may violate AR 385-55. Check mirror for presence, cracks, and serviceability.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "32",
        interval: "After",
        location: "Right Front, Side Exterior",
        system: "Fluid Systems",
        keywords: ["cv boots torn"],
        commonFaults: ["CV boots torn"],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak. a. Visually check underneath vehicle for evidence of fluid leakage. b. Visually check halfshaft cv boots and ball joint boots for presence of rips, tears, cuts. c. Inspect frame crossmembers and underbody support for missing hardware, cracks, bends, and breaks. Notify unit maintenance if rust is present but the base metal is sound. d. Visually check front and right side of vehicle for obvious damage that would impair operation.",
        notFullyMissionCapable: "a. Any brake fluid leak; class III leak of oil, fuel, or coolant. c. Crossmembers or underbody support are missing any hardware, broken, cracked, or if a bent or rusted-through condition is present that would affect vehicle operation. d. Any damage that will prevent operation."
    },
    {
        itemNumber: "33",
        interval: "After",
        location: "Engine Oil",
        system: "Engine",
        keywords: ["oil level low", "engine oil", "milky oil"],
        commonFaults: ["Engine oil low", "Oil appears milky"],
        procedure: "DRIVER CAUTION • Do not permit dirt, dust, or grit to enter engine oil dipstick tube. Internal engine damage will result if engine oil becomes contaminated. • Do not overfill engine crankcase. Damage to engine will result. Check engine oil level. Level should be between \"ADD\" and \"FULL.\" If level is below \"ADD,\" add oil to bring level between the \"ADD\" and \"FULL\" marks.",
        notFullyMissionCapable: "Oil appears milky."
    },
    {
        itemNumber: "34",
        interval: "After",
        location: "Power Steering Lines and Fittings",
        system: "Steering",
        keywords: ["power steering leak"],
        commonFaults: ["Power steering leak"],
        procedure: "DRIVER WARNING Notify unit maintenance if power steering system has class III leak. Loss of power assist could occur if this condition exists.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "36",
        interval: "After",
        location: "Cooling System",
        system: "Engine",
        keywords: ["radiator hose leak"],
        commonFaults: ["Radiator hose leak"],
        procedure: "DRIVER Inspect radiator hoses for leakage.",
        notFullyMissionCapable: "Class III leakage evident."
    },
    {
        itemNumber: "37",
        interval: "After",
        location: "Master Cylinder",
        system: "Brakes",
        keywords: ["brake fluid leak", "master cylinder leak"],
        commonFaults: ["Master cylinder leak", "Brake line leak"],
        procedure: "DRIVER Visually check master cylinder lines for leaks and security of cover.",
        notFullyMissionCapable: "Any leak or cover missing."
    },
    {
        itemNumber: "37.1",
        interval: "After",
        location: "Windshield Washer Jar",
        system: "Safety Systems",
        keywords: ["windshield washer"],
        commonFaults: ["Washer jar damaged"],
        procedure: "DRIVER a. Visually check windshield washer jar for damage. b. Check windshield washer fluid level.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "38",
        interval: "After",
        location: "Lights",
        system: "Electrical",
        keywords: ["lights not working", "headlights out"],
        commonFaults: ["Headlights not working", "Tail lights out"],
        procedure: "DRIVER CAUTION Never set the rotary switch to \"RUN\" to check the lights. This drains the batteries and can burn out the glow plugs and control box. NOTE Vehicle operation with damaged or inoperable headlights may violate AR 385-55. a. Check for presence and operation of service drive, turn signal, blackout marker, marker, blackout drive, and side marker lights. b. Check operation of tail/stop-lights. Push down brake pedal approximately 1/4 in. Tail/stop-lights should come on.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "39",
        interval: "After",
        location: "Horn",
        system: "Electrical",
        keywords: ["horn not working"],
        commonFaults: ["Horn not working"],
        procedure: "DRIVER NOTE Vehicle operation with inoperative horn may violate AR 385-55. Check operation of horn if tactical situation permits.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "40",
        interval: "After",
        location: "Windshield and Wipers",
        system: "Safety Systems",
        keywords: ["windshield cracked", "wipers not working"],
        commonFaults: ["Windshield cracked", "Wipers not working"],
        procedure: "DRIVER NOTE Vehicle operation with damaged windshield may violate AR 385-55. a. Check windshield for damage that would impair operator's vision. NOTE Vehicle operation with inoperative wipers may violate AR 385-55. b. Check windshield wiper and blade for presence and damage. c. Check windshield wipers and washer for proper operation.",
        notFullyMissionCapable: "a. Windshield is cracked, broken, or discolored (cloudy) sufficiently to impair operator's vision."
    },
    {
        itemNumber: "41",
        interval: "After",
        location: "Light Switches",
        system: "Electrical",
        keywords: ["light switches"],
        commonFaults: ["Switches not in OFF position"],
        procedure: "DRIVER NOTE Ensure all switches are in the \"OFF\" position. Failure to turn switches to the \"OFF\" position when not in use will drain the batteries. Check and ensure all switches are in the \"OFF\" position.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "41.1",
        interval: "Weekly",
        location: "Hand Throttle",
        system: "Engine",
        keywords: ["hand throttle"],
        commonFaults: ["Hand throttle cable damaged"],
        procedure: "DRIVER a. Check hand throttle and mounting bracket for security. Check throttle release button to ensure hand throttle cable operates properly. b. Check hand throttle cable for corrosion, nicks, breaks, or burns.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "42",
        interval: "Weekly",
        location: "Tires",
        system: "Tires/Wheels",
        keywords: ["tire pressure", "tire wear"],
        commonFaults: ["Tire pressure low", "Tire tread worn"],
        procedure: "DRIVER WARNING • Do not exceed 30 psi (207 kPa) cold bias tire inflation pressure. Overinflation of tire may result in premature tire failure, damage to equipment, and injury or death to personnel. • Do not exceed 50 psi (345 kPa) cold radial tire inflation pressure. Overinflation of tire may result in damage to equipment and injury or death to personnel. NOTE • Check tire size designator on sidewall for tire construction identification: 36x12.50-16.5 LT-Bias ply, 37x12.50R 16.5 LT-Radial. • Both radial and bias tires are non-directional. They provide equal traction and performance when installed in either direction. NOTE Refer to TM 9-2610-200-14 for additional tire information. a. Check tire tread depth. Tread should not be worn beyond level of wear bar (1/16 in. (1.59 mm) or less). Wear bars are molded across the tread pattern in the valley between the center rib and lugs. The tread wear indicator letters (TWI) are molded on the sidewall to aid in locating the wear bar. NOTE The wear bars are not evident on new or very low mileage tires. The wear bars will appear after usual use. b. Deleted. c. Check for missing or loose wheel stud nuts and lug nuts. Tighten loose lug nuts and have unit maintenance tighten stud nuts and lug nuts to proper torque. (BIAS TIRES ONLY) WARNING Do not exceed 30 psi (207 kPa) cold bias tire inflation pressure. Over-inflation of tire may result in premature tire failure, damage to equipment, and injury or death to personnel. Check tire size designator on sidewall for tire construction identification: 36x12.50-16.5 LT-Bias ply. d. Gauge tires for correct air pressure using tire inflation gauge. Adjust as necessary. (RADIAL TIRES ONLY) WARNING Do not exceed 50 psi (345 kPa) cold radial tire inflation pressure. Over-inflation of tire may result in premature tire failure, damage to equipment, and injury or death to personnel. Check tire size designator on sidewall for tire construction identification: 37x12.50R-16.5 LT-Radial. e. Gauge tires for correct air pressure using tire inflation gauge. Adjust as necessary.",
        notFullyMissionCapable: "a. Any tread is worn to height of tread wear indicator (1/16 in. (1.59 mm) or less). Any cut, gouge, or crack that extends to the cord body or any bulges. Tires exhibit excessive inner and outer wear or balance. b. Deleted. c. Any wheel stud nut or lug nut is broken or missing."
    },
    {
        itemNumber: "43",
        interval: "Weekly",
        location: "Exhaust System",
        system: "Engine",
        keywords: ["exhaust leak"],
        commonFaults: ["Exhaust leak", "Exhaust pipe broken"],
        procedure: "DRIVER Check exhaust system for security of all mounts, tightness of clamps and bolts, rusted conditions, damaged pipes, and any indication of an exhaust leak.",
        notFullyMissionCapable: "Any mounts are broken, pipes are rusted through or broken, and any indication of an exhaust leak."
    },
    {
        itemNumber: "44",
        interval: "Weekly",
        location: "Shock Absorbers",
        system: "Steering",
        keywords: ["shock absorbers"],
        commonFaults: ["Shock absorber leak"],
        procedure: "DRIVER a. Visually inspect shock absorbers for leaks, damage, and security of mounting. If leaks are found, notify your supervisor. b. Check that spring coil is centered on shock absorber.",
        notFullyMissionCapable: "a. Class III leakage or damage is evident; mounting damaged or loose. b. Spring coil has shifted off center."
    },
    {
        itemNumber: "45",
        interval: "Weekly",
        location: "Doors and Windows",
        system: "Safety Systems",
        keywords: ["doors", "windows"],
        commonFaults: ["Door won't open", "Window stuck"],
        procedure: "DRIVER Check operation of doors and windows.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "46",
        interval: "Weekly",
        location: "Tailgate",
        system: "Safety Systems",
        keywords: ["tailgate"],
        commonFaults: ["Tailgate won't latch"],
        procedure: "DRIVER Check operation of tailgate. Check that tailgate latches securely and operates properly.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "47",
        interval: "Weekly",
        location: "Armament Carriers",
        system: "Weapon Systems",
        keywords: ["armament carriers"],
        commonFaults: ["Cargo shell door binding"],
        procedure: "DRIVER (TOW and armament carriers M966, M966A1, M1036, M1045, M1045A1, M1045A2, M1046, M1046A1, M1025, M1025A1, M1025A2, M1026, M1026A1, M1043, M1043A1, M1043A2, M1044, M1044A1, and M1121 only) a. Inspect cargo shell door for bends, warping, binding, warped, and ease of operation. Inspect latching mechanisms for proper operation. Inspect lift cylinders for bends and security of mounting. a.1. Inspect retaining wire rope for damage and security of mounting. b. Inspect strap assembly for frays and security of mounting. c. Check cargo shell door for alignment as follows: (1) Insert a piece of paper between the door seal and door opening. (2) With door closed, seal should offer resistance to pulling out paper. If door seal does not offer resistance, adjustment is required.",
        notFullyMissionCapable: "a. Lift cylinders or latches bent, warped, binding, or inoperative. a.1. Retaining wire rope is damaged, missing, or not secured."
    },
    {
        itemNumber: "48",
        interval: "Weekly",
        location: "Patient Compartment",
        system: "Safety Systems",
        keywords: ["patient compartment"],
        commonFaults: ["Attendant seat broken"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only) WARNING Be sure cables are securely connected to the steps before using. Failure to do so may cause injury to personnel. a. Inspect step assembly. b. Check operation of step latch. Latch should securely engage step striker to secure step assembly in the stowed position. c. Check operation of attendant seat and rail. Inspect seat and rail for damage, missing components, and binding during operation. Ensure proper adjustment and operation of seatbelt. d. Check operation of ambulatory patient seat (M996 and M996A1 only). Check for damage or missing components. e. Inspect handhold straps and footman loops for security, damage, and missing components (M996 and M996A1 only)",
        notFullyMissionCapable: "c. Seatbelt, attendant seat, or rail is broken or missing."
    },
    {
        itemNumber: "49",
        interval: "Weekly",
        location: "Front Arctic Heater and/or Rear Troop/Cargo Heater",
        system: "Climate Control",
        keywords: ["heater"],
        commonFaults: ["Heater not working"],
        procedure: "DRIVER (Vehicle w/Arctic Winterization Kit and/or Troop/Cargo Winterization Kit) a. Check heater and heater controls for proper operation. b. Check fuel lines and fittings for leaks, cracks, or breaks. c. Check electrical cables and connections for security, or frayed or broken wires. d. Check heater exhaust pipe for damage, security of mounting, and missing components. e. Check fuel filter for leaks or damage.",
        notFullyMissionCapable: "a. Heater inoperable and mission requires heater. b. Class III fuel leakage is evident and mission requires heater. c. Frayed or broken wires. d. Heater exhaust damaged or components missing. e. Class III leak evident."
    },
    {
        itemNumber: "50",
        interval: "Weekly",
        location: "Crew Door",
        system: "Safety Systems",
        keywords: ["crew door"],
        commonFaults: ["Door cracked"],
        procedure: "DRIVER (M966, M966A1, M996, M996A1, M997, M997A1, M997A2, M1025, M1025A1, M1025A2, M1026, M1026A1, M1036, and M1121 only) a. Check crew door assembly for visible cracks that would make door unserviceable or unable to secure properly. b. Check crew door assembly latch, hinges, and door handle for damage, looseness, or missing parts.",
        notFullyMissionCapable: "a. Visible cracks, or door does not secure properly. b. Loose, missing, or unserviceable parts."
    },
    {
        itemNumber: "51",
        interval: "Weekly",
        location: "Air Cleaner",
        system: "Engine",
        keywords: ["air cleaner"],
        commonFaults: ["Air cleaner damaged"],
        procedure: "DRIVER WARNING If NBC exposure is suspected, all air filter media should be handled by personnel wearing protective equipment. Consult your unit NBC Officer or NBC NCO for appropriate handling or disposal instructions. Check air cleaner weather cap, air cleaner assembly, air intake hose, and air horn for security of mounting and damage.",
        notFullyMissionCapable: "Evidence of damage to air cleaner weather-cap, body, air intake hose, or mounting that will allow unfiltered air to enter the engine."
    },
    {
        itemNumber: "52",
        interval: "Weekly",
        location: "Alternator Brackets",
        system: "Electrical",
        keywords: ["alternator brackets"],
        commonFaults: ["Bracket cracked"],
        procedure: "DRIVER Visually check power steering and alternator brackets for cracks, damage, or loose bolts.",
        notFullyMissionCapable: "Damaged or cracked bracket, or loose bolts."
    },
    {
        itemNumber: "53",
        interval: "Weekly",
        location: "Cooling System",
        system: "Engine",
        keywords: ["cooling system", "radiator leak", "fan problems", "belt problems"],
        commonFaults: ["Radiator leak", "Fan blade damaged", "Drive belt broken"],
        procedure: "a. Check fan and fan pulley for damage. b. Check radiator for leaks, clogged or damaged fins, and loose or damaged hoses to and from the engine. c. Check support mounts, side brackets, and side bracket weldments on radiator for missing hardware, damage, or broken welds. NOTE Belt flutter at idle is normal in the HMMWV belt drive system. It does not necessarily indicate that the belts are loose. Belt flutter should disappear as the engine is accelerated. d. Check for loose, missing, broken, cracked, or frayed drive-belts (all models except \"A2\" and M1123 vehicles). Notify supervisor if loose drivebelts are suspected. e. For A2 and M1123 models, check for looseness, misalignment, breaks, splits, or frayed serpentine belt. f. Check fan shroud for damage. g. Check engine oil cooler and hoses for damage and leaks.",
        notFullyMissionCapable: "a. Fan blade or pulley is bent, broken, cracked, or loose. b. Class III leakage evident. c. Support mounts broken, damaged, or missing hardware. Side brackets damaged or weldments broken. d. Any drivebelt is missing, broken. frayed or dry rotted. Belt fiber has more than one crack 1/8-in. (3.18 mm) in depth or 50% or frays more than 2 in. (5 cm) long. e. Serpentine drivebelt is loose, mis-aligned (off one or more grooves on any pulley) breaks or splits in outer surface, frays on either edge if cord is broken. f. Fan shroud broken, cracked, or loose. g. Class III leak evident."
    },
    {
        itemNumber: "54",
        interval: "Weekly",
        location: "Batteries",
        system: "Electrical",
        keywords: ["battery dead", "battery low", "battery corrosion"],
        commonFaults: ["Battery dead", "Battery corroded", "Battery leaking"],
        procedure: "DRIVER WARNING • Don't smoke, have open flames, or make sparks around batteries, especially if the caps are off. Batteries can explode and cause injury or death. • Remove all jewelry such as rings, dog tags, bracelets, etc. If jewelry contacts battery terminal, a direct short will result, causing instant heating of tools, severe injury to personnel, or damage to equipment. a. Remove companion seat and check batteries for damaged casing, terminal posts, and security of mounting. Notify unit maintenance if any defects are found. b. Electrolyte should be filled to the level/split ring in the battery filler opening (vent). If fluid is low, fill with distilled water to split ring (refer to Appendix D, item 27). If fluid is gassing (boiling), notify unit maintenance. NOTE Water in battery box can be caused by debris plugging battery box drain holes. If water is present, clean debris from battery box drain holes. c. Check battery box for corrosion or water on bottom of battery tray.",
        notFullyMissionCapable: "a. One or more batteries missing, unserviceable, leaking, terminal or cables are loose, corroded, or hold-downs are not secure."
    },
    {
        itemNumber: "55",
        interval: "Weekly",
        location: "Weapon Station",
        system: "Weapon Systems",
        keywords: ["weapon station"],
        commonFaults: ["Weapon hatch damaged"],
        procedure: "DRIVER (M966, M966A1, M1036, M1045, M1045A1, M1045A2, M1046, M1046A1, M1025, M1025A1, M1025A2, M1026, M1026A1, M1043, M1043A2, M1044, M1044A1, and M1121 only) a. Inspect weapon station hatch and hinge for bends, cracks, warped, or damaged areas. b. Inspect brake handle for ease of operation. c. Inspect gunner's sling for tears or frays.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "56",
        interval: "Weekly",
        location: "TOW Missile Rack",
        system: "Weapon Systems",
        keywords: ["tow missile rack"],
        commonFaults: ["TOW rack damaged"],
        procedure: "DRIVER (M966, M966A1, M1036, M1045, M1045A1, M1045A2, M1046, M1046A1, and M1121 only) a. Inspect TOW missile rack latch assembly and support braces for presence and ease of operation. b. Inspect straps for tears and frays.",
        notFullyMissionCapable: "a. Rack will not stop support or stow six TOW missiles."
    },
    {
        itemNumber: "56.1",
        interval: "Weekly",
        location: "Floorboard",
        system: "Safety Systems",
        keywords: ["tu adapter"],
        commonFaults: ["TU adapter missing"],
        procedure: "Check for presence of TU adapter.",
        notFullyMissionCapable: "TU adapter missing or damaged."
    },
    {
        itemNumber: "57",
        interval: "Weekly",
        location: "Gunner's Platform",
        system: "Weapon Systems",
        keywords: ["gunner platform"],
        commonFaults: ["Platform won't adjust"],
        procedure: "DRIVER Inspect gunner's platform risers for binding, ease of operation, or missing lock-pins.",
        notFullyMissionCapable: "Gunner's platform cannot be adjusted."
    },
    {
        itemNumber: "58",
        interval: "Weekly",
        location: "Tiedowns",
        system: "Safety Systems",
        keywords: ["tiedowns"],
        commonFaults: ["Tiedown straps damaged"],
        procedure: "DRIVER a. Inspect stored equipment footman loops for presence and security of mounting. Inspect straps for tears or frays. b. Inspect stowage brackets, footman loops, and tiedowns for security of mounting, damage, and missing components. c. Inspect all tiedown strap assemblies for proper operation, frays, damage, cleanliness, and security of mounting.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "59",
        interval: "Weekly",
        location: "Bulkhead Doors",
        system: "Safety Systems",
        keywords: ["bulkhead doors"],
        commonFaults: ["Door won't latch"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only) Check operation of bulkhead doors. Doors should securely latch when closed or fully opened. Inspect all door components for damage, adjustment, or missing components.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "60",
        interval: "Weekly",
        location: "Environment Control System",
        system: "Climate Control",
        keywords: ["hvac system"],
        commonFaults: ["HVAC not working"],
        procedure: "DRIVER a. Check security of A/C heater control box mounting. b. Check Heating, Ventilation and Air Conditioning (HVAC) filter [para. 3-27] for dirt or debris. Clean filters of dirt and debris that would restrict air flow. NOTE Insufficient cooling could be a result of loss of R12. This is a gas, therefore leaks cannot be detected. If lines or fittings are suspect, the vehicle is to be considered non-mission capable and sent to Direct Support for further inspection(s). c. Inspect exposed HVAC system ducts, hoses, fitting lines, vents, and mounting hardware for damage, leaks, missing components, and security of mounting. d. Inspect exposed wiring harnesses for breaks, frayed insulation, loose or damaged connectors, and loose, damaged, or missing mounting hardware.",
        notFullyMissionCapable: "d. Wiring harness broken, frayed, or damaged. Mounting hardware missing."
    },
    {
        itemNumber: "61",
        interval: "Weekly",
        location: "NBC System",
        system: "Safety Systems",
        keywords: ["nbc system"],
        commonFaults: ["NBC equipment damaged"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only) a. Inspect exposed NBC equipment for security of mounting, damage, and missing components. b. Inspect NBC stowage compartment door seals, hinges, latches, and straps for proper operation, damage, and missing components. c. Inspect M13 patient protective mask, hoses, and end connectors for damage, leaks, or missing components. Inspect adapter for stripped threads or other damage.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "62",
        interval: "Weekly",
        location: "Canvas and Bows",
        system: "Safety Systems",
        keywords: ["canvas top"],
        commonFaults: ["Canvas torn"],
        procedure: "DRIVER (M998, M998A1, M1038, and M1038A1 w/Soft Top Enclosure) a. Inspect cargo cover for tears, punctures, and ripped seams. b. Inspect windows for cracks and scratches. c. Inspect bows and mounting brackets for damage and security of mounting. d. Inspect footman loops and straps for tears, frays, and security of mounting.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "63",
        interval: "Weekly",
        location: "Tow Pintle",
        system: "Safety Systems",
        keywords: ["tow pintle"],
        commonFaults: ["Pintle hook damaged"],
        procedure: "DRIVER Check pintle hook for looseness, damaged locking mechanism, and presence of cotter pin.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "64",
        interval: "Weekly",
        location: "Tow Hooks",
        system: "Safety Systems",
        keywords: ["tow hooks"],
        commonFaults: ["Tow hook missing"],
        procedure: "DRIVER Check presence and condition of tow hooks (front and rear).",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "65",
        interval: "Weekly",
        location: "Trailer Electrical Connector",
        system: "Electrical",
        keywords: ["trailer connector"],
        commonFaults: ["Trailer connector damaged"],
        procedure: "DRIVER Check trailer electrical connector for damage.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "66",
        interval: "Weekly",
        location: "Parking Brake",
        system: "Brakes",
        keywords: ["parking brake"],
        commonFaults: ["Parking brake spring broken"],
        procedure: "DRIVER Check combination service/parking brake assemblies; inspect parking brake for obstruction of the actuating lever or broken or missing spring.",
        notFullyMissionCapable: "Actuating lever or spring is missing or broken."
    },
    {
        itemNumber: "68",
        interval: "Monthly",
        location: "Corrosion",
        system: "Safety Systems",
        keywords: ["corrosion", "rust"],
        commonFaults: ["Vehicle corroded"],
        procedure: "DRIVER Visually inspect vehicle for indication of corrosion or cracks and/or breaks.",
        notFullyMissionCapable: "Any corroded-through condition or cracks or breaks that would affect vehicle operation."
    },
    {
        itemNumber: "69",
        interval: "Monthly",
        location: "Tailgate",
        system: "Safety Systems",
        keywords: ["tailgate corrosion"],
        commonFaults: ["Tailgate corroded"],
        procedure: "DRIVER Check tailgate for corroded-through condition and/or damage. If tailgate does not latch securely or is damaged, notify unit maintenance.",
        notFullyMissionCapable: "Any corroded-through condition or damage that would affect vehicle operation."
    },
    {
        itemNumber: "70",
        interval: "Monthly",
        location: "Red Cross Plate",
        system: "Safety Systems",
        keywords: ["red cross plate"],
        commonFaults: ["Red cross plate damaged"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only) a. Check cross marking latches and hinges for proper operation, security of mounting, damage, or missing components. b. Inspect stowage compartment door hinge, seal, and latch for proper operation, damage, or missing components.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "71",
        interval: "Monthly",
        location: "Shelter Mount Kit",
        system: "Safety Systems",
        keywords: ["shelter mount"],
        commonFaults: ["Mounting bolt missing"],
        procedure: "DRIVER (M1037, M1042, M1097, M1097A1, M1097A2, and M1123 only) Inspect shelter mounting bracket for security of mounting and loose or missing bolts.",
        notFullyMissionCapable: "Any mounting bolt missing."
    },
    {
        itemNumber: "72",
        interval: "Monthly",
        location: "Winch",
        system: "Safety Systems",
        keywords: ["winch"],
        commonFaults: ["Winch cable damaged"],
        procedure: "DRIVER (Vehicles with winch) a. Check winch controls for proper operation. b. Check winch cable for kinks, frays, or breaks. c. Inspect tree saver strap for cuts and abrasions. If red safety thread is visible in main body of strap, the strap shall be discarded. d. If it is known the strap has been overloaded, it shall be discarded. e. Wrap winch cable [para. 2-26.1].",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "73",
        interval: "Monthly",
        location: "Troop Seats",
        system: "Safety Systems",
        keywords: ["troop seats"],
        commonFaults: ["Troop seats damaged"],
        procedure: "DRIVER (M998, M998A1, M1038, and M1038A1 w/Troop Seats Kit) a. Inspect troop seats for missing or damaged lockpins. b. Inspect troop seats and backrest for security of mounting.",
        notFullyMissionCapable: "b. Mission requires troop seats and troop seats are inoperative or damaged."
    },
    {
        itemNumber: "74",
        interval: "Monthly",
        location: "TOW Power Cable",
        system: "Electrical",
        keywords: ["tow power cable"],
        commonFaults: ["TOW cable exposed"],
        procedure: "DRIVER (M966, M1036, M1045, M1046 - serial numbers 1 through 19,410) Inspect TOW power cable at the point where it exits the battery box. Chafing of the nylon braid that covers the cable is acceptable. If there is evidence that the wire inside is exposed, notify unit maintenance. the cable is acceptable. If there is evidence that the wire inside is exposed, notify unit maintenance.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "75",
        interval: "Monthly",
        location: "Zippers",
        system: "Safety Systems",
        keywords: ["zippers"],
        commonFaults: ["Zippers corroded"],
        procedure: "a. Check canvas top and door zippers for corrosion and/or damage. b. Apply interlock lubricant (zipper grease) (refer to appendix D, item 29) to canvas top and door zippers.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "76",
        interval: "Monthly",
        location: "Skid Plates",
        system: "Safety Systems",
        keywords: ["skid plates"],
        commonFaults: ["Skid plate cracked"],
        procedure: "(Vehicles equipped with skid plate) a. Inspect skid plate and shield for bends, breaks, or cracks. b. Inspect shields for loose fasteners, or damaged or missing components. Tighten loose fasteners, or replace damaged or missing components.",
        notFullyMissionCapable: "N/A"
    }
];

// ========================================
// APPLICATION STATE
// ========================================

class PMCSApp {
    constructor() {
        this.searchInput = null;
        this.intervalFilter = null;
        this.systemFilter = null;
        this.resultsContainer = null;
        this.noResults = null;
        this.copyModal = null;
        this.modalElements = {};
        this.currentModalItem = null;

        // Initialize app when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    // ========================================
    // INITIALIZATION
    // ========================================

    init() {
        this.initializeElements();
        this.setupEventListeners();
        this.displayItems(pmcsData);
        console.log('PMCS 5988 Assistant initialized successfully');
    }

    initializeElements() {
        // Search and filter controls
        this.searchInput = document.getElementById('searchInput');
        this.intervalFilter = document.getElementById('intervalFilter');
        this.systemFilter = document.getElementById('systemFilter');

        // Results display
        this.resultsContainer = document.getElementById('resultsContainer');
        this.noResults = document.getElementById('noResults');

        // Modal elements
        this.copyModal = document.getElementById('copyModal');
        this.modalElements = {
            itemNumber: document.getElementById('modalItemNumber'),
            location: document.getElementById('modalLocation'),
            interval: document.getElementById('modalInterval'),
            status: document.getElementById('modalStatus'),
            copyBtn: document.getElementById('copyToClipboard'),
            closeBtn: document.getElementById('closeModalBtn'),
            closeX: document.getElementById('closeModal')
        };

        // Validate all elements exist
        const requiredElements = [
            this.searchInput, this.intervalFilter, this.systemFilter,
            this.resultsContainer, this.noResults, this.copyModal
        ];

        const missingElements = requiredElements.filter(el => !el);
        if (missingElements.length > 0) {
            console.error('Missing required DOM elements:', missingElements);
        }
    }

    setupEventListeners() {
        // Search and filter event listeners
        this.searchInput?.addEventListener('input', this.debounce(() => this.filterItems(), 300));
        this.intervalFilter?.addEventListener('change', () => this.filterItems());
        this.systemFilter?.addEventListener('change', () => this.filterItems());

        // Modal event listeners
        this.modalElements.closeX?.addEventListener('click', () => this.hideCopyModal());
        this.modalElements.closeBtn?.addEventListener('click', () => this.hideCopyModal());
        this.modalElements.copyBtn?.addEventListener('click', () => this.copyToClipboard());

        // Close modal when clicking outside
        this.copyModal?.addEventListener('click', (e) => {
            if (e.target === this.copyModal) {
                this.hideCopyModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.copyModal?.style.display === 'flex') {
                this.hideCopyModal();
            }
            if (e.key === '/' && !this.isInputFocused()) {
                e.preventDefault();
                this.searchInput?.focus();
            }
        });
    }

    // ========================================
    // SEARCH AND FILTERING
    // ========================================

    filterItems() {
        const searchTerm = this.searchInput?.value.toLowerCase() || '';
        const selectedInterval = this.intervalFilter?.value || 'all';
        const selectedSystem = this.systemFilter?.value || 'all';

        const filteredData = pmcsData.filter(item => {
            // Enhanced search across multiple fields
            const matchesSearch = !searchTerm || this.itemMatchesSearch(item, searchTerm);
            const matchesInterval = selectedInterval === 'all' ||
                item.interval.toLowerCase() === selectedInterval;
            const matchesSystem = selectedSystem === 'all' ||
                (item.system && item.system.toLowerCase() === selectedSystem);

            return matchesSearch && matchesInterval && matchesSystem;
        });

        this.displayItems(filteredData);
    }

    itemMatchesSearch(item, searchTerm) {
        const searchFields = [
            item.itemNumber,
            item.location,
            item.procedure,
            item.notFullyMissionCapable,
            item.system || ''
        ];

        // Add keywords and common faults to search
        if (item.keywords) {
            searchFields.push(...item.keywords);
        }
        if (item.commonFaults) {
            searchFields.push(...item.commonFaults);
        }

        return searchFields.some(field =>
            field.toLowerCase().includes(searchTerm)
        );
    }

    // ========================================
    // DISPLAY FUNCTIONS
    // ========================================

    displayItems(items) {
        if (!this.resultsContainer || !this.noResults) return;

        if (items.length === 0) {
            this.resultsContainer.style.display = 'none';
            this.noResults.style.display = 'block';
            return;
        }

        this.resultsContainer.style.display = 'block';
        this.noResults.style.display = 'none';

        this.resultsContainer.innerHTML = items.map(item =>
            this.createItemCard(item)
        ).join('');

        // Add event listeners to copy buttons
        this.attachCopyButtonListeners();
    }

    createItemCard(item) {
        const intervalClass = `interval-${item.interval.toLowerCase()}`;
        const isNA = item.notFullyMissionCapable.trim() === 'N/A';
        const missionCapableClass = isNA ? 'mission-capable na' : 'mission-capable';

        // Create common faults section if available
        const commonFaultsSection = item.commonFaults && item.commonFaults.length > 0 ? `
            <div class="procedure-section">
                <div class="procedure-title">
                    🔧 Common Faults
                </div>
                <div class="procedure-content common-faults">
                    ${item.commonFaults.map(fault =>
            `<span class="fault-tag">${this.escapeHtml(fault)}</span>`
        ).join('')}
                </div>
            </div>
        ` : '';

        return `
            <div class="item-card" data-item="${item.itemNumber}">
                <div class="item-header">
                    <div class="item-info">
                        <div class="item-number">${this.escapeHtml(item.itemNumber)}</div>
                        ${item.system ? `<div class="system-badge">${this.escapeHtml(item.system)}</div>` : ''}
                    </div>
                    <div class="interval-badge ${intervalClass}">${this.escapeHtml(item.interval)}</div>
                </div>
                
                <h3 class="location-title">${this.escapeHtml(item.location)}</h3>
                
                ${commonFaultsSection}
                
                <div class="procedure-section">
                    <div class="procedure-title">
                        📋 Crew Member Procedure
                    </div>
                    <div class="procedure-content ${this.getProcedureClass(item.procedure)}">
                        ${this.formatProcedureText(item.procedure)}
                    </div>
                </div>
                
                <div class="procedure-section">
                    <div class="procedure-title">
                        ⚠️ Not Fully Mission Capable If
                    </div>
                    <div class="procedure-content ${missionCapableClass}">
                        <p>${this.escapeHtml(item.notFullyMissionCapable)}</p>
                    </div>
                </div>
                
                <button class="copy-btn" data-item="${item.itemNumber}">
                    Copy for 5988 Form
                </button>
            </div>
        `;
    }

    getProcedureClass(procedure) {
        const lowerProc = procedure.toLowerCase();
        if (lowerProc.includes('warning')) return 'warning';
        if (lowerProc.includes('caution')) return 'caution';
        if (lowerProc.includes('note')) return 'note';
        return '';
    }

    formatProcedureText(text) {
        return this.escapeHtml(text)
            .replace(/WARNING/gi, '<strong style="color: #f57c00;">WARNING</strong>')
            .replace(/CAUTION/gi, '<strong style="color: #ff9800;">CAUTION</strong>')
            .replace(/NOTE/gi, '<strong style="color: #2196f3;">NOTE</strong>')
            .replace(/DRIVER/gi, '<strong>DRIVER</strong>')
            .split('\n')
            .map(line => line.trim() ? `<p>${line.trim()}</p>` : '')
            .filter(line => line)
            .join('');
    }

    attachCopyButtonListeners() {
        const copyButtons = document.querySelectorAll('.copy-btn');
        copyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const itemNumber = btn.getAttribute('data-item');
                this.showCopyModal(itemNumber);
            });
        });
    }

    // ========================================
    // MODAL FUNCTIONS
    // ========================================

    showCopyModal(itemNumber) {
        const item = pmcsData.find(i => i.itemNumber === itemNumber);
        if (!item || !this.copyModal) return;

        this.currentModalItem = item;

        // Populate modal content
        if (this.modalElements.itemNumber) {
            this.modalElements.itemNumber.textContent = item.itemNumber;
        }
        if (this.modalElements.location) {
            this.modalElements.location.textContent = item.location;
        }
        if (this.modalElements.interval) {
            this.modalElements.interval.textContent = item.interval;
        }
        if (this.modalElements.status) {
            this.modalElements.status.textContent = item.notFullyMissionCapable;
        }

        // Show modal
        this.copyModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        // Focus the copy button for accessibility
        setTimeout(() => {
            this.modalElements.copyBtn?.focus();
        }, 100);
    }

    hideCopyModal() {
        if (!this.copyModal) return;

        this.copyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.currentModalItem = null;
    }

    async copyToClipboard() {
        if (!this.currentModalItem) return;

        const item = this.currentModalItem;
        const textToCopy = `Item Number: ${item.itemNumber}
Location/Item: ${item.location}
Interval: ${item.interval}
Not Fully Mission Capable If: ${item.notFullyMissionCapable}`;

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.showCopySuccess();
        } catch (err) {
            console.error('Failed to copy text:', err);
            this.fallbackCopyToClipboard(textToCopy);
        }
    }

    showCopySuccess() {
        const copyBtn = this.modalElements.copyBtn;
        if (!copyBtn) return;

        const originalText = copyBtn.textContent;
        const originalBg = copyBtn.style.background;

        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#4caf50';
        copyBtn.disabled = true;

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = originalBg;
            copyBtn.disabled = false;
        }, 2000);
    }

    fallbackCopyToClipboard(text) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            this.showCopySuccess();
        } catch (err) {
            console.error('Fallback copy failed:', err);
            alert('Failed to copy to clipboard. Please try selecting the text manually.');
        }

        document.body.removeChild(textArea);
    }

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    isInputFocused() {
        const activeElement = document.activeElement;
        return activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.tagName === 'SELECT' ||
            activeElement.contentEditable === 'true'
        );
    }

    // ========================================
    // PUBLIC API
    // ========================================

    // Method to programmatically search
    search(query) {
        if (this.searchInput) {
            this.searchInput.value = query;
            this.filterItems();
        }
    }

    // Method to filter by system
    filterBySystem(system) {
        if (this.systemFilter) {
            this.systemFilter.value = system;
            this.filterItems();
        }
    }

    // Method to filter by interval
    filterByInterval(interval) {
        if (this.intervalFilter) {
            this.intervalFilter.value = interval;
            this.filterItems();
        }
    }

    // Method to reset all filters
    resetFilters() {
        if (this.searchInput) this.searchInput.value = '';
        if (this.systemFilter) this.systemFilter.value = 'all';
        if (this.intervalFilter) this.intervalFilter.value = 'all';
        this.filterItems();
    }

    // Method to get current filter state
    getFilterState() {
        return {
            search: this.searchInput?.value || '',
            system: this.systemFilter?.value || 'all',
            interval: this.intervalFilter?.value || 'all'
        };
    }

    // Method to get filtered results count
    getResultsCount() {
        const items = this.resultsContainer?.querySelectorAll('.item-card');
        return items ? items.length : 0;
    }
}

// ========================================
// INITIALIZATION
// ========================================

// Initialize the application
const pmcsApp = new PMCSApp();

// Make app available globally for debugging
window.pmcsApp = pmcsApp;

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PMCSApp, pmcsData };
}