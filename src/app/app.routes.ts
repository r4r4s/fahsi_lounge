import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Copas } from './components/copas/copas';
import { Cervezas} from './components/cervezas/cervezas';
import { Cachimbas} from './components/cachimbas/cachimbas';
import { Juegos } from './components/juegos/juegos';
import { Error} from './components/error/error';

export const routes: Routes = [
    
  
  { path: '', component: Home },

  { path: 'copas', component: Copas},
  { path: 'cervezas', component: Cervezas },
  { path: 'cachimbas', component: Cachimbas },
  { path: 'juegos', component: Juegos },

  { path: '**', component: Error }
];
