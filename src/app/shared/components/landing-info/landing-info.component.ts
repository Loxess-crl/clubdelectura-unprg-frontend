import { Component, Input } from '@angular/core';
import { Book } from '../../../core/interfaces/book.interface';
import { SlugifyPipe } from '../../pipes/slugify.pipe';

@Component({
  selector: 'app-landing-info',
  standalone: true,
  imports: [SlugifyPipe],
  templateUrl: './landing-info.component.html',
  styleUrl: './landing-info.component.css',
})
export class LandingInfoComponent {
  @Input({ required: true }) public currentBook?: Book;
  @Input({ required: true }) public upcomingMeeting?: {
    date: string;
    time: string;
    location: string;
  };
  @Input({ required: true }) public WHATSAPP_URL!: string;
}
