import { Component, OnInit } from '@angular/core';
import { CardAditionalInfo, Cards } from '../../interfaces/interfaces';
import { CardService } from "../../services/card.service";

@Component({
  selector: 'app-skandia',
  templateUrl: './skandia.component.html',
  styleUrls: ['./skandia.component.css']
})
export class SkandiaComponent implements OnInit {
  cards: Cards = { listCard: [] };
  infoCardAditional: CardAditionalInfo = { title: 'Conocer mi sobrino', category: 'Bienestar', date: 'Diciembre/2022', achievements: '6000000', youAlreadyHave: '0' };

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