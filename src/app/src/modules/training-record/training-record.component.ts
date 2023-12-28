import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tracker-training-record',
  standalone: true,
  imports: [],
  templateUrl: './training-record.component.html',
  styleUrl: './training-record.component.css',
})
export class TrainingRecordComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit() {
    const trainingName = this.route.snapshot.paramMap;
    console.log(trainingName);
  }
}
