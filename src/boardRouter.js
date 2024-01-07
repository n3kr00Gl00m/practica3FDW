import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Homepage.html', {
    libros: boardService.getLibros(0,5),
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
  if (boardService.validarFormulario(req)) {
    const { idLibro } = req.body;
    boardService.addLibro(req.body, idLibro);  // Utiliza idLibro para editar el libro existente
    res.redirect('/');
  } else {
    res.render('error_formulario.html');
  }
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

router.get('/libros', (req, res) => {
  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);

  const libros = boardService.getLibros(from, to);

  res.render('libros.html', {
    libros: libros
  });
});


export default router;
