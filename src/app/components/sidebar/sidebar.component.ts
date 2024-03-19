import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() hideSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  menus: MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-home' },
    { label: 'Contratos', icon: 'pi pi-file' },
    { label: 'Acciones', icon: 'pi pi-wrench' },
    { label: 'Objetivos', icon: 'pi pi-star' },
    { label: 'Herramientas', icon: 'pi pi-dollar' },
    { label: 'Servicio al cliente', icon: 'pi pi-comment' },
  ];

  constructor() { }

  ngOnInit(): void {
  
  }
}