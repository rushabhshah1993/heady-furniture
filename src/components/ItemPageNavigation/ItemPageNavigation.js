import React from 'react';
import SocialMediaIcons from './../../common/SocialMediaIcons/SocialMediaIcons';

const ItemPageNavigation = () => {
    const itemClickHandler = () => {
        console.log("Here");
        // window.location.hash = "#related";
        let element = document.getElementById("related");
        console.log(element);
        element.scrollIntoView({behavior: "smooth"});
        // window.scrollTo({
        //     top: '0',
        //     behavior: 'smooth'
        // })
    }

    return (
        <>
            <div id="page-title">Title</div>
            <nav id="navigation">
                <ul>
                    <li>Details</li>
                    <li>Description</li>
                    <li>Reviews</li>
                    <li onClick={itemClickHandler}>Related</li>
                </ul>
            </nav>
            <SocialMediaIcons />
        </>
    )
}

export default ItemPageNavigation;
