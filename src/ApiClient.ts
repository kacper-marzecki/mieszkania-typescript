import axios from "axios";
import { Page, Home } from "./Model";

const BACKEND: string = "https://api.homeholmes.com";
const CITIES_URL = BACKEND + "/cities";

export function getHomes(params: {
  lowerPrice: number;
  upperPrice: number;
  city: string;
  page: number;
}): Promise<Page<Home>> {
  return get<Page<Home>>(
    BACKEND +
      "/home/" +
      params.city +
      "?lowerPrice=" +
      params.lowerPrice +
      "&upperPrice=" +
      params.upperPrice +
      "&page=" +
      params.page
  );
}

export function getCities(): Promise<string[]> {
  return get<string[]>(CITIES_URL);
}

function get<T>(url: string): Promise<T> {
  return axios.get<T>(url).then((_) => _.data);
}
