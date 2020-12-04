import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './socialMediaIcons.scss';

const SocialMediaIcons = () => {
    return (
        <div className={styles.socialMediaIconsContainer} id="socialMedia">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'pinterest']} />
        </div>
    )
}

export default SocialMediaIcons;
