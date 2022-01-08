import { Button, Grid } from "@material-ui/core"

const PageNumber = ({ page, setPage, data }: any) => {
  return (  
    <Grid>
      {
        page > 1 
          && <Button onClick={() => setPage(page - 1)}>Previous</Button>
      }
      <p>{page}</p>
      {
        data?.length === 21 
        && <Button onClick={() => setPage(page + 1)}>Next</Button>
      }
    </Grid>
  );
}

export default PageNumber;