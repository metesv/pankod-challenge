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
    <Box mb={3} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link href="/">
            <Typography style={{ cursor: 'pointer' }} variant="h4" color="inherit" component="div">
              DEMO Streaming
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;