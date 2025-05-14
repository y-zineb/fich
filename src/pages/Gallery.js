import React from "react";

const Gallery = () => {
  const albums = [
    {
      title: "Journées d'Intégration - Octobre 2023",
      images: [
        { src: "../assets/act1.1.jpeg", alt: "Journée d'Intégration 1" },
        { src: "../assets/act1.2.jpeg", alt: "Journée d'Intégration 2" },
        { src: "../assets/act1.3.jpeg", alt: "Journée d'Intégration 3" },
        { src: "../assets/act1.4.jpeg", alt: "Journée d'Intégration 4" },
        { src: "../assets/act1.5.jpeg", alt: "Journée d'Intégration 5" },
        { src: "../assets/act1.6.jpeg", alt: "Journée d'Intégration 6" },
      ],
    },
    {
      title: "Journée Mondiale de l'Enseignant - 5 Octobre 2023",
      images: [
        {
          src: "../assets/act2.1.jpeg",
          alt: "Journée Mondiale de l'Enseignant 1",
        },
        {
          src: "../assets/act2.2.jpeg",
          alt: "Journée Mondiale de l'Enseignant 2",
        },
      ],
    },
    {
      title: "Marathon Women's Victory Steps -14 Octobre 2023",
      images: [
        { src: "../assets/act3.1.jpeg", alt: "Marathon 1" },
        { src: "../assets/act3.2.jpeg", alt: "Marathon 2" },
      ],
    },
    {
      title: "Sortie d'Intégration Holi - 15 Octobre 2023",
      images: [
        { src: "../assets/act4.1.jpeg", alt: "Sortie d'Intégration Holi 1" },
        { src: "../assets/act4.2.jpeg", alt: "Sortie d'Intégration Holi 2" },
        { src: "../assets/act4.3.jpeg", alt: "Sortie d'Intégration Holi 3" },
        { src: "../assets/act4.4.jpeg", alt: "Sortie d'Intégration Holi 4" },
      ],
    },
    {
      title: "Journée de Recrutement -28 Octobre 2023",
      images: [
        { src: "../assets/act5.1.jpeg", alt: "Recrutement 1" },
        { src: "../assets/act5.2.jpeg", alt: "Recrutement 2" },
      ],
    },
    {
      title:
        "Journées Scientifiques 'Data Business à l'ère 4.0' - 19 Février 2024",
      images: [
        { src: "../assets/act6.1.jpeg", alt: "Data Business 1", tabindex: "0" },
        { src: "../assets/act6.2.jpeg", alt: "Data Business 2", tabindex: "0" },
      ],
    },
    {
      title: "Barbecue Day -25 Février 2024",
      images: [
        { src: "../assets/act7.1.jpeg", alt: "Barbecue 1", tabindex: "0" },
        { src: "../assets/act7.2.jpeg", alt: "Barbecue 2", tabindex: "0" },
        { src: "../assets/act7.3.jpeg", alt: "Barbecue 3", tabindex: "0" },
        { src: "../assets/act7.4.jpeg", alt: "Barbecue 4", tabindex: "0" },
        { src: "../assets/act7.5.jpeg", alt: "Barbecue 5", tabindex: "0" },
        { src: "../assets/act7.6.jpeg", alt: "Barbecue 6", tabindex: "0" },
      ],
    },
  ];

  return (
    <section id="gallery">
      {albums.map((album, albumIndex) => (
        <div className="album" key={albumIndex}>
          <h2>{album.title}</h2>
          <div className="image-scroll-container">
            <div className="image-scroll">
              {album.images.map((image, index) => (
                <div className="gallery-item" key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
