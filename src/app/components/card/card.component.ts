import { Component, OnInit, Input } from '@angular/core';
import { ListCard } from '../../interfaces/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: ListCard = { nameProduct: '', detaildProduct: '', numberProduct: '', balanceProduct: '' };

  constructor() { }

  ngOnInit(): void {
  
  }
}