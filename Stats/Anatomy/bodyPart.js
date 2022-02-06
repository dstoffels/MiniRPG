import { FULL_RECOVERY_TIME, TICK_RATE } from '../../constants.js';
import HitPoints from './hitPoints.js';

export default class BodyPart {
	isCrippled = false;
	isBleeding = false;
	hp = new HitPoints();

	get condition() {
		return this.hp.current / this.hp.max;
	}

	takeDamage(amt) {
		this.hp.decrease(amt);
		this.#checkIfBleeding();
		this.#checkIfCrippled();
	}

	#checkIfBleeding() {
		this.isBleeding = this.hp.current <= this.hp.max / 2;
		this.setBloodLoss();
	}

	#checkIfCrippled() {
		this.isCrippled = this.hp.current === 0;
		// TODO: cripple dependents
	}

	// blood loss must be twice as fast as recovery time
	// as it offsets blood.recoveryRate
	get bloodLossPerSec() {
		return this.isBleeding ? (this.hp.max - this.hp.current) / FULL_RECOVERY_TIME : 0;
	}

	constructor(data, setBloodLossCB) {
		const { name, isVital, chanceToHit, dependents, armorSlot, row, col } = data;
		this.name = name;
		this.isVital = isVital;
		this.chanceToHit = chanceToHit;
		this.dependents = dependents;
		this.armorSlot = armorSlot;
		this.row = row;
		this.col = col;
		this.setBloodLoss = setBloodLossCB;
	}
}
