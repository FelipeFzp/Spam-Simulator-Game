import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameElements } from './game.elements';
import { GameElementVersions } from './models/game-element-versions';
import { GameImageElement } from './models/game-image-element';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @ViewChild('game', { static: true }) public gameElementRef: ElementRef<HTMLCanvasElement>;
  private _game: HTMLCanvasElement;
  private _gameContext: CanvasRenderingContext2D;
  private _gameElements = new GameElements(1280, 960);
  private _mouseX: number;
  private _mouseY: number;

  private _currentAdIndex: number = 1;

  constructor() {
  }

  public ngOnInit(): void {
    this.startGame();
  }

  public startGame(): void {
    this._configureCanvas()
    this._configureAutoskipAd()
    this._configureClickPoints()

    setInterval(() => this._drawFrame())
  }

  private _configureCanvas(): void {
    this._game = this.gameElementRef.nativeElement;
    this._gameContext = this._game.getContext('2d');
    this._game.width = this._gameElements.screenWidth;
    this._game.height = this._gameElements.screenHeight;
  }

  private _configureAutoskipAd(): void {
    setInterval(() => this._incrementAdIndex(), 2000)
  }

  private _incrementAdIndex(): void {
    const adsLength = Object.keys(this._gameElements.ads).length;
    if (this._currentAdIndex == adsLength) {
      this._currentAdIndex = 1
    } else {
      this._currentAdIndex = this._currentAdIndex + 1
    }
  }

  private _configureClickPoints(): void {
    this.gameElementRef.nativeElement.addEventListener('click', (ev: MouseEvent) => {
      const gameRect = this._game.getBoundingClientRect();
      const mouseX = ev.clientX - gameRect.left;
      const mouseY = ev.clientY - gameRect.top;

      this._gameElements
        .ads[this._currentAdIndex]
        .onElementClick(mouseX, mouseY, () => this._incrementAdIndex())
    })
  }

  //DRAW ELEMENTS
  private _drawBackground(): void {
    const currentBackground = this._gameElements.backgrounds['1'];
    this._drawImageElement(currentBackground);
  }

  private _drawComputer(): void {
    const currentComputer = this._gameElements.computers['1'];
    this._drawImageElement(currentComputer);
  }

  private _drawAd(): void {
    const currentAd = this._gameElements.ads[this._currentAdIndex];
    this._drawImageElement(currentAd);
  }

  //COMMON
  private _drawFrame(): void {
    this._drawBackground()
    this._drawComputer()
    this._drawAd()
    // drawCursor(cursor1)
  }

  private _drawImageElement(image: GameImageElement): void {
    this._gameContext.save(); // Save the current state
    this._gameContext.drawImage(
      GameImageElement.toHtmlImageElement(image),
      image.x1, image.y1,
      image.x2, image.y2,
      image.left,
      image.top,
      image.width,
      image.height); // draw the image

    this._gameContext.restore(); // Restore the last saved state
  };
}
