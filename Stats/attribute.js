import { ATTRIBUTE_AVG } from '../constants.js';

export default class Attribute {
	#skillBonus = 0;
	#startingLevel = ATTRIBUTE_AVG;

	constructor(name) {
		this.name = name;
	}

	get level() {
		return this.#startingLevel + this.#skillBonus;
	}

	incStartingLevel(player) {
		this.#startingLevel++;
		player.updateStats();
	}

	decStartingLevel(player) {
		this.#startingLevel--;
		player.updateStats();
	}

	calcSkillBonus(skills) {
		const LEVEL_UP_AT = 20;
		let skillPoints = 0;
		skills.mapValues(skill => {
			skillPoints +=
				skill.primary === this.name
					? skill.level
					: skill.secondary === this.name
					? Math.floor(skill.level / 2)
					: 0;
		});
		this.#skillBonus = Math.floor(skillPoints / LEVEL_UP_AT);
	}
}
