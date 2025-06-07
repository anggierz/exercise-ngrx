import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterValueComponent } from './components/counter-value/counter-value.component';
import { CounterIncrementComponent } from './components/counter-increment/counter-increment.component';
import { CounterDecrementComponent } from './components/counter-decrement/counter-decrement.component';
import { CounterResetComponent } from './components/counter-reset/counter-reset.component';
import { ChartLineComponent } from './components/charts/chart-line/chart-line.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CounterValueComponent,
    CounterIncrementComponent,
    CounterDecrementComponent,
    CounterResetComponent,
    ChartLineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercise-ngrx';
}
