import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4')?.textContent).toContain('Teste de Desenvolvedor Front-End - Anota AI');
  });

  it('should render name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span')?.textContent).toContain('Francisco Diackson Marques Cidrão');
  });
});
