import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import Carousel from '../../Carousel';

import './styles.css';

function Home() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        async function getSeries() {
            const response = await api.get('/series');
            setSeries(response.data);
        }

        getSeries();
    }, []);

    if (series.length === 0) {
        return (
            <div className='container'>
                <div className='alert alert-warning' role='alert'>
                    Nenhuma série encontrada! verifique se o servidor está conectado .
                </div>
            </div>
        );
    }

    return (
        <div className='container'>
            <h2 className='title'>assistindo</h2>
            <Carousel series={series} status='assistindo' />
            <h2 className='title'>para assistir</h2>
            <Carousel series={series} status='assistir' />
            <h2 className='title'>assistidas</h2>
            <Carousel series={series} status='assistida' />
        </div>
    );
}

export default Home;