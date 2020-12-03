import React from 'react';
import { faShippingFast, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initalState = {
    allProducts: [
        {
            id: '001',
            name: 'Nudie Extendable Sofa for 3 persons.',
            rating: 4,
            currency: '$',
            mrp: 169,
            discountPrice: 149,
            colors: [
                {
                    color: '#DAD5AB',
                    selected: false
                },
                {
                    color: '#1A1A1A',
                    selected: true
                },
                {
                    color: '#FFFFFF',
                    selected: false
                }
            ],
            policies: {
                sameDayDispatch: true,
                return30Days: true
            },
            policies: [
                {
                    id: 'sameDayDispatch',
                    text: 'Same Day Dispatch',
                    icon: <FontAwesomeIcon icon={faShippingFast} />
                },
                {
                    id: 'return30days',
                    text: 'Easy-30 Day Return Policy',
                    icon: <FontAwesomeIcon icon={faUndo} />
                }
            ],
            additionalInfo: [
                {
                    id: 'assemblyType',
                    name: 'Assembly',
                    value: 'Carpenter Assembly'
                },
                {
                    id: 'warranty',
                    name: 'Warranty',
                    value: '12 Months Warranty'
                }
            ],
            reviews: [
                {
                    username: 'Harishan Kobalasingam',
                    rating: 4,
                    date: '08/28/2020',
                    title: 'Excellent',
                    desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,`,
                    profilePicTitle: 'harishan-kobalasingam.jpg',
                    id: 1
                },
                {
                    username: 'Kelly Sikkema',
                    rating: 3,
                    date: '05/10/2018',
                    title: 'Good Product',
                    desc: `Et harum quidem rerum facilis est et expedita distinctio. 
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod 
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                    Temporibus autem quibusdam et aut `,
                    profilePicTitle: 'kelly-sikkema.jpg',
                    id: 2
                },
                {
                    username: 'Luis Villasmil',
                    rating: 5,
                    date: '09/01/2016',
                    title: 'I love the product!',
                    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore`,
                    profilePicTitle: 'luis-villasmil.jpg',
                    id: 3
                },
                {
                    username: 'Sergion De Paula',
                    rating: 2,
                    date: '08/28/2016',
                    title: 'Could have been better...',
                    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore`,
                    profilePicTitle: 'sergio-de-paula.jpg',
                    id: 4
                },
                {
                    username: 'Stefan Stefancik',
                    rating: 4,
                    date: '08/28/2016',
                    title: 'Fantastic',
                    desc: `minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
                    repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, 
                    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat`,
                    profilePicTitle: 'stefan-stefancik.jpg',
                    id: 5
                }
            ]
        }
    ],
    selectedProduct: "001"
}

const reducer = (state=initalState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default reducer;
