import React from 'react';

const PokemonThumnail = ({id, name, img, type}) => {
    const style = `thumb-container ${type}`
    return (
        <div className={style}>
            <div className= "number"> 
                <small>#0{id}</small>
            </div>
            <img src = {img} alt={name}/>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumnail;