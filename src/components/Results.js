import React, { useState, useEffect } from 'react';
import api from '../services/api';
import CardSeries from './Card';

function Results({ name }) {
    const [ serie, setSerie ] = useState({});

    useEffect(() => {
        async function loadSeries() {
            const response = await api.get(`&query=${name}`);
            setSerie(response.data.results[0]);
        }

        loadSeries();
    }, [name]);

    return (
        <div className='container'>
          <CardSeries key={serie.id} title={serie.original_name} sinopse={serie.overview} imgURL={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`} />
        </div>
    );
}

export default Results;