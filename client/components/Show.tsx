import React from "react";
import Image from 'next/image'
import Link from "next/link"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { ShowType } from "../types";

const Show = ({ title, images, releaseYear }: ShowType) => {
  return (
    <Grid item xs={6} md={4} lg={2}>
      <Card sx={{ maxWidth: 245, border: "1px solid black" }}>
        <Link href={images["Poster Art"].url}>
          <CardMedia style={{ cursor: "pointer" }}>
            <Image
              src={images["Poster Art"].url}
              alt={title}
              width={images["Poster Art"].width}
              height={images["Poster Art"].height}
            />
          </CardMedia>
        </Link>
        <CardContent>  
          <Typography gutterBottom variant="h5" component="div">
            {`${title}(${releaseYear || "-"})`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Show;