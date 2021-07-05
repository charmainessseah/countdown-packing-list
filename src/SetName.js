import React, {useEffect, useState} from 'react';

function SetName({name, setName}) {

    const handleChange = (e) => {
        setName(e.currentTarget.value)
        localStorage.setItem("name", e.currentTarget.value);
    }

    return(
        <div className="Name">
            <h1>Name Your Trip:</h1>
            <input className="setName" value={name} type="text" placeholder="Enter Name of Trip" onChange={handleChange}></input>
            <h4>Press esc to exit</h4>
        </div>
    )
}

export default SetName;