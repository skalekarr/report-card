import React from 'react';
import { expect } from 'chai';
import { shallow} from 'enzyme';
import DatePicker  from 'react-bootstrap-date-picker';
import Report from '../src/report';
import Main from '../src/main';
import Warning from '../src/warning';

describe('<Main />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Main />
        );
    });

    describe('when rendered', () => {
        it('should have container', () => {
            expect(wrapper.find('.container')).to.have.length(1);
        });

        describe('Field: Name', () => {
            it('should contain label', () => {
                const fieldElement = wrapper.find('.name').node.props.children;
                expect(fieldElement[0].props.children).equals('Name');
            });
        });

        describe('Field: Value', () => {
            it('should contain label', () => {
                const fieldElement = wrapper.find('.value').node.props.children;
                expect(fieldElement[0].props.children).equals('Value(between 1 to 100)');
            });
        });

        describe('Field: startDate', () => {
            it('should contain label', () => {
                const fieldElement = wrapper.find('.start-date').node.props.children;
                expect(fieldElement[0].props.children).equals('Start-Date');
            });

            it('should contain <DatePicker />', () => {
                const fieldElement = wrapper.find('.start-date').node.props.children;
                expect(fieldElement[1].type).equals(DatePicker);
            });
        });

        describe('Field: endDate', () => {
            it('should contain label', () => {
                const fieldElement = wrapper.find('.end-date').node.props.children;
                expect(fieldElement[0].props.children).equals('End-Date(should be greater than Start Date)');
            });

            it('should contain <DatePicker />', () => {
                const fieldElement = wrapper.find('.end-date').node.props.children;
                expect(fieldElement[1].type).equals(DatePicker);
            });
        });

        describe('when valid data is entered', () => {
            it('should have <Report />', () => {
                wrapper.setState({showReport: true});
                expect(wrapper.find(Report)).to.have.length(1);
            });
        });

        describe('when invalid data is entered', () => {
            it('should have <Warning />', () => {
                wrapper.setState({showReport: false});
                expect(wrapper.find(Warning)).to.have.length(1);
            });
        });
    });
});