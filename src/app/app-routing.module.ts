import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubCharactersModule } from "./pages/pc/sub-characters/modules/sub-characters.module";

const routes: Routes = [];

@NgModule({
  imports: [
    SubCharactersModule,
    RouterModule.forRoot(routes, { useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
