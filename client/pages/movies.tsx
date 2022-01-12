import React from "react"
import type { NextPage } from "next"
import ShowTemplate from "../templates/ShowTemplate";
import { movieDropdownFilters } from '../utils/filterArrays';

const Movies: NextPage<any> = () => {
  return (
    <>
      <ShowTemplate programType="movie" dropdownFilters={movieDropdownFilters} showType="Movie" />
    </>
  );
}

export default Movies;