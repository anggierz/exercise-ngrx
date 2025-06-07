import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter-reset',
  standalone: true,
  imports: [],
  templateUrl: './counter-reset.component.html',
  styleUrl: './counter-reset.component.scss'
})
export class CounterResetComponent {


  constructor(private store: Store<{ count: number }>) {}
  
    reset() {
      this.store.dispatch(reset());
    }

}
