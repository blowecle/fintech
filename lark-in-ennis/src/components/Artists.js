import { Link } from 'react-router-dom';
import React from 'react'
import '../css/artists.css';
import PreviewCard from './PreviewCard';

export default function Artists() {

    const artists = require('../data/artists.json');

  return (
    <section className="artists-container">
        {artists ? (artists.artists.map((artist, index) => {
            return (
            <Link to={`/artists/${artist.id}`} key={index}>
                <PreviewCard key={index} artist={artist} />
            </Link>
            )
        })) : null
        }
    </section>
  )
}
