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
        path: 'venda',
        loadChildren: () =>
          import('../vendas/vendas.module').then((m) => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/main/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
