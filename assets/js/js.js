async function cargarXML() {
    const respuesta = await fetch("xml/recetas.xml");
    const texto = await respuesta.text();
    const Parser = DOMParser;
    const xml = Parser.parse(texto);
    return xml;
}