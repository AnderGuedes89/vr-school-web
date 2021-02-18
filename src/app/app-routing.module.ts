import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { MasterPageComponent } from './shared/pages/master-page/master-page.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { HomeComponent } from './site/pages/home/home.component';

const desktopRoutes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '',
        loadChildren: './site/site.module#SiteModule',
      },
    ]
  },
];

const defaultRoutes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot([...desktopRoutes, ...defaultRoutes],
    {
      scrollPositionRestoration: 'disabled',
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig([...desktopRoutes, ...defaultRoutes]);
  }
}
