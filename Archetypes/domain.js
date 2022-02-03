export default class Domain {
	constructor(name, skills) {
		this.name = name;
		this.skills = skills;
	}

	totalXp() {
		total = 0;
		this.skills.map(skill => (total += skill.xp));
	}

	isUnlocked() {
		return this.totalXp() >= 10000;
	}
}
