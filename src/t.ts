export default class Main extends Phaser.Scene {
    constructor() {
        super('test');
    }

    preload() {
        this.load.image('chrom', './assets/chrom.png');
    }

    create() {
    }

    createCharacter() {
        const group = this.add.group();
        const chrom = this.add.image(90, 100, 'chrom');
        chrom.setScale(0.7, 0.7);
        const healthBar = this.add.rectangle(chrom.x + 10, chrom.y + chrom.displayHeight / 2 + 20, 70, 10, 0x9B5538);
        group.add(healthBar);
        group.add(chrom);

        return group;
    };
}