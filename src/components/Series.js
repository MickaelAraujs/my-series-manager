import React, { useState, useEffect } from 'react';

import api from '../services/api';
import CardSeries from './Card';

function Series() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        async function loadSeries() {
            const response = await api.get('/series');
            setSeries(response.data);
        }

        loadSeries();
    }, []);

    return (
        <div className='container'>
            <h2 className='gridTitle'>Todas as Séries</h2>
            <div className='series-grid'>
                {
                    series.map(serie => (
                        <CardSeries key={serie.name} imgURL={serie.background_url} title={serie.name} sinopse={serie.description} />
                    ))
                }
            </div>
        </div>
    );
}

export default Series;