import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/screens/dashboard/dashboard.component';
import { LoginComponent } from './components/screens/login/login.component';
import { SideNavComponent } from './components/screens/side-nav/side-nav.component';
import { UserroleComponent } from './components/screens/userrole/userrole.component';
import { CreatepostComponent } from './components/screens/createpost/createpost.component';
import { GuidelinesComponent } from './components/screens/guidelines/guidelines.component';
import { GrowthCycleComponent } from './components/screens/growth-cycle/growth-cycle.component';
import { AddGrowthCycleComponent } from './components/screens/add-growth-cycle/add-growth-cycle.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'side-nav', component: SideNavComponent },
  { path: 'userrole', component: UserroleComponent },
  { path: 'growthcycle', component: GrowthCycleComponent },
  { path: 'createpost', component: CreatepostComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'add-growthcycle', component: AddGrowthCycleComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
