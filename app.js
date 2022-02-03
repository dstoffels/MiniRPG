import Console from './console.js';
import Player from './Entity/player.js';
import CharacterCreationScreen from './_UI/CharacterCreation/characterCreation.js';

const consoleWindow = new Console();
const player = new Player();
const cc = new CharacterCreationScreen(player);
