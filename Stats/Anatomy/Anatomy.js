import Stats from '../stats.js';
import BodyPart from './bodyPart.js';
import { BODY_PARTS } from './bodyParts.js';

export default class Anatomy extends Stats {
	constructor(setBleeding) {
		super();
		BODY_PARTS.map(bodyPartData => {
			const { name } = bodyPartData;
			this[name] = new BodyPart(bodyPartData, () => setBleeding(this));
		});
	}

	update(player) {
		this.updateHitPoints(player);
	}

	updateHitPoints(player) {
		this.mapValues(bodyPart => bodyPart.hp.update(player));
	}
}
