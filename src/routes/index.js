const { Router } = require('express');
const invoices = require('../api/invoice')
//Inicializar el Router de Express
const router = Router();
//GET * Api Services
router.use('/invoices', invoices);
//Not Found
router.get('*', (_, res) => { res.status(404).send({ error: 'Service Not Found' }) })

module.exports = router