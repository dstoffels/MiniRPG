export default class Stats {
	/** Maps over all entries of this object */
	map(callback) {
		Object.entries(this).map(callback);
	}

	mapValues(callback) {
		Object.values(this).map(callback);
	}

	update() {}
}
