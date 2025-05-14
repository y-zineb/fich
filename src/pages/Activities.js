import React from 'react';
import { Activitygrid } from '../helpers/Activitygrid';
import Activitycard from '../components/Activitycard';
import { Projectgrid } from '../helpers/Projectgrid';
import Projectcard from '../components/Projectcard';
import '../styles/Activities.css';

function Activities() {
  return (
    <section id="Mission">
        <div className="Activities">
            <h2 className="Title">Nos Activités</h2>
            <div className="Activitygrid">
                {Activitygrid.map((Activitycard, index) => {
                    return <Activitycard image={Activitycard.image} name={Activitycard.name} description={Activitycard.description} />
                    })}
            </div>
        </div>
        <div className="Projects">
            <h2 className="Title">Nos Projets</h2>
            <div className="Projectgrid">
                {Projectgrid.map((Projectcard, index) => {
                    return <Projectcard image={Projectcard.image} name={Projectcard.name} description={Projectcard.description} />
                    })}
            </div>
        </div>
    </section>
  )
}

export default Activities