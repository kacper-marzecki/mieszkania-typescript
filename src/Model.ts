export type SitePage = "MAIN_PAGE" | "FAVOURITE_HOME_VIEW";

export interface HomeSearchSettings {
  lowerPrice: number;
  upperPrice: number;
  city: string;
}

export interface Home {
  id: number;
  added: string;
  link: string;
  description: string;
  price: number;
}

export interface Page<T> {
  content: Array<T>;
  totalPages: number;
  totalElements: number;
  number: number;
}
