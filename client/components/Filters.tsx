import { TextField, Grid, MenuItem, Box } from '@mui/material';
import { movieDropdownFilters } from '../utils/filterArrays';
import { MovieArray } from "../types";

const Filters = ({ title, setTitle, dropdownVal, setDropdownVal, showType, setPage }: any) => {
  return (
    <Box mb={1} px={5}>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={6}>
          <TextField
            placeholder={`Search ${showType}`}
            fullWidth
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item sm={12} lg={6}>
          <TextField
            label="Sort By"
            fullWidth
            select
            defaultValue={dropdownVal}
            onChange={(e) => {
              setDropdownVal(e.target.value);
              setPage(1);
            }}
          >
            {
              movieDropdownFilters.map((item: MovieArray) => (
                <MenuItem style={{ width: "100%" }} key={item.value} value={item.value}>
                  {
                    item.child
                  }
                </MenuItem>
              ))
            }
          </TextField>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Filters;