// UNO

const text = 'Hola mundo';
const frutas = ['manzana', 'melon', 'platano'];

test('Descripcion: debe contener un texto', () => {
    // spec: ¿QUÉ ES LO QUE ESTOY RECIBIENDO Y CON QUÉ LO VOY A COMPARAR?
    expect(text).toMatch(/mundo/);
});

test('Probar que ¿Tenemos un platano?', () => {
    expect(frutas).toContain('platano');
});

test('Probar que sea Mayor que', () => {
    // Se espera que 10 sea mayor que 9
    expect(10).toBeGreaterThan(9);
});

test('Probar que sea Verdadero', () => {
    // Se espera que lo que recibe, sea verdadero
    expect(true).toBeTruthy();
});

// Probando un Callback

const reverseString = (string, callback) => {

    callback(string.split("").reverse().join(""));
}

test('Probar un callback', () => { // The callback should return a reversed word

    // 1° se ejecuta el callback y se pasa el 'string' que será revertido
    reverseString('Hola', (string) => {

        // Se espera que lo pasado en el callback, que ya fue revertido, sea igual a 'aloH'
        expect(string).toBe('aloH');
    });
});

// Probando promesas
const reverseString2 = (string) => {

    return new Promise((resolve, reject) => {

        if (!string) {
            reject(Error('No existe el parametro'));
        }

        resolve(string.split("").reverse().join(""));
    })
}

test('Probar promesa', () => {

    reverseString2('Cola')
        .then((string) => {
            // Se espera que la respuesta de la promesa devuelva su reverso
            expect(string).toBe('aloC');
        });
});

// Probando async - await
test('Probar async - await', async () => {

    const string = await reverseString2('Sola');
    expect(string).toBe('aloS');
});

// Funcion que permite correr código (console.log) DESPUES de cada prueba
afterEach(() => console.log('Despues de cada prueba'));
// Funcion que permite correr código (console.log) DESPUES DE TODAS las pruebas
afterAll(() => console.log('Despues de todas las pruebas'));

// Funcion que permite correr código (console.log) ANTES de cada prueba
beforeEach(() => console.log('Antes de cada prueba'));
// Funcion que permite correr código (console.log) ANTES DE TODAS las pruebas
beforeAll(() => console.log('Antes de todas las pruebas'));
