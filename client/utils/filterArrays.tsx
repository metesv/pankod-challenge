import { MovieArray } from "../types";

export const movieDropdownFilters: MovieArray[] = [
  { child: "Title(A-Z)", value: "titleAsc"},
  { child: "Title(Z-A)", value: "titleDesc"},
  { child: "Release Year(ASC)", value: "releaseYearAsc"},
  { child: "Release Year(DESC)", value: "releaseYearDesc"},
];

export const seriesDropdownFilters: MovieArray[] = [
  { child: "Title(A-Z)", value: "titleAsc"},
  { child: "Title(Z-A)", value: "titleDesc"},
  { child: "Release Year(ASC)", value: "releaseYearAsc"},
  { child: "Release Year(DESC)", value: "releaseYearDesc"},
];