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

const Main = () => {
    return (
        <div id="container">
            <header>
                <Logo />
                <FurnitureNavigation />
                <UserIcons />
            </header>

            <BreadCrumbs />
            
            <div id="content">
                <ItemPageNavigation />
                <Details id="details" />
                <Description id="description" />
                <Reviews id="reviews" />
                <Related id="related" />
            </div>
            <footer>
                <Newsletter />
                <FurnitureNavigation />
                <Logo />
                <SocialMediaIcons />
            </footer>
        </div>
    )
}

export default Main;
