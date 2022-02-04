import { FULL_RECOVERY_TIME, TICK_RATE } from '../../constants.js';
import { CON, STR } from '../Attributes/attributes.js';
import Vital from './vital.js';

export default class Blood extends Vital {
	name = 'Blood';
	_setMax(player) {
		const con = player.attributes[CON].level,
			str = player.attributes[STR].level;
		this._max = Math.floor((con + str) / 2);
	}

	// Bleeding

	#totalBloodLoss = 0;

	setBleeding(anatomy) {
		this.#totalBloodLoss = 0;
		anatomy.map(bodyPart => {
			this.#totalBloodLoss += bodyPart.bloodLossPerSec;
		});
	}

	_recoveryRate() {
		const ptsRecoveredPerSec = this.max / FULL_RECOVERY_TIME;
		const ptsLosterPerSec = this.#totalBloodLoss ? 0 : 0;
		return (ptsRecoveredPerSec - ptsLosterPerSec) * TICK_RATE;
	}

	get _min() {
		return 0;
	}
}
