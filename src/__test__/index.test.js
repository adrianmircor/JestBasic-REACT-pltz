// DOS
const randomString = require('../index');


describe('Bloque de funcionaliades', () => {

    test('Probar la funcionalidad', () => {

        expect(typeof (randomString())).toBe('string');
    });

    test('Probar que no existe la ciudad Piura', () => {
        
        expect(randomString()).not.toMatch(/Piura/);
    });
});

