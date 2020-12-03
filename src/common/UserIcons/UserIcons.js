import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './usericons.scss';

const UserIcons = props => {
    return (
        <div className={styles.userIconsContainer}>
            <FontAwesomeIcon 
                icon="search" 
                title={'Search'}
                size={'lg'} />
            <FontAwesomeIcon 
                icon={['fas', 'heart']} 
                title={'Favorites'} 
                size={'lg'} />
            <div className={styles.cart}>
                <FontAwesomeIcon 
                    icon="shopping-bag" 
                    title={'Cart'}
                    size={'lg'} />
                {
                    props.cartItems !== null &&
                    <div id={styles.cartBadge}>
                        {props.cartItems}
                    </div>
                }
            </div>
        </div>
    )
}

export default UserIcons;
