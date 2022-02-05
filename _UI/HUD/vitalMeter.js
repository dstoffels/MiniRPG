import { createElement, Div, Heading } from '../createElement.js';

export default class VitalMeter {
	constructor(parent, title, isFullScale = false, colors) {
		this.parent = parent;
		this.title = title;
		this.isFullScale = isFullScale;
		this.display(colors);
	}

	fullMeter;
	halfMeter;

	display([posColor, negColor]) {
		const container = Div(this.parent, 'text-center p-2 flex-grow-1');
		Heading(6, container, this.title);

		const fullMeterContainer = Div(container, 'stat-meter-bg');
		this.fullMeter = Div(fullMeterContainer, 'stat-meter-full');
		this.fullMeter.style.backgroundColor = posColor;

		if (!this.isFullScale) {
			const halfMeterBg = Div(fullMeterContainer, 'stat-meter-half-bg');
			halfMeterBg.style.backgroundColor = negColor;
			this.halfMeter = Div(fullMeterContainer, 'stat-meter-half');
		}

		this.update(100);
	}

	update = ratio => {
		this.fullMeter.style.width = `${ratio}%`;

		if (!this.isFullScale) this.halfMeter.style.width = ratio < 50 ? `${ratio}%` : `${50}%`;
	};
}
