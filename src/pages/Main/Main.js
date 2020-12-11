import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

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

import { getSections, checkScrolling } from './../../utils/utils';
import { setSectionsDimensions } from './../../store/actions/navItemActions';


let positions = ['Catalog', 'Sofas', 'Beige Nudie Sofa'];

const Main = props => {
    const [sections, setSections] = useState();
    const [activeSection, setActiveSection] = useState("details");
    
    window.onload = () => {
        if(window.scrollY !== 0) window.scrollTo({top: 0,behavior: 'smooth'});
    };

    useEffect(() => {
        if(window.screenY === 0) {
            let mainContentChildren = document.getElementById(styles.mainContent).children;
            if(mainContentChildren) {    
                let sections = getSections(mainContentChildren);
                setSections(sections);
                if(props.navItem.sectionsDimensions.length === 0)
                    props.setSectionsDimensions(sections);
                setActiveSection("details");
            }
        }
    }, [])

    window.addEventListener('scroll', function() {
        if(timeout) {
            clearTimeout(timeout);
        }
        let timeout = setTimeout(() => {
            timeout = null;
            let section = checkScrolling(this.scrollY, sections);
            if(section !== activeSection) setActiveSection(section);
        }, 1000)
    })

    return (
        <div id="container" className={styles.container}>
            <PageHeader />

            <BreadCrumbs positions={positions} />
            
            <div id={styles.content}>
                <ItemPageNavigation activeSection={activeSection} />
                <div id={styles.mainContent} className={"mainContent"}>
                    <Details />
                    <Description />
                    <Reviews />
                    <Related />
                </div>
            </div>

            <footer className={styles.footer} id="footer">
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

const mapStateToProps = state => {
    return {
        navItem: state.navItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSectionsDimensions: sections => dispatch(setSectionsDimensions(sections))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
