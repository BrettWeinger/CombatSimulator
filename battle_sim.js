/* TABLE OF CONTENTS
   Line 24 - UI FUNCTIONS
  Line 430 - CHANGE EPIC ABILITY RANKS
  Line 735 - INITIALIZE UNIT NAME, CLASS, & LEVEL
  Line 753 - DEFAULT STAT CALCULATIONS (BEST FIT TRENDS)
 Line 1122 - REPLACE APPLICABLE STATS WITH USER INPUTS
 Line 1200 - INITIALIZE ENEMY NAME, CLASS, & LEVEL
 Line 1217 - ENEMY DEFAULT STAT CALCULATIONS (SAME TRENDS AS LINES 449-818)
 Line 1582 - REPLACE APPLICABLE ENEMY STATS WITH USER INPUTS
 Line 1660 - CONFIRMATION MESSAGES
 Line 1686 - EPIC ABILITY RANKS
 Line 1818 - ENEMY EPIC ABILITY RANKS
 Line 1950 - OTHER VARIABLES
 Line 1969 - WEAPON TYPE
 Line 1984 - ENEMY WEAPON TYPE
 Line 1999 - POWER FUNCTIONS
 Line 2255 - UNITS WITH AVAILABLE POWERS
 Line 2302 - COMBAT SIMULATOR
 Line 5226 - OPTION ANALYSIS
 Line 5287 - CALCULATE RESPONSE
 Line 5340 - NOTES
*/

// UI FUNCTIONS
var hideStats = function() {
    if(document.getElementById('hide_checkbox').checked) {
        document.getElementById('default_checked').style.display = 'none';
    } else {
        document.getElementById('default_checked').style.display = 'block';
    }
}

var hideEnemyStats = function() {
    if(document.getElementById('enemy_hide_checkbox').checked) {
        document.getElementById('enemy_default_checked').style.display = 'none';
    } else {
        document.getElementById('enemy_default_checked').style.display = 'block';
    }
}

var toggleClassBasedEpics = function() {
    if(document.getElementById('class_based_checkbox').checked) {
        document.getElementById('class_based_checked').style.display = 'inline'
    } else {
        document.getElementById('class_based_checked').style.display = 'none'
    }
}

var toggleEnemyClassBasedEpics = function() {
    if(document.getElementById('enemy_class_based_checkbox').checked) {
        document.getElementById('enemy_class_based_checked').style.display = 'inline'
    } else {
        document.getElementById('enemy_class_based_checked').style.display = 'none'
    }
}

var returnToSimulator = function() {
    document.getElementById('simulator_wrapper').style.display = 'inline-block'
    document.getElementById('simulation').style.display = 'none'
    document.getElementById('results_header').style.display = 'none'
    document.getElementById('results_box').style.display = 'none'
    document.getElementById('simulation_button').style.display = 'none'
    document.getElementById('return_button').style.display = 'none'
    document.getElementById('choice1html').innerHTML = ""    
    document.getElementById('defeatchancehtml').innerHTML = ""  
    document.getElementById('enemydefeatchancehtml').innerHTML = ""
    document.getElementById('alternativestext').innerHTML = ""
    document.getElementById('otherchoiceshtml').innerHTML = ""
    document.getElementById('simulation').innerHTML = "Click the button below to generate a simulation. Simulations are possible outcomes that can occur, and the simulator analyzes the likelihood of each to determine the best option."
    window.scrollTo(0,0)
    document.getElementById('unit_name').value = ""
    document.getElementById('unit_level').value = ""
    document.getElementById('enemy_name').value = ""
    document.getElementById('enemy_level').value = ""
    document.getElementById('buccaneer_checkbox').checked = false;
    document.getElementById('musketeer_checkbox').checked = false;
    document.getElementById('privateer_checkbox').checked = false;
    document.getElementById('swashbuckler_checkbox').checked = false;
    document.getElementById('witchdoctor_checkbox').checked = false;
    document.getElementById('enemy_buccaneer_checkbox').checked = false;
    document.getElementById('enemy_musketeer_checkbox').checked = false;
    document.getElementById('enemy_privateer_checkbox').checked = false;
    document.getElementById('enemy_swashbuckler_checkbox').checked = false;
    document.getElementById('enemy_witchdoctor_checkbox').checked = false;
    document.getElementById('blade_storm').src = "BladeStorm0.png"
    document.getElementById('cheap_shot').src = "CheapShot0.png"
    document.getElementById('first_strike').src = "FirstStrike0.png"
    document.getElementById('flanking').src = "Flanking0.png"
    document.getElementById('hold_the_line').src = "HTL0.png"
    document.getElementById('relentless').src = "Relentless0.png"
    document.getElementById('repel_boarders').src = "RepelBorders0.png"
    document.getElementById('riposte').src = "Riposte0.png"
    document.getElementById('second_chance').src = "SecondChance0.png"
    document.getElementById('vengeance_strike').src = "VengStrike0.png"
    document.getElementById('elusive').src = "Elusive0.png"
    document.getElementById('improvedmojoblast').src = "IMB0.png"
    document.getElementById('turnthetide').src = "TurnTheTide0.png"
    document.getElementById('witchhunter').src = "WitchHunter0.png"
    document.getElementById('enemy_blade_storm').src = "BladeStorm0.png"
    document.getElementById('enemy_cheap_shot').src = "CheapShot0.png"
    document.getElementById('enemy_first_strike').src = "FirstStrike0.png"
    document.getElementById('enemy_flanking').src = "Flanking0.png"
    document.getElementById('enemy_hold_the_line').src = "HTL0.png"
    document.getElementById('enemy_relentless').src = "Relentless0.png"
    document.getElementById('enemy_repel_boarders').src = "RepelBorders0.png"
    document.getElementById('enemy_riposte').src = "Riposte0.png"
    document.getElementById('enemy_second_chance').src = "SecondChance0.png"
    document.getElementById('enemy_vengeance_strike').src = "VengStrike0.png"
    document.getElementById('enemyelusive').src = "Elusive0.png"
    document.getElementById('enemyimprovedmojoblast').src = "IMB0.png"
    document.getElementById('enemyturnthetide').src = "TurnTheTide0.png"
    document.getElementById('enemywitchhunter').src = "WitchHunter0.png"
    document.getElementById('hide_checkbox').checked = true;
    document.getElementById('default_checked').style.display = 'none';
    document.getElementById('unit_accuracy').value = ""
    document.getElementById('unit_dodge').value = ""
    document.getElementById('unit_damage').value = ""
    document.getElementById('unit_health').value = ""
    document.getElementById('unit_base_stat').value = ""
    document.getElementById('unit_defense').value = ""
    document.getElementById('enemy_hide_checkbox').checked = true;
    document.getElementById('enemy_default_checked').style.display = 'none';
    document.getElementById('enemy_accuracy').value = ""
    document.getElementById('enemy_dodge').value = ""
    document.getElementById('enemy_damage').value = ""
    document.getElementById('enemy_health').value = ""
    document.getElementById('enemy_base_stat').value = ""
    document.getElementById('enemy_defense').value = ""
    document.getElementById('class_based_checkbox').checked = false;
    document.getElementById('class_based_checked').style.display = 'none'
    document.getElementById('enemy_class_based_checkbox').checked = false;
    document.getElementById('enemy_class_based_checked').style.display = 'none'
}

var setClassBuccaneer = function() {
    if(document.getElementById('buccaneer_checkbox').checked) {
        document.getElementById('musketeer_checkbox').checked = false;
        document.getElementById('privateer_checkbox').checked = false;
        document.getElementById('swashbuckler_checkbox').checked = false;
        document.getElementById('witchdoctor_checkbox').checked = false;
        document.getElementById('privateer_selector').style.display = 'none'
        document.getElementById('melee_privateer').checked = false;
        document.getElementById('ranged_privateer').checked = false;
    }
}

var setClassMusketeer = function() {
    if(document.getElementById('musketeer_checkbox').checked) {
        document.getElementById('buccaneer_checkbox').checked = false;
        document.getElementById('privateer_checkbox').checked = false;
        document.getElementById('swashbuckler_checkbox').checked = false;
        document.getElementById('witchdoctor_checkbox').checked = false;
        document.getElementById('privateer_selector').style.display = 'none'
        document.getElementById('melee_privateer').checked = false;
        document.getElementById('ranged_privateer').checked = false;
    }
}

var setClassPrivateer = function() {
    if(document.getElementById('privateer_checkbox').checked) {
        document.getElementById('buccaneer_checkbox').checked = false;
        document.getElementById('musketeer_checkbox').checked = false;
        document.getElementById('swashbuckler_checkbox').checked = false;
        document.getElementById('witchdoctor_checkbox').checked = false;
        document.getElementById('privateer_selector').style.display = 'inline'
    } else {
        document.getElementById('privateer_selector').style.display = 'none'
        document.getElementById('melee_privateer').checked = false;
        document.getElementById('ranged_privateer').checked = false;
    }
}

var setPrivateerMelee = function() {
    if(document.getElementById('melee_privateer').checked) {
        document.getElementById('ranged_privateer').checked = false;
    }
}

var setPrivateerRanged = function() {
    if(document.getElementById('ranged_privateer').checked) {
        document.getElementById('melee_privateer').checked = false;
    }
}

var setClassSwashbuckler = function() {
    if(document.getElementById('swashbuckler_checkbox').checked) {
        document.getElementById('buccaneer_checkbox').checked = false;
        document.getElementById('musketeer_checkbox').checked = false;
        document.getElementById('privateer_checkbox').checked = false;
        document.getElementById('witchdoctor_checkbox').checked = false;
        document.getElementById('privateer_selector').style.display = 'none'
        document.getElementById('melee_privateer').checked = false;
        document.getElementById('ranged_privateer').checked = false;
    }
}

var setClassWitchdoctor = function() {
    if(document.getElementById('witchdoctor_checkbox').checked) {
        document.getElementById('buccaneer_checkbox').checked = false;
        document.getElementById('musketeer_checkbox').checked = false;
        document.getElementById('privateer_checkbox').checked = false;
        document.getElementById('swashbuckler_checkbox').checked = false;
        document.getElementById('privateer_selector').style.display = 'none'
        document.getElementById('melee_privateer').checked = false;
        document.getElementById('ranged_privateer').checked = false;
    }
}

var reassignEpics = function(id, src0a, src0b, src0c, src1a, src1b, src1c, src2a, src2b, src2c, src3a, src3b, src3c) {
    if(document.getElementById(id).getAttribute('src') === src0a || document.getElementById(id).getAttribute('src') === src0b || document.getElementById(id).getAttribute('src') === src0c) {
            document.getElementById(id).src = src0a;
        } else if(document.getElementById(id).getAttribute('src') === src1a || document.getElementById(id).getAttribute('src') === src1b || document.getElementById(id).getAttribute('src') === src1c) {
            document.getElementById(id).src = src1a;
        } else if(document.getElementById(id).getAttribute('src') === src2a || document.getElementById(id).getAttribute('src') === src2b || document.getElementById(id).getAttribute('src') === src2c) {
            document.getElementById(id).src = src2a;
        } else if(document.getElementById(id).getAttribute('src') === src3a || document.getElementById(id).getAttribute('src') === src3b || document.getElementById(id).getAttribute('src') === src3c) {
            document.getElementById(id).src = src3a;
        }
}

var displayMeleeEpics = function() {
    if(document.getElementById('buccaneer_checkbox').checked || document.getElementById('swashbuckler_checkbox').checked || document.getElementById('privateer_checkbox').checked || document.getElementById('melee_privateer').checked) {
        reassignEpics("blade_storm", "BladeStorm0.png", "DoubleTap0.png", "MojoRising0.png", "BladeStorm1.png", "DoubleTap1.png", "MojoRising1.png", "BladeStorm2.png", "DoubleTap2.png", "MojoRising2.png", "BladeStorm3.png", "DoubleTap3.png", "MojoRising3.png")
        reassignEpics("cheap_shot", "CheapShot0.png", "PartingShot0.png", "Cowardsbane0.png", "CheapShot1.png", "PartingShot1.png", "Cowardsbane1.png", "CheapShot2.png", "PartingShot2.png", "Cowardsbane2.png", "CheapShot3.png", "PartingShot3.png", "Cowardsbane3.png")
        reassignEpics("first_strike", "FirstStrike0.png", "QuickDraw0.png", "Intuition0.png", "FirstStrike1.png", "QuickDraw1.png", "Intuition1.png", "FirstStrike2.png", "QuickDraw2.png", "Intuition2.png", "FirstStrike3.png", "QuickDraw3.png", "Intuition3.png")
        reassignEpics("flanking", "Flanking0.png", "Crossfire0.png", "Doomspell0.png", "Flanking1.png", "Crossfire1.png", "Doomspell1.png", "Flanking2.png", "Crossfire2.png", "Doomspell2.png", "Flanking3.png", "Crossfire3.png", "Doomspell3.png")
        reassignEpics("relentless", "Relentless0.png", "BurstFire0.png", "MojoEcho0.png", "Relentless1.png", "BurstFire1.png", "MojoEcho1.png", "Relentless2.png", "BurstFire2.png", "MojoEcho2.png", "Relentless3.png", "BurstFire3.png", "MojoEcho3.png")
        reassignEpics("repel_boarders", "RepelBorders0.png", "Overwatch0.png", "ReadiedSpell0.png", "RepelBorders1.png", "Overwatch1.png", "ReadiedSpell1.png", "RepelBorders2.png", "Overwatch2.png", "ReadiedSpell2.png", "RepelBorders3.png", "Overwatch3.png", "ReadiedSpell3.png")
        reassignEpics("riposte", "Riposte0.png", "ReturnFire0.png", "Counterspell0.png", "Riposte1.png", "ReturnFire1.png", "Counterspell1.png", "Riposte2.png", "ReturnFire2.png", "Counterspell2.png", "Riposte3.png", "ReturnFire3.png", "Counterspell3.png")
        reassignEpics("second_chance", "SecondChance0.png", "QuickAdjust0.png", "JR0.png", "SecondChance1.png", "QuickAdjust1.png", "JR1.png", "SecondChance2.png", "QuickAdjust2.png", "JR2.png", "SecondChance3.png", "QuickAdjust3.png", "JR3.png")
        reassignEpics("vengeance_strike", "VengStrike0.png", "TrueGrit0.png", "Retribution0.png", "VengStrike1.png", "TrueGrit1.png", "Retribution1.png", "VengStrike2.png", "TrueGrit2.png", "Retribution2.png", "VengStrike3.png", "TrueGrit3.png", "Retribution3.png")
    }
}

var displayRangedEpics = function() {
    if(document.getElementById('musketeer_checkbox').checked || document.getElementById('ranged_privateer').checked) {
        reassignEpics("blade_storm", "DoubleTap0.png", "BladeStorm0.png", "MojoRising0.png", "DoubleTap1.png", "BladeStorm1.png", "MojoRising1.png", "DoubleTap2.png", "BladeStorm2.png", "MojoRising2.png", "DoubleTap3.png", "BladeStorm3.png", "MojoRising3.png")
        reassignEpics("cheap_shot", "PartingShot0.png", "CheapShot0.png", "Cowardsbane0.png", "PartingShot1.png", "CheapShot1.png", "Cowardsbane1.png", "PartingShot2.png", "CheapShot2.png", "Cowardsbane2.png", "PartingShot3.png", "CheapShot3.png", "Cowardsbane3.png")
        reassignEpics("first_strike", "QuickDraw0.png", "FirstStrike0.png", "Intuition0.png", "QuickDraw1.png", "FirstStrike1.png", "Intuition1.png", "QuickDraw2.png", "FirstStrike2.png", "Intuition2.png", "QuickDraw3.png", "FirstStrike3.png", "Intuition3.png")
        reassignEpics("flanking", "Crossfire0.png", "Flanking0.png", "Doomspell0.png", "Crossfire1.png", "Flanking1.png", "Doomspell1.png", "Crossfire2.png", "Flanking2.png", "Doomspell2.png", "Crossfire3.png", "Flanking3.png", "Doomspell3.png")
        reassignEpics("relentless", "BurstFire0.png", "Relentless0.png", "MojoEcho0.png", "BurstFire1.png", "Relentless1.png", "MojoEcho1.png", "BurstFire2.png", "Relentless2.png", "MojoEcho2.png", "BurstFire3.png", "Relentless3.png", "MojoEcho3.png")
        reassignEpics("repel_boarders", "Overwatch0.png", "RepelBorders0.png", "ReadiedSpell0.png", "Overwatch1.png", "RepelBorders1.png", "ReadiedSpell1.png", "Overwatch2.png", "RepelBorders2.png", "ReadiedSpell2.png", "Overwatch3.png", "RepelBorders3.png", "ReadiedSpell3.png")
        reassignEpics("riposte", "ReturnFire0.png", "Riposte0.png", "Counterspell0.png", "ReturnFire1.png", "Riposte1.png", "Counterspell1.png", "ReturnFire2.png", "Riposte2.png", "Counterspell2.png", "ReturnFire3.png", "Riposte3.png", "Counterspell3.png")
        reassignEpics("second_chance", "QuickAdjust0.png", "SecondChance0.png", "JR0.png", "QuickAdjust1.png", "SecondChance1.png", "JR1.png", "QuickAdjust2.png", "SecondChance2.png", "JR2.png", "QuickAdjust3.png", "SecondChance3.png", "JR3.png")
        reassignEpics("vengeance_strike", "TrueGrit0.png", "VengStrike0.png", "Retribution0.png", "TrueGrit1.png", "VengStrike1.png", "Retribution1.png", "TrueGrit2.png", "VengStrike2.png", "Retribution2.png", "TrueGrit3.png", "VengStrike3.png", "Retribution3.png")
    }
}

var displayMagicalEpics = function() {
    if(document.getElementById('witchdoctor_checkbox').checked) {
        reassignEpics("blade_storm", "MojoRising0.png", "BladeStorm0.png", "DoubleTap0.png", "MojoRising1.png", "BladeStorm1.png", "DoubleTap1.png", "MojoRising2.png", "BladeStorm2.png", "DoubleTap2.png", "MojoRising3.png", "BladeStorm3.png", "DoubleTap3.png")
        reassignEpics("cheap_shot", "Cowardsbane0.png", "CheapShot0.png", "PartingShot0.png", "Cowardsbane1.png", "CheapShot1.png", "PartingShot1.png", "Cowardsbane2.png", "CheapShot2.png", "PartingShot2.png", "Cowardsbane3.png", "CheapShot3.png", "PartingShot3.png")
        reassignEpics("first_strike", "Intuition0.png", "FirstStrike0.png", "QuickDraw0.png", "Intuition1.png", "FirstStrike1.png", "QuickDraw1.png", "Intuition2.png", "FirstStrike2.png", "QuickDraw2.png", "Intuition3.png", "FirstStrike3.png", "QuickDraw3.png")
        reassignEpics("flanking", "Doomspell0.png", "Flanking0.png", "Crossfire0.png", "Doomspell1.png", "Flanking1.png", "Crossfire1.png", "Doomspell2.png", "Flanking2.png", "Crossfire2.png", "Doomspell3.png", "Flanking3.png", "Crossfire3.png")
        reassignEpics("relentless", "MojoEcho0.png", "Relentless0.png", "BurstFire0.png", "MojoEcho1.png", "Relentless1.png", "BurstFire1.png", "MojoEcho2.png", "Relentless2.png", "BurstFire2.png", "MojoEcho3.png", "Relentless3.png", "BurstFire3.png")
        reassignEpics("repel_boarders", "ReadiedSpell0.png", "RepelBorders0.png", "Overwatch0.png", "ReadiedSpell1.png", "RepelBorders1.png", "Overwatch1.png", "ReadiedSpell2.png", "RepelBorders2.png", "Overwatch2.png", "ReadiedSpell3.png", "RepelBorders3.png", "Overwatch3.png")
        reassignEpics("riposte", "Counterspell0.png", "Riposte0.png", "ReturnFire0.png", "Counterspell1.png", "Riposte1.png", "ReturnFire1.png", "Counterspell2.png", "Riposte2.png", "ReturnFire2.png", "Counterspell3.png", "Riposte3.png", "ReturnFire3.png")
        reassignEpics("second_chance", "JR0.png", "SecondChance0.png", "QuickAdjust0.png", "JR1.png", "SecondChance1.png", "QuickAdjust1.png", "JR2.png", "SecondChance2.png", "QuickAdjust2.png", "JR3.png", "SecondChance3.png", "QuickAdjust3.png")
        reassignEpics("vengeance_strike", "Retribution0.png", "VengStrike0.png", "TrueGrit0.png", "Retribution1.png", "VengStrike1.png", "TrueGrit1.png", "Retribution2.png", "VengStrike2.png", "TrueGrit2.png", "Retribution3.png", "VengStrike3.png", "TrueGrit3.png")
    }
}

var changeBaseStatStrength = function() {
    if(document.getElementById('buccaneer_checkbox').checked) {
        document.getElementById('base_stat_image').src="Icon_Attribute_Strength.png";
    }
}

var changeBaseStatAgility = function() {
    if(document.getElementById('swashbuckler_checkbox').checked || document.getElementById('musketeer_checkbox').checked) {
        document.getElementById('base_stat_image').src="Icon_Attribute_Agility.png";
    }
}

var changeBaseStatWill = function() {
    if(document.getElementById('privateer_checkbox').checked || document.getElementById('witchdoctor_checkbox').checked) {
        document.getElementById('base_stat_image').src="Icon_Attribute_Will.png";
    }
}

var changeDefenseType = function() {
    if(document.getElementById('enemy_buccaneer_checkbox').checked || document.getElementById('enemy_swashbuckler_checkbox').checked || document.getElementById('enemy_melee_privateer').checked) {
        document.getElementById('armor_image').src="Icon_Attribute_Armor.png";
    } else if(document.getElementById('enemy_musketeer_checkbox').checked || document.getElementById('enemy_witchdoctor_checkbox').checked || document.getElementById('enemy_ranged_privateer').checked) {
        document.getElementById('armor_image').src="Icon_Attribute_Resist.png";
    }
}

var setEnemyClassBuccaneer = function() {
    if(document.getElementById('enemy_buccaneer_checkbox').checked) {
        document.getElementById('enemy_musketeer_checkbox').checked = false;
        document.getElementById('enemy_privateer_checkbox').checked = false;
        document.getElementById('enemy_swashbuckler_checkbox').checked = false;
        document.getElementById('enemy_witchdoctor_checkbox').checked = false;
        document.getElementById('enemy_privateer_selector').style.display = 'none'
        document.getElementById('enemy_melee_privateer').checked = false;
        document.getElementById('enemy_ranged_privateer').checked = false;
    }
}

var setEnemyClassMusketeer = function() {
    if(document.getElementById('enemy_musketeer_checkbox').checked) {
        document.getElementById('enemy_buccaneer_checkbox').checked = false;
        document.getElementById('enemy_privateer_checkbox').checked = false;
        document.getElementById('enemy_swashbuckler_checkbox').checked = false;
        document.getElementById('enemy_witchdoctor_checkbox').checked = false;
        document.getElementById('enemy_privateer_selector').style.display = 'none'
        document.getElementById('enemy_melee_privateer').checked = false;
        document.getElementById('enemy_ranged_privateer').checked = false;
    }
}

var setEnemyClassPrivateer = function() {
    if(document.getElementById('enemy_privateer_checkbox').checked) {
        document.getElementById('enemy_buccaneer_checkbox').checked = false;
        document.getElementById('enemy_musketeer_checkbox').checked = false;
        document.getElementById('enemy_swashbuckler_checkbox').checked = false;
        document.getElementById('enemy_witchdoctor_checkbox').checked = false;
        document.getElementById('enemy_privateer_selector').style.display = 'inline'
    } else {
        document.getElementById('enemy_privateer_selector').style.display = 'none'
        document.getElementById('enemy_melee_privateer').checked = false;
        document.getElementById('enemy_ranged_privateer').checked = false;
    }
}

var setEnemyPrivateerMelee = function() {
    if(document.getElementById('enemy_melee_privateer').checked) {
        document.getElementById('enemy_ranged_privateer').checked = false;
    }
}

var setEnemyPrivateerRanged = function() {
    if(document.getElementById('enemy_ranged_privateer').checked) {
        document.getElementById('enemy_melee_privateer').checked = false;
    }
}

var setEnemyClassSwashbuckler = function() {
    if(document.getElementById('enemy_swashbuckler_checkbox').checked) {
        document.getElementById('enemy_buccaneer_checkbox').checked = false;
        document.getElementById('enemy_musketeer_checkbox').checked = false;
        document.getElementById('enemy_privateer_checkbox').checked = false;
        document.getElementById('enemy_witchdoctor_checkbox').checked = false;
        document.getElementById('enemy_privateer_selector').style.display = 'none'
        document.getElementById('enemy_melee_privateer').checked = false;
        document.getElementById('enemy_ranged_privateer').checked = false;
    }
}

var setEnemyClassWitchdoctor = function() {
    if(document.getElementById('enemy_witchdoctor_checkbox').checked) {
        document.getElementById('enemy_buccaneer_checkbox').checked = false;
        document.getElementById('enemy_musketeer_checkbox').checked = false;
        document.getElementById('enemy_privateer_checkbox').checked = false;
        document.getElementById('enemy_swashbuckler_checkbox').checked = false;
        document.getElementById('enemy_privateer_selector').style.display = 'none'
        document.getElementById('enemy_melee_privateer').checked = false;
        document.getElementById('enemy_ranged_privateer').checked = false;
    }
}

