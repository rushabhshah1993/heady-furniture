import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { buildThresholdList } from './../../../utils/utils';

import styles from './section3.scss';

import FurnitureImg from './../../../assets/images/beige-nudie-4.jpg';

const Section3 = () => {
    let mainImg,
        secondaryImg;

    window.addEventListener('load', event => {
        mainImg = document.querySelector(`.${styles.mainImg}`);
        secondaryImg = document.querySelector(`.${styles.secondaryImg}`);
        createObserver();
    }, false);

    const createObserver = () => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: buildThresholdList(20)
        };

        let observer = new IntersectionObserver(handleMainIntersect, options);
        observer.observe(mainImg);
        let titleobserver = new IntersectionObserver(handleSecondaryIntersect, options);
        titleobserver.observe(secondaryImg);
    }

    const handleMainIntersect = (entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio === 1) {
                let asideText = document.querySelector(`.${styles.asideText}`);
                asideText.style.top = 0;
                asideText.style.visibility = "visible";
                entry.target.style.flexBasis = `90%`;
            }
        })
    }

    const handleSecondaryIntersect = (entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio === 1) {
                entry.target.style.width = `35%`;
            }
        })
    }


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
