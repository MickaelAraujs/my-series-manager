import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function DetailsUpdate({ serie, status }) {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function updateStatus() {
            api.put(`/series/${serie._id}`, {status})
        }

        updateStatus();
    }, [status, serie._id]);

    if (success) {
        return <Redirect to='/series' />
    }

    async function deleteSerie() {
        await api.delete(`/series/${serie._id}`);
        setSuccess(true);
    }

    return (
        <div className='container'>
            <nav className='navOptions'>
                <button  className='btn btn-warning'>Editar</button>
                <button  onClick={deleteSerie} className='btn btn-danger'>Excluir</button>
                <button className='btn btn-dark'>Temporadas</button>
            </nav>
        </div>
    );
}