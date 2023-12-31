import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../shared/modal/modal.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tracker-training-record',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './training-record.component.html',
  styleUrl: './training-record.component.css',
})
export class TrainingRecordComponent implements OnInit {
  public trainingName = '';
  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit() {
    this.trainingName = this.route.snapshot.paramMap.get('trainingName')!;
  }

  addExerciseForm = new FormGroup({
    date: new FormControl(''),
    weight: new FormControl(0),
  });
}
