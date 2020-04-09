import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
    const [ inputName, setInputName ] = useState('');

    const handleSubmit = event => event.preventDefault();

    return (
        <form onSubmit={handleSubmit} className='form-inline my-2 my-lg-0'>
            <input className='form-control mr-sm-2' type='search' placeholder='Buscar Série' aria-label='Search'
            value={inputName} onChange={e => setInputName(e.target.value)}
            />
            <Link onClick={() => setInputName('')} to={`/results/${inputName}`} className='btn btn-outline-light my-2 my-sm-0'>Buscar</Link>
        </form>
    );
}

export default Form;