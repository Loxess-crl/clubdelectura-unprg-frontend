import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from '../interfaces/response.interface';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private BOOK_URL = 'books';
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<DataResponse<Book>>(this.BOOK_URL);
  }
}
