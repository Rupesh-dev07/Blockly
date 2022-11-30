class BootScene extends Phaser.Scene {

    preload() {

        this.loadImages();
        // load spritesheets
        // this.loadSpriteSheets();
        // load audio
        this.loadAudio();
        // load tilemap
        this.loadTileMap();


    }
    loadImages() {
        this.load.image('background', 'assets/level/background-extruded.png');
    }
    loadAudio() {
        this.load.audio('goldSound', ['assets/audio/Pickup.wav']);
        this.load.audio('enemyDeath', ['assets/audio/EnemyDeath.wav']);
        this.load.audio('playerAttack', ['assets/audio/PlayerAttack.wav']);
        this.load.audio('playerDamage', ['assets/audio/PlayerDamage.wav']);
        this.load.audio('playerDeath', ['assets/audio/PlayerDeath.wav']);
    }
    loadTileMap() {
        this.load.tilemapTiledJSON('map', 'assets/level/large_level.json')
    }
    create() {
        this.add.image(200, 150, 'background')
        this.scene.start("GameScene");

    }

}