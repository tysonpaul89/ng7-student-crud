import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IQuestion } from '../../interfaces';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {
  @Input()
  public question: IQuestion;

  constructor() { }

  ngOnInit() {
  }

}
