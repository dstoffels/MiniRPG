import { createElement, Div, Heading, Strong } from '../createElement.js';

export default class VitalMeter {
	constructor(parent, title, isFullScale = false, colors, isLarge = true) {
		this.parent = parent;
		this.isFullScale = isFullScale;
		this.display(colors, title, isLarge);
	}

	fullMeter;
	halfMeter;

	display([posColor, negColor], title, isLarge) {
		const container = Div(this.parent, `text-center ${isLarge ? 'p-4' : ''} mb-2 flex-grow-1`);
		isLarge ? Heading(6, container, title) : Strong(container, title);

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
