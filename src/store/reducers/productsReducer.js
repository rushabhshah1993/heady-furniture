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
            ],
            related: [
                {
                    id: '002',
                    name: 'Bamboo Fiber Gogo',
                    image: 'https://cdn.webshopapp.com/shops/9368/files/285379107/hay-pc-hanging-lamp.jpg',
                    mrp: 169,
                    discountPrice: 149
                },
                {
                    id: '003',
                    name: 'Velvet Tub Chair',
                    image: 'https://www.rhubarb-malvern.co.uk/wp-content/uploads/2019/09/velvet-tub-chair.jpg',
                    mrp: 180,
                    discountPrice: 120
                },
                {
                    id: '004',
                    name: 'Oled Ring Light',
                    image: 'https://5.imimg.com/data5/AJ/SN/MY-13117264/hanging-lamp-500x500.jpg',
                    mrp: 109,
                    discountPrice: 99
                },
                {
                    id: '005',
                    name: 'Tesero Dark Velvet Tub Chair',
                    image: 'https://www.styleourhome.com/pub/media/catalog/product/cache/826741dbf221e17ec01ef9f5760123dd/5/0/5056315930353-750x750.jpg',
                    mrp: 169,
                    discountPrice: 149
                },
                {
                    id: '006',
                    name: 'Globe Hanging Lamp',
                    image: 'https://www.auroville.com/media/catalog/product/cache/7dffcbb19665944c41b14ffbe9ad02d0/g/1/g130wshx2_1.jpg',
                    mrp: 89,
                    discountPrice: 79
                },
                {
                    id: '007',
                    name: 'Round End Table',
                    image: 'https://images.furnituredealer.net/img/products%2Fhammary%2Fcolor%2Fhammary%20promenade_t2001835-11-b.jpg',
                    mrp: 269,
                    discountPrice: 249
                },
                {
                    id: '008',
                    name: 'Gamer Table',
                    image: 'https://cdn.trendhunterstatic.com/thumbs/living-room-table.jpeg',
                    mrp: 449,
                    discountPrice: 369
                },
                {
                    id: '009',
                    name: 'Planters',
                    image: 'https://i.pinimg.com/originals/da/a6/53/daa653c92eca488400996278c3b83e46.jpg',
                    mrp: 269,
                    discountPrice: 249
                },
                
            ]
        }
    ],
    selectedProduct: "001",
    currency: '$'
}

const reducer = (state=initalState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default reducer;
