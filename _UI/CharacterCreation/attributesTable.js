import { ATTRIBUTE_AVG } from '../../constants.js';
import createElement from '../BootstrapElements/createElement.js';
import Table from './table.js';

export default class AttributesTable extends Table {
	skillsTable;
	vitalsTable;

	constructor(player, parent) {
		super(player, parent, 'Attributes');
	}

	startingLevels = {};
	generateTable(tableBody) {
		this.player.attributes.mapValues(att => {
			const row = createElement('tr', tableBody);
			const attName = createElement('th', row, '', '', att.name);
			const decCell = createElement('td', row);
			const decBtn = createElement(
				'button',
				decCell,
				'',
				'btn btn-secondary btn-sm att-inc-btn',
				'-',
				() => {
					att.decStartingLevel(this.player);
					attLevel.textContent = att.level;
					this.skillsTable.refresh();
					this.vitalsTable.refresh();
				},
			);
			const attLevel = createElement('td', row, '', '', ATTRIBUTE_AVG);
			const incCell = createElement('td', row);
			const incBtn = createElement(
				'button',
				incCell,
				'',
				'btn btn-secondary btn-sm att-inc-btn',
				'+',
				() => {
					att.incStartingLevel(this.player);
					attLevel.textContent = att.level;
					this.skillsTable.refresh();
					this.vitalsTable.refresh();
				},
			);
		});
	}
}
