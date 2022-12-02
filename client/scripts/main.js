// window.addEventListener('load', function() {
import Phaser from '../node_modules/phaser'
import BootScene from './BootScene';
import GameScene from './GameScene';
import { BACKEND_HTTP_URL } from "../scripts/backend";
var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 480,
    backgroundColor: "#000",
    parent: document.getElementById("right"),
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    pixelArt: true,
    //scene: [BootScene, GameScene]
    scene: {
        preload: preload,
        create: create
    }

};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/gun.png');
    // this.load.audio('goldSound', '../audio/Pickup.wav');
    // this.load.audio('enemyDeath', '../audio/EnemyDeath.wav');
    // this.load.audio('playerAttack', './audio/PlayerAttack.wav');
    // this.load.audio('playerDamage', './assets/audio/PlayerDamage.wav');
    // this.load.audio('playerDeath', './assets/audio/PlayerDeath.wav');
    //   this.load.tilemapTiledJSON('map', 'assets/level/large_level.json')
}

function create() {
    console.log("Create the game ")
        // this.map = this.make.tilemap({ key: 'map' });
    this.add.image(300, 200, "background")
        // this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2)
        // this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0)
        // this.backgroundLayer.setScale(0.5);
}

// function update() {

// }

// })