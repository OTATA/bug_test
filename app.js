import {API} from "./api.js";
import {AnotherAPI} from "./another_api.js";

$( document ).ready(function() {
	const api = new API();
	const anotherApi = new AnotherAPI();

	const button = jQuery(".button");

	setTimeout(() => {
		api.ok = true;
	}, 5000);

	button.on("click", async function() {
		await Promise.all[anotherApi.doIt(),api.perform()];
	});
});
