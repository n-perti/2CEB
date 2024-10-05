function statusPizza() {
  const statusPedido = Math.random() < 0.8;
  return statusPedido;
}

const pedidoPizza = new Promise((resolve, error) => {
  setTimeout(() => {
    if (statusPizza) {
      resolve("Success");
    } else {
      error("Error");
    }
  }, 3000);
});

// pedidoPizza
//     .then((mensaje) =>{console.log(mensaje)})
//     .catch((error) => {console.log(error)})

async function pizza() {
  const resultadoPedido = await pedidoPizza;
  return console.log(resultadoPedido);
}

pizza();

let products = [
  {
    nombre: "PC-Gaming",

    marca: "Asus",

    precio: 1200,
  },

  {
    nombre: "Tablet",

    marca: "Samsung",

    precio: 300,
  },

  {
    nombre: "Cámara-Reflex",

    marca: "Canon",

    precio: 650,
  },
];

const getProducts2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(products)
    }
    , 3000);
});

// getProducts2
// .then((data) => {
//     console.log('Data: ', data)
// })
// .catch((error) => console.log('Error: ', error))


async function getMyProducts() {
    const data = await getProducts2
    return console.log('Data success loaded: ', data)
}

getMyProducts()