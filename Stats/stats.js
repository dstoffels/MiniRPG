export default class Stats {
	/** Maps over all entries of this object */
	map(callback) {
		return Object.entries(this).map(callback);
	}

	/** Maps over all property values of this object */
	mapValues(callback) {
		return Object.values(this).map(callback);
	}

	update() {}
}
