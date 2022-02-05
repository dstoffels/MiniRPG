import { Column, Container, createElement, Row } from '../createElement.js';
import AttributesTable from './attributesTable.js';
import SkillsTables from './skillsTables.js';
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
		const ccContainer = Container(this.overlay);

		const headerRow = Row(ccContainer);
		createElement(
			'h2',
			headerRow,
			'',
			'text-center mt-2 mb-4',
			'Character Creation',
		);

		const mainRow = Row(ccContainer);
		const mainCol1 = Column(mainRow, 4);
		const attsTable = new AttributesTable(this.player, mainCol1);
		const vitalsContainer = createElement('div', mainCol1);
		const vitalsTable = new VitalsTable(this.player, vitalsContainer);

		const mainCol2 = Column(mainRow, 8);
		const skillsTables = new SkillsTables(this.player, mainCol2);

		const footerRow = Row(ccContainer, '', 'justify-content-center');
		const footerCol = Column(footerRow, 3);

		createElement('label', footerCol, '', '', 'Character Name:');
		const nameInput = createElement('input', footerCol, '', 'w-100 mb-3');
		createElement(
			'button',
			footerCol,
			'',
			'btn btn-primary w-100',
			'Create Character',
			() => {
				this.overlay.remove();
				this.player.name = nameInput.value;
				console.log(this.player.name);
			},
		);

		attsTable.skillsTable = skillsTables;
		attsTable.vitalsTable = vitalsTable;
	}

	constructor(player) {
		this.player = player;
		this.player.updateStats();
		this.display();
	}
}
