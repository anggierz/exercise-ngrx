import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.scss'
})
export class CounterValueComponent {

  count: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count = this.store.select('count');
  }

}
