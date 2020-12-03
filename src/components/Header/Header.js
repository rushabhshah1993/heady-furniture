import React from 'react';

import styles from './header.scss';

import Logo from './../../common/Logo/Logo';
import FurnitureNavigation from './../../components/FurnitureNavigation/FurnitureNavigation';
import UserIcons from '../../common/UserIcons/UserIcons';

const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <Logo size={'large'} />
            <div className={styles.headerNav}>
                <FurnitureNavigation />
                <UserIcons cartItems={'2'} />
            </div>
        </header>
    )
}

export default Header;
