const libros = new Map();
let nextId = 0;

addLibro(
    {
    src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
    title: "Harry Potter",
    genre: "Aventura",
    autor: "J.K. Rowling",
    price: "25.40€"
    });

addLibro(
    {
    src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
    title: "EL PALACIO DE LA MEDIA NOCHE",
    genre: "Aventura",
    author: "Carlos Ruiz Zafón",
    price: "9.45€"
    })

addLibro(
    {
        src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
        title: "POETA EN NUEVA YORK",
        genre: "Poesia",
        author: "Federico García Lorca",
        price: "9.45€"
    })

addLibro(
    {
        src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
        title: "HÁBITOS ATÓMICOS",
        genre: "Autoayuda",
        author: "James Clear",
        price: "18.90€ 20.75€"
    })

addLibro(
    {
        src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
        title: "LA NIEBLA",
        genre: "Terror",
        author: "Stephen King",
        price: "11.35€"
    })

addLibro(
    {
        src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
        title: "LOBEZNO: EL VIEJO LOGAN",
        genre: "Superheroes",
        author: "Mark Millar, Steve Mcniven",
        price: "22.50€"
    })

addLibro(
    {
        src: "https://images.cdn2.buscalibre.com/fit-in/360x360/3c/9b/3c9be8b71ce9d69fe314754676b766b4.jpg",
        title: "MARINA",
        genre: "Suspense",
        author: "Carlos Ruiz Zafón",
        price: "9.45€"
    })


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
