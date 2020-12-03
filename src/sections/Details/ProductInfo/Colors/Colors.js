import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './colors.scss';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Colors = props => {
    console.log(props);
    let elements = props.colors.map(color => {
        return (
            <div 
                style={{
                    backgroundColor: color.color
                }}
                className={styles.color}>
                {
                    color.selected &&
                    <FontAwesomeIcon 
                        icon={faCheck} 
                        style={{
                            color: 'white',
                            fontSize: '10px'
                        }} />
                }
            </div>
        )
    })
    return (
        <div className={styles.colorsContainer}>
            <p>Color:</p>
            <div className={styles.allColors}>
                {elements}
            </div>
        </div>
    )
}

export default Colors;