var displayEnemyMeleeEpics = function() {
    if(document.getElementById('enemy_buccaneer_checkbox').checked || document.getElementById('enemy_swashbuckler_checkbox').checked || document.getElementById('privateer_checkbox').checked || document.getElementById('enemy_melee_privateer').checked) {
        reassignEpics("enemy_blade_storm", "BladeStorm0.png", "DoubleTap0.png", "MojoRising0.png", "BladeStorm1.png", "DoubleTap1.png", "MojoRising1.png", "BladeStorm2.png", "DoubleTap2.png", "MojoRising2.png", "BladeStorm3.png", "DoubleTap3.png", "MojoRising3.png")
        reassignEpics("enemy_cheap_shot", "CheapShot0.png", "PartingShot0.png", "Cowardsbane0.png", "CheapShot1.png", "PartingShot1.png", "Cowardsbane1.png", "CheapShot2.png", "PartingShot2.png", "Cowardsbane2.png", "CheapShot3.png", "PartingShot3.png", "Cowardsbane3.png")
        reassignEpics("enemy_first_strike", "FirstStrike0.png", "QuickDraw0.png", "Intuition0.png", "FirstStrike1.png", "QuickDraw1.png", "Intuition1.png", "FirstStrike2.png", "QuickDraw2.png", "Intuition2.png", "FirstStrike3.png", "QuickDraw3.png", "Intuition3.png")
        reassignEpics("enemy_flanking", "Flanking0.png", "Crossfire0.png", "Doomspell0.png", "Flanking1.png", "Crossfire1.png", "Doomspell1.png", "Flanking2.png", "Crossfire2.png", "Doomspell2.png", "Flanking3.png", "Crossfire3.png", "Doomspell3.png")
        reassignEpics("enemy_relentless", "Relentless0.png", "BurstFire0.png", "MojoEcho0.png", "Relentless1.png", "BurstFire1.png", "MojoEcho1.png", "Relentless2.png", "BurstFire2.png", "MojoEcho2.png", "Relentless3.png", "BurstFire3.png", "MojoEcho3.png")
        reassignEpics("enemy_repel_boarders", "RepelBorders0.png", "Overwatch0.png", "ReadiedSpell0.png", "RepelBorders1.png", "Overwatch1.png", "ReadiedSpell1.png", "RepelBorders2.png", "Overwatch2.png", "ReadiedSpell2.png", "RepelBorders3.png", "Overwatch3.png", "ReadiedSpell3.png")
        reassignEpics("enemy_riposte", "Riposte0.png", "ReturnFire0.png", "Counterspell0.png", "Riposte1.png", "ReturnFire1.png", "Counterspell1.png", "Riposte2.png", "ReturnFire2.png", "Counterspell2.png", "Riposte3.png", "ReturnFire3.png", "Counterspell3.png")
        reassignEpics("enemy_second_chance", "SecondChance0.png", "QuickAdjust0.png", "JR0.png", "SecondChance1.png", "QuickAdjust1.png", "JR1.png", "SecondChance2.png", "QuickAdjust2.png", "JR2.png", "SecondChance3.png", "QuickAdjust3.png", "JR3.png")
        reassignEpics("enemy_vengeance_strike", "VengStrike0.png", "TrueGrit0.png", "Retribution0.png", "VengStrike1.png", "TrueGrit1.png", "Retribution1.png", "VengStrike2.png", "TrueGrit2.png", "Retribution2.png", "VengStrike3.png", "TrueGrit3.png", "Retribution3.png")
    }
}

var displayEnemyRangedEpics = function() {
    if(document.getElementById('enemy_musketeer_checkbox').checked || document.getElementById('enemy_ranged_privateer').checked) {
        reassignEpics("enemy_blade_storm", "DoubleTap0.png", "BladeStorm0.png", "MojoRising0.png", "DoubleTap1.png", "BladeStorm1.png", "MojoRising1.png", "DoubleTap2.png", "BladeStorm2.png", "MojoRising2.png", "DoubleTap3.png", "BladeStorm3.png", "MojoRising3.png")
        reassignEpics("enemy_cheap_shot", "PartingShot0.png", "CheapShot0.png", "Cowardsbane0.png", "PartingShot1.png", "CheapShot1.png", "Cowardsbane1.png", "PartingShot2.png", "CheapShot2.png", "Cowardsbane2.png", "PartingShot3.png", "CheapShot3.png", "Cowardsbane3.png")
        reassignEpics("enemy_first_strike", "QuickDraw0.png", "FirstStrike0.png", "Intuition0.png", "QuickDraw1.png", "FirstStrike1.png", "Intuition1.png", "QuickDraw2.png", "FirstStrike2.png", "Intuition2.png", "QuickDraw3.png", "FirstStrike3.png", "Intuition3.png")
        reassignEpics("enemy_flanking", "Crossfire0.png", "Flanking0.png", "Doomspell0.png", "Crossfire1.png", "Flanking1.png", "Doomspell1.png", "Crossfire2.png", "Flanking2.png", "Doomspell2.png", "Crossfire3.png", "Flanking3.png", "Doomspell3.png")
        reassignEpics("enemy_relentless", "BurstFire0.png", "Relentless0.png", "MojoEcho0.png", "BurstFire1.png", "Relentless1.png", "MojoEcho1.png", "BurstFire2.png", "Relentless2.png", "MojoEcho2.png", "BurstFire3.png", "Relentless3.png", "MojoEcho3.png")
        reassignEpics("enemy_repel_boarders", "Overwatch0.png", "RepelBorders0.png", "ReadiedSpell0.png", "Overwatch1.png", "RepelBorders1.png", "ReadiedSpell1.png", "Overwatch2.png", "RepelBorders2.png", "ReadiedSpell2.png", "Overwatch3.png", "RepelBorders3.png", "ReadiedSpell3.png")
        reassignEpics("enemy_riposte", "ReturnFire0.png", "Riposte0.png", "Counterspell0.png", "ReturnFire1.png", "Riposte1.png", "Counterspell1.png", "ReturnFire2.png", "Riposte2.png", "Counterspell2.png", "ReturnFire3.png", "Riposte3.png", "Counterspell3.png")
        reassignEpics("enemy_second_chance", "QuickAdjust0.png", "SecondChance0.png", "JR0.png", "QuickAdjust1.png", "SecondChance1.png", "JR1.png", "QuickAdjust2.png", "SecondChance2.png", "JR2.png", "QuickAdjust3.png", "SecondChance3.png", "JR3.png")
        reassignEpics("enemy_vengeance_strike", "TrueGrit0.png", "VengStrike0.png", "Retribution0.png", "TrueGrit1.png", "VengStrike1.png", "Retribution1.png", "TrueGrit2.png", "VengStrike2.png", "Retribution2.png", "TrueGrit3.png", "VengStrike3.png", "Retribution3.png")
    }
}

var displayEnemyMagicalEpics = function() {
    if(document.getElementById('enemy_witchdoctor_checkbox').checked) {
        reassignEpics("enemy_blade_storm", "MojoRising0.png", "BladeStorm0.png", "DoubleTap0.png", "MojoRising1.png", "BladeStorm1.png", "DoubleTap1.png", "MojoRising2.png", "BladeStorm2.png", "DoubleTap2.png", "MojoRising3.png", "BladeStorm3.png", "DoubleTap3.png")
        reassignEpics("enemy_cheap_shot", "Cowardsbane0.png", "CheapShot0.png", "PartingShot0.png", "Cowardsbane1.png", "CheapShot1.png", "PartingShot1.png", "Cowardsbane2.png", "CheapShot2.png", "PartingShot2.png", "Cowardsbane3.png", "CheapShot3.png", "PartingShot3.png")
        reassignEpics("enemy_first_strike", "Intuition0.png", "FirstStrike0.png", "QuickDraw0.png", "Intuition1.png", "FirstStrike1.png", "QuickDraw1.png", "Intuition2.png", "FirstStrike2.png", "QuickDraw2.png", "Intuition3.png", "FirstStrike3.png", "QuickDraw3.png")
        reassignEpics("enemy_flanking", "Doomspell0.png", "Flanking0.png", "Crossfire0.png", "Doomspell1.png", "Flanking1.png", "Crossfire1.png", "Doomspell2.png", "Flanking2.png", "Crossfire2.png", "Doomspell3.png", "Flanking3.png", "Crossfire3.png")
        reassignEpics("enemy_relentless", "MojoEcho0.png", "Relentless0.png", "BurstFire0.png", "MojoEcho1.png", "Relentless1.png", "BurstFire1.png", "MojoEcho2.png", "Relentless2.png", "BurstFire2.png", "MojoEcho3.png", "Relentless3.png", "BurstFire3.png")
        reassignEpics("enemy_repel_boarders", "ReadiedSpell0.png", "RepelBorders0.png", "Overwatch0.png", "ReadiedSpell1.png", "RepelBorders1.png", "Overwatch1.png", "ReadiedSpell2.png", "RepelBorders2.png", "Overwatch2.png", "ReadiedSpell3.png", "RepelBorders3.png", "Overwatch3.png")
        reassignEpics("enemy_riposte", "Counterspell0.png", "Riposte0.png", "ReturnFire0.png", "Counterspell1.png", "Riposte1.png", "ReturnFire1.png", "Counterspell2.png", "Riposte2.png", "ReturnFire2.png", "Counterspell3.png", "Riposte3.png", "ReturnFire3.png")
        reassignEpics("enemy_second_chance", "JR0.png", "SecondChance0.png", "QuickAdjust0.png", "JR1.png", "SecondChance1.png", "QuickAdjust1.png", "JR2.png", "SecondChance2.png", "QuickAdjust2.png", "JR3.png", "SecondChance3.png", "QuickAdjust3.png")
        reassignEpics("enemy_vengeance_strike", "Retribution0.png", "VengStrike0.png", "TrueGrit0.png", "Retribution1.png", "VengStrike1.png", "TrueGrit1.png", "Retribution2.png", "VengStrike2.png", "TrueGrit2.png", "Retribution3.png", "VengStrike3.png", "TrueGrit3.png")
    }
}

var changeEnemyBaseStatStrength = function() {
    if(document.getElementById('enemy_buccaneer_checkbox').checked) {
    document.getElementById('enemy_base_stat_image').src="Icon_Attribute_Strength.png";
    }
}

var changeEnemyBaseStatAgility = function() {
    if(document.getElementById('enemy_swashbuckler_checkbox').checked || document.getElementById('enemy_musketeer_checkbox').checked) {
    document.getElementById('enemy_base_stat_image').src="Icon_Attribute_Agility.png";
    }
}

var changeEnemyBaseStatWill = function() {
    if(document.getElementById('enemy_privateer_checkbox').checked || document.getElementById('enemy_witchdoctor_checkbox').checked) {
        document.getElementById('enemy_base_stat_image').src="Icon_Attribute_Will.png";
    }
}

var changeEnemyDefenseType = function() {
    if(document.getElementById('buccaneer_checkbox').checked || document.getElementById('swashbuckler_checkbox').checked || document.getElementById('melee_privateer').checked) {
        document.getElementById('enemy_armor_image').src="Icon_Attribute_Armor.png";
    } else if(document.getElementById('musketeer_checkbox').checked || document.getElementById('witchdoctor_checkbox').checked || document.getElementById('ranged_privateer').checked) {
        document.getElementById('enemy_armor_image').src="Icon_Attribute_Resist.png";
    }
}

// Change epic ability ranks
var changeEpicImage = function(image, src0, src1, src2, src3) {
    if(image.getAttribute('src') === src0) {
        image.src = src1
    } else if(image.getAttribute('src') === src1) {
        image.src = src2
    } else if(image.getAttribute('src') === src2) {
        image.src = src3
    } else {
        image.src = src0
    }
}

var enemyEpic = false;
var muskcheckbox = "musketeer_checkbox"
var privcheckbox = "ranged_privateer"
 var wdcheckbox = "witchdoctor_checkbox"

var isEnemy = function() {
    enemyEpic = true;
    setCheckboxes();
}

var setCheckboxes = function() {
    if(enemyEpic) {
        muskcheckbox = "enemy_musketeer_checkbox"
        privcheckbox = "enemy_ranged_privateer"
        wdcheckbox = "enemy_witchdoctor_checkbox"
    } else {
        muskcheckbox = "musketeer_checkbox"
        privcheckbox = "ranged_privateer"
        wdcheckbox = "witchdoctor_checkbox"
    }
}

