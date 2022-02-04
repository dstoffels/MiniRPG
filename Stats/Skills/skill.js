export default class Skill {
	#xp = 0;
	#aptitude = 0;
	#level = 0;

	constructor(name, primary, secondary, domain, spectype, updateStats) {
		this.name = name;
		this.primary = primary;
		this.secondary = secondary;
		this.domain = domain;
		this.spectype = spectype;
		this.updateStats = updateStats;
	}

	// Experience Points
	get xp() {
		return this.#xp;
	}

	addXp(amt) {
		this.xp = Math.max(0, this.#xp + amt);
		this.#calcLevel();
		this.updateStats();
	}

	// Proficiency
	get proficiency() {
		return this.#aptitude + this.#level;
	}

	// Aptitude
	setAptitude(attributes) {
		this.#aptitude =
			Math.floor(attributes[this.secondary].level / 2) +
			attributes[this.primary].level;
	}

	// Level
	get level() {
		return this.#level;
	}

	#calcLevel() {
		const firstLevelAt = 100,
			multiplier = 1.02;
		let nextLvl = firstLevelAt,
			reqXp = firstLevelAt;

		this.level = 0;
		while (this.#xp >= nextLvl) {
			reqXp = Math.round(reqXp * multiplier);
			nextLvl += reqXp;
			this.level++;
		}
	}
}
