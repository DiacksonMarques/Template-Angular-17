import { TestBed } from '@angular/core/testing';

import { StoryService } from './story.service';

describe('CalendarDomainService', () => {
    let service: StoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [],
            schemas: []
        });
        service = TestBed.inject(StoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should emit next value', (done)=>{
      service.updateStoryId(1);

      service.currentStoryId.subscribe(value => {
        expect(value.id).toBe(1);
        done();
      });

      service.updateStoryIdConfirm(3, true);

      service.currentStoryId.subscribe(value => {
        expect(value.id).toBe(1);
        expect(value.confirm).toBe(false);
        done();
      });
   });
});
