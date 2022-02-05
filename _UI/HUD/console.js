export default class Console {
	constructor() {
		self = document.getElementById('console');
	}

	addLine(text) {
		const p = document.createElement('p');
		p.className = 'mb-0 blockquote';
		p.textContent = text;
		self.appendChild(p);
		this.scrollBottom();
	}

	scrollBottom() {
		self.scrollTop = self.scrollHeight;
	}
}
