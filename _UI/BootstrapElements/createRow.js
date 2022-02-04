import createElement from './createElement.js';

export default function createRow(parent, id = '', classes = '') {
	return createElement('div', parent, id, `row ${classes}`);
}
