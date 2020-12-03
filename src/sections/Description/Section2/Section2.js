import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './section2.scss';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Section2 = () => {
    return (
        <div id={"container"} className={styles.section2Container}>
            <div className={styles.backdrop}></div>
            <FontAwesomeIcon icon={faPlayCircle} className={styles.playBtn} size={'2x'} />
            <div className={styles.section2Title}>
                At vero eos et accusamus et iusto odio dignissimos.
            </div>
        </div>
    )
}

export default Section2;
