import React from "react"
import type { NextPage } from "next"
import { useQuery } from "react-query"
import { CircularProgress, TextField, Grid } from '@mui/material'
import PageNumber from "../components/PageNumber"
import Show from "../components/Show"
import { ShowType } from "../types";

const LIMIT = 21;

const fetchData = async (page: number) => {
  const res = await fetch(`https://61d8b7d2e6744d0017ba8c4e.mockapi.io/items?page=${page}&limit=${LIMIT}&programType=movie`);
  return res.json();
};

const Movies: NextPage<any> = () => {
  const [page, setPage] = React.useState(1);
  const [title, setTitle] = React.useState("");
  let movieDatas: any[] = [];
  const { data, isLoading, error } = useQuery(['shows', page], () => fetchData(page));

  if (error) {
    return <div>404</div>;
  }

  if (!isLoading) {
    movieDatas = [...data];
    if (title.length > 3) {
      movieDatas = data.filter((item: any) => item.title.includes(title));
      console.log(movieDatas);
    }
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={6}>
          <TextField
            placeholder="Search Movie"
            fullWidth
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item sm={12} lg={6}>
          <TextField
            fullWidth
            select
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {
          isLoading === true 
            ? <CircularProgress size={50} />
            : (
              movieDatas.map((item: ShowType) => (
                <Show title={item.title} images={item.images} programType={item.programType} />
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