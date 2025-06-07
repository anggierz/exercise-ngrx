import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter-increment',
  standalone: true,
  imports: [],
  templateUrl: './counter-increment.component.html',
  styleUrl: './counter-increment.component.scss'
})
export class CounterIncrementComponent {

  constructor(private store: Store<{ count: number }>) {}

  increment() {
    this.store.dispatch(increment());
  }

}
