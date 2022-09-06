import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Skeleton } from '@mui/material';

export default function ProductCardSkeleton(props : any) {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardActionArea>      
                <CardMedia>
                    <Skeleton variant="rounded" width={props.width} height={200} animation="wave"/>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <Skeleton variant="rounded" height={20} animation="wave" />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    <Skeleton variant="rounded" height={20} animation="wave" />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}