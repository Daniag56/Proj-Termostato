import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-control-temperature',
  imports: [],
  templateUrl: './control-temperature.component.html',
  styleUrl: './control-temperature.component.css'
})
export class ControlTemperatureComponent {
  //inputs y outputs
  temperature = input.required<number>();
  umbral = input<number>(0);
  temperatureOutput = output<number>()
  umbralOutput = output<number>();
  //propiedades
  tempUpdate?: number;
  //eventos y listeners
  onClickIncTemp() {
    this.tempUpdate = this.temperature() + 1;
    this.temperatureOutput.emit(this.tempUpdate)
  }
  onClickDecTemp() {
    this.tempUpdate = this.temperature() - 1;
    this.temperatureOutput.emit(this.tempUpdate)
  }

  onInput(event: Event){
    let inputElement = event.target as HTMLInputElement;

    let umbral = Number(inputElement.value);
    if(Number.isNaN(umbral)){
      inputElement.value = this.umbral().toString();
    }else{
      console.log('Se establece nuevo: ${umbral}');
      this.umbralOutput.emit(umbral)
    }

  }

}
