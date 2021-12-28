import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from './GifExpertApp';

describe('GitExpertApp tests', () => {
    test('should display the component correctly', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should display the category', () => {
        const category = 'one punch';
        const wrapper = shallow(<GifExpertApp categoryValue={category}/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(1)
    })
    
})
