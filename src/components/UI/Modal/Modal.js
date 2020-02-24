import React from 'react';

import classes from './Modal.module.css';
import Help from '../../../hoc/Help';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Help>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            { props.children }
        </div>
    </Help>
);

export default modal;