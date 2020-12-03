import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';

import SocialMediaIcons from './../../common/SocialMediaIcons/SocialMediaIcons';

import styles from './itemPageNavigation.scss';

const ItemPageNavigation = props => {
    const [title, setTitle] = useState("Details");
    const titleRef = useRef();

    const itemClickHandler = event => {
        titleRef.current.innerHTML = event.target.innerText.toLowerCase();
        titleRef.current.style.textTransform = "capitalize";
        // window.location.hash = "#related";
        event.stopPropagation();
        let element = document.getElementById(event.target.id);
        // debugger;
        console.log(element, element.offsetTop, element.getBoundingClientRect());
        // element.scrollIntoView({behavior: "smooth"});
        console.log(document.getElementById('header'));
        let top;
        switch(event.target.id) {
            case "nav-description": top = 20; break;
            case "nav-details": top = 640; break;
            case "nav-reviews": top = 840; break;
            case "nav-related": top = 1840; break;
        }
        window.scrollTo({
            // top: element.getBoundingClientRect().top,
            // top: element.getBoundingClientRect().top -  document.getElementById('header').offsetHeight,
            // top: element.offsetTop - document.getElementById('header').offsetHeight,
            top: top,
            behavior: 'smooth'
        })
    }

    let navItems;
    if(props.navItem) {
        navItems = props.navItem.navItems.map(item => {
            console.log(item);
            return (
                <li
                    key={item.id}
                    id={`nav-${item.id}`}
                    className={styles.navItem}
                    onClick={(event) => itemClickHandler(event)}>
                    <a href={`#${item.id}`}>
                        {item.name}
                    </a>
                </li>
            )
        })
    }

    return (
        <div id={styles.itemPageNavContainer}>
            <div id={styles.pageTitle} ref={titleRef}>{title}</div>
            <div id={styles.navContainer}>
                <nav id={styles.navigation} className={'navigation'}>
                    <ul>
                        {navItems}
                    </ul>
                </nav>
                <SocialMediaIcons />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        navItem: state.navItem
    }
}

export default connect(mapStateToProps)(ItemPageNavigation);
