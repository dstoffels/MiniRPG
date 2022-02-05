import Player from './Entity/player.js';
import CharacterCreationScreen from './_UI/CharacterCreation/characterCreation.js';
import MainMenu from './_UI/MainMenu/mainMenu.js';
import VitalsBar from './_UI/HUD/vitalsBar.js';
import { Script } from './_UI/createElement.js';
import AnatomyUI from './_UI/HUD/anatomyUI.js';

const mainContainer = document.getElementById('main');
// const consoleWindow = new Console();
const player = new Player();

new VitalsBar(player, mainContainer);

// player.vitals.mapValues(vital => {
// 	vital.decrease(500);
// 	if (vital.increase) vital.increase(500);
// });

new AnatomyUI(player, mainContainer);
player.updateStats();

setTimeout(() => {
	player.anatomy.Chest.takeDamage(12.5);
}, 5000);

// setInterval(() => {
// 	player.anatomy.mapValues(bp => {
// 		bp.takeDamage(rand(7));
// 	});
// }, 5000);

const rand = max => Math.floor(Math.random() * max);
Script(
	'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
	'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
	'anonymous',
);
