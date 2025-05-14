import React from 'react'

function Membercard({image, name, role, description}) {
  return (
    <div className="Membercard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Membercard