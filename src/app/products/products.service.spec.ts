import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Product } from './product';
import { of } from 'rxjs';

describe('CalendarDomainService', () => {
    let service: ProductsService;
    let httpClienteMock: jest.Mocked<HttpClient>;
    const mock: Product[] = [
      {
        id: 0,
        description: "teste",
        img: "teste",
        title: "Teste",
        type: "0"
      }
    ];

    beforeEach(() => {
        httpClienteMock = {
          get: jest.fn()
        } as any;

        TestBed.configureTestingModule({
            providers: [
              {provide: HttpClient, useVlue: httpClienteMock},
              HttpHandler
            ],
            schemas: []
        });
        service = TestBed.inject(ProductsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be getProducts', () => {
      jest.spyOn(httpClienteMock, 'get').mockReturnValue(of(mock));

      service.getProducts().subscribe(value => {
        expect(value).toEqual(mock);
      });
  });
});
