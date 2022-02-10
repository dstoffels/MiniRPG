export default class Ability {
	constructor(abilityData) {
		this.name = abilityData.name;
		this.skills = abilityData.skills;
		this.difficulty = abilityData.difficulty;
		this.staminaCost = abilityData.staminaCost;
		this.manaCost = abilityData.manaCost;
		this.execute = abilityData.execute;
	}
}

class OffensiveAbility extends Ability {}
class DefensiveAbility extends Ability {}
class CounterAbility extends Ability {}
class PassiveAbility extends Ability {}
class UtilityAbility extends Ability {}
