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
            naturalSlideHeight={125}
            totalSlides={series.length}
        >
            <div className='carousel-container'>
                <ButtonBack className='slide-button'>
                    <ArrowBackIos />
                </ButtonBack>
                <Slider>
                    {
                        series.map(serie => (
                            <Slide key={series.indexOf(serie)} index={series.indexOf(serie)}>
                                <CardSeries 
                                    imgURL={serie.imgURL}
                                    title={serie.title}
                                    sinopse={serie.sinopse}
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