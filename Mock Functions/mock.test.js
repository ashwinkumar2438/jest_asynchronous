import { jest } from '@jest/globals';
import { PureFunction } from './mock';


const MockFunction = jest.fn( PureFunction );

console.log( MockFunction('Ashwin') );
console.log( MockFunction('Batman') );

console.log( MockFunction )

test(' is instance created', () => {
    expect( MockFunction.mock.calls.length ).toBe( 2 );
    expect ( MockFunction.mock.calls[0][0] ).toBe( 'Ashwin' );
    expect ( MockFunction.mock.results[0].value ).toBe( 'Ashwin has called the pure function');

})

