export interface Row {
    id: string;
    description: string;
    author: string;
    title: string;
    kind: string;
    publishedDate: number;
    language: string;
    image: string;
    publisher: string;

  }

  export interface BookState {
    bookList: Row[];
  }