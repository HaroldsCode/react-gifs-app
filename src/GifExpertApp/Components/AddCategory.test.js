import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "./AddCategory"

describe('AddCategory tests', () => {
    const setNumbers = jest.fn();
    let wrapper = shallow(<AddCategory setNumbers={setNumbers}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setNumbers={setNumbers}/>);
    })

    test('should return component', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should change text box', () => {
        const input = wrapper.find('.from__input');
        input.simulate('change', { target: { value: 'Hola Harold'} });
    })
    
    test('should not post onSubmit event', () => {
        wrapper.find('.from').simulate('submit', { preventDefault(){} });
        expect(setNumbers).not.toHaveBeenCalled();
    })

    test('should call setNumbers and to clean the text box', () => {
        wrapper.find('.from__input').simulate('change', { target: { value: 'Hola Harold'} });
        wrapper.find('.from').simulate('submit', { preventDefault(){} });
        expect(setNumbers).toHaveBeenCalled();
        expect('').toBe(wrapper.find('.from__input').prop('value'));
    })
    
})
