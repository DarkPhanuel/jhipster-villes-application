import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'villesApplicationApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'ville',
    data: { pageTitle: 'villesApplicationApp.ville.home.title' },
    loadChildren: () => import('./ville/ville.routes'),
  },
  {
    path: 'region',
    data: { pageTitle: 'villesApplicationApp.region.home.title' },
    loadChildren: () => import('./region/region.routes'),
  },
  {
    path: 'joueur',
    data: { pageTitle: 'villesApplicationApp.joueur.home.title' },
    loadChildren: () => import('./joueur/joueur.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
