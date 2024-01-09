import clearScreen from "clear-terminal";

const libros = new Map();
let nextId = 0;

export function addLibro(libro, idLibro) {
  if (idLibro !== undefined && libros.has(idLibro)) {
    // Actualiza el libro existente
    const existingLibro = libros.get(idLibro);
    libros.set(idLibro, { ...existingLibro, ...libro, id: idLibro.toString() });
  } else {
    // Añade un nuevo libro con un nuevo ID
    let id = nextId++;
    libro.id = id.toString();
    libros.set(libro.id, libro);
  }
}

export function deleteLibro(id) {
  libros.delete(id);
}

export function getLibros(from, to) {

  let values = [...libros.values()];
  if (from !== undefined) {
      return values.slice(from, to);
  } else {
      return values;
  }
}

export function getLibro(id) {
  return libros.get(id);
}

export function addComentario(libroId, comentario) {
  const libro = libros.get(libroId);

  if (libro) {
    if (!libro.comentarios) {
      libro.comentarios = new Map();
    }
 //Cambiar
    const id = Date.now().toString();
    comentario.id = id;
    libro.comentarios.set(id, comentario);
  } else {
    console.error(`El libro con ID ${libroId} no existe.`);
  }
}

export function getComentarios(libroId) {
  const libro = libros.get(libroId);
  return libro && libro.comentarios ? [...libro.comentarios.values()] : [];
}

export function validarFormulario(req) {
  const {
    title,
    author,
    genre,
    sinopsis,
    isbn,
    price,
    nPaginas,
    editorial,
    src
  } = req.body;

  // Verificar si todos los campos están llenos
  if (!title || !author || !genre || !sinopsis || !isbn || !price || !nPaginas || !editorial || !src) {
    console.error("Al menos uno de los campos obligatorios está vacío");
    return false;
  }

  // Validar que el título comience con una letra mayúscula
  if (!/^[A-Z].*/.test(title)) {
    console.error("El título debe empezar con una letra mayúscula");
    return false;
  }

  // Validar que la URL de la portada sea válida
  if (!/https?:\/\/.+/.test(src)) {
    console.error("La URL de la portada no es válida");
    return false;
  }

  // Validar que el ISBN sea un número válido
  if (!/^\d{13}$/.test(isbn)) {
    console.error("El ISBN debe contener 13 dígitos numéricos");
    return false;
  }

  // Validar que el precio sea un número positivo
  if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
    console.error("El precio debe ser un número positivo");
    return false;
  }

  // Validar que el número de páginas sea un número positivo
  if (isNaN(parseInt(nPaginas)) || parseInt(nPaginas) <= 0) {
    console.error("El número de páginas debe ser un número positivo");
    return false;
  }

  console.log("Todos los campos pasaron las validaciones");
  return true;
}


