import { Button, Column, Div, Heading, Row } from '../createElement.js';
import AnatomyUI from './anatomyUI.js';
import ConsoleWindow from './console.js';
import ControlPanel from './controlPanel.js';
import VitalsBar from './vitalsBar.js';

export default class HUD {
	constructor(player, parent) {
		this.player = player;
		this.container = Div(parent, '', 'hud');
		this.consoleWindow;

		this.render();
		this.player.updateStats();
	}

	render() {
		// display menu bar?
		const vitalsRow = Row(this.container);
		new VitalsBar(this.player, vitalsRow);

		const mainRow = Row(this.container);

		const leftCol = Column(mainRow, 3, 'text-center');
		new Heading(4, leftCol, 'Also Here');
		//    user must be able to click entities to interact

		const centerCol = Column(mainRow, 6);
		this.consoleWindow = new ConsoleWindow(centerCol);

		const rightCol = Column(mainRow, 3, 'text-center');
		new AnatomyUI(this.player, rightCol);

		const controlsRow = Row(this.container, '', 'p-3');
		new ControlPanel(this, controlsRow);

		this.player.abilities.mapValues(ability =>
			Button(this.container, ability.name, ability.execute),
		);

		// need ui controls along bottom
		//		  WASD for NWSE node movement? how to override keystrokes??
		// how to view skills/attributes?
	}

	close() {
		this.container.remove();
	}
}
