export interface Row {
  volumeInfo: {
    title: string;
    authors: string;
    publishedDate: number;
    language: string;
    image: string;
    publisher: string;
  };
  id: string;
  kind: string;
}

export interface BookState {
  bookList: any;
  authorDetails: any;
  isLoading: string;
  favoritesList: any;
}

export interface VolumeInfo {
  infoLink: string;
  title: string;
  authors: string;
  publishedDate: number;
  language: string;
  publisher: string;
  [key: string]: string | number | object;
  imageLinks: {
    thumbnail: string;
  };
}
export interface DataRow {
  id: string;
  volumeInfo: VolumeInfo;
  imageLinks: {
    thumbnail: string;
  };
  authors: string;
  link: string;
}
