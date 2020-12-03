import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ratings = props => {
    let starsCount = 5,
        starsElements = [];

    for(let i=0; i<starsCount; i++) {
        starsElements.push(
            <FontAwesomeIcon
                key={`star-${i}`} 
                icon={["fas", 'star']} 
                style={{
                    color: props.rating < i+1 ? '#EAEAEA' : '#FED543'
                }}
            />
        )
    }

    return <>{starsElements}</>
}

export default Ratings;
