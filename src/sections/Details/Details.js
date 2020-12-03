import React from 'react';
import { connect } from 'react-redux';

import styles from './details.scss';

import ProductInfo from './ProductInfo/ProductInfo';

import FurnitureImg from './../../assets/images/beige-nudie-1.png';

const Details = props => {
    let selectedProduct = props.products.allProducts.find(product => product.id === props.products.selectedProduct);
    
    return (
        <div className={styles.detailsContainer}>
            <div className={styles.infoContainer}>
                <ProductInfo product={selectedProduct}/>
            </div>
            <div className={styles.imgContainer}>
                <img src={FurnitureImg} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Details)
