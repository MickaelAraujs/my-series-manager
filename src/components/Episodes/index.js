import React, { useState, useEffect } from 'react';

import './styles.css';

export default function Episodes({ episodes, click }) {
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        if (click) {
            window.scroll({
                top: 650,
                behavior: 'smooth'
            });
        }
    }, [click]);

    return (
        <div className="episodes-box">
            {
                episodes.map(episode => (
                    <div key={episode._id} className="episode-content">
                        <img src={episode.still_path} alt={episode.name} />
                        <div className="episode-info">
                            <h5>
                                Episódio {episode.episode_number}: <span>{episode.name}</span>
                            </h5>
                            <p>{episode.overview}</p>
                            <label>
                                <span>assistido:</span>
                                <input type="checkbox" checked={checkbox} onClick={() => setCheckbox(!checkbox)}/>
                            </label>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
