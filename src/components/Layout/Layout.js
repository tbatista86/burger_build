import React from 'react';

import Help from '../../hoc/Help';

import classes from './Layout.module.css';

const layout = ( props ) => (
    <Help>
        <div>Toobar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            { props.children }
        </main>
    </Help>
);

export default layout;