// window.addEventListener('load', function() {

var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 480,
    backgroundColor: "#fff",
    parent: document.getElementById("right"),
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
    //Need to use scene : [BootScene, GameScene ] instead of preload and create 

};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/level/background-extruded.png');
    this.load.audio('goldSound', ['assets/audio/Pickup.wav']);
    this.load.audio('enemyDeath', ['assets/audio/EnemyDeath.wav']);
    this.load.audio('playerAttack', ['assets/audio/PlayerAttack.wav']);
    this.load.audio('playerDamage', ['assets/audio/PlayerDamage.wav']);
    this.load.audio('playerDeath', ['assets/audio/PlayerDeath.wav']);
    this.load.tilemapTiledJSON('map', 'assets/level/large_level.json')
}

function create() {
    this.map = this.make.tilemap({ key: 'map' });
    this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2)
    this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0)
    this.backgroundLayer.setScale(0.5);
}

function update() {

}

// })
