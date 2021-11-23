import { GameElementClickPoint } from "./game-element-click-point";

export class GameElement {
    public top: number;
    public left: number;
    public width: number;
    public height: number;
    public visible: boolean = true;
    public clickPoints?: GameElementClickPoint[];

    public onClick(mouseX: number, mouseY: number, onValidClick: () => void): void {
        if (this.clickPoints.find(cp => mouseX > cp.x1 && mouseX < cp.x2 && mouseY > cp.y1 && mouseY < cp.y2)) {
            onValidClick()
        };
    }

    public onMouseMove(mouseX: number, mouseY: number, onMouseIn: () => void, onMouseOut?: () => void): void {
        if (this.clickPoints.find(cp => mouseX > cp.x1 && mouseX < cp.x2 && mouseY > cp.y1 && mouseY < cp.y2)) {
            onMouseIn()
        } else {
            onMouseOut ? onMouseOut() : undefined
        };
    }
}