import Stats from '../stats.js';
import Attribute from './attribute.js';

export const STR = 'Strength',
	CON = 'Constitution',
	AGI = 'Agility',
	DEX = 'Dexterity',
	ACU = 'Acuity',
	INT = 'Intellect',
	DIS = 'Discipline',
	ARD = 'Ardor',
	ATTRIBUTES = [STR, CON, AGI, DEX, ACU, INT, DIS, ARD];

export default class Attributes extends Stats {
	constructor() {
		super();
		ATTRIBUTES.map(name => (this[name] = new Attribute(name)));
	}

	update(player) {
		this.calcSkillBonuses(player.skills);
	}

	calcSkillBonuses(skills) {
		this.mapValues(att => att.calcSkillBonus(skills));
	}
}
