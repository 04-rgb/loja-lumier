import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path:'home',
        loadComponent:() => 
        import ('./pages/home/home').then (m => m.Home)
    },
    {
        path:'produtos',
        loadComponent:() => 
        import ('./pages/produtos/produtos').then (m => m.Produtos)
    },
    { 
        path:'carrinho',
        loadComponent:() => 
        import ('./pages/carrinho/carrinho').then (m => m.Carrinho)
    },
    {
        path:'favoritos',
        loadComponent:() => 
        import ('./pages/favoritos/favoritos').then (m => m.Favoritos)
   },
    {
        path:'cadastro',
        loadComponent:() => 
        import('./pages/cadastro/cadastro').then (m => m.Cadastro)
    }
];
