import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkandiaComponent } from './skandia.component';

describe('SkandiaComponent', () => {
  let component: SkandiaComponent;
  let fixture: ComponentFixture<SkandiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkandiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkandiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
