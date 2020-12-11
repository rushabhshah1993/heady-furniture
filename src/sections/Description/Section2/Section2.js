import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './section2.scss';

const Section2 = () => {
    const numSteps = 20.0;

    let element,
        prevRatio = 0.0,
        left = '-100%';

    window.addEventListener('load', event => {
        element = document.querySelector(`.${styles.section2Container}`);
        createObserver();
    }, false);

    const createObserver = () => {
        let observer;

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: buildThresholdList()
        };

        console.log(options);

        observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(element);
    }

    const buildThresholdList = () => {
        let thresholds = [];
        let numSteps = 20;

        for (let i=1.0; i<=numSteps; i++) {
            let ratio = i/numSteps;
            thresholds.push(ratio);
        }
        
        thresholds.unshift(0);
        // thresholds.reverse();
        return thresholds;
    }

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0.9) {
                // console.log(entry.target);
                // console.log(entry.intersectionRatio);
                // console.log(100 - entry.intersectionRatio*100);
                // entry.target.style.width = `${entry.intersectionRatio*100}%`;
                entry.target.style.width = `100%`;
            }

            prevRatio = entry.intersectionRatio;
        })
    }

    return (
        <div id={"container"} className={styles.section2Container}>
            <div className={styles.backdrop}></div>
            {/* <div className={styles.cover}></div> */}
            <FontAwesomeIcon icon="play-circle" className={styles.playBtn} size={'2x'} />
            <div className={styles.section2Title}>
                At vero eos et accusamus et iusto odio dignissimos.
            </div>
        </div>
    )
}

export default Section2;
