import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/screens/login/login.component';
import { DashboardComponent } from './components/screens/dashboard/dashboard.component';
import { SideNavComponent } from './components/screens/side-nav/side-nav.component';
import { HeaderComponent } from './components/screens/header/header.component';
import { UserroleComponent } from './components/screens/userrole/userrole.component';
import { CategoriesComponent } from './components/screens/categories/categories.component';
import { CreatepostComponent } from './components/screens/createpost/createpost.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuidelinesComponent } from './components/screens/guidelines/guidelines.component';
import { GrowthCycleComponent } from './components/screens/growth-cycle/growth-cycle.component';
import { AddGrowthCycleComponent } from './components/screens/add-growth-cycle/add-growth-cycle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    HeaderComponent,
    UserroleComponent,
    CategoriesComponent,
    CreatepostComponent,
    GuidelinesComponent,
    GrowthCycleComponent,
    AddGrowthCycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
