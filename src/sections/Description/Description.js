import React from 'react';

import styles from './description.scss';

import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

const Description = () => {
    return (
        <div className={styles.descriptionContainer} id="description">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default Description;
