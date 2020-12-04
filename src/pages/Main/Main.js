import React, { useState, useEffect } from 'react';

import ItemPageNavigation from '../../components/ItemPageNavigation/ItemPageNavigation';
import FurnitureNavigation from './../../components/FurnitureNavigation/FurnitureNavigation';
import SocialMediaIcons from './../../common/SocialMediaIcons/SocialMediaIcons';
import BreadCrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import Newsletter from '../../common/Newsletter/Newsletter';
import Logo from './../../common/Logo/Logo';
import UserIcons from '../../common/UserIcons/UserIcons';
import Details from './../../sections/Details/Details';
import Description from './../../sections/Description/Description';
import Related from './../../sections/Related/Related';
import Reviews from './../../sections/Reviews/Reviews';

import PageHeader from '../../components/PageHeader/PageHeader';

import styles from './main.scss';

import {
    getSections
} from './../../utils/utils';

let positions = ['Catalog', 'Sofas', 'Beige Nudie Sofa'];

const Main = () => {
    const [sections, setSections] = useState();
    const [activeSection, setActiveSection] = useState("details");
    
    window.onload = () => {
        if(window.scrollY !== 0) window.scrollTo({top: 0,behavior: 'smooth'});
    };
    
    useEffect(() => {
        let mainContentChildren = document.getElementById(styles.mainContent).children;
        if(mainContentChildren) {    
            let sections = getSections(mainContentChildren);
            setSections(sections);
            setActiveSection("details");
        }
    }, [window.scrollY === 0])
    

    window.addEventListener('scroll', function() {
        if(sections) {
            for(let section of sections) {
                if(this.scrollY < section.bottom) {
                    setActiveSection(section.id);
                    break;
                }
            }
        }

        let footerTop = document.getElementById("footer").offsetTop;
        if(this.scrollY >= (footerTop - 900)) {
            setActiveSection(null);
        }
    })

    return (
        <div id="container">
            <PageHeader />

            <BreadCrumbs positions={positions} />
            
            <div id={styles.content}>
                <ItemPageNavigation activeSection={activeSection} />
                <div id={styles.mainContent}>
                    <Details />
                    <Description />
                    <Reviews />
                    <Related />
                </div>
            </div>

            <footer className={styles.footer} id="footer">
                <Newsletter />
                <div className={styles.infoSection}>
                    <FurnitureNavigation />
                    <Logo size={'small'} />
                    <SocialMediaIcons />
                </div>
            </footer>
        </div>
    )
}

export default Main;
