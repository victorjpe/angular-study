import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';


const routes: Routes = [
  { path: '',
    component: HomeComponent
   },
   { path: 'about',
    component: AboutComponent
   },
   { path: 'link',
    component: LinkComponent
   }
];

export const AppRoutes = RouterModule.forRoot(routes);
