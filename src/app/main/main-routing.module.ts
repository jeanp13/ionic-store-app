import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants } from 'src/shared/constants';
import { TabsPage } from './main.page';

const token = localStorage.getItem(Constants.keyStore.token);
const routes: Routes = [
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'resumo',
        loadChildren: () =>
          import('../resumo/resumo.module').then((m) => m.TabResumoModule),
      },
      {
        path: 'estoque',
        loadChildren: () =>
          import('../estoque/estoque.module').then((m) => m.TabEstoqueModule),
      },
      {
        path: 'pedidos',
        loadChildren: () =>
          import('../pedidos/pedidos.module').then((m) => m.TabPedidosModule),
      },
      {
        path: 'vendas',
        loadChildren: () =>
          import('../vendas/vendas.module').then((m) => m.TabVendasModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('../perfil/perfil.module').then((m) => m.PerfilPageModule),
      },
      {
        path: '',
        redirectTo: '/main/resumo',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: token ? '/main/resumo' : '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
