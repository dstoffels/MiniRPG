import {
	BUILDER,
	MAGE,
	PIONEER,
	ROGUE,
	SCHOLAR,
	SHAMAN,
	WARRIOR,
} from '../../Stats/Skills/skillData.js';
import { Column, createElement, Row } from '../createElement.js';
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
		const subRow1 = Row(this.container);
		const subRow1Col1 = Column(subRow1, 6);
		new DomainTable(this.player, subRow1Col1, WARRIOR);
		const subRow1Col2 = Column(subRow1, 6);
		new DomainTable(this.player, subRow1Col2, ROGUE);

		const subRow2 = Row(this.container);
		const subRow2Col1 = Column(subRow2, 6);
		new DomainTable(this.player, subRow2Col1, SHAMAN);
		const subRow2Col2 = Column(subRow2, 6);
		new DomainTable(this.player, subRow2Col2, MAGE);

		const subRow3 = Row(this.container);
		const subRow3Col1 = Column(subRow3, 4);
		new DomainTable(this.player, subRow3Col1, BUILDER);
		const subRow3Col2 = Column(subRow3, 4);
		new DomainTable(this.player, subRow3Col2, PIONEER);
		const subRow3Col3 = Column(subRow3, 4);
		new DomainTable(this.player, subRow3Col3, SCHOLAR);
	}

	refresh() {
		this.container.remove();
		this.display(this.parent);
	}
}
