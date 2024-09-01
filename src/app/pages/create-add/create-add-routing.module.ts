import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateAddComponent } from "./create-add.component";

const routes: Routes = [
    {
        path: "",
        component: CreateAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateAddRoutingModule {}
