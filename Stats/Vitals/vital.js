import { FULL_RECOVERY_TIME, TICK_RATE, TICK_RATE_MS } from '../../constants.js';

// HitPoints, Stamina, Mana, Blood & Temperature all share common properties:
// max, min, current, threshold, recovery. Getters/setters/methods may be overridden
// in the aforementioned subclasses.
export default class Vital {
	// Maximum Level Defaults
	_max = 25;

	get max() {
		return this._max;
	}

	_setMax(player) {}

	// Minimum Level Defaults
	get _min() {
		return -this.max;
	}

	// Threshold Default
	get _threshold() {
		return this._max / 2;
	}

	// Current Level Defaults
	_current = this.max;

	get current() {
		return this._current;
	}

	set current(amt) {
		this._current = Math.min(Math.max(amt, this._min), this.max);
	}

	decrease(amt) {
		this.current -= amt;
		this.startRecovery();
	}

	isRecovering = false;

	startRecovery() {
		if (!this.isRecovering) this.recover();
	}
	// Recovery Defaults
	recover() {
		this.isRecovering = true;
		var recovery = setInterval(() => {
			this.current += this._recoveryRate;
			this.updateUI(this.ratio);
			if (this.current >= this.max || this.current <= this._min) {
				clearInterval(recovery);
				this.isRecovering = false;
			}

			// console.log(this.current); // TESTING
		}, TICK_RATE_MS);
	}

	get _recoveryRate() {
		return ((this.max - this._min) / FULL_RECOVERY_TIME) * TICK_RATE;
	}

	// Debility
	get debility() {
		return Math.abs(Math.max(this.current - this._threshold, 0));
	}

	update(player) {
		this._setMax(player);
		this.startRecovery();
		this.updateUI(this.ratio);
	}

	//#region UI
	get ratio() {
		return ((this.current - this._min) / (this.max - this._min)) * 100;
	}

	setUI(updateUIcb) {
		this.updateUI = updateUIcb;
	}

	isFullScale = false;
	colors = [];
	//#endregion
}
