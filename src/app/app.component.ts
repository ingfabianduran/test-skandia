import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-19-03
    * Metodo que setea la variable isVisible del sidebar.
    * @param $event Evento emitido por el componente hijo. 
  */
  onHideSidebar($event: boolean): void {
    this.isVisible = $event;
  }
}