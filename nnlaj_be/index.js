const { Client } = require('pg');

const obtenerCategorias = async() => {
    const client = new Client();
    await client.connect();

    const res = await client.query("select * from categories");

    const result = res.rows[0].message;
    console.log(); // Hello world!

    await client.end();

    return result;
}

obtenerCategorias().then((result) => {
    console.log(result);
});