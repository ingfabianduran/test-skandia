import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAditionalInfoComponent } from './card-aditional-info.component';

describe('CardAditionalInfoComponent', () => {
  let component: CardAditionalInfoComponent;
  let fixture: ComponentFixture<CardAditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAditionalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
