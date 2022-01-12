import React from "react"
import type { NextPage } from "next"
import { useQuery } from "react-query"
import { CircularProgress, Grid, Box } from '@mui/material'
import PageNumber from "../components/PageNumber"
import Show from "../components/Show"
import Filters from "../components/Filters"
import Header from "../components/Header"
import paginate from "../utils/paginate"
import { ShowType } from "../types";

const ITEMS_PER_PAGE = 21;

const fetchData = async (programType: string) => {
  const res = await fetch(`https://61d8b7d2e6744d0017ba8c4e.mockapi.io/items?&programType=${programType}`);
  return res.json();
};

const ShowTemplate: NextPage<any> = ({ programType, dropdownFilters, showType }) => {
  const [page, setPage] = React.useState(1);
  const [title, setTitle] = React.useState("");
  const [dropdownVal, setDropdownVal] = React.useState("");
  let showDatas: any[] = [];
  let dataPages: any[] = [];
  const { data, isLoading, error } = useQuery(['shows', programType], () => fetchData(programType));

  if (error) {
    return <div>404</div>;
  }

  if (!isLoading) {
    // SearchBox filter
    if (title.length > 3) {
      showDatas = data.filter((item: any) => item.title.toLowerCase().includes(title.toLowerCase()));
    } else {
      showDatas = [...data];
    }
    // Dropdown filter
    if (dropdownVal === "titleAsc") {
      showDatas.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (dropdownVal === "titleDesc") {
      showDatas.sort((a, b) => b.title.localeCompare(a.title));
    }
    if (dropdownVal === "releaseYearAsc") {
      showDatas.sort((a, b) => a.releaseYear - b.releaseYear);
    }
    if (dropdownVal === "releaseYearDesc") {
      showDatas.sort((a, b) => b.releaseYear - a.releaseYear);
    }
    // Paginate Data
    dataPages = paginate(showDatas, ITEMS_PER_PAGE);
  }

  return (
    <>
      <Header title={showType} />
      <Filters
        title={title}
        setTitle={setTitle}
        dropdownVal={dropdownVal} 
        setDropdownVal={setDropdownVal} 
        showType={showType} 
        setPage={setPage} 
        dropdownFilters={dropdownFilters}
      />
      <Box p={5} m={0}>
        <Grid container spacing={1}>
          {
            isLoading === true 
              ? <CircularProgress size={50} style={{ position: "absolute", top: "50%", left: "50%" }} />
              : (
                dataPages[page-1]?.map((item: ShowType, index: number) => (
                  <Show key={index} title={item.title} images={item.images} releaseYear={item.releaseYear} />
                ))
              )
          }
        </Grid>
      </Box>
      <Box mr={5}>
        {
          !isLoading 
            && <PageNumber data={showDatas} page={page} setPage={setPage} />
        }
      </Box>
    </>
  );
}

export default ShowTemplate;