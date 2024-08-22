import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{

  @Input() viewModal: boolean = false;
  @Output() viewModalChange = new EventEmitter<boolean>();

  @Input() title!: string;
  @Input() description!: string;

  @Output('confirm') confirmEvent = new EventEmitter<boolean>();

  idProduct!: number;

  constructor(private storyService: StoryService){}

  ngOnInit(): void {
    this.storyService.currentStoryId.subscribe(value => {
      this.idProduct = value.id
    })
  }

  confirmModal(){
    this.confirmEvent.emit(true);
    this.storyService.updateStoryIdConfirm(this.idProduct, true);
    this.viewModal = false;
    this.viewModalChange.emit(this.viewModal);
  }

  closeModal(){
    this.viewModal = false;
    this.viewModalChange.emit(this.viewModal);
    this.storyService.updateStoryIdConfirm(this.idProduct, this.viewModal);
  }
}
