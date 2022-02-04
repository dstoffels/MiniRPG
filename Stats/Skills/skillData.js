import {
	STR,
	CON,
	AGI,
	DEX,
	ACU,
	INT,
	DIS,
	ARD,
} from '../Attributes/attributes.js';

// SKILL NAMES
export const UNARMED = 'Unarmed',
	BLUDGEONS = 'Bludgeons',
	POLEARMS = 'Polearms',
	SWORDS = 'Swords',
	DEFENSE = 'Defense',
	HURLING = 'Hurling',
	BOWS = 'Bows',
	CROSSBOWS = 'Crossbows',
	SIDEARMS = 'Sidearms',
	MANEUVERS = 'Maneuvers',
	CONVICTION = 'Conviction',
	DOMINON = 'Dominion',
	HARMONY = 'Harmony',
	ENTROPY = 'Entropy',
	RESTORATION = 'Restoration',
	COHESION = 'Cohesion',
	FLUIDITY = 'Fluidity',
	AERIFORM = 'Aeriform',
	GALVANISM = 'Galvanism',
	DISPLACEMENT = 'Displacement',
	WOODWORKING = 'Woodworking',
	STONECUTTING = 'Stonecutting',
	METALLURGY = 'Metallurgy',
	SURVIVAL = 'Survival',
	HUSBANDRY = 'Husbandry',
	RAIMENTS = 'Raiments',
	ALCHEMY = 'Alchemy',
	SPELLBINDING = 'Spellbinding',
	CONSECRATION = 'Consecration';

// DOMAINS
export const WARRIOR = 'Warrior',
	ROGUE = 'Rogue',
	SHAMAN = 'Shaman',
	MAGE = 'Mage',
	BUILDER = 'Builder',
	PIONEER = 'Pioneer',
	SCHOLAR = 'Scholar';

export const SKILLS = [
	{ name: UNARMED, pri: STR, sec: AGI, domain: WARRIOR },
	{ name: BLUDGEONS, pri: STR, sec: CON, domain: WARRIOR },
	{ name: POLEARMS, pri: STR, sec: AGI, domain: WARRIOR },
	{ name: SWORDS, pri: DEX, sec: STR, domain: WARRIOR },
	{ name: DEFENSE, pri: CON, sec: ACU, domain: WARRIOR },

	{ name: HURLING, pri: DEX, sec: AGI, domain: ROGUE },
	{ name: BOWS, pri: STR, sec: DEX, domain: ROGUE },
	{ name: CROSSBOWS, pri: ACU, sec: STR, domain: ROGUE },
	{ name: SIDEARMS, pri: DEX, sec: AGI, domain: ROGUE },
	{ name: MANEUVERS, pri: AGI, sec: CON, domain: ROGUE },

	{ name: CONVICTION, pri: ARD, sec: DIS, domain: SHAMAN },
	{ name: DOMINON, pri: ARD, sec: ACU, domain: SHAMAN },
	{ name: HARMONY, pri: DIS, sec: INT, domain: SHAMAN },
	{ name: ENTROPY, pri: ARD, sec: DIS, domain: SHAMAN },
	{ name: RESTORATION, pri: INT, sec: ACU, domain: SHAMAN },

	{ name: COHESION, pri: INT, sec: DIS, domain: MAGE },
	{ name: FLUIDITY, pri: INT, sec: ACU, domain: MAGE },
	{ name: AERIFORM, pri: ARD, sec: INT, domain: MAGE },
	{ name: GALVANISM, pri: DIS, sec: ARD, domain: MAGE },
	{ name: DISPLACEMENT, pri: ACU, sec: DIS, domain: MAGE },

	{ name: WOODWORKING, pri: STR, sec: DEX, domain: BUILDER },
	{ name: STONECUTTING, pri: STR, sec: CON, domain: BUILDER },
	{ name: METALLURGY, pri: CON, sec: STR, domain: BUILDER },

	{ name: SURVIVAL, pri: ACU, sec: DEX, domain: PIONEER },
	{ name: HUSBANDRY, pri: CON, sec: ACU, domain: PIONEER },
	{ name: RAIMENTS, pri: DEX, sec: ACU, domain: PIONEER },

	{ name: ALCHEMY, pri: INT, sec: ACU, domain: SCHOLAR },
	{ name: SPELLBINDING, pri: INT, sec: DIS, domain: SCHOLAR },
	{ name: CONSECRATION, pri: ARD, sec: DIS, domain: SCHOLAR },
];
