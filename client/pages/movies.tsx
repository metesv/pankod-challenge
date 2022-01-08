import React from "react"
import type { NextPage } from "next"
import { useQuery } from "react-query"
import { Button } from "@material-ui/core"
import Grid from '@mui/material/Grid';
import Show from "../components/Show"
import { ShowType } from "../types";

const LIMIT = 21;

const fetchData = async (page: number) => {
  const res = await fetch(`https://61d8b7d2e6744d0017ba8c4e.mockapi.io/items?page=${page}&limit=${LIMIT}&programType=movie`);
  return res.json();
};

const Movies: NextPage<any> = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, error } = useQuery(['shows', page], () => fetchData(page));

  if (error) {
    return <div>404</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid container spacing={2}>
        {
          data.map((item: ShowType) => (
            <Show title={item.title} images={item.images} programType={item.programType} />
          ))
        }
      </Grid>
      {
        page > 1 
          && <Button onClick={() => setPage(page - 1)}>Previous</Button>
      }
      <p>{page}</p>
      {
        data.length === 21 
        && <Button onClick={() => setPage(page + 1)}>Next</Button>
      }
    </>
  );
}

export default Movies;