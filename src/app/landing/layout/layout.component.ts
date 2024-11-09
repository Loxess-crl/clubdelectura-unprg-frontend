import { Component } from '@angular/core';
import { LandingHeaderComponent } from '../../shared/components/landing/landing-header/landing-header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LandingHeaderComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
