import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tariff-buttons',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tariff-buttons.component.html',
  styleUrls: ['./tariff-buttons.component.scss']
})
export class TariffButtonsComponent {
  @Input() 
  public tariffBtn?: string;

  @Output() tariffEmitter = new EventEmitter<string>();
  @Output() skipEmitter = new EventEmitter<string>();


  selectTariff() {
    this.tariffEmitter.emit()
  }
  skip() {
    this.skipEmitter.emit()
  }
}
