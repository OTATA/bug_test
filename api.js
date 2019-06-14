export class API{
	async perform() {

		return new Promise((resolve,reject) => {
		setTimeout(() => {
				this.doIt(resolve, reject);
			}, 1000);
		});
	}

	async doIt(resolve, reject) {
		  this.interval = setInterval(async () => {
				console.log("Running interval");
				if (this.ok == true) {
					this.interval && clearInterval(this.interval);
					console.log("ok!");
					resolve();
				}
		}, 500);
	}
}
