import { Component, Input } from '@angular/core';
import { Book } from '../../../../core/interfaces/book.interface';

@Component({
  selector: 'app-top-books',
  standalone: true,
  imports: [],
  templateUrl: './top-books.component.html',
  styleUrl: './top-books.component.css',
})
export class TopBooksComponent {
  @Input({ required: true }) public topBooks: Book[] = [];
}
