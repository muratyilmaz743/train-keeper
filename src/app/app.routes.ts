import { Routes } from '@angular/router';
import { DaysComponent } from './src/modules/days/days.component';
import { TrainingRecordComponent } from './src/modules/training-record/training-record.component';
import { authGuard } from './src/core/guards/auth.guard';
import { LoginComponent } from './src/modules/login/login.component';
import { RegisterComponent } from './src/modules/register/register.component';

export const routes: Routes = [
  { path: '', component: DaysComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'training/:trainingName',
    component: TrainingRecordComponent,
    canActivate: [authGuard],
  },
];
