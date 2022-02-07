// FIXME: rearrange params to have id last in line
export function createElement(
	type,
	parent = null,
	id = '',
	classes = '',
	text = '',
	onclick = null,
) {
	const element = document.createElement(type);
	if (classes) element.className = classes;
	if (id) element.id = id;
	if (text) element.textContent = text;
	if (onclick) element.onclick = onclick;
	parent?.appendChild(element);

	return element;
}

export function Container(parent, id = '', classes = '') {
	return createElement('div', parent, id, `container ${classes}`);
}

export function FluidContainer(parent, id = '', classes = '') {
	return createElement('div', parent, id, `container-fluid ${classes}`);
}

export function Row(parent, id = '', classes = '') {
	return createElement('div', parent, id, `row ${classes}`);
}

export function Column(parent, size = 1, classes) {
	return createElement('div', parent, '', `col-md-${size} ${classes}`);
}

export function Button(parent, text, onclick, classes, color = 'primary') {
	return createElement('button', parent, '', `btn btn-${color} ${classes}`, text, onclick);
}

export function Heading(size, parent, text) {
	return createElement(`h${size}`, parent, '', '', text);
}

export function Div(parent, classes, id) {
	return createElement('div', parent, id, classes);
}

export function Strong(parent, text, classes, id) {
	return createElement('strong', parent, id, classes, text);
}

export function P(parent, text, classes, id) {
	return createElement('p', parent, id, classes, text);
}

export function Script(src, integrity, crossOrigin) {
	const script = document.createElement('script');
	script.src = src;
	if (integrity) script.integrity = integrity;
	if (crossOrigin) script.crossOrigin = crossOrigin;
	document.body.appendChild(script);
}
