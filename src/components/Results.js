import React, { useState, useEffect } from 'react';

import api from '../services/api';
import CardSeries from './Card';

function Results({ name }) {
    const [ search, setSearch ] = useState({});

    useEffect(() => {
        async function handleSearch() {
            const response = await api.get(`/search?serie=${name}`);
            setSearch(response.data);
        }

        handleSearch();
    }, [name]);

    async function storeSerie() {
        await api.post('/series', search);
    }

    return (
        <div className='container'>
          <CardSeries
            title={search.name}
            sinopse={search.description}
            imgURL={search.background_url}
            id={search.name}
           />
          <button onClick={storeSerie} type='button' className='btn btn-dark' style={{marginTop: '25px'}}>Adicionar</button>
        </div>
    );
}

export default Results;