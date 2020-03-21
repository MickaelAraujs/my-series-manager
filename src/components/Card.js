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

export default function CardSeries({ imgURL, title, sinopse, status }) {
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
                <Link
                    to={{
                    pathname: `/series/${title}`,
                    state: {
                        status: status,
                    }}}
                    size='small'
                    className={classes.cardButton}
                >
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
        marginTop: 15
    },
    cardText: {
        height: 70
    },
    cardButton: {
        position: 'absolute',
        top: 150,
        right: 10,
        textTransform: 'uppercase',
        fontSize: 14,
        marginTop: 10,
        color: '#3F0B81'
    },
});

