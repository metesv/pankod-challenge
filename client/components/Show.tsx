import React from "react";
import Image from 'next/image'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { ShowType } from "../types";

const Show = ({ title, images }: ShowType) => {
  return (
    <Grid item xs={6} md={4} lg={2}>
      <Card sx={{ maxWidth: 245 }}>
        <CardMedia>
          <Image
            src={images["Poster Art"].url}
            alt={title}
            width={images["Poster Art"].width}
            height={images["Poster Art"].height}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Show;