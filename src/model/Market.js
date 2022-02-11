const { costumers, invoices, details } = require("../data/dummy");

function getInvoices(id_costumer) {
    var result = []
    costumers.filter(ct => {
        console.log(id_costumer);
        if (ct.id_costumer == id_costumer) {
            invoices.find(i => {
                if (i.id_costumer == ct.id_costumer) {
                    details.filter(d => {
                        if (d.id_invoice == i.id_invoice) {
                            result.push(d);
                        }
                    })
                }
            })
        }
    })
    result.forEach(r=>{
        if (r.price > 1000000 && r.amount >= 5) {
            r.price -= (r.price * 10)/100;
        }
    })
    
    return result;
}


module.exports = getInvoices

