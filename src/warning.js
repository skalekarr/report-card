import React from 'react';

const Warning = props => {
    return (
        <div className={props.className}>
            {props.warningText}
        </div>
    );
};

export default Warning;