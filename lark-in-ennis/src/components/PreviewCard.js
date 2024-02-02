import React from 'react'
import '../css/previewcard.css';

export default function ({artist}) {
  return (
    <div className='preview-card'>
        <img src={artist.filepath} className='artist-preview-image' alt='artist' />
        <h3 className='artist-preview-name'>{artist.name}</h3>
    </div>
  )
}
