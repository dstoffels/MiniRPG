import Stats from '../Stats/stats.js';
import BodyPart from './bodyPart.js';
import { BODY_PARTS } from './bodyParts.js';

export default class Anatomy extends Stats {
	constructor(setBleeding) {
		super();
		BODY_PARTS.map(
			data => (this[data[0]] = new BodyPart(data, () => setBleeding(this))),
		);
	}

	update(player) {
		this.updateHitPoints(player);
	}

	updateHitPoints(player) {
		this.mapValues(bodyPart => bodyPart.hp.update(player));
	}
}
