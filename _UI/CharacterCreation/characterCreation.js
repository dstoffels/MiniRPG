import createElement from '../createElement.js';
import AttributesTable from './attributesTable.js';
import SkillsTable from './skillsTable.js';
import VitalsTable from './vitalsTable.js';

export default class CharacterCreationScreen {
	overlay;
	display() {
		this.overlay = createElement(
			'div',
			document.body,
			'character-creation-screen',
			'bg-dark',
		);
		const ccContainer = createElement('div', this.overlay, '', 'container');
		const row = createElement('div', ccContainer, '', 'row');

		const attsTable = new AttributesTable(this.player, row);
		const skillsTable = new SkillsTable(this.player, row);
		const vitalsTable = new VitalsTable(this.player, row);
		attsTable.skillsTable = skillsTable;
		attsTable.vitalsTable = vitalsTable;

		createElement('label', this.overlay, '', '', 'Character Name:');
		const nameInput = createElement('input', this.overlay);

		createElement(
			'button',
			this.overlay,
			'',
			'btn btn-primary',
			'Create Character',
			() => {
				this.overlay.remove();
				this.player.name = nameInput.value;
				console.log(this.player.name);
			},
		);
	}

	constructor(player) {
		this.player = player;
		this.player.updateStats();
		this.display();
	}
}
