import Phaser from '../node_modules/phaser'
import { Room, Client } from "../node_modules/colyseus.js";
import { BACKEND_HTTP_URL } from "./backend";
class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    create() {
        this.createMap();

    }
    createMap() {
        console.log("hgame Scene ")
        this.map = this.make.tilemap({ key: 'map' });
        this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2)
        this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0)
        this.backgroundLayer.setScale(2);

    }
}