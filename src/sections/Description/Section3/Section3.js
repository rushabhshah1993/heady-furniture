import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './section3.scss';

import FurnitureImg from './../../../assets/images/beige-nudie-4.jpg';

const Section3 = () => {
    return (
        <div id={"container"} className={styles.section3Container}>
            <aside className={styles.asideText}>
                Suggested Actions
            </aside>
            <div className={styles.mainImg}>
                <div className={styles.downloadBtn}>
                    <FontAwesomeIcon icon="arrow-circle-down" size={'lg'} />
                    <span>Download PDF</span>
                </div>
            </div>
            <img
                src={FurnitureImg} 
                className={styles.secondaryImg} />
        </div>
    )
}

export default Section3;
