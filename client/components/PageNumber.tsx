import { Button, Grid, Typography } from "@material-ui/core"

const PageNumber = ({ page, setPage, data }: any) => {
  return (  
    <Grid container spacing={2} direction="row-reverse">
      <Grid item>
        {
          <Button variant="contained" disabled={data.length / 21 < page} onClick={() => setPage(page + 1)}>Next</Button>
        }
      </Grid>
      <Grid item>
        <Typography variant="h6">
          {page}
        </Typography>
      </Grid>
      <Grid item>
        {
          <Button variant="contained" disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</Button>
        }
      </Grid>
    </Grid>
  );
}

export default PageNumber;