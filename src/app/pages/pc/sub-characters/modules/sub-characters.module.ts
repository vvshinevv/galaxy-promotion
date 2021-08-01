import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubCharactersMainComponent } from "../main/sub-characters-main.component";
import { BroadcastInfoComponent } from "../broadcast/broadcast-info.component";
import { PersonaPlanetInfoComponent } from "../persona-planet/persona-planet-info.component";
import { RouterModule, Routes } from "@angular/router";
import { SubCharactersLayoutComponent } from "../layout/sub-characters-layout.component";
import { SonghaeComponent } from "../vr-characters/songhae/songhae.component";
import { MommysonComponent } from "../vr-characters/mommyson/mommyson.component";
import { SubCharactersMainPrComponent } from '../main-pr/sub-characters-main-pr.component';
import { IntroduceComponent } from '../introduce/introduce.component';

const routes: Routes = [
  {
    path: "",
    component: SubCharactersLayoutComponent,
    children: [
      { path: "broadcast", component: BroadcastInfoComponent },
      { path: "personaplanet", component: PersonaPlanetInfoComponent },
      { path: "songhae", component: SonghaeComponent },
      { path: "mommyson", component: MommysonComponent },
      { path: "intro", component: IntroduceComponent },
      { path: "", component: SubCharactersMainPrComponent }
    ],
  }
];

@NgModule({
  declarations: [
    SubCharactersMainComponent,
    BroadcastInfoComponent,
    PersonaPlanetInfoComponent,
    SubCharactersLayoutComponent,
    SonghaeComponent,
    MommysonComponent,
    SubCharactersMainPrComponent,
    IntroduceComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubCharactersModule {}
