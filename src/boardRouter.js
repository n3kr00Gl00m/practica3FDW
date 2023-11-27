import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('Homepage.html', { 
        libros: boardService.getLibros() 
    });
});

router.post('/libros/newlibro', (req, res) => {
    let { src, title, description, autor, price } = req.body;
    boardService.addLibro({ src, title, description, autor, price });
    res.redirect('/');
});

router.get('/libros/:id', (req, res) => {
    let libro = boardService.getLibro(req.params.id);
    console.log(libro);
    res.render('productDescription.html', { libro });
});

router.get('/libros/:id/delete', (req, res) => {
    boardService.deleteLibro(req.params.id);
    res.render('deleted_libro');
});

export default router;
