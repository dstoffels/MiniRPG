import { ARMOR_SLOTS } from '../../Stats/Anatomy/bodyParts.js';
import { Column, Div, Row } from '../createElement.js';
import VitalMeter from './vitalMeter.js';

export default class AnatomyUI {
	constructor(player, parent) {
		this.player = player;
		this.container = Div(parent);

		this.render();
	}

	render() {
		let uiRow = 0;
		let uiCol = 0;
		let newRow;
		let newCol;

		this.player.anatomy.mapValues(bodyPart => {
			const { name, hp, row, col } = bodyPart;
			const { isFullScale, colors } = hp;

			if (uiRow != row) {
				newRow = Row(this.container, '', 'justify-content-center');
				uiRow++;
				uiCol = 0;
			}

			if (uiCol != col) {
				newCol = Column(newRow, 4);
				uiCol++;
			}

			this[name] = new VitalMeter(newCol, name, isFullScale, colors, false);
			hp.setUI(this[name].update);
		});
	}
}
