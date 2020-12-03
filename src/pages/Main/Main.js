import React from 'react';

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

import Header from './../../components/Header/Header';

import styles from './main.scss';

let positions = ['Catalog', 'Sofas', 'Beige Nudie Sofa'];

const Main = () => {
    return (
        <div id="container">
            <Header />

            <BreadCrumbs positions={positions} />
            
            <div id={styles.content}>
                <ItemPageNavigation />
                <div id={styles.mainContent} data-spy={'scroll'} data-target={'.navigation'}>
                    <Details id="details" />
                    <Description id="description" />
                    <Reviews id="reviews" />
                    <Related id="related" />
                </div>
            </div>
            <footer>
                <Newsletter />
                <FurnitureNavigation />
                <Logo size={'small'} />
                <SocialMediaIcons />
            </footer>
        </div>
    )
}

export default Main;
