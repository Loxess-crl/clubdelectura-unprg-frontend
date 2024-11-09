import { Component, Input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

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
