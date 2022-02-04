import {
	createCol,
	createContainer,
	createElement,
	createRow,
} from '../BootstrapElements/createElement.js';
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
		const ccContainer = createContainer(this.overlay);

		const headerRow = createRow(ccContainer);
		createElement(
			'h2',
			headerRow,
			'',
			'text-center mt-2 mb-4',
			'Character Creation',
		);

		const mainRow = createRow(ccContainer);
		const mainCol1 = createCol(mainRow, 4);
		const attsTable = new AttributesTable(this.player, mainCol1);
		const vitalsContainer = createElement('div', mainCol1);
		const vitalsTable = new VitalsTable(this.player, vitalsContainer);

		const mainCol2 = createCol(mainRow, 8);
		const skillsTables = new SkillsTables(this.player, mainCol2);

		const footerRow = createRow(ccContainer, '', 'justify-content-center');
		const footerCol = createCol(footerRow, 3);

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
