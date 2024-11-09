import { Component, Input } from '@angular/core';
import { HlmIconComponent } from '../../spartan/ui-icon-helm/src/lib/hlm-icon.component';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [HlmIconComponent],
  providers: [provideIcons({ lucideArrowRight })],
  templateUrl: './landing-hero.component.html',
  styleUrl: './landing-hero.component.css',
})
export class LandingHeroComponent {
  @Input({ required: true }) WHATSAPP_URL!: string;
}
