import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IQuestion } from '../../interfaces';

@Component({
  selector: 'app-single-input',
  templateUrl: './single-input.component.html',
  styleUrls: ['./single-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleInputComponent implements OnInit {
  @Input()
  public question: IQuestion;

  constructor() { }

  ngOnInit() {
  }

}
