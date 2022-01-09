import { MovieArray } from "../types";

export const movieDropdownFilters: MovieArray[] = [
  { child: "Title(A-Z)", value: "titleAsc"},
  { child: "Title(Z-A)", value: "titleDesc"},
  { child: "Release Year(A-Z)", value: "releaseAsc"},
  { child: "Release Year(Z-A)", value: "releaseDesc"},
];