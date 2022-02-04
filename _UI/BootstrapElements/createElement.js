export function createElement(
	type,
	parent = null,
	id = '',
	classes = '',
	text = '',
	onclick = null,
) {
	const element = document.createElement(type);
	element.className = classes;
	element.id = id;
	element.textContent = text;
	element.onclick = onclick;
	parent?.appendChild(element);

	return element;
}

export function createCol(parent, size, classes) {
	return createElement('div', parent, '', `col-md-${size} ${classes}`);
}

export function createContainer(parent, id = '', classes = '') {
	return createElement('div', parent, id, `container ${classes}`);
}

export function createRow(parent, id = '', classes = '') {
	return createElement('div', parent, id, `row ${classes}`);
}
