const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/auth');

// Semua route membutuhkan autentikasi admin
router.use(isAdmin);

// Dashboard admin
router.get('/dashboard', adminController.dashboard);

// CRUD Konser
router.get('/concerts/add', adminController.showAddConcert);
router.post('/concerts/add', adminController.addConcert);
router.get('/concerts/edit/:id', adminController.showEditConcert);
router.post('/concerts/edit/:id', adminController.editConcert);
router.post('/concerts/delete/:id', adminController.deleteConcert);

module.exports = router;
