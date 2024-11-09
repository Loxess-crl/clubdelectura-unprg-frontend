import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../core/interfaces/book.interface';
import { BookService } from '../../core/services/book.service';
import { links } from '../../../config/config';
import { BookMainHeroComponent } from '../../shared/components/landing/book-main-hero/book-main-hero.component';
import { AllBooksComponent } from '../../shared/components/landing/all-books/all-books.component';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [BookMainHeroComponent, AllBooksComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent implements OnInit {
  public books: Book[] = [];
  private bookService = inject(BookService);
  public WHATSAPP_URL = links.whatsapp;
  public topBooks: Book[] = [];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe((books) => {
      const allBooks = books.data.data;
      this.books = allBooks.sort((a, b) => b.week - a.week);
      this.topBooks = this.books.slice(0, 3);
    });
  }
}
