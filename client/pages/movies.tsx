import React from "react"
import type { NextPage } from "next"
import { useQuery } from "react-query"
import { CircularProgress, Grid } from '@mui/material'
import PageNumber from "../components/PageNumber"
import Show from "../components/Show"
import Filters from "../components/Filters"
import paginate from "../utils/paginate"
import { ShowType } from "../types";

const ITEMS_PER_PAGE = 21;

const fetchData = async (page: number) => {
  const res = await fetch(`https://61d8b7d2e6744d0017ba8c4e.mockapi.io/items?&programType=movie`);
  return res.json();
};

const Movies: NextPage<any> = () => {
  const [page, setPage] = React.useState(1);
  const [title, setTitle] = React.useState("");
  const [dropdownVal, setDropdownVal] = React.useState("");
  let movieDatas: any[] = [];
  let dataPages: any[] = [];
  const { data, isLoading, error } = useQuery(['shows', page], () => fetchData(page));

  if (error) {
    return <div>404</div>;
  }

  if (!isLoading) {
    // SearchBox filter
    if (title.length > 3) {
      movieDatas = data.filter((item: any) => item.title.includes(title));
    } else {
      movieDatas = [...data];
    }
    // Dropdown filter
    if (dropdownVal === "titleAsc") {
      movieDatas.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (dropdownVal === "titleDesc") {
      movieDatas.sort((a, b) => b.title.localeCompare(a.title));
    }
    // Paginate Data
    dataPages = paginate(movieDatas, ITEMS_PER_PAGE);
  }

  return (
    <>
      <Filters
        title={title}
        setTitle={setTitle}
        dropdownVal={dropdownVal} 
        setDropdownVal={setDropdownVal} 
        showType="Movie" 
        setPage={setPage} 
      />
      <Grid container spacing={2} sx={{ ml: 5 }}>
        {
          isLoading === true 
            ? <CircularProgress size={50} style={{ position: "absolute", top: "50%", left: "50%" }} />
            : (
              dataPages[page-1]?.map((item: ShowType, index: number) => (
                <Show key={index} title={item.title} images={item.images} programType={item.programType} />
              ))
            )
        }
      </Grid>
      {
        !isLoading 
          && <PageNumber data={movieDatas} page={page} setPage={setPage} />
      }
    </>
  );
}

export default Movies;