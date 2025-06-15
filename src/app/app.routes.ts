import { Routes } from '@angular/router';
import { TrackingComponent }   from './features/tracking/tracking.component';
import { ServicesComponent }   from './features/services/services.component';
import { AboutComponent }      from './features/about/about.component';

export const routes: Routes = [
  { path: '',           redirectTo: 'tracking', pathMatch: 'full' },
  { path: 'tracking',   component: TrackingComponent },
  { path: 'services',   component: ServicesComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'news',       loadComponent: () => import('./features/news/news.component').then(m => m.NewsComponent) },
  { path: 'careers',    loadComponent: () => import('./features/dsp/dsp.component').then(m => m.DspComponent) },
  { path: 'dsp',        loadComponent: () => import('./features/dsp/dsp.component').then(m => m.DspComponent) },
  { path: 'sustainability', loadComponent: () => import('./features/sustainability/sustainability.component').then(m => m.SustainabilityComponent) },
  { path: 'support',    loadComponent: () => import('./features/support/support.component').then(m => m.SupportComponent) },
];
