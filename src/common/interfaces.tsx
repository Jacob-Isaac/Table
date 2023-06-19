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

export interface IContent {
  title: string;
  body: React.ReactNode;
  extraContent?: string;
}

export interface TileBooksProps {
  publishedDate: number;
  title: string;
  authors: string[] | string | null;
  image: {
    thumbnail: string;
  };
  link: {
    infoLink: string;
  };
  poster: boolean;
}

export interface NoResultProps {
  title: string;
  error404: string;
}

export interface StyledTileBookProps {
  hideOnMobile?: boolean;
}

export interface Book {
  volumeInfo: VolumeInfo;
}
