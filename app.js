import Player from './Entity/player.js';
import CharacterCreationScreen from './_UI/CharacterCreation/characterCreation.js';
import MainMenu from './_UI/MainMenu/mainMenu.js';
import VitalsBar from './_UI/HUD/vitalsBar.js';
import { Script } from './_UI/createElement.js';
import AnatomyUI from './_UI/HUD/anatomyUI.js';
import HUD from './_UI/HUD/hud.js';

const mainContainer = document.getElementById('main');
const player = new Player();

player.testLog();
player.testLog();
player.testLog();
player.testLog();
player.testLog();

const rand = max => Math.floor(Math.random() * max);
Script(
	'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
	'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
	'anonymous',
);
