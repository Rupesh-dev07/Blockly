const PhaserGame  = require('phaser')
const BootScene = require('./scenes/bootScene.js')
    // import GameScene from './scenes/gameScene.js'
    // import FullScreenEvent from './components/fullscreenEvent.js'

const config = {
    type: Phaser.AUTO,
    scale: {
        //  mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 341,
        height: 480
    },
    scene: [BootScene]
}

window.addEventListener('load', () => {
    const game = new Game(config)
        // FullScreenEvent(() => resize(game));
    const toolbox = {
        'kind': 'flyoutToolbox',
        'contents': [{
                'kind': 'block',
                'type': 'controls_repeat_ext',
                'inputs': {
                    'TIMES': {
                        'shadow': {
                            'type': 'math_number',
                            'fields': {
                                'NUM': 5,
                            },
                        },
                    },
                },
            },
            {
                'kind': 'block',
                'type': 'play_sound',
            },
        ],
    };

    Blockly.inject('blocklyDiv', {
        toolbox: toolbox,
        scrollbars: true,
    });
})