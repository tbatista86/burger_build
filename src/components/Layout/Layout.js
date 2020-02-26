import React from 'react';

import Help from '../../hoc/Help';

import classes from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Help>
        <Toolbar />
        <main className={classes.Content}>
            { props.children }
        </main>
    </Help>
);

export default layout;