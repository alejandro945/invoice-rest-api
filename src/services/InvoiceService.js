const { invoices } = require("../data/dummy");
const getInvoices = require("../model/Market");

class InvoiceService{

    get(){
        return invoices;
    }
    getById(id){
        return getInvoices(id)
    }
}

module.exports = InvoiceService;