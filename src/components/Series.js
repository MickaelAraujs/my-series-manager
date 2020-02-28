import React from 'react';
import CardSeries from './Card';
import series from '../services/series';

function Series() {
    return (
        <div className='container'>
            <h2>Todas as Séries</h2>
            <div className='series-grid'>
                {
                    series.map(serie => (
                        <CardSeries key={serie.id} imgURL={serie.imgURL} title={serie.title} sinopse={serie.sinopse} />
                    ))
                }
            </div>
        </div>
    );
}

export default Series;