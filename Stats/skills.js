import Skill from './skill.js';
import Stats from './stats.js';
import { STR, CON, AGI, DEX, ACU, INT, DIS, ARD } from './attributes.js';

const UNARMED = 'Unarmed';
const BLUDGEONS = 'Bludgeons';
const POLEARMS = 'Polearms';
const SWORDS = 'Swords';
const DEFENSE = 'Defense';

const WARRIOR = 'Warrior';
export const SKILLS = [
	[UNARMED, AGI, CON, WARRIOR, 'Shihan'],
	[BLUDGEONS, STR, CON, WARRIOR, 'Destroyer'],
	[POLEARMS, STR, DEX, WARRIOR, 'Centurion'],
	[SWORDS, DEX, STR, WARRIOR, 'Kensai'],
	[DEFENSE, CON, ACU, WARRIOR, 'Juggernaut'],
];

export default class Skills extends Stats {
	constructor(updateStats) {
		super();

		SKILLS.map(
			([name, pri, sec, domain, spec]) =>
				(this[name] = new Skill(name, pri, sec, domain, spec, updateStats)),
		);
	}

	update(player) {
		this.setAptitudes(player.attributes);
	}

	setAptitudes(attributes) {
		this.mapValues(skill => skill.setAptitude(attributes));
	}
}
