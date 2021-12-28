import { shallow } from "enzyme"
import { GridItem } from "./GridItem";

describe('GridItem tests', () => {
    const title = 'titulito';
    const url = 'https://localhost/pp.jpg';
    const wrapper = shallow(<GridItem title={title} url={url}/>);

    test('should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should have src and alt same to the props', () => {
        const image = wrapper.find('.card__img');
        expect(url).toBe(image.prop("src"));
        expect(title).toBe(image.prop("alt"));
    })
    
    test('should have card class', () => {
        const li = wrapper.find('li');
        expect(true).toBe(li.prop("className").includes('card'));
    })
})
