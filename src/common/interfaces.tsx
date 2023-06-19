
export interface BookState {
  bookList: DataRow[];
  authorDetails: DataRow[];
  isLoading: string;
  favoritesList: DataRow[];
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
