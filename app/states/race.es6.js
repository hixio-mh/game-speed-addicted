'use strict';

import SETTINGS from './../settings.es6';

class Race extends Phaser.State {
    preload() {
        this.game.load.image('player', '/app/assets/images/car.png');
    }

    create() {
        this.player = this.game.add.sprite(128, 128, 'player');
        this.player.anchor.setTo(0.5, 0.5);

        // Set camera
        this.game.camera.follow(this.player);

        // Set physics
        this.game.physics.enable(this.player, Phaser.Physics[SETTINGS.physics]);
    }

    update() {
        this.player.body.velocity.setTo(0, 0);
        this.player.body.angularVelocity = 0;

        let moveOffset = SETTINGS.map.tileSize / 2;
        let keyboard = this.game.input.keyboard;

        if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.player.x -= moveOffset;
        } else if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.player.x += moveOffset;
        }

        if (keyboard.isDown(Phaser.Keyboard.UP)) {
            this.player.y -= moveOffset;
        } else if (keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.player.y += moveOffset;
        }
    }
}

export default Race;
