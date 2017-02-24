import React from 'react';
import Chance from 'chance';
import { expect } from 'chai';
import { shallow} from 'enzyme';
import CircularProgressbar  from 'react-circular-progressbar';
import Report from '../src/report';

const chance = new Chance();

describe('<Report />', () => {
	let testProps,
		wrapper;

	beforeEach(() => {
		testProps = {
            name: chance.string(),
			value: chance.natural(),
        	endDate: chance.date().toString(),
        	startDate: chance.date().toString()
		};

		wrapper = shallow(
			<Report {...testProps}/>
		);
	});

	describe('when rendered', () => {
		it('should have container', () => {
			expect(wrapper.find('.report-card-container')).to.have.length(1);
		});

		describe('Field: Name', () => {
			it('should contain label', () => {
                const fieldElement = wrapper.find('.name').node.props.children;
				expect(fieldElement[0].props.children).equals('Name ');
			});

			it('should contain value', () => {
                const fieldElement = wrapper.find('.name').node.props.children;
                expect(fieldElement[1].props.children).equals(testProps.name);
			});
		});

        describe('Field: Value', () => {
            it('should contain label', () => {
                const fieldElement = wrapper.find('.value').node.props.children;
                expect(fieldElement[0].props.children).equals('Value ');
            });

            it('should contain graph', () => {
                const fieldElement = wrapper.find('.value').node.props.children;
                expect(fieldElement[1].type).equals(CircularProgressbar);
            });
        });

        describe('Field: startDate', () => {
            it('should contain label', () => {
                const fieldElement = wrapper.find('.start-date').node.props.children;
                expect(fieldElement[0].props.children).equals('Start Date ');
            });

            it('should contain value', () => {
                const fieldElement = wrapper.find('.start-date').node.props.children;
                expect(fieldElement[1].props.children).equals(testProps.startDate);
            });
        });

        describe('Field: endDate', () => {
            it('should contain label', () => {
                const fieldElement = wrapper.find('.end-date').node.props.children;
                expect(fieldElement[0].props.children).equals('End Date ');
            });

            it('should contain value', () => {
                const fieldElement = wrapper.find('.end-date').node.props.children;
                expect(fieldElement[1].props.children).equals(testProps.endDate);
            });
        });
	});
});