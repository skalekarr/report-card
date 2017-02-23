import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Main from '../src/main';

describe('test suite', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Main />).node;
	});

	it('contains spec with an expectation', () => {
	  	expect(wrapper.type).equals('div');
	});

	it('contains spec with an expectation', () => {
		expect(wrapper.props.children).equals('This is a seed project for react using webpack');
	});
});