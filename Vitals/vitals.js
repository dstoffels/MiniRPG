import Stats from '../Stats/stats.js';
import Blood from './blood.js';
import Mana from './mana.js';
import Stamina from './stamina.js';
import Temperature from './temperature.js';

export default class Vitals extends Stats {
	constructor() {
		super();
		this.stamina = new Stamina();
		this.mana = new Mana();
		this.blood = new Blood();
		this.temperature = new Temperature();
	}

	update(player) {
		this.mapValues(vital => vital.update(player));
	}
}
