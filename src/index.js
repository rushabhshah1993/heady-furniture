import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import Main from './pages/Main/Main';

import './index.scss';

library.add(faSearch, faHeart, faShoppingBag);

ReactDOM.render(
    <Main />,
    document.getElementById('root')
)
