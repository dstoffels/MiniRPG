import { AGI, CON, DEX, STR } from '../Attributes/attributes.js';
import Vital from './vital.js';

export default class Stamina extends Vital {
	name = 'Stamina';
	_setMax(player) {
		const con = player.attributes[CON].level,
			str = player.attributes[STR].level,
			agi = player.attributes[AGI].level,
			dex = player.attributes[DEX].level;
		this._max = con + (str + agi + dex - 150);
	}

	get _threshold() {
		return 0;
	}

	constructor() {
		super();
	}
}
