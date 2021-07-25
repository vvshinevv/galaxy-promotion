import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubCharactersMainComponent } from "../main/sub-characters-main.component";
import { BroadcastInfoComponent } from "../broadcast/broadcast-info.component";
import { PersonaPlanetInfoComponent } from "../persona-planet/persona-planet-info.component";
import { RouterModule, Routes } from "@angular/router";
import { SubCharactersLayoutComponent } from "../layout/sub-characters-layout.component";
import { SonghaeComponent } from "../vr-characters/songhae/songhae.component";
import { MommysonComponent } from "../vr-characters/mommyson/mommyson.component";

const routes: Routes = [
  {
    path: "subcharacters",
    component: SubCharactersLayoutComponent,
    children: [
      { path: "broadcast", component: BroadcastInfoComponent },
      { path: "personaplanet", component: PersonaPlanetInfoComponent },
      { path: "songhae", component: SonghaeComponent },
      { path: "mommyson", component: MommysonComponent },
      { path: "", component: SubCharactersMainComponent },
    ],
  },
  {
    path: "**",
    redirectTo: "subcharacters",
  },
];

@NgModule({
  declarations: [
    SubCharactersMainComponent,
    BroadcastInfoComponent,
    PersonaPlanetInfoComponent,
    SubCharactersLayoutComponent,
    SonghaeComponent,
    MommysonComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubCharactersModule {}
