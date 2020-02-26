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

function Carousel() {
    return (
        <CarouselProvider className='carousel'
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
        >
            <div className='carousel-container'>
                <ButtonBack className='slide-button'>
                    <ArrowBackIos />
                </ButtonBack>
                <Slider>
                    <Slide index={0}>
                        <CardSeries 
                            imgURL="https://umpoucodeseries.files.wordpress.com/2016/06/vikings_season3_cast.jpg?w=1500&h=768&crop=1"
                            title='vikings'
                            sinopse='A série é inspirada nas histórias de invasões, comércio e exploração dos Nórdicos da Escandinávia medieval. ... A série se passa no início da era viking, marcada pelo ataque de Lindisfarne, em 793.'
                        />
                    </Slide>
                    <Slide index={1}>
                        <CardSeries
                            imgURL='https://www.meliuz.com.br/blog/wp-content/uploads/2013/09/jesse-pinkman-walter-white-breaking-bad.jpg'
                            title='Breaking Bad'
                            sinopse='Walter White (Bryan Cranston) é um professor de química na casa dos 50 anos que trabalha em uma escola secundária no Novo México. Para atender às necessidades de Skyler (Anna Gunn), sua esposa grávida, e Walt Junior (RJ Mitte), seu filho deficiente físico, ele tem que trabalhar duplamente.'
                        />
                    </Slide>
                    <Slide index={2}>
                        <CardSeries
                            imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_LahN6_7brPsOJvOMhfojbTV2H74Nlx8Ny_Y3pqSuG6tJAqGW'
                            title='How I Met Your Mother'
                            sinopse='Em 2030, o arquiteto Ted Mosby (Josh Radnor) conta a história sobre como conheceu a mãe dos seus filhos. Ele volta no tempo para 2005, relembrando suas aventuras amorosas em Nova York e a busca pela mulher dos seus sonhos.'
                        />
                    </Slide>
                </Slider>    
                <ButtonNext className='slide-button'>
                    <ArrowForwardIos />
                </ButtonNext>
            </div>
        </CarouselProvider>
    );
}

export default Carousel;