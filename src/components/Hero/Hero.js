import React from 'react';
import './Hero.css';

function Hero(props) {
    const imageDescription = props.description || 'Undescribed header image';
    const styles = {};
    if (props.height) {
        styles['--hero-image-height'] = props.height;
    }
    if (props.path) {
        styles['--hero-image'] = `url('${props.path}')`;
    }

    return (
        <div
            aria-label={imageDescription}
            class='hero'
            role='image'
            style={styles}
        >
            <div class='hero__image-blurred-bg'></div>
            <div class='hero__image'></div>
        </div>
    );
}

export default Hero;