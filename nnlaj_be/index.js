const { Client } = require("pg");

const obtenerCategorias = async () => {
  const client = new Client();

  await client.connect();

  const res = await client.query("SELECT * from prueba");

  const result = res.rows[0].message;
  console.log(); // Hello world!

  await client.end();

  return result;
};
obtenerCategorias().then((result) => {
  console.log(result);
});
///INFORMACIÓN DE PLANTAS
///DESKTOP-TM847KF
///zapallo
///frutilla
///romanescu
///dragon
///ají
///ajo
///lechuga
///espinaca
