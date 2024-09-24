class Book {
  constructor(id, title, author, published_year, isbn) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.published_year = published_year;
    this.isbn = isbn;
  }

  static fromObject(obj) {
    return new Book(obj.id, obj.title, obj.author, obj.published_year, obj.isbn);
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      published_year: this.published_year,
      isbn: this.isbn
    };
  }
}

module.exports = Book;
