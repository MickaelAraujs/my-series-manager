import React from 'react';

import Carousel from './Carousel';
import watched from '../services/watched';
import toWatch from '../services/toWatch';
import watching from '../services/watching';

function Home() {
    return (
        <div className='container'>
            <h2>Assistidas</h2>
            <Carousel series={watched} />
            <h2>Assistindo</h2>
            <Carousel series={watching} />
            <h2>Para Assistir</h2>
            <Carousel series={toWatch} />
        </div>
    );
}

export default Home;