import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

function CardSeries({ imgURL, title, sinopse }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={imgURL}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                   {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {sinopse}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Ver Detalhes
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardSeries;
