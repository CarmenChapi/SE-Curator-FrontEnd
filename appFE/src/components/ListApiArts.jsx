import React from "react";
import { useNavigate } from "react-router-dom";
import BackControl from "./BackControl";
import MenuCollections from "./MenuCollections";

const apiList = [
  { name: "Art Institute of Chicago", path: "/chicago", src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Art_Institute_of_Chicago_logo.svg/512px-Art_Institute_of_Chicago_logo.svg.png" },
  { name: "Europeana Art", path: "/europeana", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Europeana_logo_2015_basic.svg/800px-Europeana_logo_2015_basic.svg.png" },
  { name: "Harvard Art Museums", path: "/harvard", src: "https://harvardartmuseums.org/assets/icons/fb-og-image-400x400.png"},
  { name: "The Metropolitan Museum of Art", path: "/met" , src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Metropolitan_Museum_of_Art_Logo.svg/2056px-The_Metropolitan_Museum_of_Art_Logo.svg.png"},
  { name: "Rijksmuseum", path: "/rijksmuseum" , src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwDwPjP8avzvCeLc3s4fSQeps5SjkeWfMbw&s"},
  { name: "Smithsonian Art Institution", path: "/smithsonian" , src:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Smithsonian_logo_color.svg"},
  { name: "Victoria & Albert Museum", path: "/vam" , src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXlmgJhgp0e2d4XRI7mGdwHO6TUVROwpNgQ&s" },
];

const ListApiArtGalleries = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <div >
      <section className="topMenu"> 
       <MenuCollections/>
       <BackControl/>
       </section>
       <section className="artApis">
      <h2>Select an art collection to browse and explore</h2>
      <ul >
        {apiList.map((artCollection, index) => (
          <li key={index}>
            <img
             src={artCollection.src}
              onClick={() => navigate(`/home/artgallery${artCollection.path}`)}
              className="logo-gallery"
              alt={`logo${artCollection.name}`}
            />
            <p>{artCollection.name}</p>
          </li>
        ))}
      </ul>
      </section>
    </div>
  );
};

export default ListApiArtGalleries;
