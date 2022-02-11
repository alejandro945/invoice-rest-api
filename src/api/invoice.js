const { Router } = require('express')
const InvoiceService = require('../services/InvoiceService')
const router = Router()
const service = new InvoiceService();

router.get('/', get)
router.get('/:id', getById)

function get(_, res,) {
    const results = service.get()
    res.status(200).json(results)
}

function getById(req, res) {
    const { id } = req.params;
    const results =    service.getById(id)
    res.status(200).json(results)
}

module.exports = router;