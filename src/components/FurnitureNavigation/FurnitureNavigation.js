import React from 'react';

import styles from './furnitureNavigation.scss';

const FurnitureNavigation = () => {
    return (
        <>
            <ul className={styles.list} id="furnitureNav">
                <li className={styles.active}>Bedroom</li>
                <li>Living Room</li>
                <li>Office</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
            </ul>
        </>
    )
}

export default FurnitureNavigation;
