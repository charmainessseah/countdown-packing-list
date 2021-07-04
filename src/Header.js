import React, {useState} from 'react';

function Home({name}) {
    return(
        <div className="Header">
            <h1 className="trip-name">{name}</h1>
        </div>
    )
}

export default Home;