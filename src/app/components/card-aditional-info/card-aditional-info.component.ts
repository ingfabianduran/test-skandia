import { Component, OnInit, Input } from '@angular/core';
import { CardAditionalInfo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-card-aditional-info',
  templateUrl: './card-aditional-info.component.html',
  styleUrls: ['./card-aditional-info.component.css']
})
export class CardAditionalInfoComponent implements OnInit {
  @Input() infoCardAditional: CardAditionalInfo = { title: '', category: '', date: '', achievements: '', youAlreadyHave: '' };

  constructor() { }

  ngOnInit(): void {
  
  }
}