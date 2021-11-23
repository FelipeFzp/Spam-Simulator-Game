import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: GameComponent }])
  ]
})
export class GameModule { }
