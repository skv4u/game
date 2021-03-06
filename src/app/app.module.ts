import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ConfigurationMicroService } from './shared/configuration-micro.service';
import { HomeComponent } from './home/home.component';

import { PopupboxComponent } from './common/popupbox/popupbox.component';
import { CustomSelectDropdownComponent } from './common/custom-select-dropdown/custom-select-dropdown.component';
import { FilterListPipe } from './shared/filter-list.pipe';
import { LoginComponent } from 'app/login/login.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { ArrangeNumberComponent } from './arrange-number/arrange-number.component';
import { ScrumbleWordComponent } from './scrumble-word/scrumble-word.component';
import { FrogPuzzleComponent } from './frog-puzzle/frog-puzzle.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallBreakComponent } from './call-break/call-break.component';
import { TeenPattiComponent } from './teen-patti/teen-patti.component';
import { NumberMagicComponent } from './number-magic/number-magic.component';
import { WoodBlockComponent } from './wood-block/wood-block.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

//Route Paths
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'memory-game', component: MemoryGameComponent },
  { path: 'arrange-number', component: ArrangeNumberComponent },
  { path: 'scrumble-word', component: ScrumbleWordComponent },
  { path: 'frog-puzzle', component: FrogPuzzleComponent },
  { path: 'call-break', component: CallBreakComponent },
  { path: 'teen-patti', component: TeenPattiComponent },
  { path: 'number-magic', component: NumberMagicComponent },
  { path: 'wood-block', component: WoodBlockComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PopupboxComponent,
    CustomSelectDropdownComponent,
    FilterListPipe,
    MemoryGameComponent,
    ArrangeNumberComponent,
    ScrumbleWordComponent,
    FrogPuzzleComponent,
    CallBreakComponent,
    HeaderComponent,
    FooterComponent,
    TeenPattiComponent,
    NumberMagicComponent,
    WoodBlockComponent,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [ConfigurationMicroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
