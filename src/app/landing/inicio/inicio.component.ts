import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../core/interfaces/book.interface';
import { BookService } from '../../core/services/book.service';
import { links } from '../../../config/config';
import { LandingInfoComponent } from '../../shared/components/landing/landing-info/landing-info.component';
import { LandingCarouselBooksComponent } from '../../shared/components/landing/landing-carousel-books/landing-carousel-books.component';
import { LandingHeroComponent } from '../../shared/components/landing/landing-hero/landing-hero.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    LandingHeroComponent,
    LandingInfoComponent,
    LandingCarouselBooksComponent,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  public currentBook?: Book;
  public books: Book[] = [];
  private bookService = inject(BookService);
  public WHATSAPP_URL = links.whatsapp;
  public upcomingMeeting = {
    date: 'Sábado, 9 de Noviembre',
    time: '01:00 p.m. - 02:00 p.m.',
    location: 'Biblioteca Central - Sala de Eventos',
  };

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe((books) => {
      const allBooks = books.data.data;
      this.books = allBooks.sort((a, b) => b.week - a.week);
      this.currentBook = this.books[0];
    });
  }
}
