import { ACU, ARD, DIS, INT } from '../Attributes/attributes.js';
import Vital from './vital.js';

export default class Mana extends Vital {
	name = 'Mana';
	_setMax(player) {
		const dis = player.attributes[DIS].level,
			acu = player.attributes[ACU].level,
			int = player.attributes[INT].level,
			ard = player.attributes[ARD].level;

		this._max = dis + (acu + int + ard - 150);
	}

	get _threshold() {
		return 0;
	}

	constructor() {
		super();
	}

	colors = ['blue', 'purple'];
}
