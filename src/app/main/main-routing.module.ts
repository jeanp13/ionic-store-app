import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'resumo',
        loadChildren: () =>
          import('../resumo/resumo.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'estoque',
        loadChildren: () =>
          import('../estoque/estoque.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'pedidos',
        loadChildren: () =>
          import('../pedidos/pedidos.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'vendas',
        loadChildren: () =>
          import('../vendas/vendas.module').then((m) => m.Tab4PageModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('../perfil/perfil.module').then((m) => m.PerfilPageModule),
      },
      {
        path: '',
        redirectTo: '/resumo/resumo',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/main/main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
