import React from 'react';
import CircularProgressbar  from 'react-circular-progressbar';

const Report = props => {
    const circularProgressBarWidth = {width: '100px'};
    return (
        <div className="report-card-container">
            <div className="name">
                <label htmlFor="name">Name </label>
                <span>{props.name}</span>
            </div>
            <div style={circularProgressBarWidth} className="value">
                <label htmlFor="value">Value </label>
                <CircularProgressbar percentage={props.value} />
            </div>
            <div className="start-date">
                <label htmlFor="start-date">Start Date </label>
                <span>{props.startDate}</span>
            </div>
            <div className="end-date">
                <label htmlFor="end-date">End Date </label>
                <span>{props.endDate}</span>
            </div>
        </div>
    );
}

export default Report;