const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`==============================`.green);
    console.log(`Tabla de base ${base}`.green);
    console.log(`==============================`.green);

    if (!Number(base)) {
        reject(`${base} no es un número`);
        return;
    }

    for (let i = 0; i < limite; i++) {
        console.log(`${base} * ${i+1} = ${(i+1)*base}`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i+1} = ${(i+1)*base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}