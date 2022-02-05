import { Div } from '../createElement.js';
import VitalMeter from './vitalMeter.js';

export default class AnatomyUI {
	constructor(player = Player, parent) {
		this.player = player;
		this.container = Div(parent, 'd-flex flex-column');

		this.render();
	}

	render() {
		this.player.anatomy.mapValues(bodyPart => {
			const { name, hp } = bodyPart;
			const { isFullScale, colors } = hp;
			this[name] = new VitalMeter(this.container, name, isFullScale, colors);
			hp.setUI(this[name].update);
		});
	}
}
