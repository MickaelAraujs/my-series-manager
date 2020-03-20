import React, { useState, useEffect } from 'react';
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

function Carousel({ series, status }) {
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        function loadFilteredData() {
            const filteredData = series.filter(serie => serie.status === status);
            setFilter(filteredData);
        }

        loadFilteredData();
    }, [series, status]);

    return (
        <CarouselProvider className='carousel'
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={filter.length}
        >
            <div className='carousel-container'>
                <ButtonBack  className='slide-button'>
                    <ArrowBackIos />
                </ButtonBack>
                <Slider style={{marginTop: 30}}>
                    {
                        filter.map(serie => (
                            <Slide key={serie._id} index={filter.indexOf(serie)}>
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