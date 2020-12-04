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

import PageHeader from '../../components/PageHeader/PageHeader';

import styles from './main.scss';

let positions = ['Catalog', 'Sofas', 'Beige Nudie Sofa'];

const Main = () => {
    return (
        <div id="container">
            <PageHeader />

            <BreadCrumbs positions={positions} />
            
            <div id={styles.content}>
                <ItemPageNavigation />
                <div id={styles.mainContent}>
                    <Details id="details" />
                    <Description id="description" />
                    <Reviews id="reviews" />
                    <Related id="related" />
                </div>
            </div>

            <footer className={styles.footer}>
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
