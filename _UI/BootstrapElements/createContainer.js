import createElement from './createElement.js';

export default function createContainer(parent, id = '', classes = '') {
	return createElement('div', parent, id, `container ${classes}`);
}
