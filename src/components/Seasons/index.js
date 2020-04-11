import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

import Episodes from '../Episodes';

import './styles.css';

export default function Seasons({ seasons }) {
    const [active, setActive] = useState(false);
    
    return (
        <div className="container">
            <div className="season-box">
                {
                    seasons.map(season => (
                        <div key={season._id} className="season-content">
                            <button onClick={() => setActive(!active)}>
                                {seasons.indexOf(season) + 1}ª Temporada
                                { active ? <MdArrowDropUp size={30} className='icon' /> : <MdArrowDropDown size={30} className='icon' /> }
                            </button>
                            { active ? <Episodes episodes={season.episodes} click={active} /> : '' }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}