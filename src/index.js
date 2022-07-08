import {Application, Sprite} from 'pixi.js';

const SCREEN_WIDTH = 500;
const SCREEN_HEIGHT = 500;

let app = new Application({width: SCREEN_WIDTH, height:SCREEN_HEIGHT, backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

let knight = Sprite.from('img/knight.png')
knight.anchor.set(0.5);
knight.x = SCREEN_WIDTH / 2;
knight.y = SCREEN_HEIGHT / 2;
app.stage.addChild(knight);
