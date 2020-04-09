import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game')
	}

	preload()
	{
		this.load.image('background', 'assets/bg_layer1.png')
		// this.load.image('platform', 'assets/ground_grass.png')
	}

	create()
	{
		this.add.image(240, 320, 'background')
	}
}