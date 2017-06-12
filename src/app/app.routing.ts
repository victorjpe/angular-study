import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: 'home',
    component: HomeComponent
   },
   { path: 'about',
    component: AboutComponent
   },
   { path: 'signup',
    component: SignupComponent
   },
   { path: 'search',
    component: SearchComponent
   },
   { path: '', 
    redirectTo:'/home', pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
