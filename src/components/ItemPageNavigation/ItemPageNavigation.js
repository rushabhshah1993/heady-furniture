import React from 'react';
import SocialMediaIcons from './../../common/SocialMediaIcons/SocialMediaIcons';

const ItemPageNavigation = () => {
    return (
        <>
            <div id="page-title">Title</div>
            <nav id="navigation">
                <ul>
                    <li>Details</li>
                    <li>Description</li>
                    <li>Reviews</li>
                    <li>Related</li>
                </ul>
            </nav>
            <SocialMediaIcons />
        </>
    )
}

export default ItemPageNavigation;
