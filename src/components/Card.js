import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CardSeries({ imgURL, title, sinopse}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={imgURL}
                title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3" className={classes.cardTitle}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.cardText} component="p">
                        {sinopse}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/series/${title}`} size="small" color="primary" className={classes.cardButton}>
                    Ver Detalhes
                </Link>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      position: 'relative'
    },
    media: {
      height: 150,
      backgroundPosition: 'center',
      backgroundSize: 'cover'  
    },
    cardTitle: {
        marginTop: 8
    },
    cardText: {
        height: 70
    },
    cardButton: {
        position: 'absolute',
        top: 150,
        right: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20,
    },
});

