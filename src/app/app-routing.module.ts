import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'produto/:id',
    loadChildren: () => import('./screens/produto/produto.module').then(m => m.ProdutoPageModule)
  },
  {
    path: 'professores',
    loadChildren: () => import('./screens/professores/professores.module').then(m => m.ProfessoresPageModule)
  },
  {
    path: 'loja',
    loadChildren: () => import('./screens/loja/loja.module').then( m => m.LojaPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./screens/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'muay-thai-personal',
    loadChildren: () => import('./screens/muay-thai-personal/muay-thai-personal.module').then( m => m.MuayThaiPersonalPageModule)
  },
  {
    path: 'muay-thai-grupo',
    loadChildren: () => import('./screens/muay-thai-grupo/muay-thai-grupo.module').then( m => m.MuayThaiGrupoPageModule)
  },
  {
    path: 'muay-thai-kids',
    loadChildren: () => import('./screens/muay-thai-kids/muay-thai-kids.module').then( m => m.MuayThaiKidsPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
