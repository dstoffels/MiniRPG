import createElement from '../createElement.js';
import Table from './table.js';

/////////// FIXME: NEED 1 TABLE PER DOMAIN ///////////
export default class SkillsTable extends Table {
	title = 'Skills';
	constructor(player, parent) {
		super(player, parent, 'Skills');
	}

	generateTable(tableBody) {
		this.player.skills.mapValues(skill => {
			const row = createElement('tr', tableBody);
			createElement('th', row, '', '', skill.name);
			createElement('td', row, '', '', skill.proficiency);
		});
	}

	refresh() {
		this.column.remove();
		this.display(this.parent);
	}
}
