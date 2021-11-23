import { GameElement } from "./game-element";

export class GameElementVersions<T extends GameElement>  {
    [versionId: string]: T
}