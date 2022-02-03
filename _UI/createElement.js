export default function createElement(
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
