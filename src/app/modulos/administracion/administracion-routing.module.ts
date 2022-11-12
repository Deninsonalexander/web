import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';

const routes: Routes = [
  {
   path:"crear-persona",
   component: CrearPersonaComponent
  },
  {
    path:"editar-persona",
    component: EditarPersonaComponent
  },
  {
    path:"buscar-producto",
    component: BuscarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
