import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products/product';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  providers:[],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent{
  @Input() product!: Product;

  @Output('butonDelete') eventButtonDelete = new EventEmitter<number>();

  constructor(private storyService: StoryService){}

  openModal(){
    this.eventButtonDelete.emit(this.product.id);
    this.storyService.updateStoryId(this.product.id);
  }
}
