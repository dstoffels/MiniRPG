import { BLUDGEONS, SWORDS } from '../Stats/Skills/skillData.js';
import Stats from '../Stats/stats.js';
import Ability from './ability.js';

export default class Abilities extends Stats {
	constructor(player) {
		super();

		this.player = player;

		ABILITY_DATA.forEach(ability => (this[ability.name] = new Ability(ability)));
	}
}

const ABILITY_DATA = [
	{
		name: 'Swing',
		skills: [SWORDS, BLUDGEONS],
		difficulty: 0,
		staminaCost: 5,
		manaCost: 0,
		execute(target) {
			console.log('Swing');
		},
	},
];
