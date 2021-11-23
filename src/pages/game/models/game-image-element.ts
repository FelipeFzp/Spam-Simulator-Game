import { GameElement } from "./game-element";

export class GameImageElement extends GameElement {
    public src: string;
    public x1: number;
    public x2: number;
    public y1: number;
    public y2: number;

    public static toHtmlImageElement(el: GameImageElement): HTMLImageElement {
        const img = new Image();
        img.src = el.src;

        return img;
    }
}