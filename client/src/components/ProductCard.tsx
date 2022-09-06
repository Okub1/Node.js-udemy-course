import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductCard(props : any) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardActionArea>      
            <CardMedia
                component="img"
                alt="green iguana"
                width="200"
                image="/img/products/1.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}