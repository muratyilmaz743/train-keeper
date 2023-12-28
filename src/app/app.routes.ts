import { Routes } from '@angular/router';
import { DaysComponent } from './src/modules/days/days.component';
import { TrainingRecordComponent } from './src/modules/training-record/training-record.component';

export const routes: Routes = [
  { path: '', component: DaysComponent },
  { path: 'training', component: TrainingRecordComponent },
];
