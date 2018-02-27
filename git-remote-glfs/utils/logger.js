class Logger {
	constructor(shouldLog) {
		this.shouldLog = shouldLog;
	}

	log() {
		if (!this.shouldLog) {
			return;
		}

		console.error.apply(this, arguments);
	}
}

const logger = new Logger(true);

module.exports = logger;
