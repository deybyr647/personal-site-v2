import React from 'react';
import './namewithimage.css';

import { personalImage } from '../../images';

let NameWithImage = () => (
    <div className='namewithimage'>
        <img alt='Deyby' src={personalImage}></img>
        <h1>Deyby Rodriguez</h1>
    </div>
)

export default NameWithImage;