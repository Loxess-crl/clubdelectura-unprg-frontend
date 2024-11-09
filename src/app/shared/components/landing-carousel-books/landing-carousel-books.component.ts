import { Component, Input } from '@angular/core';
import { HlmIconComponent } from '../../spartan/ui-icon-helm/src/lib/hlm-icon.component';
import { HlmCarouselModule } from '../../spartan/ui-carousel-helm/src/index';
import { SlugifyPipe } from '../../pipes/slugify.pipe';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { Book } from '../../../core/interfaces/book.interface';
import { HlmCardModule } from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'app-landing-carousel-books',
  standalone: true,
  imports: [HlmIconComponent, HlmCarouselModule, SlugifyPipe, HlmCardModule],
  providers: [provideIcons({ lucideArrowRight })],
  templateUrl: './landing-carousel-books.component.html',
  styleUrl: './landing-carousel-books.component.css',
})
export class LandingCarouselBooksComponent {
  @Input({ required: true }) public books: Book[] = [];
}
