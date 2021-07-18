import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubCharactersMainComponent } from "../main/sub-characters-main.component";
import { BroadcastInfoComponent } from "../broadcast/broadcast-info.component";
import { PersonaPlanetInfoComponent } from "../persona-planet/persona-planet-info.component";
import { RouterModule, Routes } from "@angular/router";
import { SubCharactersLayoutComponent } from "../layout/sub-characters-layout.component";

const routes: Routes = [
  {
    path: "subcharacters",
    component: SubCharactersLayoutComponent,
    children: [
      { path: "broadcast", component: BroadcastInfoComponent },
      { path: "personaplanet", component: PersonaPlanetInfoComponent },
      { path: "", component: SubCharactersMainComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SubCharactersMainComponent,
    BroadcastInfoComponent,
    PersonaPlanetInfoComponent,
    SubCharactersLayoutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubCharactersModule {}