var changeBladeStorm = function() {
    par1 = document.getElementById('blade_storm')
    if(enemyEpic) par1 = document.getElementById('enemy_blade_storm')
    par2 = "BladeStorm0.png"
    par3 = "BladeStorm1.png"
    par4 = "BladeStorm2.png"
    par5 = "BladeStorm3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "DoubleTap0.png"
        par3 = "DoubleTap1.png"
        par4 = "DoubleTap2.png"
        par5 = "DoubleTap3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "MojoRising0.png"
        par3 = "MojoRising1.png"
        par4 = "MojoRising2.png"
        par5 = "MojoRising3.png"
    }
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeCheapShot = function() {
    par1 = document.getElementById('cheap_shot')
    if(enemyEpic) par1 = document.getElementById('enemy_cheap_shot')
    par2 = "CheapShot0.png"
    par3 = "CheapShot1.png"
    par4 = "CheapShot2.png"
    par5 = "CheapShot3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "PartingShot0.png"
        par3 = "PartingShot1.png"
        par4 = "PartingShot2.png"
        par5 = "PartingShot3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "Cowardsbane0.png"
        par3 = "Cowardsbane1.png"
        par4 = "Cowardsbane2.png"
        par5 = "Cowardsbane3.png"
    }
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeFirstStrike = function() {
    par1 = document.getElementById('first_strike')
    if(enemyEpic) par1 = document.getElementById('enemy_first_strike')
    par2 = "FirstStrike0.png"
    par3 = "FirstStrike1.png"
    par4 = "FirstStrike2.png"
    par5 = "FirstStrike3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "QuickDraw0.png"
        par3 = "QuickDraw1.png"
        par4 = "QuickDraw2.png"
        par5 = "QuickDraw3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "Intuition0.png"
        par3 = "Intuition1.png"
        par4 = "Intuition2.png"
        par5 = "Intuition3.png"
    }
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeFlanking = function() {
    par1 = document.getElementById('flanking')
    if(enemyEpic) par1 = document.getElementById('enemy_flanking')
    par2 = "Flanking0.png"
    par3 = "Flanking1.png"
    par4 = "Flanking2.png"
    par5 = "Flanking3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "Crossfire0.png"
        par3 = "Crossfire1.png"
        par4 = "Crossfire2.png"
        par5 = "Crossfire3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "Doomspell0.png"
        par3 = "Doomspell1.png"
        par4 = "Doomspell2.png"
        par5 = "Doomspell3.png"
    }
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeHoldTheLine = function() {
    par1 = document.getElementById('hold_the_line')
    if(enemyEpic) par1 = document.getElementById('enemy_hold_the_line')
    par2 = "HTL0.png"
    par3 = "HTL1.png"
    par4 = "HTL2.png"
    par5 = "HTL3.png"
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeRelentless = function() {
    par1 = document.getElementById('relentless')
    if(enemyEpic) par1 = document.getElementById('enemy_relentless')
    par2 = "Relentless0.png"
    par3 = "Relentless1.png"
    par4 = "Relentless2.png"
    par5 = "Relentless3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "BurstFire0.png"
        par3 = "BurstFire1.png"
        par4 = "BurstFire2.png"
        par5 = "BurstFire3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "MojoEcho0.png"
        par3 = "MojoEcho1.png"
        par4 = "MojoEcho2.png"
        par5 = "MojoEcho3.png"
    }
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeRepelBoarders = function() {
    par1 = document.getElementById('repel_boarders')
    if(enemyEpic) par1 = document.getElementById('enemy_repel_boarders')
    par2 = "RepelBorders0.png"
    par3 = "RepelBorders1.png"
    par4 = "RepelBorders2.png"
    par5 = "RepelBorders3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "Overwatch0.png"
        par3 = "Overwatch1.png"
        par4 = "Overwatch2.png"
        par5 = "Overwatch3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "ReadiedSpell0.png"
        par3 = "ReadiedSpell1.png"
        par4 = "ReadiedSpell2.png"
        par5 = "ReadiedSpell3.png"
    }
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeRiposte = function() {
    par1 = document.getElementById('riposte')
    if(enemyEpic) par1 = document.getElementById('enemy_riposte')
    par2 = "Riposte0.png"
    par3 = "Riposte1.png"
    par4 = "Riposte2.png"
    par5 = "Riposte3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "ReturnFire0.png"
        par3 = "ReturnFire1.png"
        par4 = "ReturnFire2.png"
        par5 = "ReturnFire3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "Counterspell0.png"
        par3 = "Counterspell1.png"
        par4 = "Counterspell2.png"
        par5 = "Counterspell3.png"
    }
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeSecondChance = function() {
    par1 = document.getElementById('second_chance')
    if(enemyEpic) par1 = document.getElementById('enemy_second_chance')
    par2 = "SecondChance0.png"
    par3 = "SecondChance1.png"
    par4 = "SecondChance2.png"
    par5 = "SecondChance3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "QuickAdjust0.png"
        par3 = "QuickAdjust1.png"
        par4 = "QuickAdjust2.png"
        par5 = "QuickAdjust3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "JR0.png"
        par3 = "JR1.png"
        par4 = "JR2.png"
        par5 = "JR3.png"
    }
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeVengeanceStrike = function() {
    par1 = document.getElementById('vengeance_strike')
    if(enemyEpic) par1 = document.getElementById('enemy_vengeance_strike')
    par2 = "VengStrike0.png"
    par3 = "VengStrike1.png"
    par4 = "VengStrike2.png"
    par5 = "VengStrike3.png"
    setCheckboxes();
    if(document.getElementById(muskcheckbox).checked || document.getElementById(privcheckbox).checked) {
        par2 = "TrueGrit0.png"
        par3 = "TrueGrit1.png"
        par4 = "TrueGrit2.png"
        par5 = "TrueGrit3.png"
    } else if(document.getElementById(wdcheckbox).checked) {
        par2 = "Retribution0.png"
        par3 = "Retribution1.png"
        par4 = "Retribution2.png"
        par5 = "Retribution3.png"
    }  
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeElusive = function() {
    par1 = document.getElementById('elusive')
    if(enemyEpic) par1 = document.getElementById('enemyelusive')
    par2 = "Elusive0.png"
    par3 = "Elusive1.png"
    par4 = "Elusive2.png"
    par5 = "Elusive3.png"
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeImprovedMojoBlast = function() {
    par1 = document.getElementById('improvedmojoblast')
    if(enemyEpic) par1 = document.getElementById('enemyimprovedmojoblast')
    par2 = "IMB0.png"
    par3 = "IMB1.png"
    par4 = "IMB2.png"
    par5 = "IMB3.png"
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeTurnTheTide = function() {
    par1 = document.getElementById('turnthetide')
    if(enemyEpic) par1 = document.getElementById('enemyturnthetide')
    par2 = "TurnTheTide0.png"
    par3 = "TurnTheTide1.png"
    par4 = "TurnTheTide2.png"
    par5 = "TurnTheTide3.png"
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var changeWitchHunter = function() {
    par1 = document.getElementById('witchhunter')
    if(enemyEpic) par1 = document.getElementById('enemywitchhunter')
    par2 = "WitchHunter0.png"
    par3 = "WitchHunter1.png"
    par4 = "WitchHunter2.png"
    par5 = "WitchHunter3.png"
    changeEpicImage(par1, par2, par3, par4, par5);
    enemyEpic = false;
}

var showSimulation = false;
var newSimulation = function() {
    showSimulation = true;
    document.getElementById('simulation').innerHTML = ""
}

var combatSimulator = function() {
// INITIALIZE UNIT NAME, CLASS, & LEVEL
unitName = document.getElementById("unit_name").value;
if(unitName === "") {
    unitName = "Unit"
}
if(document.getElementById('buccaneer_checkbox').checked) {
    var unitClass = "Buccaneer"
} else if(document.getElementById('musketeer_checkbox').checked) {
    var unitClass = "Musketeer"
} else if(document.getElementById('privateer_checkbox').checked) {
    var unitClass = "Privateer"
} else if(document.getElementById('swashbuckler_checkbox').checked) {
    var unitClass = "Swashbuckler"
} else if(document.getElementById('witchdoctor_checkbox').checked) {
    var unitClass = "Witchdoctor"
}
var unitLevel = parseInt(document.getElementById("unit_level").value);

// DETERMINE DEFAULT STATS
if(unitClass === "Buccaneer") {
var x = unitLevel
var y = Math.round(-0.00000013217195678900*x*x*x*x*x*x + 0.00003009694314927420*x*x*x*x*x - 0.00246867013228472000*x*x*x*x + 0.08196559747820830000*x*x*x - 0.63786356670391800000*x*x + 24.95036673847410000000*x + 19.70432191587880000000)
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
unitMaxHealth = y;
var y = Math.round(-0.00000000033436240061413*x*x*x*x*x*x + 0.00000011013755813957200*x*x*x*x*x - 0.00001189281267005400000*x*x*x*x + 0.00049769547715131800000*x*x*x - 0.00648126516032804000000*x*x + 3.49512430622213000000000*x + 4.03529679637034000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var unitMaxDamage = y;
var y = Math.round(-0.00000000697095522300163*x*x*x*x*x*x + 0.00000130190156751161000*x*x*x*x*x - 0.00008657848404812120000*x*x*x*x + 0.00251721723783613000000*x*x*x - 0.02964126008171880000000*x*x + 1.55416977354223000000000*x + 3.05831231972309000000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var unitMaxAccuracy = y;
var y = Math.round(-0.00000000474562106321866*x*x*x*x*x*x + 0.00000085880314926439100*x*x*x*x*x - 0.00005348547549217190000*x*x*x*x + 0.00135423846446248000000*x*x*x - 0.00992105936761817000000*x*x + 1.41951297567863000000000*x + 3.28966833621468000000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var unitMaxDodge = y;
var y = Math.round(0.000000000963181878655892*x*x*x*x*x*x - 0.000000221382746923033000*x*x*x*x*x + 0.000019376090320543600000*x*x*x*x - 0.000833250700322695000000*x*x*x + 0.019271740090990900000000*x*x + 0.511432728532273000000000*x + 30.310458423514500000000000)
if(x >= 36) {
    y = y + 3
}
var unitBaseStat = y;
var unitMaxStrength = y;
var unitStrengthBonus = Math.floor(unitBaseStat*unitMaxDamage/500)
unitMaxDamage = unitMaxDamage + unitStrengthBonus;
var y = Math.round(0.0000000000768944892568652*x*x*x*x*x*x - 0.0000000372343189523026000*x*x*x*x*x + 0.0000051781164003056200000*x*x*x*x - 0.0003054784858975400000000*x*x*x + 0.0081753307378287000000000*x*x + 0.4639322874621130000000000*x + 19.3101568218832000000000000)
var unitMaxAgility = y;
var y = Math.round(0.00000000135552843369456*x*x*x*x*x*x - 0.00000028794769834489500*x*x*x*x*x + 0.00002356931612781570000*x*x*x*x - 0.00093515120388503800000*x*x*x + 0.01851099117037800000000*x*x + 0.18666882518514600000000*x + 14.66374224126120000000000)
var unitMaxWill = y;
var y = Math.round(-0.000000165266420153621*x*x*x*x*x + 0.000028944856366586900*x*x*x*x - 0.001839694958015330000*x*x*x + 0.055835155380683700000*x*x - 0.370015170866819000000*x + 1.972164481070610000000)
var unitMaxArmor = y;
var unitMaxResist = 0;
} else if(unitClass === "Swashbuckler") {
var x = unitLevel
var y = Math.round(-0.0000000655677385337505*x*x*x*x*x*x + 0.0000161224481021113000*x*x*x*x*x - 0.0014118825472278900000*x*x*x*x + 0.0490475515427332000000*x*x*x - 0.3482371427192890000000*x*x + 21.2263873289769000000000*x + 13.5264056350133000000000)
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
unitMaxHealth = y;
var y = Math.round(0.00000000962745250708552*x*x*x*x*x*x - 0.00000190840153727403000*x*x*x*x*x + 0.00013577298460184600000*x*x*x*x - 0.00414920859188250000000*x*x*x + 0.05285181805543330000000*x*x + 4.24134522157931000000000*x + 5.45460442448716000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var unitMaxDamage = y;
var y = Math.round(-0.00000000412582307749744*x*x*x*x*x*x + 0.00000066689745901104800*x*x*x*x*x - 0.00003358758773116890000*x*x*x*x + 0.00048520000438134500000*x*x*x + 0.00515896381554101000000*x*x + 1.33581022069398000000000*x + 3.38767898024708000000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var unitMaxAccuracy = y;
var y = Math.round(0.00000000311617472971426*x*x*x*x*x*x - 0.00000072839811923394700*x*x*x*x*x + 0.00006375595162245140000*x*x*x*x - 0.00254095762396423000000*x*x*x + 0.04605001063352900000000*x*x + 1.55370712630151000000000*x + 3.13455912719409000000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var unitMaxDodge = y;
var y = Math.round(0.00000000234235683236814*x*x*x*x*x*x - 0.00000053778511297387200*x*x*x*x*x + 0.00004710620821138070000*x*x*x*x - 0.00197455275103701000000*x*x*x + 0.04041671254742570000000*x*x + 0.40531611030116900000000*x + 29.41477238513460000000000)
if(x >= 36) {
    y = y + 3
}
var unitBaseStat = y;
var unitMaxAgility = y;
var unitAgilityBonus = Math.floor(unitBaseStat*unitMaxDamage/500)
unitMaxDamage = unitMaxDamage + unitAgilityBonus;
var y = Math.round(0.000000000221879655924392*x*x*x*x*x*x - 0.000000064519987450373900*x*x*x*x*x + 0.000007168869006904080000*x*x*x*x - 0.000379422279134226000000*x*x*x + 0.009551297126222220000000*x*x + 0.458339246132972000000000*x + 19.311631548067000000000000)
var unitMaxStrength = y;
var y = Math.round(0.00000000093806888597008600*x*x*x*x*x*x - 0.00000020579711788577900000*x*x*x*x*x + 0.00001766773728225470000000*x*x*x*x - 0.00074638238520537500000000*x*x*x + 0.01586415937473030000000000*x*x + 0.20098117982150800000000000*x + 14.64402661458580000000000000)
var unitMaxWill = y;
var y = Math.round(0.0000000833151954893977*x*x*x*x*x - 0.0000180555900374916000*x*x*x*x + 0.0012916881337300600000*x*x*x - 0.0328114453886620000000*x*x + 0.6631688988364590000000*x - 0.7337637948407530000000)
var unitMaxArmor = y;
var unitMaxResist = 0;
} else if(unitClass === "Privateer") {
var x = unitLevel
var y = Math.round(-0.0000000828352156104217*x*x*x*x*x*x + 0.0000201648186852615000*x*x*x*x*x - 0.0017590530838705500000*x*x*x*x + 0.0609190657431593000000*x*x*x - 0.4145157515667420000000*x*x + 26.3794128637376000000000*x + 17.7474712892800000000000)
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
unitMaxHealth = y;
var y = Math.round(-0.00000000210015888664136*x*x*x*x*x*x + 0.00000047621236968793000*x*x*x*x*x - 0.00003745209420362480000*x*x*x*x + 0.001104841477490920000008*x*x*x - 0.00453350231402842000000*x*x + 3.06618454317281000000000*x + 2.82964779552012000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var unitMaxDamage = y;
var y = Math.round(-0.00000000198193433279675*x*x*x*x*x*x + 0.00000023360810615623300*x*x*x*x*x - 0.00000059228530487672600*x*x*x*x - 0.00068758413126491700000*x*x*x + 0.02503385853814070000000*x*x + 1.19645461734741000000000*x + 3.63698624048426000000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var unitMaxAccuracy = y;
var y = Math.round(-0.00000000139349113780114*x*x*x*x*x*x + 0.00000013246193897613000*x*x*x*x*x + 0.00000620280105089539000*x*x*x*x - 0.00090965862432149000000*x*x*x + 0.02798707936284460000000*x*x + 1.19018766023018000000000*x + 3.62679554860556000000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var unitMaxDodge = y;
var y = Math.round(0.00000000433268499918683*x*x*x*x*x*x - 0.00000098313889716197500*x*x*x*x*x + 0.00008599594328292220000*x*x*x*x - 0.00364148872104924000000*x*x*x + 0.07645730364953850000000*x*x + 0.02948012808463900000000*x + 30.82796262522970000000000)
if(x >= 36) {
    y = y + 3
}
var unitBaseStat = y;
var unitMaxWill = y;
var unitWillBonus = Math.floor(unitBaseStat*unitMaxDamage/500)
unitMaxDamage = unitMaxDamage + unitWillBonus;
var y = Math.round(0.000000000369978220477775*x*x*x*x*x*x - 0.000000087289825513375500*x*x*x*x*x + 0.000008040385277938310000*x*x*x*x - 0.000363555119220375000000*x*x*x + 0.008290158742950170000000*x*x + 0.468951745426689000000000*x + 19.292847284080100000000000)
var unitMaxStrength = y;
var y = Math.round(0.00000000147326408510935*x*x*x*x*x*x - 0.00000031431986553993600*x*x*x*x*x + 0.00002575416485247250000*x*x*x*x - 0.00101611816672916000000*x*x*x + 0.01979912115223750000000*x*x + 0.17899777153698900000000*x + 14.67504442242050000000000)
var unitMaxAgility = y;
var y = Math.round(0.0000000160611632537503*x*x*x*x*x*x - 0.0000031507430075516900*x*x*x*x*x + 0.0002262751906911830000*x*x*x*x - 0.0073613962323690900000*x*x*x + 0.1166946660387110000000*x*x - 0.4294338646213870000000*x + 1.1540229165621000000000)
var unitMaxArmor = y;
var y = Math.round(0.000000000218669299139294*x*x*x*x*x*x - 0.000000050730824659390000*x*x*x*x*x + 0.000004419333620508800000*x*x*x*x - 0.0001794355432219410000008*x*x*x + 0.003495405264206330000000*x*x + 0.422383310856574000000000*x + 1.183113850823330000000000)
var unitMaxResist = y;
} else if(unitClass === "Musketeer") {
var x = unitLevel
var y = Math.round(-0.000000139285100758668*x*x*x*x*x*x + 0.000034336683472024900*x*x*x*x*x - 0.003112542403985310000*x*x*x*x + 0.122703287416397000000*x*x*x - 1.811706443283400000000*x*x + 37.665761648229100000000*x - 23.903535315529300000000)
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
unitMaxHealth = y;
var y = Math.round(-0.00000000181490453828731*x*x*x*x*x*x + 0.00000050586147454061100*x*x*x*x*x - 0.00005272552109676730000*x*x*x*x + 0.00255001623999080000000*x*x*x - 0.05730592581980960000000*x*x + 3.86656188277121000000000*x + 0.49563250947276000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var unitMaxDamage = y;
var y = Math.round(-0.00000000440355336700157*x*x*x*x*x*x + 0.00000086177729090568900*x*x*x*x*x - 0.00006385714134651700000*x*x*x*x + 0.00229693842911138000000*x*x*x - 0.04130079300709200000000*x*x + 2.22200477032350000000000*x + 1.57524885260731000000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var unitMaxAccuracy = y;
var y = Math.round(-0.0000000105031389939503*x*x*x*x*x*x + 0.0000019725061060557600*x*x*x*x*x - 0.0001329995812556250000*x*x*x*x + 0.0040656994058697700000*x*x*x - 0.0573475560674611000000*x*x + 1.2845010740486100000000*x + 2.6770895625945500000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var unitMaxDodge = y;
var y = Math.round(-0.00000000250024064841516*x*x*x*x*x*x + 0.00000061954797089163300*x*x*x*x*x - 0.00005952258109367230000*x*x*x*x + 0.00276422170688470000000*x*x*x - 0.06321449648215410000000*x*x + 1.38462605534058000000000*x + 26.94518459400360000000000)
if(x >= 36) {
    y = y + 3
}
var unitBaseStat = y;
var unitMaxAgility = y;
var unitAgilityBonus = Math.floor(unitBaseStat*unitMaxDamage/500)
unitMaxDamage = unitMaxDamage + unitAgilityBonus;
var y = Math.round(0.00000000105413310697543*x*x*x*x*x*x - 0.00000022348876884846100*x*x*x*x*x + 0.00001823914139797140000*x*x*x*x - 0.00071920729216234300000*x*x*x + 0.01404570029503710000000*x*x + 0.22988071973963400000000*x + 14.52244210398560000000000)
var unitMaxStrength = y;
var y = Math.round(0.000000000748840227565543*x*x*x*x*x*x - 0.000000188952071157730000*x*x*x*x*x + 0.000018157955213632700000*x*x*x*x - 0.000823691161223318000000*x*x*x + 0.017662739991529500000000*x*x + 0.399885037814290000000000*x + 19.429265333843900000000000)
var unitMaxWill = y;
var y = Math.round(-0.0000000000479658884226103*x*x*x*x*x*x + 0.0000000360155501988486000*x*x*x*x*x - 0.0000051156156312349900000*x*x*x*x + 0.0002756987750014770000000*x*x*x - 0.0059459384223045700000000*x*x + 0.7128967085590270000000000*x + 1.9197973198440100000000000)
var unitMaxResist = y;
var unitMaxArmor = 0;
} else if(unitClass === "Witchdoctor") {
var x = unitLevel
var y = Math.round(-0.000000202337261022423*x*x*x*x*x*x + 0.000047649022275456100*x*x*x*x*x - 0.004223490472170940000*x*x*x*x + 0.170716622244184000000*x*x*x - 2.969595945173440000000*x*x + 47.027152239040200000000*x - 74.371526073011900000000) //Start here
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
unitMaxHealth = y;
var y = Math.round(-0.00000000736769026083578*x*x*x*x*x*x + 0.00000175546135403569000*x*x*x*x*x - 0.00016166257063643000000*x*x*x*x + 0.00717272647364458000000*x*x*x - 0.15520562049411400000000*x*x + 4.80119147084481000000000*x - 2.38220384548535000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var unitMaxDamage = y;
var y = Math.round(-0.0000000095710033479364*x*x*x*x*x*x + 0.0000017745893267839500*x*x*x*x*x - 0.0001164101342663870000*x*x*x*x + 0.0033551664601481800000*x*x*x - 0.0406847472842830000000*x*x + 1.0833531433007100000000*x + 3.6067700197699100000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var unitMaxAccuracy = y;
var y = Math.round(-0.0000000095710033479364*x*x*x*x*x*x + 0.0000017745893267839500*x*x*x*x*x - 0.0001164101342663870000*x*x*x*x + 0.0033551664601481800000*x*x*x - 0.0406847472842830000000*x*x + 1.0833531433007100000000*x + 3.6067700197699100000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var unitMaxDodge = y;
var y = Math.round(0.000000000561735904753419*x*x*x*x*x*x - 0.000000072367732826227000*x*x*x*x*x + 0.000000345275962598379000*x*x*x*x + 0.000285588171840252000000*x*x*x - 0.013406941089418000000000*x*x + 0.982839655967618000000000*x + 27.413458807450300000000000)
if(x >= 36) {
    y = y + 3
}
var unitBaseStat = y;
var unitMaxWill = y;
var unitWillBonus = Math.floor(unitBaseStat*unitMaxDamage/500)
unitMaxDamage = unitMaxDamage + unitWillBonus;
var y = Math.round(0.00000000176927275575504*x*x*x*x*x*x - 0.00000038516423760538500*x*x*x*x*x + 0.00003248063465778900000*x*x*x*x - 0.00133625811503831000000*x*x*x + 0.02763519687593440000000*x*x + 0.09101475646994780000000*x + 14.99927697873590000000000)
var unitMaxStrength = y;
var y = Math.round(0.000000000284284765649997*x*x*x*x*x*x - 0.000000063219212101828900*x*x*x*x*x + 0.000005526962471440060000*x*x*x*x - 0.000243799779761938000000*x*x*x + 0.005773388194368420000000*x*x + 0.486022339096445000000000*x + 19.326195946250300000000000)
var unitMaxAgility = y;
var y = Math.round(-0.00000000141387537745327*x*x*x*x*x*x + 0.00000036276570743263400*x*x*x*x*x - 0.00003622708061773840000*x*x*x*x + 0.00175741692659434000000*x*x*x - 0.04207850795238270000000*x*x + 1.35511372556269000000000*x + 0.09550269893872800000000)
var unitMaxResist = y;
var unitMaxArmor = 0;
}

// REPLACE APPLICABLE DEFAULT STATS
if(document.getElementById('hide_checkbox').checked) { //Using default stats
    if(unitClass !== "Buccaneer" && unitClass !== "Swashbuckler" && unitClass !== "Privateer" && unitClass !== "Musketeer" && unitClass !== "Witchdoctor" && isNaN(unitLevel)) {
        alert("To use default stats, please input the class and level of your unit.");
        return false; //Terminate if class and level are unknown
    } else if(unitClass !== "Buccaneer" && unitClass !== "Swashbuckler" && unitClass !== "Privateer" && unitClass !== "Musketeer" && unitClass !== "Witchdoctor") {
        alert("To use default stats, please input the class of your unit.");
        return false; //Terminate if class is unknown
    } else if(isNaN(unitLevel)) {
        alert("To use default stats, please input the level of your unit.");
        return false; //Terminate if level is unknown
    } //Armor/defense must have been automatically calculated if class and level are unknown. Must be determined if defense should use armor/resist, based on enemy class/weapon type.
    if(document.getElementById('enemy_buccaneer_checkbox').checked === true || document.getElementById('enemy_swashbuckler_checkbox').checked === true || document.getElementById('enemy_privateer_selector').style.display === 'inline' && document.getElementById('enemy_ranged_privateer').checked === false) { //If unit is a buccaneer, swashbuckler, or not a ranged privateer
        var unitMaxDefense = unitMaxArmor;
          } else {
            var unitMaxDefense = unitMaxResist;
        }
} else { //Using customized stats
    var healthInput = document.getElementById('unit_health').value;
    if(healthInput.length === 0 || healthInput < 0) { // If no input/invalid input
        if(unitMaxHealth === "undefined" || isNaN(unitMaxHealth)) { // And not enough information to use pre-determined stats
        alert("Accuracy, Dodge, Damage, and Health are required. If any are unknown, please input the class and level of your unit to calculate default stats."); // Display error message
        return false; // And terminate simulator
        }
    } else if(healthInput >= 0) { //If input exists
        unitMaxHealth = parseInt(document.getElementById('unit_health').value); //Replace
    }
    var damageInput = document.getElementById('unit_damage').value;
    if(damageInput.length === 0 || damageInput < 0) {
        if(unitMaxDamage === "undefined" || isNaN(unitMaxDamage)) {
        alert("Accuracy, Dodge, Damage, and Health are required. If any are unknown, please input the class and level of your unit to calculate default stats.");
        return false;
        }
    } else if(damageInput >= 0) {
        var unitMaxDamage = parseInt(document.getElementById('unit_damage').value);
    }
    var accuracyInput = document.getElementById('unit_accuracy').value;
    if(accuracyInput.length === 0 || accuracyInput < 0) {
        if(unitMaxAccuracy === "undefined" || isNaN(unitMaxAccuracy)) {
        alert("Accuracy, Dodge, Damage, and Health are required. If any are unknown, please input the class and level of your unit to calculate default stats.");
        return false;
        }
    } else if(accuracyInput >= 0) {
         var unitMaxAccuracy = parseInt(document.getElementById('unit_accuracy').value);
    }
    var dodgeInput = document.getElementById('unit_dodge').value;
    if(dodgeInput.length === 0 || dodgeInput < 0) {
        if(unitMaxDodge === "undefined" || isNaN(unitMaxDodge)) {
        alert("Accuracy, Dodge, Damage, and Health are required. If any are unknown, please input the class and level of your unit to calculate default stats.");
        return false;
        }
    } else if(dodgeInput >= 0) {
        var unitMaxDodge = parseInt(document.getElementById('unit_dodge').value);
    }
    var baseStatInput = document.getElementById('unit_base_stat').value;
    if(baseStatInput.length === 0 || baseStatInput < 0) { //If no input/invalid input
        if(unitBaseStat === "undefined" || isNaN(unitBaseStat)) { //And no class/level selected
        var unitBaseStat = 0; //Default base stat to zero
        }
    } else if(baseStatInput >= 0) {
        var unitBaseStat = parseInt(document.getElementById('unit_base_stat').value); //Replace
    }
    var defenseInput = document.getElementById('unit_defense').value;
    if(defenseInput.length === 0 || defenseInput < 0) { //If defense has no input/invalid input
        if(unitMaxArmor === "undefined" || isNaN(unitMaxArmor)) { //And armor can't be calculated (and so resist cannot be either)
        var unitMaxDefense = 0; //Default defense to zero
        } else { //Armor/defense has been calculated
          if(document.getElementById('enemy_buccaneer_checkbox').checked === true || document.getElementById('enemy_swashbuckler_checkbox').checked === true || document.getElementById('enemy_privateer_selector').style.display === 'inline' && document.getElementById('enemy_ranged_privateer').checked === false) { //If enemy is a buccaneer, swashbuckler, or not a ranged privateer
            var unitMaxDefense = unitMaxArmor;
          } else {
            var unitMaxDefense = unitMaxResist;
          }
        }
    } else if(defenseInput >= 0) {
        var unitMaxDefense = parseInt(document.getElementById('unit_defense').value); //Replace
    }
}

// INITIALIZE ENEMY NAME, CLASS, & LEVEL
enemyName = document.getElementById("enemy_name").value;
if(enemyName === "") {
    enemyName = "Enemy"
}
if(document.getElementById('enemy_buccaneer_checkbox').checked) {
    var enemyClass = "Buccaneer"
} else if(document.getElementById('enemy_musketeer_checkbox').checked) {
    var enemyClass = "Musketeer"
} else if(document.getElementById('enemy_privateer_checkbox').checked) {
    var enemyClass = "Privateer"
} else if(document.getElementById('enemy_swashbuckler_checkbox').checked) {
    var enemyClass = "Swashbuckler"
} else if(document.getElementById('enemy_witchdoctor_checkbox').checked) {
    var enemyClass = "Witchdoctor"
}

// DETERMINE DEFAULT STATS
var enemyLevel = parseInt(document.getElementById("enemy_level").value);
if(enemyClass === "Buccaneer") {
var x = enemyLevel
var y = Math.round(-0.00000013217195678900*x*x*x*x*x*x + 0.00003009694314927420*x*x*x*x*x - 0.00246867013228472000*x*x*x*x + 0.08196559747820830000*x*x*x - 0.63786356670391800000*x*x + 24.95036673847410000000*x + 19.70432191587880000000)
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
enemyMaxHealth = y;
var y = Math.round(-0.00000000033436240061413*x*x*x*x*x*x + 0.00000011013755813957200*x*x*x*x*x - 0.00001189281267005400000*x*x*x*x + 0.00049769547715131800000*x*x*x - 0.00648126516032804000000*x*x + 3.49512430622213000000000*x + 4.03529679637034000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var enemyMaxDamage = y;
var y = Math.round(-0.00000000697095522300163*x*x*x*x*x*x + 0.00000130190156751161000*x*x*x*x*x - 0.00008657848404812120000*x*x*x*x + 0.00251721723783613000000*x*x*x - 0.02964126008171880000000*x*x + 1.55416977354223000000000*x + 3.05831231972309000000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var enemyMaxAccuracy = y;
var y = Math.round(-0.00000000474562106321866*x*x*x*x*x*x + 0.00000085880314926439100*x*x*x*x*x - 0.00005348547549217190000*x*x*x*x + 0.00135423846446248000000*x*x*x - 0.00992105936761817000000*x*x + 1.41951297567863000000000*x + 3.28966833621468000000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var enemyMaxDodge = y;
var y = Math.round(0.000000000963181878655892*x*x*x*x*x*x - 0.000000221382746923033000*x*x*x*x*x + 0.000019376090320543600000*x*x*x*x - 0.000833250700322695000000*x*x*x + 0.019271740090990900000000*x*x + 0.511432728532273000000000*x + 30.310458423514500000000000)
if(x >= 36) {
    y = y + 3
}
var enemyBaseStat = y;
var enemyStrengthBonus = Math.floor(enemyBaseStat*enemyMaxDamage/500)
enemyMaxDamage = enemyMaxDamage + enemyStrengthBonus;
var y = Math.round(0.0000000000768944892568652*x*x*x*x*x*x - 0.0000000372343189523026000*x*x*x*x*x + 0.0000051781164003056200000*x*x*x*x - 0.0003054784858975400000000*x*x*x + 0.0081753307378287000000000*x*x + 0.4639322874621130000000000*x + 19.3101568218832000000000000)
var enemyMaxAgility = y;
var y = Math.round(0.00000000135552843369456*x*x*x*x*x*x - 0.00000028794769834489500*x*x*x*x*x + 0.00002356931612781570000*x*x*x*x - 0.00093515120388503800000*x*x*x + 0.01851099117037800000000*x*x + 0.18666882518514600000000*x + 14.66374224126120000000000)
var enemyMaxWill = y;
var y = Math.round(-0.000000165266420153621*x*x*x*x*x + 0.000028944856366586900*x*x*x*x - 0.001839694958015330000*x*x*x + 0.055835155380683700000*x*x - 0.370015170866819000000*x + 1.972164481070610000000)
var enemyMaxArmor = y;
var enemyMaxResist = 0;
} else if(enemyClass === "Swashbuckler") {
var x = enemyLevel
var y = Math.round(-0.0000000655677385337505*x*x*x*x*x*x + 0.0000161224481021113000*x*x*x*x*x - 0.0014118825472278900000*x*x*x*x + 0.0490475515427332000000*x*x*x - 0.3482371427192890000000*x*x + 21.2263873289769000000000*x + 13.5264056350133000000000)
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
enemyMaxHealth = y;
var y = Math.round(0.00000000962745250708552*x*x*x*x*x*x - 0.00000190840153727403000*x*x*x*x*x + 0.00013577298460184600000*x*x*x*x - 0.00414920859188250000000*x*x*x + 0.05285181805543330000000*x*x + 4.24134522157931000000000*x + 5.45460442448716000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var enemyMaxDamage = y;
var y = Math.round(-0.00000000412582307749744*x*x*x*x*x*x + 0.00000066689745901104800*x*x*x*x*x - 0.00003358758773116890000*x*x*x*x + 0.00048520000438134500000*x*x*x + 0.00515896381554101000000*x*x + 1.33581022069398000000000*x + 3.38767898024708000000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var enemyMaxAccuracy = y;
var y = Math.round(0.00000000311617472971426*x*x*x*x*x*x - 0.00000072839811923394700*x*x*x*x*x + 0.00006375595162245140000*x*x*x*x - 0.00254095762396423000000*x*x*x + 0.04605001063352900000000*x*x + 1.55370712630151000000000*x + 3.13455912719409000000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var enemyMaxDodge = y;
var y = Math.round(0.00000000234235683236814*x*x*x*x*x*x - 0.00000053778511297387200*x*x*x*x*x + 0.00004710620821138070000*x*x*x*x - 0.00197455275103701000000*x*x*x + 0.04041671254742570000000*x*x + 0.40531611030116900000000*x + 29.41477238513460000000000)
if(x >= 36) {
    y = y + 3
}
var enemyBaseStat = y;
var enemyAgilityBonus = Math.floor(enemyBaseStat*enemyMaxDamage/500)
enemyMaxDamage = enemyMaxDamage + enemyAgilityBonus;
var y = Math.round(0.000000000221879655924392*x*x*x*x*x*x - 0.000000064519987450373900*x*x*x*x*x + 0.000007168869006904080000*x*x*x*x - 0.000379422279134226000000*x*x*x + 0.009551297126222220000000*x*x + 0.458339246132972000000000*x + 19.311631548067000000000000)
var enemyMaxStrength = y;
var y = Math.round(0.00000000093806888597008600*x*x*x*x*x*x - 0.00000020579711788577900000*x*x*x*x*x + 0.00001766773728225470000000*x*x*x*x - 0.00074638238520537500000000*x*x*x + 0.01586415937473030000000000*x*x + 0.20098117982150800000000000*x + 14.64402661458580000000000000)
var enemyMaxWill = y;
var y = Math.round(0.0000000833151954893977*x*x*x*x*x - 0.0000180555900374916000*x*x*x*x + 0.0012916881337300600000*x*x*x - 0.0328114453886620000000*x*x + 0.6631688988364590000000*x - 0.7337637948407530000000)
var enemyMaxArmor = y;
var enemyMaxResist = 0;
} else if(enemyClass === "Privateer") {
var x = enemyLevel
var y = Math.round(-0.0000000828352156104217*x*x*x*x*x*x + 0.0000201648186852615000*x*x*x*x*x - 0.0017590530838705500000*x*x*x*x + 0.0609190657431593000000*x*x*x - 0.4145157515667420000000*x*x + 26.3794128637376000000000*x + 17.7474712892800000000000)
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
enemyMaxHealth = y;
var y = Math.round(-0.00000000210015888664136*x*x*x*x*x*x + 0.00000047621236968793000*x*x*x*x*x - 0.00003745209420362480000*x*x*x*x + 0.001104841477490920000008*x*x*x - 0.00453350231402842000000*x*x + 3.06618454317281000000000*x + 2.82964779552012000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var enemyMaxDamage = y;
var y = Math.round(-0.00000000198193433279675*x*x*x*x*x*x + 0.00000023360810615623300*x*x*x*x*x - 0.00000059228530487672600*x*x*x*x - 0.00068758413126491700000*x*x*x + 0.02503385853814070000000*x*x + 1.19645461734741000000000*x + 3.63698624048426000000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var enemyMaxAccuracy = y;
var y = Math.round(-0.00000000139349113780114*x*x*x*x*x*x + 0.00000013246193897613000*x*x*x*x*x + 0.00000620280105089539000*x*x*x*x - 0.00090965862432149000000*x*x*x + 0.02798707936284460000000*x*x + 1.19018766023018000000000*x + 3.62679554860556000000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var enemyMaxDodge = y;
var y = Math.round(0.00000000433268499918683*x*x*x*x*x*x - 0.00000098313889716197500*x*x*x*x*x + 0.00008599594328292220000*x*x*x*x - 0.00364148872104924000000*x*x*x + 0.07645730364953850000000*x*x + 0.02948012808463900000000*x + 30.82796262522970000000000)
if(x >= 36) {
    y = y + 3
}
var enemyBaseStat = y;
var enemyWillBonus = Math.floor(enemyBaseStat*enemyMaxDamage/500)
enemyMaxDamage = enemyMaxDamage + enemyWillBonus;
var y = Math.round(0.000000000369978220477775*x*x*x*x*x*x - 0.000000087289825513375500*x*x*x*x*x + 0.000008040385277938310000*x*x*x*x - 0.000363555119220375000000*x*x*x + 0.008290158742950170000000*x*x + 0.468951745426689000000000*x + 19.292847284080100000000000)
var enemyMaxStrength = y;
var y = Math.round(0.00000000147326408510935*x*x*x*x*x*x - 0.00000031431986553993600*x*x*x*x*x + 0.00002575416485247250000*x*x*x*x - 0.00101611816672916000000*x*x*x + 0.01979912115223750000000*x*x + 0.17899777153698900000000*x + 14.67504442242050000000000)
var enemyMaxAgility = y;
var y = Math.round(0.0000000160611632537503*x*x*x*x*x*x - 0.0000031507430075516900*x*x*x*x*x + 0.0002262751906911830000*x*x*x*x - 0.0073613962323690900000*x*x*x + 0.1166946660387110000000*x*x - 0.4294338646213870000000*x + 1.1540229165621000000000)
var enemyMaxArmor = y;
var y = Math.round(0.000000000218669299139294*x*x*x*x*x*x - 0.000000050730824659390000*x*x*x*x*x + 0.000004419333620508800000*x*x*x*x - 0.0001794355432219410000008*x*x*x + 0.003495405264206330000000*x*x + 0.422383310856574000000000*x + 1.183113850823330000000000)
var enemyMaxResist = y;
} else if(enemyClass === "Musketeer") {
var x = enemyLevel
var y = Math.round(-0.000000139285100758668*x*x*x*x*x*x + 0.000034336683472024900*x*x*x*x*x - 0.003112542403985310000*x*x*x*x + 0.122703287416397000000*x*x*x - 1.811706443283400000000*x*x + 37.665761648229100000000*x - 23.903535315529300000000)
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
enemyMaxHealth = y;
var y = Math.round(-0.00000000181490453828731*x*x*x*x*x*x + 0.00000050586147454061100*x*x*x*x*x - 0.00005272552109676730000*x*x*x*x + 0.00255001623999080000000*x*x*x - 0.05730592581980960000000*x*x + 3.86656188277121000000000*x + 0.49563250947276000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var enemyMaxDamage = y;
var y = Math.round(-0.00000000440355336700157*x*x*x*x*x*x + 0.00000086177729090568900*x*x*x*x*x - 0.00006385714134651700000*x*x*x*x + 0.00229693842911138000000*x*x*x - 0.04130079300709200000000*x*x + 2.22200477032350000000000*x + 1.57524885260731000000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var enemyMaxAccuracy = y;
var y = Math.round(-0.0000000105031389939503*x*x*x*x*x*x + 0.0000019725061060557600*x*x*x*x*x - 0.0001329995812556250000*x*x*x*x + 0.0040656994058697700000*x*x*x - 0.0573475560674611000000*x*x + 1.2845010740486100000000*x + 2.6770895625945500000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var enemyMaxDodge = y;
var y = Math.round(-0.00000000250024064841516*x*x*x*x*x*x + 0.00000061954797089163300*x*x*x*x*x - 0.00005952258109367230000*x*x*x*x + 0.00276422170688470000000*x*x*x - 0.06321449648215410000000*x*x + 1.38462605534058000000000*x + 26.94518459400360000000000)
if(x >= 36) {
    y = y + 3
}
var enemyBaseStat = y;
var enemyAgilityBonus = Math.floor(enemyBaseStat*enemyMaxDamage/500)
enemyMaxDamage = enemyMaxDamage + enemyAgilityBonus;
var y = Math.round(0.00000000105413310697543*x*x*x*x*x*x - 0.00000022348876884846100*x*x*x*x*x + 0.00001823914139797140000*x*x*x*x - 0.00071920729216234300000*x*x*x + 0.01404570029503710000000*x*x + 0.22988071973963400000000*x + 14.52244210398560000000000)
var enemyMaxStrength = y;
var y = Math.round(0.000000000748840227565543*x*x*x*x*x*x - 0.000000188952071157730000*x*x*x*x*x + 0.000018157955213632700000*x*x*x*x - 0.000823691161223318000000*x*x*x + 0.017662739991529500000000*x*x + 0.399885037814290000000000*x + 19.429265333843900000000000)
var enemyMaxWill = y;
var y = Math.round(-0.0000000000479658884226103*x*x*x*x*x*x + 0.0000000360155501988486000*x*x*x*x*x - 0.0000051156156312349900000*x*x*x*x + 0.0002756987750014770000000*x*x*x - 0.0059459384223045700000000*x*x + 0.7128967085590270000000000*x + 1.9197973198440100000000000)
var enemyMaxResist = y;
var enemyMaxArmor = 0;
} else if(enemyClass === "Witchdoctor") {
var x = enemyLevel
var y = Math.round(-0.000000202337261022423*x*x*x*x*x*x + 0.000047649022275456100*x*x*x*x*x - 0.004223490472170940000*x*x*x*x + 0.170716622244184000000*x*x*x - 2.969595945173440000000*x*x + 47.027152239040200000000*x - 74.371526073011900000000) //Start here
if(x >= 12) {
    y = y + 10
}
if(x >= 28) {
    y = y + 100
}
if(x >= 48) {
    y = y + 200
}
if(x >= 64) {
    y = y + 200
}
enemyMaxHealth = y;
var y = Math.round(-0.00000000736769026083578*x*x*x*x*x*x + 0.00000175546135403569000*x*x*x*x*x - 0.00016166257063643000000*x*x*x*x + 0.00717272647364458000000*x*x*x - 0.15520562049411400000000*x*x + 4.80119147084481000000000*x - 2.38220384548535000000000)
if(x >= 16) {
    y = y + 3
}
if(x >= 32) {
    y = y + 7
}
if(x >= 52) {
    y = y + 15
}
if (x >= 68) {
    y = y + 15
}
var enemyMaxDamage = y;
var y = Math.round(-0.0000000095710033479364*x*x*x*x*x*x + 0.0000017745893267839500*x*x*x*x*x - 0.0001164101342663870000*x*x*x*x + 0.0033551664601481800000*x*x*x - 0.0406847472842830000000*x*x + 1.0833531433007100000000*x + 3.6067700197699100000000)
if(x >= 4) {
    y = y + 2
}
if(x >= 20) {
    y = y + 3
}
if(x >= 40) {
    y = y + 5
}
if (x >= 56) {
    y = y + 5
}
var enemyMaxAccuracy = y;
var y = Math.round(-0.0000000095710033479364*x*x*x*x*x*x + 0.0000017745893267839500*x*x*x*x*x - 0.0001164101342663870000*x*x*x*x + 0.0033551664601481800000*x*x*x - 0.0406847472842830000000*x*x + 1.0833531433007100000000*x + 3.6067700197699100000000)
if(x >= 8) {
    y = y + 2
}
if(x >= 24) {
    y = y + 3
}
if(x >= 44) {
    y = y + 5
}
if (x >= 60) {
    y = y + 5
}
var enemyMaxDodge = y;
var y = Math.round(0.000000000561735904753419*x*x*x*x*x*x - 0.000000072367732826227000*x*x*x*x*x + 0.000000345275962598379000*x*x*x*x + 0.000285588171840252000000*x*x*x - 0.013406941089418000000000*x*x + 0.982839655967618000000000*x + 27.413458807450300000000000)
if(x >= 36) {
    y = y + 3
}
var enemyBaseStat = y;
var enemyWillBonus = Math.floor(enemyBaseStat*enemyMaxDamage/500)
enemyMaxDamage = enemyMaxDamage + enemyWillBonus;
var y = Math.round(0.00000000176927275575504*x*x*x*x*x*x - 0.00000038516423760538500*x*x*x*x*x + 0.00003248063465778900000*x*x*x*x - 0.00133625811503831000000*x*x*x + 0.02763519687593440000000*x*x + 0.09101475646994780000000*x + 14.99927697873590000000000)
var enemyMaxStrength = y;
var y = Math.round(0.000000000284284765649997*x*x*x*x*x*x - 0.000000063219212101828900*x*x*x*x*x + 0.000005526962471440060000*x*x*x*x - 0.000243799779761938000000*x*x*x + 0.005773388194368420000000*x*x + 0.486022339096445000000000*x + 19.326195946250300000000000)
var enemyMaxAgility = y;
var y = Math.round(-0.00000000141387537745327*x*x*x*x*x*x + 0.00000036276570743263400*x*x*x*x*x - 0.00003622708061773840000*x*x*x*x + 0.00175741692659434000000*x*x*x - 0.04207850795238270000000*x*x + 1.35511372556269000000000*x + 0.09550269893872800000000)
var enemyMaxResist = y;
var enemyMaxArmor = 0;
}

// REPLACE APPLICABLE DEFAULT STATS
if(document.getElementById('enemy_hide_checkbox').checked) { //Using default stats
    if(enemyClass !== "Buccaneer" && enemyClass !== "Swashbuckler" && enemyClass !== "Privateer" && enemyClass !== "Musketeer" && enemyClass !== "Witchdoctor" && isNaN(enemyLevel)) {
        alert("To use default stats, please input the class and level of the enemy.");
        return false;
    } else if(enemyClass !== "Buccaneer" && enemyClass !== "Swashbuckler" && enemyClass !== "Privateer" && enemyClass !== "Musketeer" && enemyClass !== "Witchdoctor") {
        alert("To use default stats, please input the class of the enemy.");
        return false;
    } else if(isNaN(enemyLevel)) {
        alert("To use default stats, please input the level of the enemy.");
        return false;
    } //Armor/defense must have been automatically calculated if class and level are unknown. Must be determined if defense should use armor/resist, based on unit class/weapon type.
    if(document.getElementById('buccaneer_checkbox').checked === true || document.getElementById('swashbuckler_checkbox').checked === true || document.getElementById('privateer_selector').style.display === 'inline' && document.getElementById('ranged_privateer').checked === false) { //If unit is a buccaneer, swashbuckler, or not a ranged privateer
        var enemyMaxDefense = enemyMaxArmor;
          } else {
            var enemyMaxDefense = enemyMaxResist;
        }
} else { //Using customized stats
    var enemyHealthInput = document.getElementById('enemy_health').value;
    if(enemyHealthInput.length === 0 || enemyHealthInput < 0) {
        if(enemyMaxHealth === "undefined" || isNaN(enemyMaxHealth)) {
        alert("Accuracy, Dodge, Damage, and Health are required. If any are unknown, please input the class and level of the enemy to calculate default stats.");
        return false;
        }
    } else if(enemyHealthInput >= 0) {
        enemyMaxHealth = parseInt(document.getElementById('enemy_health').value);
    }
    var enemyDamageInput = document.getElementById('enemy_damage').value;
    if(enemyDamageInput.length === 0 || enemyDamageInput < 0) {
        if(enemyMaxDamage === "undefined" || isNaN(enemyMaxDamage)) {
        alert("Accuracy, Dodge, Damage, and Health are required. If any are unknown, please input the class and level of your unit to calculate default stats.");
        return false;
        }
    } else if(enemyDamageInput >= 0) {
        var enemyMaxDamage = parseInt(document.getElementById('enemy_damage').value);
    }
    var enemyAccuracyInput = document.getElementById('enemy_accuracy').value;
    if(enemyAccuracyInput.length === 0 || enemyAccuracyInput < 0) {
        if(enemyMaxAccuracy === "undefined" || isNaN(enemyMaxAccuracy)) {
        alert("Accuracy, Dodge, Damage, and Health are required. If any are unknown, please input the class and level of your unit to calculate default stats.");
        return false;
        }
    } else if(enemyAccuracyInput >= 0) {
         var enemyMaxAccuracy = parseInt(document.getElementById('enemy_accuracy').value);
    }
    var enemyDodgeInput = document.getElementById('enemy_dodge').value;
    if(enemyDodgeInput.length === 0 || enemyDodgeInput < 0) {
        if(enemyMaxDodge === "undefined" || isNaN(enemyMaxDodge)) {
        alert("Accuracy, Dodge, Damage, and Health are required. If any are unknown, please input the class and level of your unit to calculate default stats.");
        return false;
        }
    } else if(enemyDodgeInput >= 0) {
        var enemyMaxDodge = parseInt(document.getElementById('enemy_dodge').value);
    }
    var enemyBaseStatInput = document.getElementById('enemy_base_stat').value;
    if(enemyBaseStatInput.length === 0 || enemyBaseStatInput < 0) { //If no input/invalid input
        if(enemyBaseStat === "undefined" || isNaN(enemyBaseStat)) { //And no class/level selected
        var enemyBaseStat = 0; //Default base stat to zero
        }
    } else if(enemyBaseStatInput >= 0) {
        var enemyBaseStat = parseInt(document.getElementById('enemy_base_stat').value); //Replace
    }
    var enemyDefenseInput = document.getElementById('enemy_defense').value;
    if(enemyDefenseInput.length === 0 || enemyDefenseInput < 0) { //If defense has no input/invalid input
        if(enemyMaxArmor === "undefined" || isNaN(enemyMaxArmor)) { //And armor can't be calculated (and so resist cannot be either)
        var enemyMaxDefense = 0; //Default defense to zero
        } else { //Armor/defense has been calculated
          if(document.getElementById('buccaneer_checkbox').checked === true || document.getElementById('swashbuckler_checkbox').checked === true || document.getElementById('privateer_selector').style.display === 'inline' && document.getElementById('ranged_privateer').checked === false) { //If unit is a buccaneer, swashbuckler, or not a ranged privateer
            var enemyMaxDefense = enemyMaxArmor;
          } else {
            var enemyMaxDefense = enemyMaxResist;
          }
        }
    } else if(enemyDefenseInput >= 0) {
        var enemyMaxDefense = parseInt(document.getElementById('enemy_defense').value); //Replace
    }
}

// CONFIRMATION MESSAGES
if(!showSimulation) {
if(document.getElementById('hide_checkbox').checked) { //If default
    confirmation = confirm("The following stats have been calculated based on the given class and level. Click OK to continue, or click Cancel to change the default stats.\n\n" + unitName + "'s Health: " + unitMaxHealth + "\n" + unitName + "'s Damage: " + unitMaxDamage + "\n" + unitName + "'s Accuracy: " + unitMaxAccuracy + "\n" + unitName + "'s Dodge: " + unitMaxDodge)
    if(!confirmation) {
        return false;
    }
} else { //else customized
    confirmation = confirm("The following stats will be used in the simulations.\n\n" + unitName + "'s Health: " + unitMaxHealth + "\n" + unitName + "'s Damage: " + unitMaxDamage + "\n" + unitName + "'s Accuracy: " + unitMaxAccuracy + "\n" + unitName + "'s Dodge: " + unitMaxDodge)
    if(!confirmation) {
        return false;
    }
}
if(document.getElementById('enemy_hide_checkbox').checked) { //If default
    confirmation = confirm("The following stats have been calculated based on the given class and level. Click OK to continue, or click Cancel to change the default stats.\n\n" + enemyName + "'s Health: " + enemyMaxHealth + "\n" + enemyName + "'s Damage: " + enemyMaxDamage + "\n" + enemyName + "'s Accuracy: " + enemyMaxAccuracy + "\n" + enemyName + "'s Dodge: " + enemyMaxDodge)
    if(!confirmation) {
        return false;
    }
} else { //else customized
    confirmation = confirm("The following stats will be used in the simulations.\n\n" + enemyName + "'s Health: " + enemyMaxHealth + "\n" + enemyName + "'s Damage: " + enemyMaxDamage + "\n" + enemyName + "'s Accuracy: " + enemyMaxAccuracy + "\n" + enemyName + "'s Dodge: " + enemyMaxDodge)
    if(!confirmation) {
        return false;
    }
}
}

// SET EPIC ABILITY RANKS
if(document.getElementById('first_strike').getAttribute('src') === "FirstStrike1.png" || document.getElementById('first_strike').getAttribute('src') === "QuickDraw1.png" || document.getElementById('first_strike').getAttribute('src') === "Intuition1.png") {
    var firstStrikeRank = 1;
} else if(document.getElementById('first_strike').getAttribute('src') === "FirstStrike2.png" || document.getElementById('first_strike').getAttribute('src') === "QuickDraw2.png" || document.getElementById('first_strike').getAttribute('src') === "Intuition2.png") {
    var firstStrikeRank = 2;
} else if(document.getElementById('first_strike').getAttribute('src') === "FirstStrike3.png" || document.getElementById('first_strike').getAttribute('src') === "QuickDraw3.png" || document.getElementById('first_strike').getAttribute('src') === "Intuition3.png") {
    var firstStrikeRank = 3;
} else {
    var firstStrikeRank = 0;
}
if(document.getElementById('riposte').getAttribute('src') === "Riposte1.png" || document.getElementById('riposte').getAttribute('src') === "ReturnFire1.png" || document.getElementById('riposte').getAttribute('src') === "Counterspell1.png") {
    var riposteRank = 1;
} else if(document.getElementById('riposte').getAttribute('src') === "Riposte2.png" || document.getElementById('riposte').getAttribute('src') === "ReturnFire2.png" || document.getElementById('riposte').getAttribute('src') === "Counterspell2.png") {
    var riposteRank = 2;
} else if(document.getElementById('riposte').getAttribute('src') === "Riposte3.png" || document.getElementById('riposte').getAttribute('src') === "ReturnFire3.png" || document.getElementById('riposte').getAttribute('src') === "Counterspell3.png") {
    var riposteRank = 3;
} else {
    var riposteRank = 0;
}
if(document.getElementById('relentless').getAttribute('src') === "Relentless1.png" || document.getElementById('relentless').getAttribute('src') === "BurstFire1.png" || document.getElementById('relentless').getAttribute('src') === "MojoEcho1.png") {
    var relentlessRank = 1;
} else if(document.getElementById('relentless').getAttribute('src') === "Relentless2.png" || document.getElementById('relentless').getAttribute('src') === "BurstFire2.png" || document.getElementById('relentless').getAttribute('src') === "MojoEcho2.png") {
    var relentlessRank = 2;
} else if(document.getElementById('relentless').getAttribute('src') === "Relentless3.png" || document.getElementById('relentless').getAttribute('src') === "BurstFire3.png" || document.getElementById('relentless').getAttribute('src') === "MojoEcho3.png") {
    var relentlessRank = 3;
} else {
    var relentlessRank = 0;
}
if(document.getElementById('blade_storm').getAttribute('src') === "BladeStorm1.png" || document.getElementById('blade_storm').getAttribute('src') === "DoubleTap1.png" || document.getElementById('blade_storm').getAttribute('src') === "MojoRising1.png") {
    var bladeStormRank = 1;
} else if(document.getElementById('blade_storm').getAttribute('src') === "BladeStorm2.png" || document.getElementById('blade_storm').getAttribute('src') === "DoubleTap2.png" || document.getElementById('blade_storm').getAttribute('src') === "MojoRising2.png") {
    var bladeStormRank = 2;
} else if(document.getElementById('blade_storm').getAttribute('src') === "BladeStorm3.png" || document.getElementById('blade_storm').getAttribute('src') === "DoubleTap3.png" || document.getElementById('blade_storm').getAttribute('src') === "MojoRising3.png") {
    var bladeStormRank = 3;
} else {
    var bladeStormRank = 0;
}
if(document.getElementById('second_chance').getAttribute('src') === "SecondChance1.png" || document.getElementById('second_chance').getAttribute('src') === "QuickAdjust1.png" || document.getElementById('second_chance').getAttribute('src') === "JR1.png") {
    var secondChanceRank = 1;
} else if(document.getElementById('second_chance').getAttribute('src') === "SecondChance2.png" || document.getElementById('second_chance').getAttribute('src') === "QuickAdjust2.png" || document.getElementById('second_chance').getAttribute('src') === "JR2.png") {
    var secondChanceRank = 2;
} else if(document.getElementById('second_chance').getAttribute('src') === "SecondChance3.png" || document.getElementById('second_chance').getAttribute('src') === "QuickAdjust3.png" || document.getElementById('second_chance').getAttribute('src') === "JR3.png") {
    var secondChanceRank = 3;
} else {
    var secondChanceRank = 0;
}
if(document.getElementById('vengeance_strike').getAttribute('src') === "VengStrike1.png" || document.getElementById('vengeance_strike').getAttribute('src') === "TrueGrit1.png" || document.getElementById('vengeance_strike').getAttribute('src') === "Retribution1.png") {
    var vengeanceStrikeRank = 1;
} else if(document.getElementById('vengeance_strike').getAttribute('src') === "VengStrike2.png" || document.getElementById('vengeance_strike').getAttribute('src') === "TrueGrit2.png" || document.getElementById('vengeance_strike').getAttribute('src') === "Retribution2.png") {
    var vengeanceStrikeRank = 2;
} else if(document.getElementById('vengeance_strike').getAttribute('src') === "VengStrike3.png" || document.getElementById('vengeance_strike').getAttribute('src') === "TrueGrit3.png" || document.getElementById('vengeance_strike').getAttribute('src') === "Retribution3.png") {
    var vengeanceStrikeRank = 3;
} else {
    var vengeanceStrikeRank = 0;
}
if(document.getElementById('repel_boarders').getAttribute('src') === "RepelBorders1.png" || document.getElementById('repel_boarders').getAttribute('src') === "Overwatch1.png" || document.getElementById('repel_boarders').getAttribute('src') === "ReadiedSpell1.png") {
    var repelBoardersRank = 1;
} else if(document.getElementById('repel_boarders').getAttribute('src') === "RepelBorders2.png" || document.getElementById('repel_boarders').getAttribute('src') === "Overwatch2.png" || document.getElementById('repel_boarders').getAttribute('src') === "ReadiedSpell2.png") {
    var repelBoardersRank = 2;
} else if(document.getElementById('repel_boarders').getAttribute('src') === "RepelBorders3.png" || document.getElementById('repel_boarders').getAttribute('src') === "Overwatch3.png" || document.getElementById('repel_boarders').getAttribute('src') === "ReadiedSpell3.png") {
    var repelBoardersRank = 3;
} else {
    var repelBoardersRank = 0;
}
if(document.getElementById('cheap_shot').getAttribute('src') === "CheapShot1.png" || document.getElementById('cheap_shot').getAttribute('src') === "PartingShot1.png" || document.getElementById('cheap_shot').getAttribute('src') === "Cowardsbane1.png") {
    var cheapShotRank = 1;
} else if(document.getElementById('cheap_shot').getAttribute('src') === "CheapShot2.png" || document.getElementById('cheap_shot').getAttribute('src') === "PartingShot2.png" || document.getElementById('cheap_shot').getAttribute('src') === "Cowardsbane2.png") {
    var cheapShotRank = 2;
} else if(document.getElementById('cheap_shot').getAttribute('src') === "CheapShot3.png" || document.getElementById('cheap_shot').getAttribute('src') === "PartingShot3.png" || document.getElementById('cheap_shot').getAttribute('src') === "Cowardsbane3.png") {
    var cheapShotRank = 3;
} else {
    var cheapShotRank = 0;
}
if(document.getElementById('flanking').getAttribute('src') === "Flanking1.png" || document.getElementById('flanking').getAttribute('src') === "Crossfire1.png" || document.getElementById('flanking').getAttribute('src') === "Doomspell1.png") {
    var flankingRank = 1;
} else if(document.getElementById('flanking').getAttribute('src') === "Flanking2.png" || document.getElementById('flanking').getAttribute('src') === "Crossfire2.png" || document.getElementById('flanking').getAttribute('src') === "Doomspell2.png") {
    var flankingRank = 2;
} else if(document.getElementById('flanking').getAttribute('src') === "Flanking3.png" || document.getElementById('flanking').getAttribute('src') === "Crossfire3.png" || document.getElementById('flanking').getAttribute('src') === "Doomspell3.png") {
    var flankingRank = 3;
} else {
    var flankingRank = 0;
}
if(document.getElementById('hold_the_line').getAttribute('src') === "HTL1.png") {
    var holdTheLineRank = 1;
} else if(document.getElementById('hold_the_line').getAttribute('src') === "HTL2.png") {
    var holdTheLineRank = 2;
} else if(document.getElementById('hold_the_line').getAttribute('src') === "HTL3.png") {
    var holdTheLineRank = 3;
} else {
    var holdTheLineRank = 0;
}
if(document.getElementById('elusive').getAttribute('src') === "Elusive1.png") {
    var elusiveRank = 1;
} else if(document.getElementById('elusive').getAttribute('src') === "Elusive2.png") {
    var elusiveRank = 2;
} else if(document.getElementById('elusive').getAttribute('src') === "Elusive3.png") {
    var elusiveRank = 3;
} else {
    var elusiveRank = 0;
}
if(document.getElementById('turnthetide').getAttribute('src') === "TurnTheTide1.png") {
    var turnTheTideRank = 1;
} else if(document.getElementById('turnthetide').getAttribute('src') === "TurnTheTide2.png") {
    var turnTheTideRank = 2;
} else if(document.getElementById('turnthetide').getAttribute('src') === "TurnTheTide3.png") {
    var turnTheTideRank = 3;
} else {
    var turnTheTideRank = 0;
}
if(document.getElementById('improvedmojoblast').getAttribute('src') === "IMB1.png") {
    var improvedMojoBlastRank = 1;
} else if(document.getElementById('improvedmojoblast').getAttribute('src') === "IMB2.png") {
    var improvedMojoBlastRank = 2;
} else if(document.getElementById('improvedmojoblast').getAttribute('src') === "IMB3.png") {
    var improvedMojoBlastRank = 3;
} else {
    var improvedMojoBlastRank = 0;
}
if(document.getElementById('witchhunter').getAttribute('src') === "WitchHunter1.png") {
    var witchHunterRank = 1;
} else if(document.getElementById('witchhunter').getAttribute('src') === "WitchHunter2.png") {
    var witchHunterRank = 2;
} else if(document.getElementById('witchhunter').getAttribute('src') === "WitchHunter3.png") {
    var witchHunterRank = 3;
} else {
    var witchHunterRank = 0;
}
if(document.getElementById('enemy_witchdoctor_checkbox').checked === false) {
    improvedMojoBlastRank = 0;
    witchHunterRank = 0;
}
    
// SET ENEMY EPIC ABILITY RANKS
if(document.getElementById('enemy_first_strike').getAttribute('src') === "FirstStrike1.png" || document.getElementById('enemy_first_strike').getAttribute('src') === "QuickDraw1.png" || document.getElementById('enemy_first_strike').getAttribute('src') === "Intuition1.png") {
    var enemyFirstStrikeRank = 1;
} else if(document.getElementById('enemy_first_strike').getAttribute('src') === "FirstStrike2.png" || document.getElementById('enemy_first_strike').getAttribute('src') === "QuickDraw2.png" || document.getElementById('enemy_first_strike').getAttribute('src') === "Intuition2.png") {
    var enemyFirstStrikeRank = 2;
} else if(document.getElementById('enemy_first_strike').getAttribute('src') === "FirstStrike3.png" || document.getElementById('enemy_first_strike').getAttribute('src') === "QuickDraw3.png" || document.getElementById('enemy_first_strike').getAttribute('src') === "Intuition3.png") {
    var enemyFirstStrikeRank = 3;
} else {
    var enemyFirstStrikeRank = 0;
}
if(document.getElementById('enemy_riposte').getAttribute('src') === "Riposte1.png" || document.getElementById('enemy_riposte').getAttribute('src') === "ReturnFire1.png" || document.getElementById('enemy_riposte').getAttribute('src') === "Counterspell1.png") {
    var enemyRiposteRank = 1;
} else if(document.getElementById('enemy_riposte').getAttribute('src') === "Riposte2.png" || document.getElementById('enemy_riposte').getAttribute('src') === "ReturnFire2.png" || document.getElementById('enemy_riposte').getAttribute('src') === "Counterspell2.png") {
    var enemyRiposteRank = 2;
} else if(document.getElementById('enemy_riposte').getAttribute('src') === "Riposte3.png" || document.getElementById('enemy_riposte').getAttribute('src') === "ReturnFire3.png" || document.getElementById('enemy_riposte').getAttribute('src') === "Counterspell3.png") {
    var enemyRiposteRank = 3;
} else {
    var enemyRiposteRank = 0;
}
if(document.getElementById('enemy_relentless').getAttribute('src') === "Relentless1.png" || document.getElementById('enemy_relentless').getAttribute('src') === "BurstFire1.png" || document.getElementById('enemy_relentless').getAttribute('src') === "MojoEcho1.png") {
    var enemyRelentlessRank = 1;
} else if(document.getElementById('enemy_relentless').getAttribute('src') === "Relentless2.png" || document.getElementById('enemy_relentless').getAttribute('src') === "BurstFire2.png" || document.getElementById('enemy_relentless').getAttribute('src') === "MojoEcho2.png") {
    var enemyRelentlessRank = 2;
} else if(document.getElementById('enemy_relentless').getAttribute('src') === "Relentless3.png" || document.getElementById('enemy_relentless').getAttribute('src') === "BurstFire3.png" || document.getElementById('enemy_relentless').getAttribute('src') === "MojoEcho3.png") {
    var enemyRelentlessRank = 3;
} else {
    var enemyRelentlessRank = 0;
}
if(document.getElementById('enemy_blade_storm').getAttribute('src') === "BladeStorm1.png" || document.getElementById('enemy_blade_storm').getAttribute('src') === "DoubleTap1.png" || document.getElementById('enemy_blade_storm').getAttribute('src') === "MojoRising1.png") {
    var enemyBladeStormRank = 1;
} else if(document.getElementById('enemy_blade_storm').getAttribute('src') === "BladeStorm2.png" || document.getElementById('enemy_blade_storm').getAttribute('src') === "DoubleTap2.png" || document.getElementById('enemy_blade_storm').getAttribute('src') === "MojoRising2.png") {
    var enemyBladeStormRank = 2;
} else if(document.getElementById('enemy_blade_storm').getAttribute('src') === "BladeStorm3.png" || document.getElementById('enemy_blade_storm').getAttribute('src') === "DoubleTap3.png" || document.getElementById('enemy_blade_storm').getAttribute('src') === "MojoRising3.png") {
    var enemyBladeStormRank = 3;
} else {
    var enemyBladeStormRank = 0;
}
if(document.getElementById('enemy_second_chance').getAttribute('src') === "SecondChance1.png" || document.getElementById('enemy_second_chance').getAttribute('src') === "QuickAdjust1.png" || document.getElementById('enemy_second_chance').getAttribute('src') === "JR1.png") {
    var enemySecondChanceRank = 1;
} else if(document.getElementById('enemy_second_chance').getAttribute('src') === "SecondChance2.png" || document.getElementById('enemy_second_chance').getAttribute('src') === "QuickAdjust2.png" || document.getElementById('enemy_second_chance').getAttribute('src') === "JR2.png") {
    var enemySecondChanceRank = 2;
} else if(document.getElementById('enemy_second_chance').getAttribute('src') === "SecondChance3.png" || document.getElementById('enemy_second_chance').getAttribute('src') === "QuickAdjust3.png" || document.getElementById('enemy_second_chance').getAttribute('src') === "JR3.png") {
    var enemySecondChanceRank = 3;
} else {
    var enemySecondChanceRank = 0;
}
if(document.getElementById('enemy_vengeance_strike').getAttribute('src') === "VengStrike1.png" || document.getElementById('enemy_vengeance_strike').getAttribute('src') === "TrueGrit1.png" || document.getElementById('enemy_vengeance_strike').getAttribute('src') === "Retribution1.png") {
    var enemyVengeanceStrikeRank = 1;
} else if(document.getElementById('enemy_vengeance_strike').getAttribute('src') === "VengStrike2.png" || document.getElementById('enemy_vengeance_strike').getAttribute('src') === "TrueGrit2.png" || document.getElementById('enemy_vengeance_strike').getAttribute('src') === "Retribution2.png") {
    var enemyVengeanceStrikeRank = 2;
} else if(document.getElementById('enemy_vengeance_strike').getAttribute('src') === "VengStrike3.png" || document.getElementById('enemy_vengeance_strike').getAttribute('src') === "TrueGrit3.png" || document.getElementById('enemy_vengeance_strike').getAttribute('src') === "Retribution3.png") {
    var enemyVengeanceStrikeRank = 3;
} else {
    var enemyVengeanceStrikeRank = 0;
}
if(document.getElementById('enemy_repel_boarders').getAttribute('src') === "RepelBorders1.png" || document.getElementById('enemy_repel_boarders').getAttribute('src') === "Overwatch1.png" || document.getElementById('enemy_repel_boarders').getAttribute('src') === "ReadiedSpell1.png") {
    var enemyRepelBoardersRank = 1;
} else if(document.getElementById('enemy_repel_boarders').getAttribute('src') === "RepelBorders2.png" || document.getElementById('enemy_repel_boarders').getAttribute('src') === "Overwatch2.png" || document.getElementById('enemy_repel_boarders').getAttribute('src') === "ReadiedSpell2.png") {
    var enemyRepelBoardersRank = 2;
} else if(document.getElementById('enemy_repel_boarders').getAttribute('src') === "RepelBorders3.png" || document.getElementById('enemy_repel_boarders').getAttribute('src') === "Overwatch3.png" || document.getElementById('enemy_repel_boarders').getAttribute('src') === "ReadiedSpell3.png") {
    var enemyRepelBoardersRank = 3;
} else {
    var enemyRepelBoardersRank = 0;
}
if(document.getElementById('enemy_cheap_shot').getAttribute('src') === "CheapShot1.png" || document.getElementById('enemy_cheap_shot').getAttribute('src') === "PartingShot1.png" || document.getElementById('enemy_cheap_shot').getAttribute('src') === "Cowardsbane1.png") {
    var enemyCheapShotRank = 1;
} else if(document.getElementById('enemy_cheap_shot').getAttribute('src') === "CheapShot2.png" || document.getElementById('enemy_cheap_shot').getAttribute('src') === "PartingShot2.png" || document.getElementById('enemy_cheap_shot').getAttribute('src') === "Cowardsbane2.png") {
    var enemyCheapShotRank = 2;
} else if(document.getElementById('enemy_cheap_shot').getAttribute('src') === "CheapShot3.png" || document.getElementById('enemy_cheap_shot').getAttribute('src') === "PartingShot3.png" || document.getElementById('enemy_cheap_shot').getAttribute('src') === "Cowardsbane3.png") {
    var enemyCheapShotRank = 3;
} else {
    var enemyCheapShotRank = 0;
}
if(document.getElementById('enemy_flanking').getAttribute('src') === "Flanking1.png" || document.getElementById('enemy_flanking').getAttribute('src') === "Crossfire1.png" || document.getElementById('enemy_flanking').getAttribute('src') === "Doomspell1.png") {
    var enemyFlankingRank = 1;
} else if(document.getElementById('enemy_flanking').getAttribute('src') === "Flanking2.png" || document.getElementById('enemy_flanking').getAttribute('src') === "Crossfire2.png" || document.getElementById('enemy_flanking').getAttribute('src') === "Doomspell2.png") {
    var enemyFlankingRank = 2;
} else if(document.getElementById('enemy_flanking').getAttribute('src') === "Flanking3.png" || document.getElementById('enemy_flanking').getAttribute('src') === "Crossfire3.png" || document.getElementById('enemy_flanking').getAttribute('src') === "Doomspell3.png") {
    var enemyFlankingRank = 3;
} else {
    var enemyFlankingRank = 0;
}
if(document.getElementById('enemy_hold_the_line').getAttribute('src') === "HTL1.png") {
    var enemyHoldTheLineRank = 1;
} else if(document.getElementById('enemy_hold_the_line').getAttribute('src') === "HTL2.png") {
    var enemyHoldTheLineRank = 2;
} else if(document.getElementById('enemy_hold_the_line').getAttribute('src') === "HTL3.png") {
    var enemyHoldTheLineRank = 3;
} else {
    var enemyHoldTheLineRank = 0;
}
if(document.getElementById('enemyelusive').getAttribute('src') === "Elusive1.png") {
    var enemyElusiveRank = 1;
} else if(document.getElementById('enemyelusive').getAttribute('src') === "Elusive2.png") {
    var enemyElusiveRank = 2;
} else if(document.getElementById('enemyelusive').getAttribute('src') === "Elusive3.png") {
    var enemyElusiveRank = 3;
} else {
    var enemyElusiveRank = 0;
}
if(document.getElementById('enemyturnthetide').getAttribute('src') === "TurnTheTide1.png") {
    var enemyTurnTheTideRank = 1;
} else if(document.getElementById('enemyturnthetide').getAttribute('src') === "TurnTheTide2.png") {
    var enemyTurnTheTideRank = 2;
} else if(document.getElementById('enemyturnthetide').getAttribute('src') === "TurnTheTide3.png") {
    var enemyTurnTheTideRank = 3;
} else {
    var enemyTurnTheTideRank = 0;
}
if(document.getElementById('enemyimprovedmojoblast').getAttribute('src') === "IMB1.png") {
    var enemyImprovedMojoBlastRank = 1;
} else if(document.getElementById('enemyimprovedmojoblast').getAttribute('src') === "IMB2.png") {
    var enemyImprovedMojoBlastRank = 2;
} else if(document.getElementById('enemyimprovedmojoblast').getAttribute('src') === "IMB3.png") {
    var enemyImprovedMojoBlastRank = 3;
} else {
    var enemyImprovedMojoBlastRank = 0;
}
if(document.getElementById('enemywitchhunter').getAttribute('src') === "WitchHunter1.png") {
    var enemyWitchHunterRank = 1;
} else if(document.getElementById('enemywitchhunter').getAttribute('src') === "WitchHunter2.png") {
    var enemyWitchHunterRank = 2;
} else if(document.getElementById('enemywitchhunter').getAttribute('src') === "WitchHunter3.png") {
    var enemyWitchHunterRank = 3;
} else {
    var enemyWitchHunterRank = 0;
}
if(document.getElementById('witchdoctor_checkbox').checked === false) {
    enemyImprovedMojoBlastRank = 0;
    enemyWitchHunterRank = 0;
}

// SET FUNCTION BASE VALUES
var score = 0;
var total = 0;
var disengageSuccess = 0;
var unitDefeated = 0;
var enemyDefeated = 0;
var disengaging = false;
var enemyDisengaging = false;
var disengagingUnitDefeated = 0;
var disengagingEnemyDefeated = 0;
var approaching = false;
var enemyApproaching = false;
var approachingUnitDefeated = 0;
var approachingEnemyDefeated = 0;
var movedIntoFlanking = false;
var enemyMovedIntoFlanking = false;
var flankingUnitDefeated = 0;
var flankingEnemyDefeated = 0;

// SET WEAPON TYPE
if(unitClass === "Musketeer") {
    var unitDamageType = "ranged"
} else if(unitClass === "Witchdoctor") {
    var unitDamageType = "magical"
} else if(unitClass === "Privateer") {
    if(document.getElementById('ranged_privateer').checked) {
        var unitDamageType = "ranged"
    } else {
        var unitDamageType = "melee" //Assume melee
    }
} else {
    var unitDamageType = "melee"
}

// SET ENEMY WEAPON TYPE
if(enemyClass === "Musketeer") {
    var enemyDamageType = "ranged"
} else if(enemyClass === "Witchdoctor") {
    var enemyDamageType = "magical"
} else if(enemyClass === "Privateer") {
    if(document.getElementById('enemy_ranged_privateer').checked) {
        var enemyDamageType = "ranged"
    } else {
        var enemyDamageType = "melee" //Assume melee
    }
} else {
    var enemyDamageType = "melee"
}

// POWER FUNCTIONS
if(!showSimulation) powerAvailability = true;

if(!showSimulation) activateSuperStrike = false;
var superStrikePrompt = function() {
activateSuperStrike = prompt("Attack with Super Strike?")
if(activateSuperStrike === null) {
    activateSuperStrike = "NO"
} else {
    activateSuperStrike = activateSuperStrike.toUpperCase();
}
checkSuperStrikeFunction();
};
var checkSuperStrikeFunction = function() {
if(activateSuperStrike === "YES") {
    activateSuperStrike = true;
    powerAvailability = false;
    powerName = "Super Strike"
} else if(activateSuperStrike === "NO") {
    activateSuperStrike = false;
} else {
    confirm("Your choice was not recognized. Try again?");
    superStrikePrompt();
}
};

if(!showSimulation) activateMegaStrike = false;
var megaStrikePrompt = function() {
activateMegaStrike = prompt("Attack with Mega Strike?")
if(activateMegaStrike === null) {
    activateMegaStrike = "NO"
} else {
    activateMegaStrike = activateMegaStrike.toUpperCase();
}
checkMegaStrikeFunction();
};
var checkMegaStrikeFunction = function() {
    if(activateMegaStrike === "YES") {
        activateMegaStrike = true;
        powerAvailability = false;
        powerName = "Mega Strike"
    } else if(activateMegaStrike === "NO") {
        activateMegaStrike = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        megaStrikePrompt();
    }
};

if(!showSimulation) activateEpicStrike = false;
var epicStrikePrompt = function() {
activateEpicStrike = prompt("Attack with Epic Strike?")
if(activateEpicStrike === null) {
    activateEpicStrike = "NO"
} else {
    activateEpicStrike = activateEpicStrike.toUpperCase();
}
checkEpicStrikeFunction();
};
var checkEpicStrikeFunction = function() {
    if(activateEpicStrike === "YES") {
        activateEpicStrike = true;
        powerAvailability = false;
        powerName = "Epic Strike"
    } else if(activateEpicStrike === "NO") {
        activateEpicStrike = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        epicStrikePrompt();
    }
};

if(!showSimulation) activateBuccaneerSmash = false;
var buccaneerSmashPrompt = function() {
    activateBuccaneerSmash = prompt("Attack with Buccaneer Smash?")
    if(activateBuccaneerSmash === null) {
        activateBuccaneerSmash = "NO"
    } else {
        activateBuccaneerSmash = activateBuccaneerSmash.toUpperCase();
    }
    checkBuccaneerSmashFunction();
};
var checkBuccaneerSmashFunction = function() {
    if(activateBuccaneerSmash === "YES") {
        activateBuccaneerSmash = true;
        powerAvailability = false;
        powerName = "Buccaneer Smash"
    } else if(activateBuccaneerSmash === "NO") {
        activateBuccaneerSmash = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        buccaneerSmashPrompt();
    }
}

if(!showSimulation) activateSwashbucklersStab = false;
var swashbucklersStabPrompt = function() {
    activateSwashbucklersStab = prompt("Attack with Swashbuckler's Stab?")
    if(activateSwashbucklersStab === null) {
        activateSwashbucklersStab = "NO"
    } else {
        activateSwashbucklersStab = activateSwashbucklersStab.toUpperCase();
    }
    checkSwashbucklersStabFunction();
};
var checkSwashbucklersStabFunction = function() {
    if(activateSwashbucklersStab === "YES") {
        activateSwashbucklersStab = true;
        powerAvailability = false;
        powerName = "Swashbuckler's Stab"
    } else if(activateSwashbucklersStab === "NO") {
        activateSwashbucklersStab = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        swashbucklersStabPrompt();
    }
}

if(!showSimulation) activateSwashbucklersStrike = false;
var swashbucklersStrikePrompt = function() {
    activateSwashbucklersStrike = prompt("Attack with Swashbuckler's Strike?")
    if(activateSwashbucklersStrike === null) {
        activateSwashbucklersStrike = "NO"
    } else {
        activateSwashbucklersStrike = activateSwashbucklersStrike.toUpperCase();
    }
    checkSwashbucklersStrikeFunction();
};
var checkSwashbucklersStrikeFunction = function() {
    if(activateSwashbucklersStrike === "YES") {
        activateSwashbucklersStrike = true;
        powerAvailability = false;
        powerName = "Swashbuckler's Strike"
    } else if(activateSwashbucklersStrike === "NO") {
        activateSwashbucklersStrike= false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        swashbucklersStrikePrompt();
    }
}

if(!showSimulation) activateBackStab = false;
var backStabPrompt = function() {
    activateBackStab = prompt("Attack with Back Stab?")
    if(activateBackStab === null) {
        activateBackStab = "NO"
    } else {
        activateBackStab = activateBackStab.toUpperCase();
    }
    checkBackStabFunction();
};
var checkBackStabFunction = function() {
    if(activateBackStab === "YES") {
        activateBackStab = true;
        powerAvailability = false;
        powerName = "Back Stab"
    } else if(activateBackStab === "NO") {
        activateBackStab = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        backStabPrompt();
    }
}

if(!showSimulation) activateViciousCharge = false;
var viciousChargePrompt = function() {
    activateViciousCharge = prompt("Attack with Vicious Charge?")
    if(activateViciousCharge === null) {
        activateViciousCharge = "NO"
    } else {
        activateViciousCharge = activateViciousCharge.toUpperCase();
    }
    checkViciousChargeFunction();
};
var checkViciousChargeFunction = function() {
    if(activateViciousCharge === "YES") {
        activateViciousCharge = true;
        powerAvailability = false;
        powerName = "Vicious Charge"
    } else if(activateViciousCharge === "NO") {
        activateViciousCharge = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        viciousChargePrompt();
    }
}

if(!showSimulation) activateBuccaneerStrike = false;
var buccaneerStrikePrompt = function() {
    activateBuccaneerStrike = prompt("Attack with Buccaneer Strike?")
    if(activateBuccaneerStrike === null) {
        activateBuccaneerStrike = "NO"
    } else {
        activateBuccaneerStrike = activateBuccaneerStrike.toUpperCase();
    }
    checkBuccaneerStrikeFunction();
};
var checkBuccaneerStrikeFunction = function() {
    if(activateBuccaneerStrike === "YES") {
        activateBuccaneerStrike = true;
        powerAvailability = false;
        powerName = "Buccaneer Strike"
    } else if(activateBuccaneerStrike === "NO") {
        activateBuccaneerStrike = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        buccaneerStrikePrompt();
    }
}

if(!showSimulation) activateBrutalCharge = false;
var brutalChargePrompt = function() {
    activateBrutalCharge = prompt("Attack with Brutal Charge?")
    if(activateBrutalCharge === null) {
        activateBrutalCharge = "NO"
    } else {
        activateBrutalCharge = activateBrutalCharge.toUpperCase();
    }
    checkBrutalChargeFunction();
};
var checkBrutalChargeFunction = function() {
    if(activateBrutalCharge === "YES") {
        activateBrutalCharge = true;
        powerAvailability = false;
        powerName = "Brutal Charge"
    } else if(activateBrutalCharge === "NO") {
        activateBrutalCharge = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        brutalChargePrompt();
    }
}

if(!showSimulation) activateMightyCharge = false;
var mightyChargePrompt = function() {
    activateMightyCharge = prompt("Attack with Mighty Charge?")
    if(activateMightyCharge === null) {
        activateMightyCharge = "NO"
    } else {
        activateMightyCharge = activateMightyCharge.toUpperCase();
    }
    checkMightyChargeFunction();
};
var checkMightyChargeFunction = function() {
    if(activateMightyCharge === "YES") {
        activateMightyCharge = true;
        powerAvailability = false;
        powerName = "Mighty Charge"
    } else if(activateMightyCharge === "NO") {
        activateMightyCharge = false;
    } else {
        confirm("Your choice was not recognized. Try again?");
        mightyChargePrompt();
    }
}

// LIST OF UNITS WITH AVAILABLE POWERS. DATA TAKEN FROM USER ARCHIVE WITH PERMISSION.
if(powerAvailability === true && showSimulation === false) {
if(unitName === "Wagyu Sanjuro" && unitLevel >= 46 || unitName === "Kobe Yojimbo" && unitLevel >= 46 || unitName === "Ratbeard" && unitLevel >= 28 || unitName === "Keisuke Yagi" && unitLevel >= 46 || unitName === "Kan Po" && unitLevel >= 46 || unitName === "Temujin" && unitLevel >= 46 || unitName === "Subodai" && unitLevel >= 46 || unitName === "Zang Cha" && unitLevel >= 46 || unitName === "Egg Shen" && unitLevel >= 46 || unitName === "Kawil Doomclaw" && unitLevel >= 43 || unitName === "Holkun Doomhorn" && unitLevel >= 43 || unitName === "Wing Chun" && unitLevel >= 43 || unitName === "Wu Tang" && unitLevel >= 43 || unitName === "Dead Mike" && unitLevel >= 47 || unitName === "S. M. Arson" && unitLevel >= 47 || unitName === "Lucy Sterling" && unitLevel >= 37 || unitName === "Sarah Steele" && unitLevel >= 37 || unitName === "Gerard" && unitLevel >= 37 || unitName === "Barnabus" && unitLevel >= 37 || unitName === "Malik" && unitLevel >= 47 || unitName === "Milo Graytail" && unitLevel >= 47 || unitName === "Giordano Bravo" && unitLevel >= 47 || unitName === "Gaspard de Vole" && unitLevel >= 47 || unitName === "Sergeant Shepherd" && unitLevel >= 47 || unitName === "Lucky Jack Russell" && unitLevel >= 47 || unitName === "Caracticus" && unitLevel >= 47 || unitName === "Birgus Latro" && unitLevel >= 47 || unitName === "Fan Flanders" && unitLevel >= 49 || unitName === "The Marchioness" && unitLevel >= 49 || unitName === "Peter Quint" && unitLevel >= 49) {
    superStrikePrompt();
} else if(unitName === "Wagyu Sanjuro" && unitLevel >= 13 || unitName === "Kobe Yojimbo" && unitLevel >= 13 || unitName === "Ratbeard" && unitLevel >= 10 || unitName === "Keisuke Yagi" && unitLevel >= 13 || unitName === "Kan Po" && unitLevel >= 13 || unitName === "Temujin" && unitLevel >= 13 || unitName === "Subodai" && unitLevel >= 13 || unitName === "Zang Cha" && unitLevel >= 13 || unitName === "Egg Shen" && unitLevel >= 13 || unitName === "Kawil Doomclaw" && unitLevel >= 24 || unitName === "Holkun Doomhorn" && unitLevel >= 24 || unitName === "Wing Chun" && unitLevel >= 13 || unitName === "Wu Tang" && unitLevel >= 13 || unitName === "Dead Mike" && unitLevel >= 21 || unitName === "S. M. Arson" && unitLevel >= 21 || unitName === "Lucy Sterling" && unitLevel >= 15 || unitName === "Sarah Steele" && unitLevel >= 15 || unitName === "Gerard" && unitLevel >= 15 || unitName === "Barnabus" && unitLevel >= 15 || unitName === "Malik" && unitLevel >= 21 || unitName === "Milo Graytail" && unitLevel >= 21 || unitName === "Giordano Bravo" && unitLevel >= 21 || unitName === "Gaspard de Vole" && unitLevel >= 21 || unitName === "Sergeant Shepherd" && unitLevel >= 21 || unitName === "Lucky Jack Russell" && unitLevel >= 21 || unitName === "Caraticus" && unitLevel >= 21 || unitName === "Birgus Latro" && unitLevel >= 21 || unitName === "Fan Flanders" && unitLevel >= 17 || unitName === "The Marchioness" && unitLevel >= 17 || unitName === "Peter Quint" && unitLevel >= 17 || unitName === "Catbeard" && unitLevel >= 70) {
    megaStrikePrompt();
} else if(unitName === "Wagyu Sanjuro" && unitLevel < 13 || unitName === "Kobe Yojimbo" && unitLevel < 13 || unitName === "Ratbeard" && unitLevel < 10 || unitName === "Keisuke Yagi" && unitLevel < 13 || unitName === "Kan Po" && unitLevel < 13 || unitName === "Temujin" && unitLevel < 13 || unitName === "Subodai" && unitLevel < 13 || unitName === "Zang Cha" && unitLevel < 13 || unitName === "Egg Shen" && unitLevel < 13 || unitName === "Kawil Doomclaw" && unitLevel < 24 || unitName === "Holkun Doomhorn" && unitLevel < 24 || unitName === "Wing Chun" && unitLevel < 13 || unitName === "Wu Tang" && unitLevel < 13 || unitName === "Dead Mike" && unitLevel < 21 || unitName === "S. M. Arson" && unitLevel < 21 || unitName === "Lucy Sterling" && unitLevel < 15 || unitName === "Sarah Steele" && unitLevel < 15 || unitName === "Gerard" && unitLevel < 15 || unitName === "Barnabus" && unitLevel < 15 || unitName === "Malik" && unitLevel < 21 || unitName === "Milo Graytail" && unitLevel < 21 || unitName === "Giordano Bravo" && unitLevel < 21 || unitName === "Gaspard de Vole" && unitLevel < 21 || unitName === "Sergeant Shepherd" && unitLevel < 21 || unitName === "Lucky Jack Russell" && unitLevel < 21 || unitName === "Caraticus" && unitLevel < 21 || unitName === "Birgus Latro" && unitLevel < 21 || unitName === "Fan Flanders" && unitLevel < 17 || unitName === "The Marchioness" && unitLevel < 17 || unitName === "Peter Quint" && unitLevel < 17 || unitName === "Catbeard" && unitLevel < 70 || unitName === "Gracie Conrad" || unitName === "Argos" || unitName === "Eagle Hoptile" || unitName === "Bagha Khan" || unitName === "Samocles" || unitName === "Fin Dorsal" || unitName === "Cutthroat Pirate" || unitName === "Romba" || unitName === "Tyson" || unitName === "Hawkules" || unitName === "Shiruku Neko" || unitName === "Nanu Nanu" && unitLevel >= 30 || unitName === "Thunder Hoof" || unitName === "Monquistador Veteran" || unitName === "Ridolfo Capoferro" && unitLevel >= 27) {
    epicStrikePrompt();
    }
}
if(powerAvailability === true && showSimulation === false) {
    if(unitName === "Ratbeard" && unitLevel >= 55 || unitName === "Subodai" && unitLevel >= 46 || unitName === "Temujin" && unitLevel >= 46 || unitName === "Egg Shen" && unitLevel >= 46 || unitName === "Zang Cha" && unitLevel >= 46) {
        buccaneerSmashPrompt();
    } else if(unitName === "Kobe Yojimbo" && unitLevel >= 46 || unitName === "Wagyu Sanjuro" && unitLevel >= 46 || unitName === "Sarah Steele" && unitLevel >= 37 || unitName === "Lucy Sterling" && unitLevel >= 37) {
        swashbucklersStabPrompt();
    } else if(unitName === "Kobe Yojimbo" && unitLevel >= 13 || unitName === "Wagyu Sanjuro" && unitLevel >= 13 || unitName === "Sarah Steele" && unitLevel >= 15 || unitName === "Lucy Sterling" && unitLevel >= 15) {
        swashbucklersStrikePrompt();
    } else if(unitName === "Contessa Argento") {
        backStabPrompt();
    } else if(unitName === "Goronado") {
        viciousChargePrompt();
    } else if(unitName === "Barnabus" && unitLevel >= 37 || unitName === "Gerard" && unitLevel >= 37 || unitName === "Peter Quint" && unitLevel >= 49) {
        brutalChargePrompt();
    } else if(unitName === "Barnabus" && unitLevel < 37 || unitName === "Gerard" && unitLevel < 37 || unitName === "Peter Quint" && unitLevel >= 17) {
        mightyChargePrompt();
    } else if(unitName === "Hoodoo Cornelius") {
        goBananasPrompt();
    } else if(unitName === "Egg Shen" && unitLevel >= 13 || unitName === "Zang Cha" && unitLevel >= 13 || unitName === "Subodai" && unitLevel >= 13 || unitName === "Temujin" && unitLevel >= 13 || unitName === "Ratbeard" && unitLevel >= 28) {
        buccaneerStrikePrompt();
    }
}
if(powerAvailability === true && showSimulation === false) {
    if(unitName === "Barnabus" && unitLevel >= 15 || unitName === "Gerard" && unitLevel >= 15) {
        buccaneerStrikePrompt();
    }
}

if(powerAvailability === true && showSimulation === false) {
    if(unitName === "Chantal Livingstone" && unitLevel >= 49 || unitName === "Nausica" && unitLevel >= 45 || unitName === "Louis le Bisque" && unitLevel >= 37 || unitName === "Pepe DeTorteau" && unitLevel >= 37 || unitName === "Commander Emmett" || unitName === "Emmett" && unitLevel >= 37 || unitName === "Exter" && unitLevel >= 37) {
        superStrikePrompt();
    } else if(unitName === "Chantal Livingstone" && unitLevel >= 17 || unitName === "Nausica" && unitLevel >= 25 || unitName === "Louis le Bisque" && unitLevel >= 15 || unitName === "Pepe DeTorteau" && unitLevel >= 15 || unitName === "Lieutenant Emmett" || unitName === "Emmett" && unitLevel >= 15 || unitName === "Exter" && unitLevel >= 15 || unitName === "Tricky Vinny" && unitLevel >= 56) {
        megaStrikePrompt();
    } else if(unitName === "Chantal Livingstone" && unitLevel < 17 || unitName === "Nausica" && unitLevel < 25 || unitName === "Louis le Bisque" && unitLevel < 15 || unitName === "Pepe DeTorteau" && unitLevel < 15 || unitName === "Ensign Emmett" || unitName === "Emmett" && unitLevel < 15 || unitName === "Exter" && unitLevel < 15 || unitName === "Zeena" || unitName === "Chicken Sheriff" || unitName === "Sergeant Sanders" && unitLevel >= 55 || unitName === "Bison Hunter" || unitName === "Eagle Archer" || unitName === "Kzinti Singh" || unitName === "Tricky Vinny" && unitLevel >= 30 || unitName ==- "Bones McGee" && unitLevel >= 22 || unitName === "Lefty" && unitLevel >= 34 || unitName === unitName === "Skyfire" && unitLevel >= 35 || unitName === "Monquistador Sharpshooter") {
        epicStrikePrompt();
    }
}

// COMBAT FUNCTION - CORE ASPECT OF CODE, SIMULATES COMBAT BETWEEN TWO UNITS WITH INPUTTED DATA

var combat = function() {

var unitHealth = unitMaxHealth
var unitDamage = unitMaxDamage
var unitAccuracy = unitMaxAccuracy
var unitDodge = unitMaxDodge
var unitDefense = unitMaxDefense

// CHOOSE ENEMY STATS
var enemyHealth = enemyMaxHealth
var enemyDamage = enemyMaxDamage
var enemyAccuracy = enemyMaxAccuracy
var enemyDodge = enemyMaxDodge
var enemyDefense = enemyMaxDefense

var enemyFirstStrike = true;
if(enemyFirstStrikeRank === 1) {
    var enemyFirstStrikeCount = 1;
} else if(enemyFirstStrikeRank > 1) {
    var enemyFirstStrikeCount = 3;
} else {
    var enemyFirstStrikeCount = 0;
}

var enemyRiposte = true;
if(enemyRiposteRank === 1) {
    var enemyRiposteCount = 1;
} else if(enemyRiposteRank > 1) {
    var enemyRiposteCount = 3;
} else {
    var enemyRiposteCount = 0;
}

var enemyRelentless = true;
if(enemyRelentlessRank === 1) {
    var enemyRelentlessCount = 1;
} else if(enemyRelentlessRank > 1) {
    var enemyRelentlessCount = 3;
} else {
    var enemyRelentlessCount = 0;
}

var enemyBladeStorm = true;
if(enemyBladeStormRank === 1) {
    var enemyBladeStormCount = 1;
} else if(enemyBladeStormRank > 1) {
    var enemyBladeStormCount = 3;
} else {
    var enemyBladeStormCount = 0;
}

var enemySecondChance = true;
if(enemySecondChanceRank === 1) {
    var enemySecondChanceCount = 1;
} else if(enemySecondChanceRank > 1) {
    var enemySecondChanceCount = 3;
} else {
    var enemySecondChanceCount = 0;
}

var enemyVengeanceStrike = true;
if(enemyVengeanceStrikeRank === 1) {
    var enemyVengeanceStrikeCount = 1;
} else if(enemyVengeanceStrikeRank > 1) {
    var enemyVengeanceStrikeCount = 3;
} else {
    var enemyVengeanceStrikeCount = 0;
}

var enemyRepelBoarders = true;
if(enemyRepelBoardersRank === 1) {
    var enemyRepelBoardersCount = 1;
} else if(enemyRepelBoardersRank > 1) {
    var enemyRepelBoardersCount = 3;
} else {
    var enemyRepelBoardersCount = 0;
}

var enemyCheapShot = true;
if(enemyCheapShotRank === 1) {
    var enemyCheapShotCount = 1;
} else if(enemyCheapShotRank > 1) {
    var enemyCheapShotCount = 3;
} else {
    var enemyCheapShotCount = 0;
}

var enemyFlanking = true;
if(enemyFlankingRank === 1) {
    var enemyFlankingCount = 1;
} else if(enemyFlankingRank > 1) {
    var enemyFlankingCount = 3;
} else {
    var enemyFlankingCount = 0;
}

var enemyHoldTheLine = true;
if(enemyHoldTheLineRank === 1) {
    var enemyHoldTheLineCount = 1;
} else if(enemyHoldTheLineRank > 1) {
    var enemyHoldTheLineCount = 3;
} else {
    var enemyHoldTheLineCount = 0;
}

if(enemyImprovedMojoBlastRank === 3) {
    enemyDamage = enemyDamage*1.1;
}
    
var enemyWitchHunter = true;
if(enemyWitchHunterRank === 1) {
    var enemyWitchHunterCount = 1;
} else if(enemyWitchHunterRank > 1) {
    var enemyWitchHunterCount = 3;
} else {
    var enemyWitchHunterCount = 0;
}

var firstStrike = true;
if(firstStrikeRank === 1) {
    var firstStrikeCount = 1;
} else if(firstStrikeRank > 1) {
    var firstStrikeCount = 3;
} else {
    var firstStrikeCount = 0;
}

var riposte = true;
if(riposteRank === 1) {
    var riposteCount = 1;
} else if(riposteRank > 1) {
    var riposteCount = 3;
} else {
    var riposteCount = 0;
}

var relentless = true;
if(relentlessRank === 1) {
    var relentlessCount = 1;
} else if(relentlessRank > 1) {
    var relentlessCount = 3;
} else {
    var relentlessCount = 0;
}

var bladeStorm = true;
if(bladeStormRank === 1) {
    var bladeStormCount = 1;
} else if(bladeStormRank > 1) {
    var bladeStormCount = 3;
} else {
    var bladeStormCount = 0;
}

var secondChance = true;
if(secondChanceRank === 1) {
    var secondChanceCount = 1;
} else if(secondChanceRank > 1) {
    var secondChanceCount = 3;
} else {
    var secondChanceCount = 0;
}

var vengeanceStrike = true;
if(vengeanceStrikeRank === 1) {
    var vengeanceStrikeCount = 1;
} else if(vengeanceStrikeRank > 1) {
    var vengeanceStrikeCount = 3;
} else {
    var vengeanceStrikeCount = 0;
}

var repelBoarders = true;
if(repelBoardersRank === 1) {
    var repelBoardersCount = 1;
} else if(repelBoardersRank > 1) {
    var repelBoardersCount = 3;
} else {
    var repelBoardersCount = 0;
}

var cheapShot = true;
if(cheapShotRank === 1) {
    var cheapShotCount = 1;
} else if(cheapShotRank > 1) {
    var cheapShotCount = 3;
} else {
    var cheapShotCount = 0;
}

var flanking = true;
if(flankingRank === 1) {
    var flankingCount = 1;
} else if(flankingRank > 1) {
    var flankingCount = 3;
} else {
    var flankingCount = 0
}

var holdTheLine = true;
if(holdTheLineRank === 1) {
    var holdTheLineCount = 1;
} else if(holdTheLineRank > 1) {
    var holdTheLineCount = 3;
} else {
    var holdTheLineCount = 0;
}
    
if(improvedMojoBlastRank === 3) {
    unitDamage = unitDamage*1.1;
}
    
var witchHunter = true;
if(witchHunterRank === 1) {
    var witchHunterCount = 1;
} else if(witchHunterRank > 1) {
    var witchHunterCount = 3;
} else {
    var witchHunterCount = 0;
}

var missCounter = 0;
var enemyMissCounter = 0;

var hitCounter = 0;
var enemyHitCounter = 0;

var secondChanceCounter = 0;
var enemySecondChanceCounter = 0;

var vengeanceStrikeCounter = 0;
var enemyVengeanceStrikeCounter = 0;

var criticalHitMultiplier = 1;
var enemyCriticalHitMultiplier = 1;

var damageCalculation = 0;
var resistRoller = 0;
var resistCalculation = 0;
var netDamage = 0;
    
var damageMultiplier = 1;
var enemyDamageMultiplier = 1;
var powerMultiplier = 1;
    
var epicAbilityMultiplier = 1;
var enemyEpicAbilityMultiplier = 1;
    
// Important note -- with different trigger times, damage values, built-in parameters, functionality, etc. of each epic ability, an abstraction down to a single function does not seem plausible; therefore, each ability has its own function.
    
var hitFunction = function() {
    damageMultiplier = 1;
    var hitChance = unitAccuracy + 75 - enemyDodge;
    if(hitChance > 100) {
        hitChance = 100;
    } else if(hitChance < 0) {
        hitChance = 0;
    }
    var randomHitChance = Math.random()*100;
    if(randomHitChance < 2.5) { // Less than 2.5
        randomHitChance = randomHitChance + 100; // randomHitChance (above 100) cannot be less than hitChance (capped at 100), so attackSuccess will be false (i.e. the hit will miss). Otherwise, the hit likely would have landed because randomHitChance is so low.
    } else if(randomHitChance > 97.5) { // Between 97.5 and 100
        randomHitChance = randomHitChance - 100; // randomHitChance (less than 0) must be less than hitChance (minimum of 0), so attackSuccess will be true (i.e. the hit will land). Otherwise, the hit likely would have missed because randomHitChance is so high.
    }
    if(randomHitChance < hitChance) {
        attackSuccess = true;
        var criticalRoll = Math.random()*100
        if(criticalRoll < 4) {
            criticalHitMultiplier = 2;
            criticalType = " and lands a Super Hit!"
        } else if(criticalRoll < 9) {
            criticalHitMultiplier = 5/3;
            criticalType = " and lands a Mega Hit!"
        } else if(criticalRoll < 17) {
            criticalHitMultiplier = 4/3;
            criticalType = " and lands a Epic Hit!"
        } else {
            criticalHitMultiplier = 1;
            criticalType = "."
        }
    } else {
        attackSuccess = false;
        missCounter = missCounter + 1;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " activates " + attackType + " and misses!"
    }
    if(criticalRoll < 17) {
        activateBladeStorm = true;
    } else {
        damageMultiplier = Math.random()*100;
        if(damageMultiplier < 200/3) {
            damageMultiplier = 1;
        } else if(damageMultiplier < (200/3) + 2) {
            damageMultiplier = 1/2;
        } else if(damageMultiplier < (200/3) + 2 + (47/3)) {
            damageMultiplier = 3/4;
        } else {
            damageMultiplier = 5/4;
        }
    }
};

var enemyHitFunction = function() {
    enemyDamageMultiplier = 1;
    var hitChance = enemyAccuracy + 75 - unitDodge;
    if(hitChance > 100) {
        hitChance = 100;
    } else if(hitChance < 0) {
        hitChance = 0;
    }
    var randomHitChance = Math.random()*100;
    if(randomHitChance < 2.5) { // Less than 2.5
        randomHitChance = randomHitChance + 100; // randomHitChance (above 100) cannot be less than hitChance (capped at 100), so attackSuccess will be false (i.e. the hit will miss). Otherwise, the hit likely would have landed because randomHitChance is so low.
    } else if(randomHitChance > 97.5) { // Between 97.5 and 100
        randomHitChance = randomHitChance - 100; // randomHitChance (less than 0) must be less than hitChance (minimum of 0), so attackSuccess will be true (i.e. the hit will land). Otherwise, the hit likely would have missed because randomHitChance is so high.
    }
    if(randomHitChance < hitChance) {
        attackSuccess = true;
        var enemyCriticalRoll = Math.random()*100
        if(enemyCriticalRoll < 4) {
            enemyCriticalHitMultiplier = 2;
            criticalType = " and lands a Super Hit!"
        } else if(enemyCriticalRoll < 9) {
            enemyCriticalHitMultiplier = 5/3;
            criticalType = " and lands a Mega Hit!"
        } else if(enemyCriticalRoll < 17) {
            enemyCriticalHitMultiplier = 4/3;
            criticalType = " and lands a Epic Hit!"
        } else {
            enemyCriticalHitMultiplier = 1;
            criticalType = "."
        }
    } else {
        attackSuccess = false;
        enemyMissCounter = enemyMissCounter + 1;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " activates " + attackType + " and misses!"
    }
    if(enemyCriticalRoll < 17) {
        activateEnemyBladeStorm = true;
    } else {
        enemyDamageMultiplier = Math.random()*100;
        if(enemyDamageMultiplier < 200/3) {
            enemyDamageMultiplier = 1;
        } else if(enemyDamageMultiplier < (200/3) + 2) {
            enemyDamageMultiplier = 1/2;
        } else if(enemyDamageMultiplier < (200/3) + 2 + (47/3)) {
            enemyDamageMultiplier = 3/4;
        } else {
            enemyDamageMultiplier = 5/4;
        }
    }
};

var checkHealth = function() {
if(unitHealth <= 0 || enemyHealth <= 0) {
    attacking = false;
    enemyAttacking = false;
}
};
     
var dealDamageToUnit = function() {
    damageCalculation = Math.floor(enemyDamage*enemyDamageMultiplier*enemyCriticalHitMultiplier*enemyEpicAbilityMultiplier) //Damage from attack
    resistRoller = Math.floor(Math.random()*51+75)/100 //Random number between 0.75 and 1.25
    resistCalculation = Math.floor(resistRoller*unitDefense) //Portion of resist
    if(damageCalculation > resistCalculation) { //If damage dealt is higher than can be resisted
        netDamage = damageCalculation - resistCalculation //New damage
        unitHealth = unitHealth - netDamage //Deal damage
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " hits with " + attackType + criticalType
    } else {
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " hits with " + attackType + ", but the attack is resisted!"
    }
    damageCalculation = 0;
    resistRoller = 0;
    resistCalculation = 0;
    netDamage = 0;
    enemyEpicAbilityMultiplier = 1;
}

var dealDamageToEnemy = function() {
    damageCalculation = Math.floor(unitDamage*damageMultiplier*criticalHitMultiplier*epicAbilityMultiplier) //Damage from attack
    resistRoller = Math.floor(Math.random()*51+75)/100 //Random number between 0.75 and 1.25
    resistCalculation = Math.floor(resistRoller*enemyDefense) //Portion of resist
    if(damageCalculation > resistCalculation) { //If damage dealt is higher than can be resisted
        netDamage = damageCalculation - resistCalculation //New damage
        enemyHealth = enemyHealth - netDamage //Deal damage
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " hits with " + attackType + criticalType
    } else {
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " hits with " + attackType + ", but the attack is resisted!"
    }
    damageCalculation = 0;
    resistRoller = 0;
    resistCalculation = 0;
    netDamage = 0;
}

var turnTheTideFunction = function() {
    if(unitHealth < unitMaxHealth*0.5 && turnTheTide === false) {
        if(turnTheTideRank > 0) {
            if(turnTheTideRank === 1) {
                turnTheTide = true;
                unitDamage = unitDamage*1.25;
            } else if(turnTheTideRank === 2) {
                turnTheTide = true;
                unitDamage = unitDamage*1.25;
                unitAccuracy = unitAccuracy*1.25;
            } else {
                turnTheTide = true;
                unitDamage = unitDamage*1.25;
                unitAccuracy = unitAccuracy*1.25;
                unitDodge = unitDodge*1.25;
            }
        }
        if(elusiveRank > 0) {
            if(elusiveRank === 1 || elusiveRank === 2) {
                turnTheTide = true;
                unitDodge = unitDodge*1.25;
            } else {
                turnTheTide = true;
                unitDodge = unitDodge*1.5;
            }
        }
    }
};

var enemyTurnTheTideFunction = function() {
if(enemyHealth < enemyMaxHealth*0.5 && enemyTurnTheTide === false) {
    if(enemyTurnTheTideRank > 0) {
            if(enemyTurnTheTideRank === 1) {
                enemyTurnTheTide = true;
                enemyDamage = enemyDamage*1.25;
            } else if(enemyTurnTheTideRank === 2) {
                enemyTurnTheTide = true;
                enemyDamage = enemyDamage*1.25;
                enemyAccuracy = enemyAccuracy*1.25;
            } else {
                enemyTurnTheTide = true;
                enemyDamage = enemyDamage*1.25;
                enemyAccuracy = enemyAccuracy*1.25;
                enemyDodge = enemyDodge*1.25;
            }
        }
        if(enemyElusiveRank > 0) {
            if(enemyElusiveRank === 1 || enemyElusiveRank === 2) {
                turnTheTide = true;
                enemyDodge = enemyDodge*1.25;
            } else {
                turnTheTide = true;
                enemyDodge = enemyDodge*1.5;
            }
        }
    }
};

var relentlessFunction = function() {
// Relentless Algorithm
checkHealth();
if(activateRelentless === true && relentless === true && relentlessCount > 0 && attacking === true) {
    relentlessCount = relentlessCount - 1;
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Relentless";
    } else if(unitDamageType === "ranged") {
        attackType = "Burst Fire"
    } else {
        attackType = "Mojo Echo"
    }
    hitFunction();
    if(attackSuccess === true) {
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        activateRelentless = false;
        bladeStormFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            }
        }
            enemyVengeanceStrikeFunction();
    } else {
        activateRelentless = false;
        enemyRiposteFunction();
    }
    }
} else {
}
checkHealth();
if(activateRelentless === true && relentless === true && relentlessCount > 0 && attacking === true) {
    relentlessCount = relentlessCount - 1;
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Relentless";
    } else if(unitDamageType === "ranged") {
        attackType = "Burst Fire"
    } else {
        attackType = "Mojo Echo"
    }
    hitFunction();
    if(attackSuccess === true) {
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        activateRelentless = false;
        bladeStormFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            }
        }
            enemyVengeanceStrikeFunction();
    } else {
        activateRelentless = false;
        enemyRiposteFunction();
    }
    }
} else {
}
checkHealth();
if(activateRelentless === true && relentless === true && relentlessCount > 0 && attacking === true) {
    relentlessCount = relentlessCount - 1;
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Relentless";
    } else if(unitDamageType === "ranged") {
        attackType = "Burst Fire"
    } else {
        attackType = "Mojo Echo"
    }
    hitFunction();
    if(attackSuccess === true) {
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        activateRelentless = false;
        bladeStormFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            }
        }
        enemyVengeanceStrikeFunction();
    } else {
        activateRelentless = false;
        enemyRiposteFunction();
    }
    }
} else {
}
};

var enemyRelentlessFunction = function() {
    // Enemy Relentless Algorithm
checkHealth();
if(activateEnemyRelentless === true && enemyRelentless === true && enemyRelentlessCount > 0 && enemyAttacking === true) {
    enemyRelentlessCount = enemyRelentlessCount - 1;
    witchHunterFunction();
    firstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Relentless";
    } else if(enemyDamageType === "ranged") {
        attackType = "Burst Fire"
    } else {
        attackType = "Mojo Echo"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        activateEnemyRelentless = false;
        enemyBladeStormFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            }
        }
        vengeanceStrikeFunction();
    } else {
        activateEnemyRelentless = false;
        riposteFunction();
    }
    }
}
checkHealth();
if(activateEnemyRelentless === true && enemyRelentless === true && enemyRelentlessCount > 0 && enemyAttacking === true) {
    enemyRelentlessCount = enemyRelentlessCount - 1;
    witchHunterFunction();
    firstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Relentless";
    } else if(enemyDamageType === "ranged") {
        attackType = "Burst Fire"
    } else {
        attackType = "Mojo Echo"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        activateEnemyRelentless = false;
        enemyBladeStormFunction();
       var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            }
        }
        vengeanceStrikeFunction();
    } else {
        activateEnemyRelentless = false;
        riposteFunction();
    }
    }
}
checkHealth();
if(activateEnemyRelentless === true && enemyRelentless === true && enemyRelentlessCount > 0 && enemyAttacking === true) {
    enemyRelentlessCount = enemyRelentlessCount - 1;
    witchHunterFunction();
    firstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Relentless";
    } else if(enemyDamageType === "ranged") {
        attackType = "Burst Fire"
    } else {
        attackType = "Mojo Echo"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        activateEnemyRelentless = false;
        enemyBladeStormFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            }
        }
        vengeanceStrikeFunction();
    } else {
        activateEnemyRelentless = false;
        riposteFunction();
    }
    }
}
};

var firstStrikeFunction = function() {
    // First Strike Algorithm
checkHealth();
if(firstStrike === true && firstStrikeCount > 0 && attacking === true && unitDamageType === enemyDamageType) {
    if(skipFirstStrike === false) {
    if(unitDamageType === "melee") {
        attackType = "First Strike";
    } else if(unitDamageType === "ranged") {
        attackType = "Quick Draw"
    } else {
        attackType = "Intuition"
    }
    firstStrikeCount = firstStrikeCount - 1;
    if(firstStrikeRank === 3) {
        var firstStrikeMultiplier = 1.25;
    } else {
        var firstStrikeMultiplier = 1;
    }
    damageMultiplier = 1;
    var hitChance2 = unitAccuracy + 75 - enemyDodge;
    if(hitChance2 > 100) {
        hitChance2 = 100;
    } else if(hitChance2 < 0) {
        hitChance2 = 0;
    }
    var randomHitChance2 = Math.random()*100;
    if(randomHitChance2 < 2.5) { // Less than 2.5
        randomHitChance2 = randomHitChance2 + 100; // randomHitChance (above 100) cannot be less than hitChance (capped at 100), so attackSuccess will be false (i.e. the hit will miss). Otherwise, the hit likely would have landed because randomHitChance is so low.
    } else if(randomHitChance2 > 97.5) { // Between 97.5 and 100
        randomHitChance2 = randomHitChance2 - 100; // randomHitChance (less than 0) must be less than hitChance (minimum of 0), so attackSuccess will be true (i.e. the hit will land). Otherwise, the hit likely would have missed because randomHitChance is so high.
    }
    if(randomHitChance2 < hitChance2) {
        attackSuccess2 = true;
        var criticalRoll = Math.random()*100
        if(criticalRoll < 4) {
            criticalHitMultiplier = 2;
            criticalType = " and lands a Super Hit!"
        } else if(criticalRoll < 9) {
            criticalHitMultiplier = 5/3;
            criticalType = " and lands a Mega Hit!"
        } else if(criticalRoll < 17) {
            criticalHitMultiplier = 4/3;
            criticalType = " and lands an Epic Hit!"
        } else {
            criticalHitMultiplier = 1;
            criticalType = "."
            damageMultiplier = Math.random()*100;
            if(damageMultiplier < 200/3) {
            damageMultiplier = 1;
            } else if(damageMultiplier < (200/3) + 2) {
            damageMultiplier = 1/2;
            } else if(damageMultiplier < (200/3) + 2 + (47/3)) {
            damageMultiplier = 3/4;
            } else {
            damageMultiplier = 5/4;
            }
        }
        damageCalculation = Math.floor(unitDamage*2/3*damageMultiplier*firstStrikeMultiplier*criticalHitMultiplier) //Damage from attack
        resistRoller = Math.floor(Math.random()*51+75)/100 //Random number between 0.75 and 1.25
        resistCalculation = Math.floor(resistRoller*enemyDefense) //Portion of resist
        if(damageCalculation > resistCalculation) { //If damage dealt is higher than can be resisted
        netDamage = damageCalculation - resistCalculation //New damage
        enemyHealth = enemyHealth - netDamage //Deal damage
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " hits with " + attackType + criticalType
        } else {
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " hits with " + attackType + ", but the attack is resisted!"
        }
        damageCalculation = 0;
        resistRoller = 0;
        resistCalculation = 0;
        netDamage = 0;
        skipFirstStrike = true;
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        if(criticalHitMultiplier > 1) {
            activateBladeStorm = true;
            bladeStormFunction();
        } else {
        }
        criticalHitMultiplier = 1;
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
    } else {
        attackSuccess2 = false;
        missCounter = missCounter + 1;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " activates " + attackType + " and misses!"
        enemyRiposteFunction();
    }
}
}
};

var enemyFirstStrikeFunction = function() {
    // Enemy First Strike Algorithm
checkHealth();
if(enemyFirstStrike === true && enemyFirstStrikeCount > 0 && enemyAttacking === true && enemyDamageType === unitDamageType) {
    if(skipEnemyFirstStrike === false) {
    if(unitDamageType === "melee") {
        attackType = "First Strike";
    } else if(unitDamageType === "ranged") {
        attackType = "Quick Draw"
    } else {
        attackType = "Intuition"
    }
    enemyFirstStrikeCount = enemyFirstStrikeCount - 1;
    if(enemyFirstStrikeRank === 3) {
        var enemyFirstStrikeMultiplier = 1.25;
    } else {
        var enemyFirstStrikeMultiplier = 1;
    }
    enemyDamageMultiplier = 1;
    var hitChance2 = unitAccuracy + 75 - enemyDodge;
    if(hitChance2 > 100) {
        hitChance2 = 100;
    } else if(hitChance2 < 0) {
        hitChance2 = 0;
    }
    var randomHitChance2 = Math.random()*100;
    if(randomHitChance2 < 2.5) { // Less than 2.5
        randomHitChance2 = randomHitChance2 + 100; // randomHitChance (above 100) cannot be less than hitChance (capped at 100), so attackSuccess will be false (i.e. the hit will miss). Otherwise, the hit likely would have landed because randomHitChance is so low.
    } else if(randomHitChance2 > 97.5) { // Between 97.5 and 100
        randomHitChance2 = randomHitChance2 - 100; // randomHitChance (less than 0) must be less than hitChance (minimum of 0), so attackSuccess will be true (i.e. the hit will land). Otherwise, the hit likely would have missed because randomHitChance is so high.
    }
    if(randomHitChance2 < hitChance2) {
        attackSuccess2 = true;
        var enemyCriticalRoll = Math.random()*100
        if(enemyCriticalRoll < 4) {
            enemyCriticalHitMultiplier = 2;
            criticalType = " and lands a Super Hit!"
        } else if(enemyCriticalRoll < 9) {
            enemyCriticalHitMultiplier = 5/3;
            criticalType = " and lands a Mega Hit!"
        } else if(enemyCriticalRoll < 17) {
            enemyCriticalHitMultiplier = 4/3;
            criticalType = " and lands an Epic Hit!"
        } else {
            enemyCriticalHitMultiplier = 1;
            criticalType = "."
            enemyDamageMultiplier = Math.random()*100;
            if(enemyDamageMultiplier < 200/3) {
            enemyDamageMultiplier = 1;
            } else if(enemyDamageMultiplier < (200/3) + 2) {
            enemyDamageMultiplier = 1/2;
            } else if(enemyDamageMultiplier < (200/3) + 2 + (47/3)) {
            enemyDamageMultiplier = 3/4;
            } else {
            enemyDamageMultiplier = 5/4;
            }
        }
        damageCalculation = Math.floor(enemyDamage*2/3*enemyDamageMultiplier*enemyFirstStrikeMultiplier*enemyCriticalHitMultiplier) //Damage from attack
        resistRoller = Math.floor(Math.random()*51+75)/100 //Random number between 0.75 and 1.25
        resistCalculation = Math.floor(resistRoller*unitDefense) //Portion of resist
        if(damageCalculation > resistCalculation) { //If damage dealt is higher than can be resisted
        netDamage = damageCalculation - resistCalculation //New damage
        unitHealth = unitHealth - netDamage //Deal damage
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " hits with " + attackType + criticalType
        } else {
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " hits with " + attackType + ", but the attack is resisted!"
        }
        damageCalculation = 0;
        resistRoller = 0;
        resistCalculation = 0;
        netDamage = 0;
        skipEnemyFirstStrike = true;
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        if(enemyCriticalHitMultiplier > 1) {
            activateEnemyBladeStorm = true;
            enemyBladeStormFunction();
        } else {
        }
        enemyCriticalHitMultiplier = 1;
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
    } else {
        attackSuccess2 = false;
        enemyMissCounter = enemyMissCounter + 1;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " activates " + attackType + " and misses!"
        riposteFunction();
    }
}
}
};

var bladeStormFunction = function() {
// Blade Storm Algorithm
checkHealth();
if(activateBladeStorm === true && bladeStorm === true && bladeStormCount > 0 && attacking === true) {
    bladeStormCount = bladeStormCount - 1;
    activateBladeStorm = false;
    if(bladeStormRank < 3) {
    enemyWitchHunterFunction();
    }
    if(bladeStormRank === 3 && enemyFirstStrikeRank < 3) {
    } else {
    enemyFirstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Blade Storm";
    } else if(unitDamageType === "ranged") {
        attackType = "Double Tap"
    } else {
        attackType = "Mojo Rising"
    }
    hitFunction();
    if(attackSuccess === true) {
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        if(activateBladeStorm === true) {
            bladeStormFunction2();
        } else {
        }
        activateBladeStorm = false;
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
    } else {
        enemyRiposteFunction();
    }
    }
} else {
}
};

var bladeStormFunction2 = function() {
// Blade Storm Algorithm
checkHealth();
if(activateBladeStorm === true && bladeStorm === true && bladeStormCount > 0 && attacking === true) {
    bladeStormCount = bladeStormCount - 1;
    activateBladeStorm = false;
    if(bladeStormRank < 3) {
    enemyWitchHunterFunction();
    }
    if(bladeStormRank === 3 && enemyFirstStrikeRank < 3) {
    } else {
    enemyFirstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Blade Storm";
    } else if(unitDamageType === "ranged") {
        attackType = "Double Tap"
    } else {
        attackType = "Mojo Rising"
    }
    hitFunction();
    if(attackSuccess === true) {
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        if(activateBladeStorm === true) {
            bladeStormFunction3();
        } else {
        }
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
    } else {
        enemyRiposteFunction();
    }
    }
} else {
}
};

var bladeStormFunction3 = function() {
// Blade Storm Algorithm
checkHealth();
if(activateBladeStorm === true && bladeStorm === true && bladeStormCount > 0 && attacking === true) {
    bladeStormCount = bladeStormCount - 1;
    activateBladeStorm = false;
    if(bladeStormRank < 3) {
    enemyWitchHunterFunction();
    }
    if(bladeStormRank === 3 && enemyFirstStrikeRank < 3) {
    } else {
    enemyFirstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Blade Storm";
    } else if(unitDamageType === "ranged") {
        attackType = "Double Tap"
    } else {
        attackType = "Mojo Rising"
    }
    hitFunction();
    if(attackSuccess === true) {
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
    } else {
        enemyRiposteFunction();
    }
    }
} else {
}
};

var enemyBladeStormFunction = function() {
// Enemy Blade Storm Algorithm
checkHealth();
if(activateEnemyBladeStorm === true && enemyBladeStorm === true && enemyBladeStormCount > 0 && enemyAttacking === true) {
    enemyBladeStormCount = enemyBladeStormCount - 1;
    activateEnemyBladeStorm = false;
    if(enemyBladeStormRank < 3) {
    witchHunterFunction();
    }
    if(enemyBladeStormRank === 3 && firstStrikeRank < 3) {
    } else {
    firstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Blade Storm";
    } else if(enemyDamageType === "ranged") {
        attackType = "Double Tap"
    } else {
        attackType = "Mojo Rising"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        if(activateEnemyBladeStorm === true) {
            enemyBladeStormFunction2();
        } else {
        }
        activateEnemyBladeStorm = false;
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
    } else {
        activateEnemyBladeStorm = false;
        riposteFunction();
    }
    }
} else {
}
};

var enemyBladeStormFunction2 = function() {
// Enemy Blade Storm Algorithm
checkHealth();
if(activateEnemyBladeStorm === true && enemyBladeStorm === true && enemyBladeStormCount > 0 && enemyAttacking === true) {
    enemyBladeStormCount = enemyBladeStormCount - 1;
    activateEnemyBladeStorm = false;
    if(enemyBladeStormRank < 3) {
    witchHunterFunction();
    }
    if(enemyBladeStormRank === 3 && firstStrikeRank < 3) {
    } else {
    firstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Blade Storm";
    } else if(enemyDamageType === "ranged") {
        attackType = "Double Tap"
    } else {
        attackType = "Mojo Rising"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        if(activateEnemyBladeStorm === true) {
            enemyBladeStormFunction3();
        } else {
        }
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
    } else {
        activateEnemyBladeStorm = false;
        riposteFunction();
    }
    }
} else {
}
};

var enemyBladeStormFunction3 = function() {
// Enemy Blade Storm Algorithm
checkHealth();
if(activateEnemyBladeStorm === true && enemyBladeStorm === true && enemyBladeStormCount > 0 && enemyAttacking === true) {
    enemyBladeStormCount = enemyBladeStormCount - 1;
    activateEnemyBladeStorm = false;
    if(enemyBladeStormRank < 3) {
    witchHunterFunction();
    }
    if(enemyBladeStormRank === 3 && firstStrikeRank < 3) {
    } else {
    firstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Blade Storm";
    } else if(enemyDamageType === "ranged") {
        attackType = "Double Tap"
    } else {
        attackType = "Mojo Rising"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        activateEnemyBladeStorm = false;
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
    } else {
        activateEnemyBladeStorm = false;
        riposteFunction();
    }
    }
} else {
}
};

var riposteFunction = function() {
    // Riposte Algorithm
checkHealth();
if(enemyMissCounter > 0) {
    enemyMissCounter--;
    enemySecondChanceCounter++;
if(riposte === true && riposteCount > 0 && attacking === true && unitDamageType === enemyDamageType) {
    riposteCount = riposteCount - 1;
    if(riposteRank === 3) {
        unitDodge = unitDodge + 15;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " has gained 15 Dodge."
    }
    if(enemyFirstStrikeRank === 3) {
    enemyFirstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Riposte";
    } else if(unitDamageType === "ranged") {
        attackType = "Return Fire"
    } else {
        attackType = "Counterspell"
    }
    hitFunction();
    if(attackSuccess === true) {
        epicAbilityMultiplier = 4/3;
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        bladeStormFunction();
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
    } else {
        enemyRiposteFunction();
    }
    } else {
    }
}
checkHealth();
if(enemySecondChance === true && enemySecondChanceCount > 0 && enemyAttacking === true) {
    if(enemySecondChanceRank === 1) {
    if(enemySecondChanceCounter === 1) {
    enemySecondChanceCount--;
    enemySecondChanceCounter--;
    activateEnemySecondChance = false;
    witchHunterFunction();
    firstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
        if(enemyDamageType === "melee") {
            attackType = "Second Chance";
        } else if(enemyDamageType === "ranged") {
            attackType = "Quick Adjust"
        } else {
            attackType = "Jobu's Ruse"
        }
        enemyHitFunction();
        if(attackSuccess === true) {
            dealDamageToUnit();
            turnTheTideFunction();
            enemyHitCounter = enemyHitCounter + 1;
            vengeanceStrikeCounter++;
            enemyCriticalHitMultiplier = 1;
            enemyBladeStormFunction();
            vengeanceStrikeFunction();
            var rollRelentless = Math.random()*100;
            if(enemyRelentlessRank === 3) {
                relentlessRoller();
                if(relentlessActivator === true) {
                    activateEnemyRelentless = true;
                    enemyRelentlessFunction();
                }
            } else {
                if(rollRelentless < 35) {
                    activateEnemyRelentless = true;
                    enemyRelentlessFunction();
                }
            }
        } else {
            enemySecondChanceMissFunction();
        }
    } else {
    }
    } else {
    enemySecondChanceCounter--;
    }
} else if(enemySecondChanceRank > 1) {
    if(enemySecondChanceCounter <= enemySecondChanceCount && enemySecondChanceCounter > 0) {
    enemySecondChanceCount--;
    enemySecondChanceCounter--;
    if(enemySecondChanceRank === 3) {
        enemyAccuracy = enemyAccuracy*1.25;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " has gained 25% Accuracy."
    } else {
    }
    witchHunterFunction();
    firstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
        if(enemyDamageType === "melee") {
            attackType = "Second Chance";
        } else if(enemyDamageType === "ranged") {
            attackType = "Quick Adjust"
        } else {
            attackType = "Jobu's Ruse"
        }
        enemyHitFunction();
        if(attackSuccess === true) {
            dealDamageToUnit();
            turnTheTideFunction();
            enemyHitCounter = enemyHitCounter + 1;
            vengeanceStrikeCounter++;
            enemyCriticalHitMultiplier = 1;
            enemyBladeStormFunction();
            vengeanceStrikeFunction();
            var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
        } else {
            enemySecondChanceMissFunction();
        }
    } else {
    }
    } else {
    enemySecondChanceCounter--;
    }
} else {
}
}
}
};

var enemySecondChanceMissFunction = function() { // Second Riposte Function
    // Riposte Algorithm
checkHealth();
if(enemyMissCounter > 0) {
    enemyMissCounter--;
if(riposte === true && riposteCount > 0 && attacking === true && unitDamageType === enemyDamageType) {
    riposteCount = riposteCount - 1;
    if(riposteRank === 3) {
        unitDodge = unitDodge + 15;
    }
    if(enemyFirstStrikeRank === 3) {
    enemyFirstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Riposte";
    } else if(unitDamageType === "ranged") {
        attackType = "Return Fire"
    } else {
        attackType = "Counterspell"
    }
    hitFunction();
    if(attackSuccess === true) {
        epicAbilityMultiplier = 4/3;
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        bladeStormFunction();
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
    } else {
        enemyRiposteFunction();
    }
    }
}
}
};

