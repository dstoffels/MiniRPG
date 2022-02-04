import Stats from '../stats.js';
import Skill from './skill.js';
import { SKILLS } from './skillData.js';

export default class Skills extends Stats {
	constructor(updateStats) {
		super();

		SKILLS.map(
			({ name, pri, sec, domain, spec }) =>
				(this[name] = new Skill(name, pri, sec, domain, spec, updateStats)),
		);
	}

	update(player) {
		this.setAptitudes(player.attributes);
	}

	setAptitudes(attributes) {
		this.mapValues(skill => skill.setAptitude(attributes));
	}
}
