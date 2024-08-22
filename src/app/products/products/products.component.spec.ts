import { ProductsService } from './../products.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { Product } from '../product';
import { provideHttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StoryService } from '../../shared/story.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let storyService: StoryService;
  const mock: Product[] = [
    {
      id: 0,
      description: "teste",
      img: "teste",
      title: "Teste",
      type: "0"
    },
    {
      id: 1,
      description: "teste 2",
      img: "teste",
      title: "Teste",
      type: "0"
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent],
      providers: [
        provideHttpClient(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    storyService = TestBed.inject(StoryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initial', () => {
    jest.spyOn(ProductsService.prototype, 'getProducts').mockReturnValue(of(mock));

    component.ngOnInit();

    expect(component.filteredProducts).not.toBeNull();
  });

  it('should filter product', () => {
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'teste 2';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    component.filteredProducts.subscribe(value => {
      expect(value.length).toEqual(1);
    })
  });

  it('should delete product', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    component.idProductSelect = 1;

    fixture.detectChanges();
    component.deleteProduct(1);

    component.filteredProducts.subscribe(value => {
      expect(value.length).toEqual(1);
    });

    fixture.detectChanges();

    component.deleteProduct(0);

    component.filteredProducts.subscribe(value => {
      expect(value.length).toEqual(0);
    });
  });
});
