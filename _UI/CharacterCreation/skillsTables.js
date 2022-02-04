import {
	BUILDER,
	MAGE,
	PIONEER,
	ROGUE,
	SCHOLAR,
	SHAMAN,
	WARRIOR,
} from '../../Stats/Skills/skillData.js';
import {
	createCol,
	createElement,
	createRow,
} from '../BootstrapElements/createElement.js';
import DomainTable from './domainTable.js';

export default class SkillsTables {
	constructor(player, parent) {
		this.player = player;
		this.parent = parent;
		this.display();
	}

	container;

	display() {
		this.container = createElement('div', this.parent);
		const subRow1 = createRow(this.container);
		const subRow1Col1 = createCol(subRow1, 6);
		new DomainTable(this.player, subRow1Col1, WARRIOR);
		const subRow1Col2 = createCol(subRow1, 6);
		new DomainTable(this.player, subRow1Col2, ROGUE);

		const subRow2 = createRow(this.container);
		const subRow2Col1 = createCol(subRow2, 6);
		new DomainTable(this.player, subRow2Col1, SHAMAN);
		const subRow2Col2 = createCol(subRow2, 6);
		new DomainTable(this.player, subRow2Col2, MAGE);

		const subRow3 = createRow(this.container);
		const subRow3Col1 = createCol(subRow3, 4);
		new DomainTable(this.player, subRow3Col1, BUILDER);
		const subRow3Col2 = createCol(subRow3, 4);
		new DomainTable(this.player, subRow3Col2, PIONEER);
		const subRow3Col3 = createCol(subRow3, 4);
		new DomainTable(this.player, subRow3Col3, SCHOLAR);
	}

	refresh() {
		this.container.remove();
		this.display(this.parent);
	}
}
