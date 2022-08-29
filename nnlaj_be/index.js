document.getElementById("PlantasDiv").innerHTML = "PLANTAS div";
alert("ESTE ES EL INVERNADERO =)");

document.getElementById("ZapalloDiv").innerHTML = "Zapallo";

document.getElementById("FrutillaDiv").innerHTML = "Frutilla";

document.getElementById("RomanescuDiv").innerHTML = "Romanescu";

document.getElementById("LechugaDiv").innerHTML = "Lechuga";

document.getElementById("EspinacaDiv").innerHTML = "Espinaca";

document.getElementById("DragonDiv").innerHTML = "Dragon";

document.getElementById("AjoDiv").innerHTML = "Ajo";

document.getElementById("AjíDiv").innerHTML = "Ají";

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
