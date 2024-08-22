import { StoryService } from './../../shared/story.service';
import { Component, OnInit } from '@angular/core';
import { InputGroupComponent } from '../../shared/input-group/input-group.component';
import { HeaderComponent } from "../../shared/header/header.component";
import { CardComponent } from '../../shared/card/card.component';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    InputGroupComponent,
    HeaderComponent,
    CardComponent,
    ModalComponent,
    AsyncPipe
  ],
  providers: [ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  private products!: Product[];
  filteredProducts!: Observable<Product[]>;

  openModal: boolean = false;
  idProductSelect: number|null = null;

  constructor(
    private productService: ProductsService,
    private storyService: StoryService
  ){}

  ngOnInit(): void {
    this.getAll();
    this.observeDeleteProduct();
  }

  getAll(){
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = this.createNewObservablo(products);
    });
  }

  filterProduct(event: string){
    const productsFilter = this.products.filter(product => product.title.toLowerCase().includes(event.toLowerCase()) || product.description.toLowerCase().includes(event.toLowerCase()));
    this.filteredProducts = this.createNewObservablo(productsFilter);
  }

  createNewObservablo(products: Product[]): Observable<Product[]>{
    return new Observable(observer => {
      observer.next(products)
    })
  }

  openModalDelete(id: number){
    this.openModal = true;
    this.idProductSelect = id;
  }

  observeDeleteProduct(){
    this.storyService.currentStoryId.subscribe(value => {
      if(value && value.confirm){
        this.deleteProduct(value.id);
      }
    });
  }

  deleteProduct(id: number){
    const indexProduct = this.products.findIndex(product => product.id === id);
    this.products.splice(indexProduct, 1);
    this.filteredProducts = this.createNewObservablo(this.products);
  }
}
