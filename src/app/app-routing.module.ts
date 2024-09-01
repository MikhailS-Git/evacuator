import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
        title: 'Home'
    },
    {
        path: 'create-add',
        loadChildren: () => import('./pages/create-add/create-add.module').then((m) => m.CreateAddModule),
        title: 'Создать объявление'
    },
    // {
    //     path: 'about',
    //     loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
    //     title: 'О проекте'
    // },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
          preloadingStrategy: PreloadAllModules,
          scrollPositionRestoration: 'enabled',
        }),
      ],
      exports: [RouterModule],
})
export class AppRoutingModule { }
