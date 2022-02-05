import { createElement } from '../createElement.js';

export default class Table {
	container;
	constructor(player, parent, title) {
		this.player = player;
		this.parent = parent;
		this.title = title;
	}

	display(parent) {
		this.container = createElement('div', parent);
		createElement('h4', this.container, '', 'text-center', this.title);

		const table = createElement(
			'table',
			this.container,
			'',
			'table table-dark table-hover',
		);
		const attsTableBody = createElement('tbody', table, 'atts-table');
		this.generateTable(attsTableBody);
	}

	generateTable() {}
}
