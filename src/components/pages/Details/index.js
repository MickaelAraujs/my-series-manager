import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import DetailsUpdate from '../../DetailsUpdate';
import Seasons from '../../Seasons';

import './styles.css';

export default function Details({ name, status }) {
    
    const [serie, setSerie] = useState({});
    const [genresArray, setGenresArray] = useState([]);
    
    const [select, setSelect] = useState(status);
    const [badge, setBadge] = useState(() => handleColorChange(select));

    const [seasonStatus, setSeasonStatus] = useState(false);
    const [seasonData, setSeasonData] = useState([]);
    
    useEffect(() => {
        async function loadData() {
            try {
                const response = await api.get(`/serie?name=${name}`);

                //verificando se o objeto está vazio
                if (Object.entries(response.data).length !== 0) {
                    setSerie(response.data);
                    const { genres } = response.data;
                    setGenresArray(genres);
                }
       
            } catch (err) {
                console.warn(`Erro: Série não encontrada!  ${err}`);
            }
        }

        loadData();
    }, [name]);

     if (Object.entries(serie).length === 0) {
        return (
            <div className='container'>
                <div className='alert alert-warning' role='alert'>
                    oops... essa série não foi existe ou não foi adicionada à lista.
                </div>
            </div>
        );
    }

    function handleColorChange(item) {
        if (item === 'assistir') {
            return 'primary';
        } else if (item === 'assistida') {
            return 'success';
        } else if (item === 'assistindo') {
            return 'warning';
        }
    }

    function handleSelect(e) {
        setSelect(e.target.value);
        setBadge(handleColorChange(e.target.value));
    }

    function provideSeasons(seasons) {
        setSeasonStatus(!seasonStatus);
        setSeasonData(seasons);
    }

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
                                    <span className={`badge badge-${badge}`}>{select}</span>
                                    <div className='form-group'>
                                        <select defaultValue={select} className='form-control' onChange={e => handleSelect(e)} id='exampleFormControlSelect1'>
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
            <DetailsUpdate serie={serie} status={select} provideSeasons={provideSeasons} />
            { seasonStatus ? <Seasons seasons={seasonData} /> : '' }
        </div>
    );
}