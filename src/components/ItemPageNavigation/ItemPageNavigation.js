import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';

import SocialMediaIcons from './../../common/SocialMediaIcons/SocialMediaIcons';

import styles from './itemPageNavigation.scss';

const ItemPageNavigation = props => {
    const [title, setTitle] = useState("Details");
    const titleRef = useRef();

    const itemClickHandler = event => {
        let sections = props.navItem.sectionsDimensions;
        let selectedSection = sections.find(section => section.id === event.target.id);
        window.scrollTo({
            top: selectedSection.top,
            behavior: 'smooth'
        })
    }

    let navItems;
    if(props.navItem) {
        navItems = props.navItem.navItems.map(item => {
            return (
                <li
                    key={item.id}
                    id={item.id}
                    className={styles.navItem}
                    onClick={(event) => itemClickHandler(event)}>
                    {item.name}
                </li>
            )
        })
    }

    return (
        <div id={styles.itemPageNavContainer} style={{display: props.activeSection !== null ? 'block' : 'none'}}>
            <div id={styles.pageTitle} ref={titleRef}>{props.activeSection}</div>
            <div id={styles.navContainer}>
                <nav id={styles.navigation}>
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
