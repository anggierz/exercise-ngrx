import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement } from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter-decrement',
  standalone: true,
  imports: [],
  templateUrl: './counter-decrement.component.html',
  styleUrl: './counter-decrement.component.scss'
})
export class CounterDecrementComponent {

  constructor(private store: Store<{ count: number }>) {}

  decrement() {
      this.store.dispatch(decrement());
    }

}
