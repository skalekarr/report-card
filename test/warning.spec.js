import React from 'react';
import Chance from 'chance';
import { expect } from 'chai';
import { shallow} from 'enzyme';
import Warning from '../src/warning';

const chance = new Chance();

describe('<Warning />', () => {
    let testProps,
        wrapper;

    beforeEach(() => {
        testProps = {
            className: chance.string(),
            warningText: chance.string()
        };

        wrapper = shallow(
            <Warning {...testProps}/>
        ).node;
    });

    describe('when rendered', () => {
        it('should have container', () => {
            expect(wrapper.props.className).equals(testProps.className);
        });

        it('should have warning text', () => {
            expect(wrapper.props.children).equals(testProps.warningText);
        });
    });
});