import Anatomy from '../Stats/Anatomy/Anatomy.js';
import Attributes from '../Stats/Attributes/attributes.js';
import Skills from '../Stats/Skills/skills.js';
import Vitals from '../Stats/Vitals/vitals.js';
import { Div, P } from '../_UI/createElement.js';
import HUD from '../_UI/HUD/hud.js';

export default class Player {
	updateStats = () => {
		this.attributes.update(this);
		this.skills.update(this);
		this.anatomy.update(this);
		this.vitals.update(this);
	};

	testLog() {
		const content = Div(null);
		this.attributes.mapValues(att => P(content, `${att.name}: ${att.level}`));
		this.hud.consoleWindow.log(content);
	}

	attributes = new Attributes();
	skills = new Skills(this.updateStats);
	vitals = new Vitals();
	anatomy = new Anatomy(this.vitals.blood.setBloodLoss);
	hud = new HUD(this, document.getElementById('main'));
}
