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

  @Output('tariffBtn') tariffEmitter = new EventEmitter<string>();

  selectTariff(tariffBtn: string) {
    this.tariffEmitter.emit(tariffBtn)
  }
}
