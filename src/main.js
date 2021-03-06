import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import WinState  from './states/Win';

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    // const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    // const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight
    const width = docElement.clientWidth;
    const height = docElement.clientHeight;
    super(window.innerWidth*window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'gameArea', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
    this.state.add('Win', WinState, false);

    this.state.start('Boot');

  }
  scaleRatio() {
      return window.devicePixelRatio / 3;
  }
}

window.game = new Game()
