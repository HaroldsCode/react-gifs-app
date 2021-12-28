import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { GifGrid } from "./GifGrid"
import { useFetchGifs } from '../../Hooks/useFetchGifs';
jest.mock('../../Hooks/useFetchGifs')
describe('GifGrid tests', () => {
    test('should make match with the snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category='hola'/>);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should display items when the images has been charged', () => {
        const gifs = [{
            id: '01',
            url: 'https://localhost/pp.jpg',
            title: 'titulito'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category='hola'/>);
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GridItem').length ).toBe( gifs.length )
    })
    
})
