import React from "react"
import type { NextPage } from "next"
import ShowTemplate from "../templates/ShowTemplate";
import { seriesDropdownFilters } from "../utils/filterArrays"

const Series: NextPage<any> = () => {
  return (
    <>
      <ShowTemplate programType="series" dropdownFilters={seriesDropdownFilters} showType="Series" />
    </>
  );
}

export default Series;