import { toLowerCase, merger } from "./helpers"

test('helpers.js: test helpers',() =>{

    //testing toLowerCase

        expect( toLowerCase ('to','Lower', 'Case') ).not.toBeUndefined();
        expect( toLowerCase('DEVELOPER') ).toBe('developer');
        expect( toLowerCase('Ashwin', 'Kumar') ).toMatch(/ashwinkumar/);

  

    //testing merger

        const data1= merger( { name: 'Ashwin'}, { who: 'Developer'});
        const data2= merger( { id: 1 }, {id: 2}, {id: 3} );

        expect( data1 ).toBeTruthy();
        expect( data1 ).toHaveProperty('name');
        expect( data1 ).toEqual( { name:'Ashwin', who: 'Developer' } );
        
        expect( data2 ).toEqual( { id: 3} )


})