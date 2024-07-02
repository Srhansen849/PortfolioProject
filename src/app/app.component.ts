import { Component, importProvidersFrom } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      HeaderComponent, 
      NavComponent, 
      RouterLink, 
      RouterLinkActive,
      // ModalModule.forRoot()
    ]
})
export class AppComponent {
  title = 'PortfolioProject2024';
}

