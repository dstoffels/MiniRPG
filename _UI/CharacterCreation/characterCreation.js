import createCol from '../BootstrapElements/createCol.js';
import createContainer from '../BootstrapElements/createContainer.js';
import createElement from '../BootstrapElements/createElement.js';
import createRow from '../BootstrapElements/createRow.js';
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
		const ccContainer = createContainer(this.overlay);

		const headerRow = createRow(ccContainer);
		createElement(
			'h2',
			headerRow,
			'',
			'text-center mt-2',
			'Character Creation',
		);

		const mainRow = createRow(ccContainer);
		const mainCol1 = createCol(mainRow, 4);
		const attsTable = new AttributesTable(this.player, mainCol1);
		const vitalsContainer = createElement('div', mainCol1);
		const vitalsTable = new VitalsTable(this.player, vitalsContainer);
		createElement('label', mainCol1, '', '', 'Character Name:');
		const nameInput = createElement('input', mainCol1, '', 'w-100 mb-3');
		createElement(
			'button',
			mainCol1,
			'',
			'btn btn-primary w-100',
			'Create Character',
			() => {
				this.overlay.remove();
				this.player.name = nameInput.value;
				console.log(this.player.name);
			},
		);

		const mainCol2 = createCol(mainRow, 8);

		const subRow1 = createRow(mainCol2);
		const subRow1Col1 = createCol(subRow1, 6);
		const skillsTable = new SkillsTable(this.player, subRow1Col1);
		const subRow1Col2 = createCol(subRow1, 6);
		new SkillsTable(this.player, subRow1Col2);

		const subRow2 = createRow(mainCol2);
		const subRow2Col1 = createCol(subRow2, 6);
		new SkillsTable(this.player, subRow2Col1);
		const subRow2Col2 = createCol(subRow2, 6);
		new SkillsTable(this.player, subRow2Col2);

		const subRow3 = createRow(mainCol2);
		const subRow3Col1 = createCol(subRow3, 4);
		new SkillsTable(this.player, subRow3Col1);
		const subRow3Col2 = createCol(subRow3, 4);
		new SkillsTable(this.player, subRow3Col2);
		const subRow3Col3 = createCol(subRow3, 4);
		new SkillsTable(this.player, subRow3Col3);
		// const mainRow = createElement('div', ccContainer, '', 'row border');
		// const mainCol1 = createElement('div');

		// const row2 = createElement('div', ccContainer, '', 'row');
		// const skillsTable = new SkillsTable(this.player, row2);
		attsTable.skillsTable = skillsTable;

		// const row3 = createElement('div', ccContainer, '', 'row');

		// const row3Col1 = createElement('div', row3, '', 'col-md-4');

		attsTable.vitalsTable = vitalsTable;
	}

	constructor(player) {
		this.player = player;
		this.player.updateStats();
		this.display();
	}
}
