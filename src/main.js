import React from 'react';
import DatePicker  from 'react-bootstrap-date-picker';
import Report from './report';
import Warning from './warning';

const containerStyle = {width: '600px', display: 'block', height: '100px'};
const label = {float: 'left', margin: '10  px', padding: '0px'};
const value = {float: 'right', margin: '10px'};
const info = {margin: '20px', padding: '10px'};

function hasValidData(state) {
    return [
        new Date(state.endDate) > new Date(state.startDate),
        state.value > 0,
        state.value < 101
    ].every(condition => {return condition});
}

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            endDate: '',
            name: '',
            startDate: '',
            value: 0
        };

        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.changeName = this.changeName.bind(this);
        this.submit = this.submit.bind(this);
    }

    changeStartDate(date, formattedValue) {
        this.setState({
            startDate: date,
            formattedValue: formattedValue,
            showReport: false
        });
    }

    changeEndDate(date, formattedValue) {
        this.setState({
            endDate: date,
            formattedValue: formattedValue,
            showReport: false
        });
    }

    changeName(event) {
        this.setState({
            name: event.currentTarget.value,
            showReport: false
        });
    }

    changeValue(event) {
        this.setState({
            value: event.currentTarget.value,
            showReport: false
        });
    }

    submit() {
        if(hasValidData(this.state)) {
            this.setState({
                showReport: true
            });
        }
    }

    render() {
        return (
            <div className="container" style={containerStyle}>
                <div className="panel-body">
                    <div className="name">
                        <label htmlFor="name" className={label}>Name</label>
                        <input
                            type="text"
                            style={value}
                            onChange={this.changeName}/>
                    </div>
                    <div className="value">
                        <label htmlFor="value" className={label}>Value(between 1 to 100)</label>
                        <input
                            type="number"
                            style={value}
                            onChange={this.changeValue}/>
                    </div>
                    <div className="start-date">
                        <label htmlFor="startDate">Start-Date</label>
                        <DatePicker
                            value={this.state.startDate}
                            onChange={this.changeStartDate}/>
                    </div>
                    <div className="end-date">
                        <label htmlFor="endDate">End-Date(should be greater than Start Date)</label>
                        <DatePicker
                            value={this.state.endDate}
                            onChange={this.changeEndDate}/>
                    </div>
                    <button onClick={this.submit}>
                        SUBMIT
                    </button>
                </div>
                <div className="report">
                    {
                        this.state.showReport ?
                            <Report
                                name={this.state.name}
                                value={this.state.value}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                            /> :
                            <Warning
                                className={info}
                                warningText={'Warning: Please Enter Valid Data and Submit'}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Main;