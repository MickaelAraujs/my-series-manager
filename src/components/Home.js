import React, { useState, useEffect } from 'react';

import api from '../services/api';
import Carousel from './Carousel';

function Home() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        async function getSeries() {
            const response = await api.get('/series');
            setSeries(response.data);
        }

        getSeries();
    }, []);

    return (
        <div className='container'>
            <h2 className='title'>vistas</h2>
            <Carousel series={series} />
            <h2 className='title'>para ver</h2>
            <Carousel series={series} />
            <h2 className='title'>vendo</h2>
            <Carousel series={series} />
        </div>
    );
}

export default Home;