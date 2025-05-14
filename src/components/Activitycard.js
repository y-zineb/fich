import React from 'react';

function Activitycard({ name, description, image }) {
    return (
        <div className="Activitycard"  >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Activitycard