var enemyRiposteFunction = function() {
checkHealth();
if(missCounter > 0) {
    missCounter--;
    secondChanceCounter++;
if(enemyRiposte === true && enemyRiposteCount > 0 && enemyAttacking === true && enemyDamageType === unitDamageType) {
    enemyRiposteCount = enemyRiposteCount - 1;
    if(enemyRiposteRank === 3) {
        enemyDodge = enemyDodge + 15;
    }
    if(firstStrikeRank === 3) {
    firstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true && enemyRiposteCount > -1) {
    if(enemyDamageType === "melee") {
        attackType = "Riposte";
    } else if(enemyDamageType === "ranged") {
        attackType = "Return Fire"
    } else {
        attackType = "Counterspell"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        enemyEpicAbilityMultiplier = 4/3;
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        enemyBladeStormFunction();
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
    } else {
        riposteFunction();
    }
    } else {
    }
}
checkHealth();
if(secondChance === true && secondChanceCount > 0 && attacking === true) {
    if(secondChanceRank === 1) {
    if(secondChanceCounter === 1) {
    secondChanceCount--;
    secondChanceCounter--;
    activateSecondChance = false;
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
        if(unitDamageType === "melee") {
            attackType = "Second Chance";
        } else if(unitDamageType === "ranged") {
            attackType = "Quick Adjust"
        } else {
            attackType = "Jobu's Ruse"
        }
        hitFunction();
        if(attackSuccess === true) {
            dealDamageToEnemy();
            enemyTurnTheTideFunction();
            hitCounter = hitCounter + 1;
            enemyVengeanceStrikeCounter++;
            criticalHitMultiplier = 1;
            bladeStormFunction();
            enemyVengeanceStrikeFunction();
            var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
        } else {
            enemyRiposteFunction();
        }
    } else {
    }
    } else {
    secondChanceCounter--;
    }
} else if(secondChanceRank > 1) {
    if(secondChanceCounter <= secondChanceCount && secondChanceCounter > 0) { // 1, 2, or 3
    secondChanceCount--;
    secondChanceCounter--;
    if(secondChanceRank === 3) {
        unitAccuracy = unitAccuracy*1.25;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " has gained 25% Accuracy."
    } else {
    }
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
        if(unitDamageType === "melee") {
            attackType = "Second Chance";
        } else if(unitDamageType === "ranged") {
            attackType = "Quick Adjust"
        } else {
            attackType = "Jobu's Ruse"
        }
        hitFunction();
        if(attackSuccess === true) {
            dealDamageToEnemy();
            enemyTurnTheTideFunction();
            hitCounter = hitCounter + 1;
            enemyVengeanceStrikeCounter++;
            criticalHitMultiplier = 1;
            bladeStormFunction();
            enemyVengeanceStrikeFunction();
            var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
        } else {
            secondChanceMissFunction();
        }
    } else {
    }
    } else {
    secondChanceCounter--;
    }
} else {
}
}
}
};

var secondChanceMissFunction = function() {
checkHealth();
if(missCounter > 0) {
    missCounter--;
if(enemyRiposte === true && enemyRiposteCount > 0 && enemyAttacking === true && enemyDamageType === unitDamageType) {
    enemyRiposteCount = enemyRiposteCount - 1;
    if(enemyRiposteRank === 3) {
        enemyDodge = enemyDodge + 15;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " has gained 15 Dodge."
    }
    if(firstStrikeRank === 3) {
    firstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true && enemyRiposteCount > -1) {
    if(enemyDamageType === "melee") {
        attackType = "Riposte";
    } else if(enemyDamageType === "ranged") {
        attackType = "Return Fire"
    } else {
        attackType = "Counterspell"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        enemyEpicAbilityMultiplier = 4/3;
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        enemyBladeStormFunction();
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
    } else {
        riposteFunction();
    }
    } else {
    }
}
}
};

var vengeanceStrikeFunction = function() {
    checkHealth();
    if(enemyHitCounter > 0 && vengeanceStrike === true && vengeanceStrikeCount > 0 && attacking === true && unitDamageType === enemyDamageType) {
        if(vengeanceStrikeCounter <= vengeanceStrikeCount && vengeanceStrikeCounter > 0) {
        vengeanceStrikeCount = vengeanceStrikeCount - 1;
        vengeanceStrikeCounter--;
        enemyHitCounter = enemyHitCounter - 1;
        enemyWitchHunterFunction();
        enemyFirstStrikeFunction();
        checkHealth();
        skipFirstStrike = false;
        skipEnemyFirstStrike = false;
        if(attacking === true) {
            if(unitDamageType === "melee") {
                attackType = "Vengeance Strike";
            } else if(unitDamageType === "ranged") {
                attackType = "True Grit"
            } else {
                attackType = "Retribution"
            }
            hitFunction();
            if(attackSuccess === true) {
                dealDamageToEnemy();
                enemyTurnTheTideFunction();
                hitCounter = hitCounter + 1;
                enemyVengeanceStrikeCounter++;
                criticalHitMultiplier = 1;
                if(vengeanceStrikeRank === 3) {
                var stunRoll = Math.random()*100;
                if(stunRoll < 35) {
                    enemyAttacking = false;
                    if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " has been stunned for the remainder of the round."
                }
                }
                bladeStormFunction();
                enemyVengeanceStrikeFunction();
                var rollRelentless = Math.random()*100;
                if(relentlessRank === 3) {
                    relentlessRoller();
                    if(relentlessActivator === true) {
                        activateRelentless = true;
                        relentlessFunction();
                    }
                } else {
                    if(rollRelentless < 35) {
                        activateRelentless = true;
                        relentlessFunction();
                    }
                }
            } else {
                enemyRiposteFunction();
            }
        }
    } else {
    vengeanceStrikeCounter--;
    }
    }
};