export function loadSampleData() {

  addLibro({
    src: "https://i.kinja-img.com/gawker-media/image/upload/s--AUsfSKba--/c_scale,f_auto,fl_progressive,q_80,w_800/18eqlwy2pur67jpg.jpg",
    title: "Harry Potter",
    sinopsis: "Embárcate en un emocionante viaje junto a Harry Potter, un joven mago destinado a desafiar las fuerzas oscuras. Descubre el mundo mágico lleno de amistad, valentía y aventura en este clásico moderno que ha cautivado a lectores de todas las edades.",
    genre: "Aventura",
    author: "J.K. Rowling",
    price: "25.40€",
    isbn: "978-1-2345-6789-0",
    editorial: "MagiaLibros",
    comentarios: new Map(), // Mapa de comentarios específicos para este libro
    nPaginas: 400 // Número de páginas del libro
  });
  
  addLibro({
    src: "https://i.pinimg.com/474x/59/f4/8d/59f48d8371e763bd0117c68b97e37790.jpg",
    title: "EL PALACIO DE LA MEDIA NOCHE",
    genre: "Aventura",
    sinopsis: "Sumérgete en un misterioso mundo nocturno lleno de secretos y peligros. Acompaña a un grupo de huérfanos mientras enfrentan destinos entrelazados en un emocionante relato de intriga que te mantendrá en vilo hasta la última página.",
    author: "Carlos Ruiz Zafón",
    price: "9.45€",
    isbn: "978-2-3456-7890-1",
    editorial: "NocturnaEdiciones",
    comentarios: new Map(), // Mapa de comentarios específicos para este libro
    nPaginas: 320 // Número de páginas del libro
  });
  
  addLibro({
    src: "https://www.reinodecordelia.es/wordpress/wp-content/uploads/2018/02/libro_descargable_906.jpg",
    title: "POETA EN NUEVA YORK",
    genre: "Poesia",
    sinopsis: "Explora la poesía surrealista de Federico García Lorca mientras navega por las complejidades de la ciudad de Nueva York. Este libro captura la esencia de una época llena de contrastes, llevándote a un viaje poético e introspectivo.",
    author: "Federico García Lorca",
    price: "9.45€",
    isbn: "978-3-4567-8901-2",
    editorial: "VersoCiudad",
    comentarios: new Map(), // Mapa de comentarios específicos para este libro
    nPaginas: 200 // Número de páginas del libro
  });
  
  addLibro({
    src: "https://m.media-amazon.com/images/I/41pWPP2itnL.jpg",
    title: "HÁBITOS ATÓMICOS",
    genre: "Autoayuda",
    sinopsis: "Descubre cómo pequeños cambios pueden tener un impacto explosivo en tu vida diaria. Este libro inspirador de James Clear te guiará hacia la mejora personal y el crecimiento constante, brindándote herramientas prácticas para construir hábitos positivos.",
    author: "James Clear",
    price: "18.90€",
    isbn: "978-4-5678-9012-3",
    editorial: "CambioPositivo",
    comentarios: new Map(), // Mapa de comentarios específicos para este libro
    nPaginas: 300 // Número de páginas del libro
  });
  
  addLibro({
    src: "https://m.media-amazon.com/images/I/41EFIxboUnL.jpg",
    title: "LA NIEBLA",
    genre: "Terror",
    sinopsis: "Sumérgete en un intrigante relato donde la niebla se convierte en un elemento central, creando un ambiente misterioso. Stephen King te lleva a través de una historia llena de suspense y sorpresas, donde los personajes se enfrentan a sus peores pesadillas.",
    author: "Stephen King",
    price: "11.35€",
    isbn: "978-5-6789-0123-4",
    editorial: "PesadillaEdiciones",
    comentarios: new Map(), // Mapa de comentarios específicos para este libro
    nPaginas: 240 // Número de páginas del libro
  });
  
  addLibro({
    src: "https://m.media-amazon.com/images/I/81O1t97hs9L._AC_UF1000,1000_QL80_.jpg",
    title: "LOBEZNO: EL VIEJO LOGAN",
    genre: "Superheroes",
    sinopsis: "Acompaña a Lobezno en una emocionante odisea a través de un mundo distópico. Explora la lucha interna del héroe mientras enfrenta desafíos épicos en este cómic lleno de acción, donde Mark Millar y Steve Mcniven te sumergen en una narrativa envolvente.",
    author: "Mark Millar, Steve Mcniven",
    price: "22.50€",
    isbn: "978-6-7890-1234-5",
    editorial: "HéroeLibros",
    comentarios: new Map(), // Mapa de comentarios específicos para este libro
    nPaginas: 180 // Número de páginas del libro
  });
  
  addLibro({
    src: "https://static.serlogal.com/imagenes_big/9789896/978989657119.JPG",
    title: "MARINA",
    genre: "Suspense",
    sinopsis: "Vive una emocionante historia de misterio y romance en la Barcelona posguerra. Óscar Drai descubre secretos oscuros junto a la enigmática Marina, llevándote a un viaje cautivador de intriga y redención en este relato magistral de Carlos Ruiz Zafón.",
    author: "Carlos Ruiz Zafón",
    price: "9.45€",
    isbn: "978-7-8901-2345-6",
    editorial: "BarcelonaMisteriosa",
    comentarios: new Map(), // Mapa de comentarios específicos para este libro
    nPaginas: 320 // Número de páginas del libro
  });
  
  addLibro({
    src: "https://m.media-amazon.com/images/I/71e4kjCsuAL._AC_UF1000,1000_QL80_.jpg",
    title: "Los juegos del hambre",
    genre: "Ciencia ficción",
    sinopsis: "Adéntrate en el mundo distópico de Panem, donde Katniss Everdeen lucha por sobrevivir en los crueles Juegos del Hambre. Suzanne Collins te sumerge en una historia de acción, política y resistencia que mantendrá tu atención hasta la última página.",
    author: "Suzanne Collins",
    price: "11.99€",
    isbn: "978-4-5678-9012-3",
    editorial: "Distopía Editorial",
    comentarios: new Map(),
    nPaginas: 374
  });
  
  addLibro({
    src: "https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1595938066/content-items/005/339/782/1984Red-original.jpg?1595938066",
    title: "1984",
    genre: "Ciencia ficción",
    sinopsis: "Explora el oscuro mundo distópico de Oceania, donde el gobierno totalitario controla cada aspecto de la vida de sus ciudadanos. George Orwell te sumerge en una reflexión sobre la vigilancia, el poder y la resistencia.",
    author: "George Orwell",
    price: "10.75€",
    isbn: "978-2-3456-7890-1",
    editorial: "Distopía Editorial",
    comentarios: new Map(),
    nPaginas: 328
  });
  
  addLibro({
    src: "https://www.albaeditorial.es/wp-content/uploads/2020/10/9788484288060-orgullo-y-prejuicio-alba-editorial.jpg",
    title: "Orgullo y prejuicio",
    genre: "Clásico",
    sinopsis: "Acompaña a Elizabeth Bennet en su viaje a través de la sociedad aristocrática del siglo XIX, llena de intrigas, malentendidos y, finalmente, el amor verdadero. Jane Austen te sumerge en la comedia romántica con aguda observación social.",
    author: "Jane Austen",
    price: "8.99€",
    isbn: "978-9-8765-4321-0",
    editorial: "Romance & Sociedad",
    comentarios: new Map(),
    nPaginas: 432
  });
  
  addLibro({
    src: "https://m.media-amazon.com/images/I/51vC0FsLN6L.jpg",
    title: "El código Da Vinci",
    genre: "Misterio",
    sinopsis: "Sumérgete en una intrincada trama de conspiraciones y secretos religiosos mientras el profesor Robert Langdon resuelve enigmas en París. Dan Brown te lleva en un emocionante viaje lleno de suspense y simbolismo.",
    author: "Dan Brown",
    price: "11.25€",
    isbn: "978-0-8765-4321-9",
    editorial: "Simbología Press",
    comentarios: new Map(),
    nPaginas: 560
  });
  
  addLibro({
    src: "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg",
    title: "Cien años de soledad",
    genre: "Realismo mágico",
    sinopsis: "Explora la mágica y tumultuosa historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo. Gabriel García Márquez te sumerge en un mundo de maravillas y tragedias con su prosa única e inolvidable.",
    author: "Gabriel García Márquez",
    price: "12.99€",
    isbn: "978-1-2345-6789-0",
    editorial: "Macondo Ediciones",
    comentarios: new Map(),
    nPaginas: 432
  });
  
  
  
  
}

loadSampleData();