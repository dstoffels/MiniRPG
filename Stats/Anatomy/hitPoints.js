import { FULL_RECOVERY_TIME, TICK_RATE } from '../../constants.js';
import { CON, STR } from '../Attributes/attributes.js';
import Vital from '../Vitals/vital.js';

export default class HitPoints extends Vital {
	name = 'Hit Points';

	// Maximum Level
	_setMax(player) {
		const str = player.attributes[STR].level,
			con = player.attributes[CON].level;
		this._max = Math.floor((str + con) / 4);
	}

	// Minimum level
	get _min() {
		return 0;
	}

	// Threshold
	get _threshold() {
		return this.max / 2;
	}

	get #isRecovering() {
		return this.current > this._threshold;
	}

	get _recoveryRate() {
		const ptsHealedPerSec = this.max / FULL_RECOVERY_TIME;
		return this.#isRecovering ? ptsHealedPerSec * TICK_RATE : 0;
	}

	isFullScale = true;
	colors = ['green', 'red'];
}
