import { GameElementClickPoint } from "./game-element-click-point";

export class GameElement {
    public top: number;
    public left: number;
    public width: number;
    public height: number;
    public visible: boolean = true;
    public clickPoints?: GameElementClickPoint[];

    public onElementClick(mouseX: number, mouseY: number, onValidClick: () => void): void {
        if (this.clickPoints.find(cp => mouseX > cp.x1 && mouseX < cp.x2 && mouseY > cp.y1 && mouseY < cp.y2)) {
            onValidClick()
        };

    }
}