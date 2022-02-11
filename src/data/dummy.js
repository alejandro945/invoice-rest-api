const costumers=[
    {
        id_costumer : 1,
        name : "Alejandro",
        lastName : "Varela",
        address : "Calle",
        phone : 323445,
        email : "alejo@f.com"
    },
    {
        id_costumer : 2,
        name : "Alejandro",
        lastName : "Varela",
        address : "Calle",
        phone : 323445,
        email : "alejo@f.com"
    },
    {
        id_costumer : 3,
        name : "Alejandro",
        lastName : "Varela",
        address : "Calle",
        phone : 323445,
        email : "alejo@f.com"
    }
]
const invoices=[
    {
        id_invoice : 1,
        id_costumer : 1,
        date:"02/09/2022"
    },
    {
        id_invoice : 2,
        id_costumer : 2,
        date:"02/05/2022"
    },
    {
        id_invoice : 3,
        id_costumer : 3,
        date:"02/01/2022"
    }
]
const details=[
    {
        id_detail : 1,
        id_invoice : 1,
        id_product : 1,
        amount:6,
        price: 1200000
    },
    {
        id_detail : 2,
        id_invoice : 2,
        id_product : 2,
        amount:3,
        price: 220000
    },
    {
        id_detail : 3,
        id_invoice : 3,
        id_product : 3,
        amount:7,
        price: 2200000
    }
]
const products=[
    {
        id_product : 1,
        name : "CD PLAYER",
        price:6700,
        stock:4
    },
    {
        id_product : 2,
        name : "COFFEE MAKER",
        price:100000,
        stock:2
    },
    {
        id_product : 3,
        name : "BLENDER",
        price:220000,
        stock:6
    }
]
module.exports={
    costumers,
    invoices,
    details,
    products
}