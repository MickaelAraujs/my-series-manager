import React, { useState, useEffect } from 'react';
import api from '../services/api';
import CardSeries from './Card';

function Results() {
    const [ serie, setSerie ] = useState({});

    useEffect(() => {
        async function loadSerie() {
            const response = await api.get('/shows?q=narcos');
            const { name } = response.data;
            let { summary } = response.data;
            const { original } = response.data.image;

            summary = summary.replace('<p>','');
            summary = summary.replace('</p>','');
            summary = summary.replace('<b>','');
            summary = summary.replace('</b>','');

            setSerie({
                name,
                summary,
                original
            });
        }

        loadSerie();
    }, []);

    return (
        <div className='container'>
            <CardSeries title={serie.name} imgURL={serie.original} sinopse={serie.summary} />
        </div>
    );
}

export default Results;