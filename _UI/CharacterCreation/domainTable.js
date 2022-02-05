import { createElement } from '../createElement.js';
import Table from './table.js';

export default class DomainTable extends Table {
	constructor(player, parent, domain) {
		super(player, parent, `${domain} Skills`);
		this.domain = domain;
		this.display(parent);
	}

	generateTable(tableBody) {
		this.player.skills.mapValues(skill => {
			if (skill.domain == this.domain) {
				const row = createElement('tr', tableBody);
				createElement('th', row, '', '', skill.name);
				createElement('td', row, '', '', skill.proficiency);
			}
		});
	}

	// refresh() {
	// 	this.container.remove();
	// 	this.display(this.parent);
	// }
}
