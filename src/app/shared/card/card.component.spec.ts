import { Product } from './../../products/product';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const product = {
    id: 0,
    title: 'teste',
    description:  'teste',
    img: 'ttt',
    type: '0'
  } as Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should insert value Product', () => {
    component.product = product;

    fixture.detectChanges();

    const  cardEl  = fixture.debugElement.query(By.css('.card'));
    expect(cardEl).not.toBeNull();
    expect(component.product.id).toEqual(0);
  });

  it('should not output duplicate values', () => {
    component.product = product;

    fixture.detectChanges();

    jest.spyOn(component.eventButtonDelete, 'emit');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.eventButtonDelete.emit).not.toHaveBeenCalled();
    });
  });
});
