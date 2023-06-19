
export interface BookState {
  bookList: DataRow[];
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
  poster: any;
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
