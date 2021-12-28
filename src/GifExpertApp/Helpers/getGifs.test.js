import { getGifs } from "./getGifs"

describe('gift tests', () => {
    test('should return 20 elements', async () => {
        const counter = await getGifs('hola');
        expect(counter.length).toBe(20)
    })

    test('should return 0 elements', async () => {
        const counter = await getGifs('');
        expect(counter.length).toBe(0)
    })
    
})
