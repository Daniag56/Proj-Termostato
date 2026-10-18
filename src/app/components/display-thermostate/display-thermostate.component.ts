import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css',
  host: {
    '[class.warning]': 'alarm()'
  }
})
export class DisplayThermostateComponent {
  temperature = input.required<number>();
  umbral = input.required<number>();
  alarm = computed(() => this.temperature() > this.umbral());
}
