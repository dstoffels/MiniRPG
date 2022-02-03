import Anatomy from '../Anatomy/Anatomy.js';
import Attributes from '../Stats/attributes.js';
import Skills from '../Stats/skills.js';
import Vitals from '../Vitals/vitals.js';

export default class Player {
	attributes = new Attributes();
	skills = new Skills(this.updateStats);
	vitals = new Vitals();
	anatomy = new Anatomy(this.vitals.blood.setBleeding);

	updateStats() {
		this.attributes.update(this);
		this.skills.update(this);
		this.anatomy.update(this);
		this.vitals.update(this);
	}
}
