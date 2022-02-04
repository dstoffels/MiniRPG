import createElement from './createElement.js';

export default function createCol(parent, size, classes) {
	return createElement('div', parent, '', `col-md-${size} ${classes}`);
}
