import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template:`
    <main class="container-fluid">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  title = 'Teste Desenvolvedor';
}
