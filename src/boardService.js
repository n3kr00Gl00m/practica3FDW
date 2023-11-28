const libros = new Map();
let nextId = 0;
let idComment = 0;

addLibro(
    {
      src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
      title: "Harry Potter",
      sinopsis: "Embárcate en un emocionante viaje junto a Harry Potter, un joven mago destinado a desafiar las fuerzas oscuras. Descubre el mundo mágico lleno de amistad, valentía y aventura en este clásico moderno que ha cautivado a lectores de todas las edades.",
      genre: "Aventura",
      autor: "J.K. Rowling",
      price: "25.40€",
      comentarios: new Map() // Mapa de comentarios específicos para este libro
    });
  
  addLibro(
    {
      src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
      title: "EL PALACIO DE LA MEDIA NOCHE",
      genre: "Aventura",
      sinopsis: "Sumérgete en un misterioso mundo nocturno lleno de secretos y peligros. Acompaña a un grupo de huérfanos mientras enfrentan destinos entrelazados en un emocionante relato de intriga que te mantendrá en vilo hasta la última página.",
      author: "Carlos Ruiz Zafón",
      price: "9.45€",
      comentarios: new Map() // Mapa de comentarios específicos para este libro
    });
  
  addLibro(
    {
      src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
      title: "POETA EN NUEVA YORK",
      genre: "Poesia",
      sinopsis: "Explora la poesía surrealista de Federico García Lorca mientras navega por las complejidades de la ciudad de Nueva York. Este libro captura la esencia de una época llena de contrastes, llevándote a un viaje poético e introspectivo.",
      author: "Federico García Lorca",
      price: "9.45€",
      comentarios: new Map() // Mapa de comentarios específicos para este libro
    });
  
  addLibro(
    {
      src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
      title: "HÁBITOS ATÓMICOS",
      genre: "Autoayuda",
      sinopsis: "Descubre cómo pequeños cambios pueden tener un impacto explosivo en tu vida diaria. Este libro inspirador de James Clear te guiará hacia la mejora personal y el crecimiento constante, brindándote herramientas prácticas para construir hábitos positivos.",
      author: "James Clear",
      price: "18.90€ 20.75€",
      comentarios: new Map() // Mapa de comentarios específicos para este libro
    });
  
  addLibro(
    {
      src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
      title: "LA NIEBLA",
      genre: "Terror",
      sinopsis: "Sumérgete en un intrigante relato donde la niebla se convierte en un elemento central, creando un ambiente misterioso. Stephen King te lleva a través de una historia llena de suspense y sorpresas, donde los personajes se enfrentan a sus peores pesadillas.",
      author: "Stephen King",
      price: "11.35€",
      comentarios: new Map() // Mapa de comentarios específicos para este libro
    });
  
  addLibro(
    {
      src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
      title: "LOBEZNO: EL VIEJO LOGAN",
      genre: "Superheroes",
      sinopsis: "Acompaña a Lobezno en una emocionante odisea a través de un mundo distópico. Explora la lucha interna del héroe mientras enfrenta desafíos épicos en este cómic lleno de acción, donde Mark Millar y Steve Mcniven te sumergen en una narrativa envolvente.",
      author: "Mark Millar, Steve Mcniven",
      price: "22.50€",
      comentarios: new Map() // Mapa de comentarios específicos para este libro
    });
  
  addLibro(
    {
      src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
      title: "MARINA",
      genre: "Suspense",
      sinopsis: "Vive una emocionante historia de misterio y romance en la Barcelona posguerra. Óscar Drai descubre secretos oscuros junto a la enigmática Marina, llevándote a un viaje cautivador de intriga y redención en este relato magistral de Carlos Ruiz Zafón.",
      author: "Carlos Ruiz Zafón",
      price: "9.45€",
      comentarios: new Map() // Mapa de comentarios específicos para este libro
    });
  

//--------------------------------------------------------------------
//--------------------------------------------------------------------

export function addLibro(libro) {
  let id = nextId++;
  libro.id = id.toString();
  libros.set(libro.id, libro);
}

export function deleteLibro(id) {
  libros.delete(id);
}

export function getLibros() {
  return [...libros.values()];
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

    const id = Date.now().toString();
    comentario.id = id;
    libro.comentarios.set(id, comentario);
  } else {
    console.error(`El libro con ID ${libroId} no existe.`);
  }
}

export function getComentarios(libroId) {
  const libro = libros.get(libroId);
  return libro ? [...libro.comentarios.values()] : [];
}