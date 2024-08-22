import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupComponent } from './input-group.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('InputGroupComponent', () => {
  let component: InputGroupComponent;
  let fixture: ComponentFixture<InputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGroupComponent, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not output duplicate values', () => {
    const input = fixture.nativeElement.querySelector('input');
    jest.spyOn(component.filterValue, 'emit')

    input.value = 'something';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.filterValue.emit).not.toHaveBeenCalled();
    });
  });
});