var enemyVengeanceStrikeFunction = function() {
    checkHealth();
    if(hitCounter > 0 && enemyVengeanceStrike === true && enemyVengeanceStrikeCount > 0 && enemyAttacking === true && enemyDamageType === unitDamageType) {
        if(enemyVengeanceStrikeCounter <= enemyVengeanceStrikeCount && enemyVengeanceStrikeCounter > 0) {
        enemyVengeanceStrikeCount = enemyVengeanceStrikeCount - 1;
        enemyVengeanceStrikeCounter--;
        hitCounter = hitCounter - 1;
        witchHunterFunction();
        firstStrikeFunction();
        checkHealth();
        skipFirstStrike = false;
        skipEnemyFirstStrike = false;
        if(enemyAttacking === true) {
            if(enemyDamageType === "melee") {
                attackType = "Vengeance Strike";
            } else if(enemyDamageType === "ranged") {
                attackType = "True Grit"
            } else {
                attackType = "Retribution"
            }
            enemyHitFunction();
            if(attackSuccess === true) {
                dealDamageToUnit();
                turnTheTideFunction();
                enemyHitCounter = enemyHitCounter + 1;
                vengeanceStrikeCounter++;
                enemyCriticalHitMultiplier = 1;
                if(enemyVengeanceStrikeRank === 3) {
                var stunRoll = Math.random()*100;
                if(stunRoll < 35) {
                    attacking = false;
                    if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " has been stunned for the remainder of the round."
                }
                }
                enemyBladeStormFunction();
                vengeanceStrikeFunction();
                var rollRelentless = Math.random()*100;
                if(enemyRelentlessRank === 3) {
                    relentlessRoller();
                    if(relentlessActivator === true) {
                        activateEnemyRelentless = true;
                        enemyRelentlessFunction();
                    }
                } else {
                    if(rollRelentless < 35) {
                        activateEnemyRelentless = true;
                        enemyRelentlessFunction();
                    }
                }
            } else {
                riposteFunction();
            }
        }
    } else {
    enemyVengeanceStrikeCounter--;
    }
    }
};

