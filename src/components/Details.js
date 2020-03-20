import React, { useState, useEffect } from 'react';

import api from '../services/api';
import removeSpecialCaracteres from '../utils/removeSpecialCaracteres';

export default function Details({ name }) {
    const parsedName = removeSpecialCaracteres(name); //removendo acentos da string

    const [serie, setSerie] = useState({});
    const [genresArray, setGenresArray] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await api.get(`/search?serie=${parsedName}`);
            setSerie(response.data);
            const { genres } = response.data;
            setGenresArray(genres);
        }

        loadData();
    }, [parsedName]);

    const headerStyle = {
        height: '50vh',
        minHeight: '500px',
        backgroundImage: `url('${serie.background_url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className='detailsContainer'>
            <header style={headerStyle}>
                <div className='h-100' style={{'background':'rgba(0,0,0,0.9)'}}>
                    <div className='h-100 container'>
                        <div className='row h-100 align-items-center'>
                            <div className='col-3'>
                                <img className='img-fluid img-thumbnail'
                                     alt={serie.name}
                                     src={serie.poster_url}
                                />
                            </div>
                            <div className='col-8'>
                                <h2 className='font-weight-light text-white detailsTitle'>{serie.name}</h2>
                                <div className='lead text-white'>
                                    <span>Gênero: <span className='genres'>{genresArray.join(', ')}</span></span>
                                </div>
                                <div className='detailsText'>
                                    <p>
                                        {serie.description}
                                    </p>
                                </div>
                                <div className='detailsBadge'>
                                    <span className='badge badge-primary'>{serie.status}</span>
                                    <div className='form-group'>
                                        <select className='form-control' id='exampleFormControlSelect1'>
                                            <option>assistida</option>
                                            <option>assistir</option>
                                            <option>assistindo</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}