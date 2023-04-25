import Button from '../helpers/button';
import Card from '../helpers/card';
import CardContainer from '../helpers/cardContainer';
import Zone from '../helpers/zone';
import io from 'socket.io-client';
import GameManager from '../managers/gameManager';

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        this.load.image('doorBack', 'src/assets/MunchkinAssets/DoorBack.png');
        this.load.image('treasureBack', 'src/assets/MunchkinAssets/TreasureBack.png');
        // this.load.image('beast_jackRhymer', 'src/assets/MunchkinAssets/Doors/beast_jackRhymer.png');
        // this.load.image('beast_ketsalcoatl', 'src/assets/MunchkinAssets/Doors/beast_ketsalcoatl.png');
        // this.load.image('beast_lions', 'src/assets/MunchkinAssets/Doors/beast_lions.png');
        // this.load.image('beast_wildHunt', 'src/assets/MunchkinAssets/Doors/beast_wildHunt.png');
        // this.load.image('class_clerk1', 'src/assets/MunchkinAssets/Doors/class_clerk1.png');
        // this.load.image('class_thief1', 'src/assets/MunchkinAssets/Doors/class_thief1.png');
        // this.load.image('class_warrior1', 'src/assets/MunchkinAssets/Doors/class_warrior1.png');
        // this.load.image('class_wizard1', 'src/assets/MunchkinAssets/Doors/class_wizard1.png');
        // this.load.image('curse_changeClass', 'src/assets/MunchkinAssets/Doors/curse_changeClass.png');
        // this.load.image('curse_looseClass', 'src/assets/MunchkinAssets/Doors/curse_looseClass.png');
        // this.load.image('curse_looseLevel', 'src/assets/MunchkinAssets/Doors/curse_looseLevel.png');
        // this.load.image('curse_looseRace', 'src/assets/MunchkinAssets/Doors/curse_looseRace.png');
        // this.load.image('curse_payToCharon', 'src/assets/MunchkinAssets/Doors/curse_payToCharon.png');
        // this.load.image('halfblood1', 'src/assets/MunchkinAssets/Doors/halfblood1.png');
        // this.load.image('supermunchkin1', 'src/assets/MunchkinAssets/Doors/supermunchkin1.png');
        // this.load.image('race_dwarf1', 'src/assets/MunchkinAssets/Doors/race_dwarf1.png');
        // this.load.image('race_elf1', 'src/assets/MunchkinAssets/Doors/race_elf1.png');
        // this.load.image('race_halfling1', 'src/assets/MunchkinAssets/Doors/race_halfling1.png');

        // this.load.image('stuff_armor_lionSkin', 'src/assets/MunchkinAssets/Treasures/stuff_armor_lionSkin.png');
        // this.load.image('stuff_head_lavrov', 'src/assets/MunchkinAssets/Treasures/stuff_head_lavrov.png');
        // this.load.image('stuffOneHand_sprayMorgenStern', 'src/assets/MunchkinAssets/Treasures/stuffOneHand_sprayMorgenStern.png');
        // this.load.image('stuff_oneshot_buf_sandPotion', 'src/assets/MunchkinAssets/Treasures/stuff_oneshot_buf_sandPotion.png');
        // this.load.image('stuff_oneshot_styxStones', 'src/assets/MunchkinAssets/Treasures/stuff_oneshot_styxStones.png');
        // this.load.image('stuff_shoes_aquarium', 'src/assets/MunchkinAssets/Treasures/stuff_shoes_aquarium.png');
        // this.load.image('stuff_twoHands_herculesBowAndArrow', 'src/assets/MunchkinAssets/Treasures/stuff_twoHands_herculesBowAndArrow.png');
    }

    create() {
        let self = this;
        this.gameManager = new GameManager(this);

        this.dealText = new Button(this, 75, 350, ['DEAL CARDS']);
        this.zone = new Zone(this);
        this.zone.render(700, 375, 900, 250);

        this.socket = io('http://localhost:3000');

        this.socket.on('connect', function () {
        	console.log('Connected!');
        });

		this.dealText.on('pointerdown', function () {
            self.gameManager.dealCards();
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff69b4);
            self.children.bringToTop(gameObject);
        })

        this.input.on('dragend', function (pointer, gameObject, dropped) {
            gameObject.setTint();
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.on('drop', function (pointer, gameObject, dropZone) {
            dropZone.data.values.cards++;
            gameObject.x = (dropZone.x - 350) + (dropZone.data.values.cards * 50);
            gameObject.y = dropZone.y;
            gameObject.disableInteractive();
        })
    }
    
    update() {
    
    }
}