var repelBoardersFunction = function() {
checkHealth();
if(enemyApproaching === true && repelBoarders === true && repelBoardersCount > 0 && attacking === true) {
    repelBoardersCount = repelBoardersCount - 1;
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Repel Boarders";
    } else if(unitDamageType === "ranged") {
        attackType = "Overwatch"
    } else {
        attackType = "Readied Spell"
    }
    hitFunction();
    if(attackSuccess === true) {
        epicAbilityMultiplier = 2/3;
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        bladeStormFunction();
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
        if(repelBoardersRank === 3 && enemyHealth > 0) {
            enemyAccuracy = enemyAccuracy*0.5;
            if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " has lost 50% Accuracy."
        }
    } else {
        enemyRiposteFunction();
    }
    }
} else {
}
};

var enemyRepelBoardersFunction = function() {
checkHealth();
if(approaching === true && enemyRepelBoarders === true && enemyRepelBoardersCount > 0 && enemyAttacking === true) {
    enemyRepelBoardersCount = enemyRepelBoardersCount - 1;
    witchHunterFunction();
    firstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Repel Boarders";
    } else if(enemyDamageType === "ranged") {
        attackType = "Overwatch"
    } else {
        attackType = "Readied Spell"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        enemyEpicAbilityMultiplier = 2/3;
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        enemyBladeStormFunction();
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
        if(enemyRepelBoardersRank === 3 && unitHealth > 0) {
            unitAccuracy = unitAccuracy*0.5;
            if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " has lost 50% Accuracy."
        }
    } else {
        riposteFunction();
    }
    }
} else {
}
};

var cheapShotFunction = function() {
checkHealth();
if(enemyDisengaging === true && cheapShot === true && cheapShotCount > 0 && attacking === true) {
    cheapShotCount = cheapShotCount - 1;
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Cheap Shot";
    } else if(unitDamageType === "ranged") {
        attackType = "Parting Shot"
    } else {
        attackType = "Coward's Bane"
    }
    hitFunction();
    if(attackSuccess === true) {
        epicAbilityMultiplier = 2/3;
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        bladeStormFunction();
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
        if(cheapShotRank === 3 && enemyHealth > 0) {
            enemyMoving = false;
        }
    } else {
        enemyRiposteFunction();
    }
    }
} else {
}
};

var enemyCheapShotFunction = function() {
checkHealth();
if(disengaging === true && enemyCheapShot === true && enemyCheapShotCount > 0 && enemyAttacking === true) {
    enemyCheapShotCount = enemyCheapShotCount - 1;
    witchHunterFunction();
    firstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Cheap Shot";
    } else if(enemyDamageType === "ranged") {
        attackType = "Parting Shot"
    } else {
        attackType = "Coward's Bane"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        enemyEpicAbilityMultiplier = 2/3;
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        enemyBladeStormFunction();
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
        if(enemyCheapShotRank === 3 && unitHealth > 0) {
            if(showSimulation === true) {
            document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " has been immobilized."
            }
            moving = false;
        }
    } else {
        riposteFunction();
    }
    }
} else {
}
};

var flankingFunction = function() {
checkHealth();
if(movedIntoFlanking === true && flanking === true && flankingCount > 0 && attacking === true) {
    flankingCount = flankingCount - 1;
    if(enemyFirstStrikeRank === 3) {
    enemyFirstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    if(unitDamageType === "melee") {
        attackType = "Flanking";
    } else if(unitDamageType === "ranged") {
        attackType = "Crossfire"
    } else {
        attackType = "Doomspell"
    }
    hitFunction();
    if(attackSuccess === true) {
        epicAbilityMultiplier = 2/3;
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        bladeStormFunction();
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
        if(flankingRank === 3 && enemyHealth > 0) {
            enemyMovementRange = enemyMovementRange - 2;
        }
    } else {
        enemyRiposteFunction();
    }
    }
} else {
}
};

