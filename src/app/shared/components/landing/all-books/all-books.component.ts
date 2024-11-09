import {
  Component,
  computed,
  effect,
  Input,
  OnInit,
  signal,
  inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HlmIconComponent } from '../../../spartan/ui-icon-helm/src/lib/hlm-icon.component';
import { provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { Book } from '../../../../core/interfaces/book.interface';
import { Router } from '@angular/router';
import { SlugifyPipe } from '../../../pipes/slugify.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [HlmIconComponent, SlugifyPipe, ReactiveFormsModule, FormsModule],
  providers: [provideIcons({ lucideSearch })],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent implements OnChanges {
  @Input({ required: true }) books: Book[] = [];
  public searchTerm = signal('');
  public filteredBooks = signal<Book[]>([]);

  constructor() {
    effect(
      () => {
        const search = this.searchTerm().toLowerCase();
        this.filteredBooks.set(
          this.books.filter(
            (book) =>
              book.title.toLowerCase().includes(search) ||
              book.category.toLowerCase().includes(search)
          )
        );
      },
      { allowSignalWrites: true }
    );
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['books'] && this.books.length > 0) {
      this.filteredBooks.set(this.books);
    }
  }

  updateSearchTerm(term: string) {
    this.searchTerm.set(term);
  }
}
