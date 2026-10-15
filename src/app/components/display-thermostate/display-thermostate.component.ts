import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css',
  host: {
    '[class.warning]': 'alarm'
  }
})
export class DisplayThermostateComponent implements OnChanges {
  //HOOKS onChanges se lanza cuando hay un cambio en inputs de componentes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperature']) {
      this.alarm = changes['temperature'].currentValue > this.umbral;
    }
  }
  //inputs y outputs
  temperature = input.required<number>();
  alarm = false;
  //propiedades
  umbral = 25;
}
