import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { buildThresholdList } from './../../../utils/utils';

import styles from './section2.scss';

const Section2 = () => {
    let container,
        title;

    window.addEventListener('load', event => {
        container = document.querySelector(`.${styles.section2Container}`);
        title = document.querySelector(`.${styles.titleText}`);
        createObserver();
    }, false);

    const createObserver = () => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: buildThresholdList(20)
        };

        let observer = new IntersectionObserver(handleContainerIntersect, options);
        observer.observe(container);
        let titleobserver = new IntersectionObserver(handleTitleIntersect, options);
        titleobserver.observe(title);
    }

    const handleContainerIntersect = (entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio === 1) {
                entry.target.style.width = `100%`;
            }
        })
    }

    const handleTitleIntersect = (entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio === 1) {
                entry.target.style.top = '0px';
                entry.target.style.visibility = 'visible';
            }
        })
    }

    return (
        <div id={"container"} className={styles.section2Container}>
            <div className={styles.backdrop}></div>
            <FontAwesomeIcon icon="play-circle" className={styles.playBtn} size={'2x'} />
            <div className={styles.section2Title}>
                <span className={styles.titleText}>At vero eos et accusamus et iusto odio dignissimos.</span>
            </div>
        </div>
    )
}

export default Section2;
