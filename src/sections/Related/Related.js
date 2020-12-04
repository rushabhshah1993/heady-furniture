import React from 'react';
import { connect } from 'react-redux';

import styles from './related.scss';

const Related = props => {
    let selectedProduct = props.products.allProducts.find(product => product.id === props.products.selectedProduct);

    let relatedProducts = selectedProduct.related.map(product => {
        return (
            <div className={styles.relatedProduct}>
                <img src={product.image} className={styles.productImage} />
                <div className={styles.productInfo}> 
                    <span className={styles.productName}>{product.name}</span>
                    <div className={styles.price}>
                        <span className={styles.originalPrice}>
                            {props.products.currency}{product.mrp}
                        </span>
                        <span className={styles.discountPrice}>
                            {props.products.currency}{product.discountPrice}
                        </span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div style={{height: "100vh"}} id="related" className={styles.relatedContainer}>
            <p className={styles.sectionTitle}>Related Products</p>
            <div className={styles.relatedProductsContainer}>
                {relatedProducts}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Related);
