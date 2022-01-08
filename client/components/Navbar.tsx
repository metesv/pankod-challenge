import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@material-ui/core";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link href="/">
            <Typography style={{ cursor: 'pointer' }} variant="h4" color="inherit" component="div">
              Photos
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;