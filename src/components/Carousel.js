import React from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
  } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import CardSeries from './Card';

function Carousel({ series }) {
    return (
        <CarouselProvider className='carousel'
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={series.length}
        >
            <div className='carousel-container'>
                <ButtonBack  className='slide-button'>
                    <ArrowBackIos />
                </ButtonBack>
                <Slider style={{marginTop: 30}}>
                    {
                        series.map(serie => (
                            <Slide key={series.indexOf(serie)} index={series.indexOf(serie)}>
                                <CardSeries
                                    imgURL={serie.background_url}
                                    title={serie.name}
                                    sinopse={serie.description}
                                />
                            </Slide>
                        ))
                    }
                </Slider>    
                <ButtonNext className='slide-button'>
                    <ArrowForwardIos />
                </ButtonNext>
            </div>
        </CarouselProvider>
    );
}

export default Carousel;