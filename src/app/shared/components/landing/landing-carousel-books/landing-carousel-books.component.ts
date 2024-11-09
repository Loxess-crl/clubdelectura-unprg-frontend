import { Component, Input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmCardModule } from '@spartan-ng/ui-card-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmCarouselModule } from '@spartan-ng/ui-carousel-helm';
import { SlugifyPipe } from '../../../pipes/slugify.pipe';
import { Book } from '../../../../core/interfaces/book.interface';

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
