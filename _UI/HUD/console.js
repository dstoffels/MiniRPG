import { Div } from '../createElement.js';

export default class Console {
	constructor(parent) {
		this.screen = Div(parent, 'container-fluid border', 'game-console');
	}

	log = content => {
		const wrapper = Div(this.screen, 'console-log mb-4');
		wrapper.appendChild(content);
		this.scrollBottom();
	};

	scrollBottom() {
		this.screen.scrollTop = this.screen.scrollHeight;
	}
}
