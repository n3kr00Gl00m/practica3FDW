import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('GETCOMENTARIOS::', boardService.getLibros());
  res.render('Homepage.html', {
    libros: boardService.getLibros(),
  });
});

router.get('/formulario', (req, res) => {
  res.render('Formulario.html');
});

router.get('/libros/:id/editLibro', (req, res) => {
  let libroId = req.params.id;
  let libro = boardService.getLibro(libroId);
  let comentarios = [];

  if (libro) {
    comentarios = boardService.getComentarios(libroId) || [];
  }

  res.render('Formulario.html', { libro, comentarios, id: libroId });
});

router.post('/libros/newlibro', (req, res) => {
  let { src, title, description, author, price, idLibro } = req.body;

  boardService.addLibro({ src, title, sinopsis: description, author, price }, idLibro);
  res.redirect('/');
});

router.post('/libros/:id/newComment', (req, res) => {
  const libroId = req.params.id;
  const { name, textComment, puntuacion } = req.body;
  boardService.addComentario(libroId, { name, textComment, puntuacion });
  res.redirect(`/libros/${libroId}`);
});

router.get('/libros/:id', (req, res) => {
  let libroId = req.params.id;
  let libro = boardService.getLibro(libroId);
  let comentarios = boardService.getComentarios(libroId);

  res.render('productDescription.html', { libro, comentarios, id: libroId });
});

router.get('/libros/:id/delete', (req, res) => {
  boardService.deleteLibro(req.params.id);
  res.render('deleted_libro');
});

export default router;