var enemyFlankingFunction = function() {
checkHealth();
if(enemyMovedIntoFlanking === true && enemyFlanking === true && enemyFlankingCount > 0 && enemyAttacking === true) {
    enemyFlankingCount = enemyFlankingCount - 1;
    if(firstStrikeRank === 3) {
    firstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(enemyAttacking === true) {
    if(enemyDamageType === "melee") {
        attackType = "Flanking";
    } else if(enemyDamageType === "ranged") {
        attackType = "Crossfire"
    } else {
        attackType = "Doomspell"
    }
    enemyHitFunction();
    if(attackSuccess === true) {
        enemyEpicAbilityMultiplier = 2/3;
        dealDamageToUnit();
        turnTheTideFunction();
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        enemyBladeStormFunction();
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
        if(enemyFlankingRank === 3 && unitHealth > 0) {
            movementRange = movementRange - 2;
        }
    } else {
        riposteFunction();
    }
    }
} else {
}
};

var holdTheLineFunction = function() {
checkHealth();
if(enemyApproaching === true && holdTheLine === true && holdTheLineCount > 0) {
    holdtheLineCount = holdTheLineCount - 1;
    var enemyMoving = false;
    if(holdTheLineRank === 3) {
        enemyDodge = enemyDodge*0.5;
        document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " has lost 50% Dodge."
    }
}
};

var enemyHoldTheLineFunction = function() {
checkHealth();
if(approaching === true && enemyHoldTheLine === true && enemyHoldTheLineCount > 0) {
    enemyHoldtheLineCount = enemyHoldTheLineCount - 1;
    if(moving === false && showSimulation === true) {
        document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " has been immobilized."
    }
    var moving = false;
    if(enemyHoldTheLineRank === 3) {
        unitDodge = unitDodge*0.5;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " has lost 50% Dodge."
    }
}
};
    
var witchHunterFunction = function() {
checkHealth();
if(witchHunter === true && witchHunterCount > 0 && attacking === true) {
    witchHunterCount = witchHunterCount - 1;
    attackType = "Witch Hunter";
    hitFunction();
    if(attackSuccess === true) {
        epicAbilityMultiplier = 4/3;
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        enemyDamage = enemyDamage*0.5;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + " has lost 50% Damage."
        if(witchHunterRank === 3) {
            unitDefense = unitDefense*1.25;
            if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + " " + unitName + " has gained 25% Resist."
        }
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        bladeStormFunction();
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
    } else {
        enemyRiposteFunction();
    }
} else {
}
};
    
var enemyWitchHunterFunction = function() {
checkHealth();
if(enemyWitchHunter === true && enemyWitchHunterCount > 0 && attacking === true) {
    enemyWitchHunterCount = enemyWitchHunterCount - 1;
    attackType = "Witch Hunter";
    enemyHitFunction();
    if(attackSuccess === true) {
        epicAbilityMultiplier = 4/3;
        dealDamageToUnit();
        turnTheTideFunction();
        unitDamage = unitDamage*0.5;
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " has lost 50% Damage."
        if(enemyWitchHunterRank === 3) {
            enemyDefense = enemyDefense*1.25;
            if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + " " + enemyName + " has gained 25% Resist."
        }
        enemyHitCounter = enemyHitCounter + 1;
        vengeanceStrikeCounter++;
        enemyCriticalHitMultiplier = 1;
        enemyBladeStormFunction();
        vengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(enemyRelentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateEnemyRelentless = true;
                enemyRelentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateEnemyRelentless = true;
            enemyRelentlessFunction();
            }
        }
    } else {
        riposteFunction();
    }
} else {
}
};

var glancingBlowFunction = function() {
checkHealth();
if(attacking === true) {
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true) {
    attackType = "Glancing Blow";
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = Math.random()*100
    if(criticalRoll < 4) {

        criticalHitMultiplier = 2;
    } else if(criticalRoll < 9) {

        criticalHitMultiplier = 5/3;
    } else if(criticalRoll < 17) {

        criticalHitMultiplier = 4/3;
    } else {
        criticalHitMultiplier = 1;
    }
    if(criticalRoll < 17) {
        activateBladeStorm = true;
    } else {
        damageMultiplier = Math.random()*100;
        if(damageMultiplier < 200/3) {
            damageMultiplier = 1;
        } else if(damageMultiplier < (200/3) + 2) {
            damageMultiplier = 1/2;
        } else if(damageMultiplier < (200/3) + 2 + (47/3)) {
            damageMultiplier = 3/4;
        } else {
            damageMultiplier = 5/4;
        }
    }
    if(attackSuccess === true) {
        epicAbilityMultiplier = 0.5;
        dealDamageToEnemy();
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        bladeStormFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
            enemyVengeanceStrikeFunction();
    } else {
        enemyRiposteFunction();
    }
    }
} else {
}
};

var relentlessActivator = false;

var relentlessRoller = function() {
    relentlessActivator = false;
    var rollRelentless = Math.random()*100;
    var percentHealth = enemyHealth/enemyMaxHealth*100;
    if(percentHealth < 4) {
        if(rollRelentless < 60) {
            relentlessActiator = true;
        }
    } else if(percentHealth < 8) {
        if(rollRelentless < 59) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 12) {
        if(rollRelentless < 58) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 16) {
        if(rollRelentless < 57) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 20) {
        if(rollRelentless < 56) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 24) {
        if(rollRelentless < 55) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 28) {
        if(rollRelentless < 54) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 32) {
        if(rollRelentless < 53) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 36) {
        if(rollRelentless < 52) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 40) {
        if(rollRelentless < 51) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 44) {
        if(rollRelentless < 50) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 48) {
        if(rollRelentless < 49) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 52) {
        if(rollRelentless < 48) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 56) {
        if(rollRelentless < 47) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 60) {
        if(rollRelentless < 46) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 64) {
        if(rollRelentless < 45) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 68) {
        if(rollRelentless < 44) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 72) {
        if(rollRelentless < 43) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 76) {
        if(rollRelentless < 42) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 80) {
        if(rollRelentless < 41) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 84) {
        if(rollRelentless < 40) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 88) {
        if(rollRelentless < 39) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 92) {
        if(rollRelentless < 38) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 96) {
        if(rollRelentless < 37) {
            relentlessActivator = true;
        }
    } else if(percentHealth < 100) {
        if(rollRelentless < 36) {
            relentlessActivator = true;
        }
    } else {
        if(rollRelentless < 35) {
            relentlessActivator = true;
        }
    }
};

var attackEnemy = "yes"
if (attackEnemy === "yes") {
    var attacking = true;
} else {
    var attacking = false;
}
var enemyAttacking = true;

var activateRelentless = false;
var activateEnemyRelentless = false;
var activateBladeStorm = false;
var activateEnemyBladeStorm = false;
var skipFirstStrike = false;
var skipEnemyFirstStrike = false;
var skipAttack = false;
var turnTheTide = false;
var enemyTurnTheTide = false;
var movementRange = 4;
var enemyMovementRange = 4;

var approachingFunction = function() {
approaching = prompt("Approaching and attacking?").toUpperCase();
checkApproachingFunction();
};

var checkApproachingFunction = function() {
if(approaching === "YES" || approaching === true) {
    approaching = true;
} else if(approaching === "NO" || approaching === false) {
    approaching = false;
} else {
    confirm("Your choice was not recognized. Try again?");
    approachingFunction();
}
if(approaching === true && flankingCount > 0) {
    movedIntoFlanking = prompt("Flanking " + enemyName + " with another " + unitDamageType + " unit?").toUpperCase();
    checkFlankingFunction();
}
};

var checkFlankingFunction = function() {
if(movedIntoFlanking === "YES") {
    movedIntoFlanking = true;
} else if(movedIntoFlanking === "NO") {
    movedIntoFlanking = false;
} else {
    confirm("Your choice was not recognized. Try again?");
    checkApproachingFunction();
}
};

var disengagingFunction = function() {
disengaging = prompt("Disengage and NOT attack?").toUpperCase();
checkDisengagingFunction();
};

var checkDisengagingFunction = function() {
if(disengaging === "YES") {
    disengaging = true;
} else if(disengaging === "NO") {
    disengaging = false;
} else {
    confirm("Your choice was not recognized. Try again?");
    disengagingFunction();
}
};

var standardHitFunction = function() {
    damageMultiplier = 1;
    var hitChance = unitAccuracy + 75 - enemyDodge;
    if(hitChance > 100) {
        hitChance = 100;
    } else if(hitChance < 0) {
        hitChance = 0;
    }
    var randomHitChance = Math.random()*100;
    if(randomHitChance < 2.5) { // Less than 2.5
        randomHitChance = randomHitChance + 100; // randomHitChance (above 100) cannot be less than hitChance (capped at 100), so attackSuccess will be false (i.e. the hit will miss). Otherwise, the hit likely would have landed because randomHitChance is so low.
    } else if(randomHitChance > 97.5) { // Between 97.5 and 100
        randomHitChance = randomHitChance - 100; // randomHitChance (less than 0) must be less than hitChance (minimum of 0), so attackSuccess will be true (i.e. the hit will land). Otherwise, the hit likely would have missed because randomHitChance is so high.
    }
    if(improvedMojoBlastRank > 0) {
        hitChance = 75;
        randomHitChance = Math.random()*100
    }
    if(randomHitChance < hitChance) {
        attackSuccess = true;
        var criticalRoll = Math.random()*100;
        if(criticalRoll < 4) {
            criticalHitMultiplier = 2;
            criticalType = " and lands a Super Hit!"
        } else if(criticalRoll < 9) {
            criticalHitMultiplier = 5/3;
            criticalType = " and lands a Mega Hit!"
        } else if(criticalRoll < 17) {
            criticalHitMultiplier = 4/3;
            criticalType = " and lands an Epic Hit!"
        } else {
            criticalHitMultiplier = 1;
            criticalType = "."
        }
    } else {
        attackSuccess = false;
        missCounter = missCounter + 1;
    }
    if(criticalHitMultiplier > 1) {
        activateBladeStorm = true;
    } else {
        damageMultiplier = Math.random()*100;
        if(damageMultiplier < 200/3) {
            damageMultiplier = 1;
        } else if(damageMultiplier < (200/3) + 2) {
            damageMultiplier = 1/2;
        } else if(damageMultiplier < (200/3) + 2 + (47/3)) {
            damageMultiplier = 3/4;
        } else {
            damageMultiplier = 5/4;
        }
    }
};

var superStrikeFunction = function() {
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = 1;
    criticalHitMultiplier = 2;
    criticalType = " and lands a Super Hit!"
    activateBladeStorm = true;
};

var megaStrikeFunction = function() {
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = 5;
    criticalHitMultiplier = 5/3;
    criticalType = " and lands a Mega Hit!"
    activateBladeStorm = true;
};

var epicStrikeFunction = function() {
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = 10;
    criticalHitMultiplier = 4/3;
    criticalType = " and lands an Epic Hit!"
    activateBladeStorm = true;
};

var buccaneerSmashFunction = function() {
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = 5;
    criticalHitMultiplier = 5/3;
    criticalType = " and lands a Mega Hit!"
    activateBladeStorm = true;
};

var swashbucklersStabFunction = function() {
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = 5;
    criticalHitMultiplier = 5/3;
    criticalType = " and lands a Mega Hit!"
    activateBladeStorm = true;
};

var swashbucklersStrikeFunction = function() {
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = 5;
    criticalHitMultiplier = 5/3;
    criticalType = " and lands a Mega Hit!"
    activateBladeStorm = true;
};

var backStabFunction = function() {
    damageMultiplier = 1;
    powerMultiplier = 1.84;
    attackSuccess = true;
    var criticalRoll = Math.random()*100;
    if(criticalRoll < 4) {
        criticalHitMultiplier = 2;
        criticalType = " and lands a Super Hit!"
    } else if(criticalRoll < 9) {
        criticalHitMultiplier = 5/3;
        criticalType = " and lands a Mega Hit!"
    } else if(criticalRoll < 17) {
        criticalHitMultiplier = 4/3;
        criticalType = " and lands an Epic Hit!"
    } else {
        criticalHitMultiplier = 1;
        criticalType = "."
    }
    if(criticalHitMultiplier > 1) {
        activateBladeStorm = true;
    } else {
        damageMultiplier = Math.random()*100;
        if(damageMultiplier < 200/3) {
            damageMultiplier = 1;
        } else if(damageMultiplier < (200/3) + 2) {
            damageMultiplier = 1/2;
        } else if(damageMultiplier < (200/3) + 2 + (47/3)) {
            damageMultiplier = 3/4;
        } else {
            damageMultiplier = 5/4;
        }
    }
};

var bleedFunction = function() {
    checkHealth();
    if(enemyHealth > 0) {
    enemyHealth = enemyHealth - Math.floor(unitDamage*0.28);
    }
};

var viciousChargeFunction = function() {
    damageMultiplier = 1;
    powerMultiplier = 3/2;
    attackSuccess = true;
    var criticalRoll = Math.random()*100;
    if(criticalRoll < 4) {
        criticalHitMultiplier = 2;
        criticalType = " and lands a Super Hit!"
    } else if(criticalRoll < 9) {
        criticalHitMultiplier = 5/3;
        criticalType = " and lands a Mega Hit!"
    } else if(criticalRoll < 17) {
        criticalHitMultiplier = 4/3;
        criticalType = " and lands an Epic Hit!"
    } else {
        criticalHitMultiplier = 1;
        criticalType = "."
    }
    if(criticalHitMultiplier > 1) {
        activateBladeStorm = true;
    } else {
        damageMultiplier = Math.random()*100;
        if(damageMultiplier < 200/3) {
            damageMultiplier = 1;
        } else if(damageMultiplier < (200/3) + 2) {
            damageMultiplier = 1/2;
        } else if(damageMultiplier < (200/3) + 2 + (47/3)) {
            damageMultiplier = 3/4;
        } else {
            damageMultiplier = 5/4;
        }
    }
};

var buccaneerStrikeFunction = function() {
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = 5;
    criticalHitMultiplier = 5/3;
    criticalType = " and lands a Mega Hit!"
    activateBladeStorm = true;
};

var brutalChargeFunction = function() {
    damageMultiplier = 1;
    powerMultiplier = 5/4;
    attackSuccess = true;
    var criticalRoll = Math.random()*100;
    if(criticalRoll < 4) {
        criticalHitMultiplier = 2;
        criticalType = " and lands a Super Hit!"
    } else if(criticalRoll < 9) {
        criticalHitMultiplier = 5/3;
        criticalType = " and lands a Mega Hit!"
    } else if(criticalRoll < 17) {
        criticalHitMultiplier = 4/3;
        criticalType = " and lands an Epic Hit!"
    } else {
        criticalHitMultiplier = 1;
        criticalType = "."
    }
    if(criticalHitMultiplier > 1) {
        activateBladeStorm = true;
    } else {
        damageMultiplier = Math.random()*100;
        if(damageMultiplier < 200/3) {
            damageMultiplier = 1;
        } else if(damageMultiplier < (200/3) + 2) {
            damageMultiplier = 1/2;
        } else if(damageMultiplier < (200/3) + 2 + (47/3)) {
            damageMultiplier = 3/4;
        } else {
            damageMultiplier = 5/4;
        }
    }
};

var mightyChargeFunction = function() {
    damageMultiplier = 1;
    attackSuccess = true;
    var criticalRoll = Math.random()*100;
    if(criticalRoll < 4) {
        criticalHitMultiplier = 2;
        criticalType = " and lands a Super Hit!"
    } else if(criticalRoll < 9) {
        criticalHitMultiplier = 5/3;
        criticalType = " and lands a Mega Hit!"
    } else if(criticalRoll < 17) {
        criticalHitMultiplier = 4/3;
        criticalType = " and lands an Epic Hit!"
    } else {
        criticalHitMultiplier = 1;
        criticalType = "."
    }
    if(criticalHitMultiplier > 1) {
        activateBladeStorm = true;
    } else {
        damageMultiplier = Math.random()*100;
        if(damageMultiplier < 200/3) {
            damageMultiplier = 1;
        } else if(damageMultiplier < (200/3) + 2) {
            damageMultiplier = 1/2;
        } else if(damageMultiplier < (200/3) + 2 + (47/3)) {
            damageMultiplier = 3/4;
        } else {
            damageMultiplier = 5/4;
        }
    }
};

// Standard hit algorithm
if(attacking === true) {
    if(approaching === true) {
        enemyHoldTheLineFunction();
        enemyRepelBoardersFunction();
    }
    if(disengaging === true) {
        enemyCheapShotFunction();
    }
    if(movedIntoFlanking === true) {
        flankingFunction();
    }
    checkHealth();
    if(disengaging === false) {
    enemyWitchHunterFunction();
    enemyFirstStrikeFunction();
    }
    checkHealth();
    skipFirstStrike = false;
    skipEnemyFirstStrike = false;
    if(attacking === true && disengaging === false) {
        if(activateSuperStrike === true) {
            superStrikeFunction();
        } else if(activateMegaStrike === true) {
            megaStrikeFunction();
        } else if(activateEpicStrike === true) {
            epicStrikeFunction();
        } else if(activateBuccaneerSmash === true) {
            buccaneerSmashFunction();
        } else if(activateSwashbucklersStab === true) {
            swashbucklersStabFunction();
        } else if(activateSwashbucklersStrike === true) {
            swashbucklersStrikeFunction();
        } else if(activateBackStab === true) {
            backStabFunction();
        } else if(activateViciousCharge === true) {
            viciousChargeFunction();
        } else if(activateBuccaneerStrike === true) {
            buccaneerStrikeFunction();
        } else if(activateBrutalCharge === true) {
            brutalChargeFunction();
        } else if(activateMightyCharge === true) {
            mightyChargeFunction();
        } else {
            if(unitDamageType === "ranged" && approaching === true || unitDamageType === "magical" && approaching === true) {
            var skipAttack = true;
            } else {
            standardHitFunction();
            }
        }
    if(skipAttack === false) {
    if(attackSuccess === true) {
        damageCalculation = Math.floor(unitDamage*damageMultiplier*criticalHitMultiplier*powerMultiplier) //Damage from attack
        resistRoller = Math.floor(Math.random()*51+75)/100 //Random number between 0.75 and 1.25
        resistCalculation = Math.floor(resistRoller*enemyDefense) //Portion of resist
        if(damageCalculation > resistCalculation) { //If damage dealt is higher than can be resisted
        netDamage = damageCalculation - resistCalculation //New damage
        enemyHealth = enemyHealth - netDamage //Deal damage
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " attacks" + criticalType
        } else {
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " attacks, but the attack is resisted!"
        }
        damageCalculation = 0;
        resistRoller = 0;
        resistCalculation = 0;
        netDamage = 0;
        enemyTurnTheTideFunction();
        hitCounter = hitCounter + 1;
        enemyVengeanceStrikeCounter++;
        criticalHitMultiplier = 1;
        bladeStormFunction();
        if(activateBuccaneerSmash === true && enemyHealth > 0 || activateViciousCharge === true && enemyHealth > 0 || activateBrutalCharge === true && enemyHealth > 0) {
            enemyAccuracy = enemyAccuracy*0.5;
        }
        if(activateViciousCharge === true || activateBrutalCharge === true || activateMightyCharge === true) {
            glancingBlowFunction();
        }
        enemyVengeanceStrikeFunction();
        var rollRelentless = Math.random()*100;
        if(relentlessRank === 3) {
            relentlessRoller();
            if(relentlessActivator === true) {
                activateRelentless = true;
                relentlessFunction();
            }
        } else {
            if(rollRelentless < 35) {
            activateRelentless = true;
            relentlessFunction();
            }
        }
    } else {
        if(showSimulation) document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + " attacks and misses!"
        enemyRiposteFunction();
    }
}
}
if(activateBackStab === true) {
bleedFunction();
}
if(showSimulation === true) {
    if(unitHealth < 0) unitHealth = 0;
    if(enemyHealth < 0) enemyHealth = 0;
    document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + unitName + "'s Health: " + unitHealth
    document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br>" + enemyName + "'s Health: " + enemyHealth
    if(unitHealth / unitMaxHealth > enemyHealth / enemyMaxHealth) {
        document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br> Combat rated as successful! <br>"
    } else if(unitHealth / unitMaxHealth < enemyHealth / enemyMaxHealth) {
        document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br> Combat rated as unsuccessful. <br>"   
    } else {
        document.getElementById('simulation').innerHTML = document.getElementById('simulation').innerHTML + "<br> Neither unit achieved a favorable outcome. <br>" 
    }
}
if(showSimulation) displayResults = false;
showSimulation = false;
}

if(unitHealth / unitMaxHealth > enemyHealth / enemyMaxHealth) {
    score++;
}
if(unitHealth <= 0) {
    unitDefeated++;
}
if(enemyHealth <= 0) {
    enemyDefeated++;
}
if(disengaging === true) {
    if(unitHealth / unitMaxHealth > enemyHealth / enemyMaxHealth) {
        disengageSuccess++;
    }
if(unitHealth <=0) {
    disengagingUnitDefeated++;
}
if(enemyHealth<= 0) {
    disengagingEnemyDefeated++;
}
}

if(approaching === true) {
    if(unitHealth / unitMaxHealth > enemyHealth / enemyMaxHealth) {
        approachSuccess++;
    }
if(unitHealth <= 0) {
    approachingUnitDefeated++;
}
if(enemyHealth <= 0) {
    approachingEnemyDefeated++;
}
}
if(movedIntoFlanking === true) {
    if(unitHealth / unitMaxHealth > enemyHealth / enemyMaxHealth) {
        flankingSuccess++;
    }
if(unitHealth <= 0) {
    flankingUnitDefeated++;
}
if(enemyHealth <= 0) {
    flankingEnemyDefeated++;
}
}
total++;
};
if(powerAvailability === false && showSimulation === true) {
    document.getElementById('simulation').innerHTML = unitName + " (Health: " + unitMaxHealth + ") is attacking " + enemyName + " (Health: " + enemyMaxHealth + ") with " + powerName + "."
} else if(showSimulation) {
     document.getElementById('simulation').innerHTML = unitName + " (Health: " + unitMaxHealth + ") is attacking " + enemyName + " (Health: " + enemyMaxHealth + ")."
}

// OPTION ANALYSIS

displayResults = true;
    
while(total<25000) {
combat();
}

var successRate = parseInt((score/total*100).toFixed(0))
var defeatRate = (unitDefeated/total*100).toFixed(0)
var enemyDefeatRate = (enemyDefeated/total*100).toFixed(0)

var finalTotal = total;
var disengageSuccess = 0;
var disengaging = true;
var total = 0;

if(enemyCheapShotRank > 0) {
while(total<25000) {
    combat()
}
var disengageSuccessRate = parseInt((disengageSuccess/total*100).toFixed(0))
var disengageDefeatRate = (disengagingUnitDefeated/total*100).toFixed(0)
var disengageEnemyDefeatRate = (disengagingEnemyDefeated/total*100).toFixed(0)
} else {
var disengageSuccessRate = 0
}

var approachSuccess = 0;
var approaching = true;
var disengaging = false;
var total = 0;

if(enemyRepelBoardersRank === 0 && enemyHoldTheLineRank < 3) {
    var approachSuccessRate = 0;
} else {
while(total<25000) {
    combat()
}
var approachSuccessRate = parseInt((approachSuccess/total*100).toFixed(0))
var approachDefeatRate = (approachingUnitDefeated/total*100).toFixed(0)
var approachEnemyDefeatRate = (approachingEnemyDefeated/total*100).toFixed(0)
}

var flankingSuccess = 0;
var movedIntoFlanking = true;
var approaching = true;
var disengaging = false;
var total = 0;

if(flankingRank > 0) {
    while(total<25000) {
        combat()
    }
    var flankingSuccessRate = parseInt((flankingSuccess/total*100).toFixed(0))
    var flankingDefeatRate = (flankingUnitDefeated/total*100).toFixed(0)
    var flankingEnemyDefeatRate = (flankingEnemyDefeated/total*100).toFixed(0)
} else {
    var flankingSuccessRate = 0
}

// CALCULATE RESPONSE
var getMaxOfArray = function(numArray) {
  return Math.max.apply(null, numArray);
}
if(displayResults) {
var options = [successRate, approachSuccessRate, disengageSuccessRate, flankingSuccessRate] //4 items in array
if(unitDamageType === "ranged" && approaching === true || unitDamageType === "magical" && approaching === true) { //Initialize parallel array 1
    var optionNames = ["Attack", "Approach", "Disengage from combat", "Flank"]
} else {
    var optionNames = ["Attack", "Approach and attack", "Disengage from combat", "Flank and attack"]
}
var defeatChances = [defeatRate, approachDefeatRate, disengageDefeatRate, flankingDefeatRate] //initialize parallel array 2
var enemyDefeatChances = [enemyDefeatRate, approachEnemyDefeatRate, disengageEnemyDefeatRate, flankingEnemyDefeatRate] //initialize parallel array 3

var choiceSelection = getMaxOfArray(options) //select highest (best) option
var index = options.indexOf(choiceSelection) //index it
options.splice(index, 1) //remove from array
var choiceName = optionNames[index] //get choice name to display
optionNames.splice(index,1) // remove from array
if(choiceSelection >= 50) {
document.getElementById('choice1html').innerHTML = "Recommended option: " + choiceName + ". Based on " + finalTotal + " simulations, there is a " + choiceSelection + "% chance of success."
} else {
document.getElementById('choice1html').innerHTML = "Combat is likely to fail. Engaging is not recommended.<br>Best option: " + choiceName + ". Based on " + finalTotal + " simulations, there is a " + choiceSelection + "% chance of success."
}
document.getElementById('defeatchancehtml').innerHTML = "Chance of unit (" + unitName + ") defeat: " + defeatChances[index] + "%"
document.getElementById('enemydefeatchancehtml').innerHTML = "Chance of enemy (" + enemyName + ") defeat: " + enemyDefeatChances[index] + "%"
defeatChances.splice(index, 1) //remove from parallel array 1
enemyDefeatChances.splice(index, 1) //remove from parallel array 2

document.getElementById('alternativestext').innerHTML = "Alternatives: "
for(i = 0; i < 3; i++) {
var alternativeChoice = getMaxOfArray(options)
var index = options.indexOf(alternativeChoice)
options.splice(index, 1)
var alternativeName = optionNames[index]
optionNames.splice(index, 1)
if(alternativeChoice > 0) {
document.getElementById('otherchoiceshtml').innerHTML = document.getElementById('otherchoiceshtml').innerHTML + alternativeName + " (" + alternativeChoice + "% chance of success)" + "<br>"
}
}
if(!document.getElementById('otherchoiceshtml').innerHTML.length) {
    document.getElementById('otherchoiceshtml').innerHTML = "No other valid options found. <br>"
}
}
document.getElementById('simulator_wrapper').style.display = 'none'
document.getElementById('simulation').style.display = 'inline-block'
document.getElementById('results_box').style.display = 'inline-block'
document.getElementById('simulation_button').style.display = 'inline-block'
document.getElementById('return_button').style.display = 'inline-block'
document.getElementById('results_header').style.display = 'block'
return false;
};

// NOTES
/* "Success" is defined by a larger percentage of enemy health lost than unit health lost.
Disengaging is only an option if the enemy has the Cheap Shot epic ability. A unit's epic abilities can trigger in response and the resulting combat is analyzed.
It is assumed that a unit is approaching when moving into Flanking. As such, Repel Boarders and Hold The Line are taken into account in the calculation. */
