import { Component, Input } from '@angular/core';
import { TopBooksComponent } from '../top-books/top-books.component';
import { Book } from '../../../../core/interfaces/book.interface';

@Component({
  selector: 'app-book-main-hero',
  standalone: true,
  imports: [TopBooksComponent],
  templateUrl: './book-main-hero.component.html',
  styleUrl: './book-main-hero.component.css',
})
export class BookMainHeroComponent {
  @Input({ required: true }) public WHATSAPP_URL!: string;
  @Input({ required: true }) public topBooks!: Book[];
}
