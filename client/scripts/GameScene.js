class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    create() {
        this.createMap();

    }
    createMap() {
        this.map = this.make.tilemap({ key: 'map' });
        this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2)
        this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0)
        this.backgroundLayer.setScale(2);

    }
}