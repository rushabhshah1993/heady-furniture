import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './pageHeader.scss';

import Logo from '../../common/Logo/Logo';
import FurnitureNavigation from '../FurnitureNavigation/FurnitureNavigation';
import UserIcons from '../../common/UserIcons/UserIcons';

const PageHeader = props => {
    return (
        <header className={styles.pageHeader}>
            <Logo size={'large'} />
            <div className={styles.headerNav}>
                <FurnitureNavigation />
                <UserIcons cartItems={props.cart.items.length} />
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(PageHeader);
