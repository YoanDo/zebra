import React, { useEffect, useState } from "react";

import {
  ArtistsWrap,
  Artist,

} from './styles'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Artists = () => {
  const artists = [
    { name: 'Chantal Thomas', website: 'https://www.youtube.com', image: 'alex' },
    { name: 'Bernard Jacques', website: 'https://www.youtube.com', image: 'chantal' },
    { name: 'Jean Rochefort', website: 'https://www.youtube.com', image: 'alex' },
    { name: 'Billy the kid', website: 'https://www.youtube.com', image: 'chantal' },
  ]
  return (
    <ArtistsWrap>
      <h1>artists</h1>
      <ul>
        {artists.map((artist, index) =>
          <Artist href={artist.website} target='_blank' x={getRandomInt(40)}>
            <li>
              <p>{`0${index + 1}`}</p> -
              <h2>{artist.name}</h2>
              <img src={require(`./resources/${artist.image}.jpg`)} alt={artist.name} />
            </li>

          </Artist>
        )}
      </ul>
    </ArtistsWrap >
  );
}

export default Artists
