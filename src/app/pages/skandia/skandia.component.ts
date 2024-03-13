import { Component, OnInit } from '@angular/core';
import { Cards } from '../../interfaces/interfaces';
import { CardService } from "../../services/card.service";

@Component({
  selector: 'app-skandia',
  templateUrl: './skandia.component.html',
  styleUrls: ['./skandia.component.css']
})
export class SkandiaComponent implements OnInit {
  cards: Cards = { listCard: [] };

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-12-03
    * Metodo que asigna la respuesta del servidor al atributo cards.
  */
  getCards(): void {
    this.cardService.getCards().subscribe((res: Cards) => {
      this.cards = res;
    });
  }
}