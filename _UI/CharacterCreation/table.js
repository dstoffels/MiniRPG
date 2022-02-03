import createElement from '../createElement.js';

export default class Table {
	column;
	constructor(player, parent, title) {
		this.player = player;
		this.parent = parent;
		this.title = title;
		this.display(parent);
	}

	display(parent) {
		this.column = createElement('div', parent, '', 'col-sm-4');
		createElement('h4', this.column, '', 'text-center', this.title);

		const table = createElement(
			'table',
			this.column,
			'',
			'table table-dark table-hover',
		);
		const attsTableBody = createElement('tbody', table, 'atts-table');
		this.generateTable(attsTableBody);
	}

	generateTable() {}
}
