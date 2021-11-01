// DOS
const ciudades = ['Lima', 'Huancayo', 'Cusco', 'Ica', 'Trujillo', 'Amazonas'];

const randomString = () => {

    // string cogerá un valor del array
    const string = ciudades[Math.floor(Math.random() * ciudades.length)];
    return string;
}

// Metodo agregado que no tiene test
// Uso de coverage: jest --coverage
const reverseString2NoCubierto = (string) => {

    return new Promise((resolve, reject) => {

        if (!string) {
            reject(Error('No existe el parametro'));
        }

        resolve(string.split("").reverse().join(""));
    })
}

module.exports = randomString;
