import { Button, Column, Div, P, Row } from '../createElement.js';

export default class ControlPanel {
	constructor(hud, parentRow) {
		this.hud = hud;
		this.render(parentRow);
	}

	render(parentRow) {
		const directionsCol = Column(parentRow, 2);

		const dirRow1 = Row(directionsCol, '', 'justify-content-center m-1');
		const northCol = Column(dirRow1, 6, 'm-auto');
		const north = Button(
			northCol,
			'NORTH',
			() => this.hud.consoleWindow.log(P(null, 'Player moved north')),
			'w-100',
		);

		const dirRow2 = Row(directionsCol, '', 'justify-content-center  m-1');
		const westCol = Column(dirRow2, 6, 'm-auto');
		const west = Button(
			westCol,
			'WEST',
			() => this.hud.consoleWindow.log(P(null, 'Player moved west')),
			'w-100',
		);
		const eastCol = Column(dirRow2, 6, 'm-auto');
		const east = Button(
			eastCol,
			'EAST',
			() => this.hud.consoleWindow.log(P(null, 'Player moved east')),
			'w-100',
		);

		const dirRow3 = Row(directionsCol, '', 'justify-content-center  m-1');
		const southCol = Column(dirRow3, 6);
		const south = Button(
			southCol,
			'SOUTH',
			() => this.hud.consoleWindow.log(P(null, 'Player moved south')),
			'w-100',
		);
	}
}
