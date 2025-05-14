import React from 'react';
import { Members } from '../helpers/Members';
import Membercard from '../components/Membercard';
import '../styles/About.css';

function About() {
return (
    <section id="About">
        <div className="about-us">
            <div className="container">
                <h1 className="Title" >À propos de nous</h1>
                <p>Bienvenue sur la page officielle de **DO1** ! Nous sommes une communauté passionnée de développement web et mobile, fondée en septembre 2023 à l'ESTN. Notre mission est de rassembler les esprits créatifs, d'encourager l'innovation et de développer des compétences dans le domaine du génie logiciel.</p>
            </div>
        </div>

        <div className="objectives">
            <h2 className="Title" >Nos Objectifs</h2>
            <ul>
                <li><strong>Faire grandir la communauté :</strong> Accueillir de nouveaux membres, organiser des événements inclusifs et favoriser une ambiance chaleureuse.</li>
                <li><strong>Expérimenter et apprendre ensemble :</strong> Lancer des programmes interactifs comme des ateliers de développement de jeux et des journées hack.</li>
                <li><strong>Favoriser l'innovation :</strong> Organiser des concours et mettre en place un "Mur de l'Innovation" pour collaborer sur des idées créatives.</li>
                <li><strong>Établir des liens :</strong> Créer des soirées de réseautage et des événements pour connecter nos membres avec des professionnels de l'industrie.</li>
                <li><strong>Célébrer la diversité :</strong> Promouvoir l'inclusion grâce à des événements culturels et des initiatives qui mettent en lumière tous les talents.</li>
            </ul>
        </div>

        <div className="actions">
            <h2 className="Title" >Nos Moyens d'Action</h2>
            <ul>
                <li>Organiser des soirées, hackathons et ateliers créatifs pour inspirer nos membres.</li>
                <li>Promouvoir nos événements via les médias sociaux et des campagnes attractives.</li>
                <li>Offrir du mentorat pour guider les membres dans leur parcours professionnel.</li>
                <li>Collaborer avec d'autres clubs pour renforcer notre communauté.</li>
            </ul>
        </div>

        <div className="roles">
            <h2 className="Title">Notre Équipe</h2>
            <div className="Members">
                <p> Notre équipe est composée de membres passionnés et engagés, chacun apportant ses compétences uniques pour faire avancer notre mission. </p>
                {Members.map((Membercard, index) => {
                    return <Membercard image={Membercard.image} name={Membercard.name} role={Membercard.role} description={Membercard.description} />
                    
                })}
            </div>
        </div>
    </section>
 )
}

export default About