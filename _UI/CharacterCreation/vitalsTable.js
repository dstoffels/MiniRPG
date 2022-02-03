import createElement from '../createElement.js';
import Table from './table.js';

export default class VitalsTable extends Table {
	constructor(player, parent) {
		super(player, parent, 'Vitals');
	}

	generateTable(tableBody) {
		this.player.vitals.mapValues(vital => {
			const row = createElement('tr', tableBody);
			createElement('th', row, '', '', vital.name);
			createElement('td', row, '', '', vital.max);
		});
		const row = createElement('tr', tableBody);
		createElement('th', row, '', '', 'Hit Points');
		createElement('td', row, '', '', this.player.anatomy.Cranium.hp.max);
	}

	refresh() {
		this.column.remove();
		this.display(this.parent);
	}
}
