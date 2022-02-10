import Abilities from '../Abilities/abilities.js';
import Anatomy from '../Stats/Anatomy/Anatomy.js';
import Attributes from '../Stats/Attributes/attributes.js';
import Skills from '../Stats/Skills/skills.js';
import Vitals from '../Stats/Vitals/vitals.js';

export default class Player {
	updateStats = () => {
		this.attributes.update(this);
		this.skills.update(this);
		this.anatomy.update(this);
		this.vitals.update(this);
	};

	attributes = new Attributes();
	skills = new Skills(this.updateStats);
	vitals = new Vitals();
	anatomy = new Anatomy(this.vitals.blood.setBloodLoss);
	abilities = new Abilities(this);
}
