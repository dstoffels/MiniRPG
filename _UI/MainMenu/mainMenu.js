import CharacterCreationScreen from '../CharacterCreation/characterCreation.js';
import {
	Button,
	Column,
	Container,
	createElement,
	Row,
} from '../createElement.js';

export default class MainMenu {
	container;
	constructor(player) {
		this.player = player;
		this.display();
	}
	display() {
		this.container = Container(document.body);
		const row = Row(this.container, '', 'vh-100 ');
		const menuWrapper = createElement(
			'div',
			row,
			'',
			'm-auto w-25 h-25 bg-white',
		);
		const newChar = Button(
			'secondary',
			menuWrapper,
			'',
			'',
			'New Character',
			() => {
				new CharacterCreationScreen(this.player);
				this.close();
			},
		);
	}

	close() {
		this.container.remove();
	}
}
