import Player from '../../Entity/player.js';
import Stats from '../../Stats/stats.js';
import { Container, Div } from '../createElement.js';
import VitalMeter from './vitalMeter.js';

export default class VitalsBar {
	constructor(player = Player, parent) {
		this.player = player;
		this.container = Div(parent, 'd-flex');

		this.render();
	}

	render() {
		this.player.vitals.mapValues(vital => {
			const { name, isFullScale, colors } = vital;
			this[name] = new VitalMeter(this.container, name, isFullScale, colors);
			vital.setUI(this[name].update);
		});
	}
}
