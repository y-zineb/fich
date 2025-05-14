import React from 'react'

function Projectcard({image, name, description}) {
  return (
    <div className="Projectcard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Projectcard