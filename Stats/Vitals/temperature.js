import { TICK_RATE_MS } from '../../constants.js';
import { CON, DIS } from '../Attributes/attributes.js';
import Vital from './vital.js';

export default class Temperature extends Vital {
	name = 'Temperature';
	_setMax(player) {
		const con = player.attributes[CON].level,
			dis = player.attributes[DIS].level;
		this._max = Math.floor((con + dis) / 4);
	}

	increase(amt) {
		this.current += amt;
		this.recover();
	}

	recover() {
		var recovery = setInterval(() => {
			this.current +=
				this.current < 0
					? this._recoveryRate()
					: this.current > 0
					? -this._recoveryRate()
					: 0;
			if (this.current === 0) clearInterval(recovery);
			console.log(this.current); // TESTING
		}, TICK_RATE_MS);
	}

	get debility() {
		return this.current > this._threshold
			? this.current - this._threshold
			: this.current < -this._threshold
			? -this._threshold - this.current
			: 0;
	}
}
