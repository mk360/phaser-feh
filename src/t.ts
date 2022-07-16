export default class Main extends Phaser.Scene {
    constructor() {
        super('test');
    }

    preload() {
        this.load.image('chrom', './assets/chrom.png');
    }

    create() {
        const { hp } = this.createCharacter('chrom', 90, 100);
        hp.setText('41');
    }

    createCharacter(character: string, x: number, y: number) {
        const indicator = this.add.rectangle(x, y, 110, 110, 0xB1DAEC);
        const group = this.add.group();
        indicator.setAlpha(0.4);
        const characterImage = this.add.image(indicator.getCenter().x, indicator.getCenter().y, character);
        group.add(characterImage);
        characterImage.setScale(0.67);
        const hp = this.add.text(indicator.getBottomLeft().x + 3, indicator.getBottomLeft().y - 20, '46', {
            color: 'white',
            fontFamily: 'sans-serif'
        });
        const healthBar = this.add.rectangle(indicator.getBottomCenter().x + 10, indicator.getBottomCenter().y - 10, 80, 10, 0x4DE1FD);
        group.add(healthBar);
        group.add(hp);
        
        return {
            group,
            hp,
            healthBar,
            characterImage,
        };
    };
}