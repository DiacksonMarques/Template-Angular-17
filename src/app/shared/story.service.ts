import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private storyId = new BehaviorSubject<{id: number, confirm: boolean}>({id:0, confirm:false});

  public currentStoryId = this.storyId.asObservable();

  constructor() { }

  public updateStoryId(id: number){
    this.storyId.next({id:id, confirm:false});
  }

  public updateStoryIdConfirm(id: number, confirm: boolean){
    this.storyId.next({id:id, confirm:confirm});
  }
}
