import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from './useFetchGifs';

describe('useFetchGifs test', () => {
    test('should return initial state', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Hola'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    })
    
    test('should return changed state', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Hola'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect( data.length ).toBe(20);
        expect( loading ).toBe(false);
    })
})
