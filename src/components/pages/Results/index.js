import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../../services/api';
import CardSeries from '../../Card';

function Results({ name }) {

    const [ search, setSearch ] = useState({});
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function handleSearch() {
            const response = await api.get(`/search?serie=${name}`);
            setSearch(response.data);
        }

        handleSearch();
    }, [name]);

    if (success) {
        return <Redirect to='/series' />
    }
    
    async function storeSerie() {
        await api.post('/series', search);
        setSuccess(true);
    }

    return (
        <div className='container'>
          <CardSeries
            title={search.name}
            sinopse={search.description}
            imgURL={search.background_url}
            status={search.status}
           />
          <button onClick={storeSerie} type='button' className='btn btn-dark' style={{marginTop: '25px'}}>Adicionar</button>
        </div>
    );
}

export default Results;