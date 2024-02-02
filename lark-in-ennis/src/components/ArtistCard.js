import React from 'react'
import '../css/artistcard.css';
import { useParams } from "react-router-dom";

export default function ArtistCard() {
    window.scrollTo(0, 0);

    const { id } = useParams();

    const artistsData = require('../data/artists.json');

    const artist = artistsData.artists.find(artist => artist.id === id);

  return (
    <div className='artist-container'>
        <div className='artist-card'>
            <div className='single-preview-card'>
                <img src={artist.filepath} className='artist-preview-image' alt='artist' />
                <h3 className='artist-preview-name'>{artist.name}</h3>
            </div>
            <div className='artist-info'>
                <p className='artist-description'>{artist.description}</p>
            </div>
        </div>
        <div className='youtube-embed'>
            {artist.youtube ? (artist.youtube.map((video, index) => {
                return (
                    <iframe key={index} className='youtube' width="560" height="315" src={video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                )
            })) : null}
        </div>
    </div>
  )
}
