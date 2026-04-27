async function cargarXML() {
    const respuesta = await fetch("xml/recetas.xml");
    const texto = await respuesta.text();
    const parser = DOMParser;
    const xml = parser.parse(texto, "application/xml");
    return xml;
}

function xmlAJson(xml) {
    return Array.from(xml.querySelectorAll("receta")).map(nodo =>({
        codigo: nodo.getAttribute("codigo"),
        nombre: nodo.querySelector("nombre")?.textContent || "",
        categoria: nodo.querySelector("categoria")?.textContent || "",
        tiempo: nodo.querySelector("tiempo")?.textContent || "",
        dificultad: nodo.querySelector("dificultad")?.textContent || "",
    }))
}

function pintarJSON (xmlAJson) {
}
