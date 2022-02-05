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

	setBloodLoss = anatomy => {
		this.#totalBloodLoss = 0;
		anatomy.mapValues(bodyPart => {
			this.#totalBloodLoss += bodyPart.bloodLossPerSec;
		});
		this.startRecovery();
	};

	get _recoveryRate() {
		const ptsRecoveredPerSec = this.max / FULL_RECOVERY_TIME;
		const ptsLostPerSec = this.#totalBloodLoss > 0 ? this.#totalBloodLoss : 0;
		return (ptsRecoveredPerSec - ptsLostPerSec) * TICK_RATE;
	}

	get _min() {
		return 0;
	}

	isFullScale = true;
	colors = ['red'];
}
