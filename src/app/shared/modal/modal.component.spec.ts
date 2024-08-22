import { StoryService } from './../story.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let storyService: StoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    storyService = TestBed.inject(StoryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should insert value and open modal', () => {
    component.viewModal = true;
    component.title = "teste";
    component.description = "teste description";

    fixture.detectChanges();

    const  carModaldEl  = fixture.debugElement.query(By.css('#modal'));
    expect(carModaldEl).not.toBeNull();
  });

  it('should button press cancel', () => {
    component.viewModal = true;
    component.title = "teste";
    component.description = "teste description";
    component.idProduct = 0;

    fixture.detectChanges();

    const  buttonDangerEl  = fixture.debugElement.nativeElement.querySelector('.button-danger');
    buttonDangerEl.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.viewModalChange.emit).not.toHaveBeenCalled();
    });
    expect(component.viewModal).toEqual(false);
    expect(component.idProduct).toEqual(0);
  });

  it('should button press confirm', () => {
    component.viewModal = true;
    component.title = "teste";
    component.description = "teste description";
    component.idProduct = 0;

    fixture.detectChanges();

    const  buttonSecondaryEl  = fixture.debugElement.nativeElement.querySelector('.button-secondary');
    buttonSecondaryEl.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.viewModalChange.emit).not.toHaveBeenCalled();
      expect(component.confirmEvent.emit).not.toHaveBeenCalled();
    });
    expect(component.viewModal).toEqual(false);
    expect(component.idProduct).toEqual(0);
  });
});
