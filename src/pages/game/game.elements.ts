import { Observable } from "rxjs";
import { GameElement } from "./models/game-element";
import { GameElementClickPoint } from "./models/game-element-click-point";
import { GameElementVersions } from "./models/game-element-versions";
import { GameImageElement } from "./models/game-image-element";

export class GameElements {
    public screenWidth: number;
    public screenHeight: number;

    constructor(screenWidth: number, screenHeight: number) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }

    public get computers(): GameElementVersions<GameImageElement> {
        const baseComputerConfig = {
            width: this.screenWidth,
            height: this.screenHeight,
            top: 0,
            left: 0,
            x1: 0,
            x2: this.screenWidth,
            y1: 0,
            y2: this.screenHeight,
            visible: true
        }
        const elementVersions = new GameElementVersions<GameImageElement>()

        elementVersions['1'] = new GameImageElement()
        elementVersions['1'].width = baseComputerConfig.width;
        elementVersions['1'].height = baseComputerConfig.height;
        elementVersions['1'].top = baseComputerConfig.top;
        elementVersions['1'].left = baseComputerConfig.left;
        elementVersions['1'].x1 = baseComputerConfig.x1;
        elementVersions['1'].x2 = baseComputerConfig.x2;
        elementVersions['1'].y1 = baseComputerConfig.y1;
        elementVersions['1'].y2 = baseComputerConfig.y2;
        elementVersions['1'].visible = baseComputerConfig.visible;
        elementVersions['1'].src = '../../assets/images/computer_1.png'

        elementVersions['2'] = new GameImageElement()
        elementVersions['2'].width = baseComputerConfig.width;
        elementVersions['2'].height = baseComputerConfig.height;
        elementVersions['2'].top = baseComputerConfig.top;
        elementVersions['2'].left = baseComputerConfig.left;
        elementVersions['2'].x1 = baseComputerConfig.x1;
        elementVersions['2'].x2 = baseComputerConfig.x2;
        elementVersions['2'].y1 = baseComputerConfig.y1;
        elementVersions['2'].y2 = baseComputerConfig.y2;
        elementVersions['2'].visible = baseComputerConfig.visible;
        elementVersions['2'].src = '../../assets/images/computer_2.png'

        return elementVersions;
    };

    public get backgrounds(): GameElementVersions<GameImageElement> {
        const elementVersions = new GameElementVersions<GameImageElement>()

        elementVersions['1'] = new GameImageElement()
        elementVersions['1'].src = '../../assets/images/bg_1.png'
        elementVersions['1'].width = this.screenWidth
        elementVersions['1'].height = this.screenHeight
        elementVersions['1'].top = 0
        elementVersions['1'].left = 0
        elementVersions['1'].x1 = 0
        elementVersions['1'].x2 = this.screenWidth
        elementVersions['1'].y1 = 0
        elementVersions['1'].y2 = this.screenHeight
        elementVersions['1'].visible = true

        return elementVersions;
    };

    public get ads(): GameElementVersions<GameImageElement> {
        let ads: GameElementVersions<GameImageElement> = {};
        const adsTotalCount = 12;
        const adHeight = 276;
        const adWidth = 432;
        const left = 217;
        const top = 460;
        const clickPoint: GameElementClickPoint = {
            x1: left,
            x2: left + adWidth,
            y1: top,
            y2: top + adHeight
        };
        for (let i = 0; i < adsTotalCount; i++) {
            const el = new GameImageElement()

            el.src = '../../assets/images/ads.png'
            el.width = adWidth
            el.height = adHeight
            el.top = top
            el.left = left
            el.x1 = 0
            el.x2 = adWidth
            el.y1 = adHeight * i
            el.y2 = adHeight
            el.visible = true
            el.clickPoints = [clickPoint]

            ads[`${i + 1}`] = el;
        }
        return ads;
    }

    public get cursors(): GameElementVersions<GameImageElement> {
        let cursors: GameElementVersions<GameImageElement> = {};
        const cursorsTotalCount = 16;
        const cursorHeight = 64;
        const cursorWidth = 64;
        for (let i = 0; i < cursorsTotalCount; i++) {
            const el = new GameImageElement()

            el.src = '../../assets/images/cursors.png'
            el.width = cursorWidth
            el.height = cursorHeight
            el.left = 0
            el.top = 0
            el.x1 = 0
            el.x2 = cursorWidth
            el.y1 = cursorHeight * i
            el.y2 = cursorHeight
            el.visible = true

            cursors[`${i + 1}`] = el;
        }
        return cursors;
    }
}