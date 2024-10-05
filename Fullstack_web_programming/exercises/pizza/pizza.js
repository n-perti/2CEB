const statusPedido = () => {
  const status = Math.random() < 0.8;
  return status;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusPedido()) {
      resolve("Pedido entregado");
    } else {
      reject("Pedido no entregado");
    }
  }, 3000);
});

miPedidoDePizza // Promise
  .then((mensajeDeConfirmacion) => console.log(mensajeDeConfirmacion))
  .catch((mensajeDeError) => console.log(mensajeDeError));
console.log("Pedido en proceso");
//
// porque se usa el new: Se usa para crear un nuevo objeto de un tipo de objeto definido por el usuario o incorporado que tiene un constructor.

async function miPedidoDePizzaAsync() {
  try {
    const mensajeDeConfirmacion = await miPedidoDePizza;
    console.log(mensajeDeConfirmacion);
  } catch (error) {
    console.log(error);
  }
}

const productos = [
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

function getProducts() {
    return new Promise((resolve) => {
        console.log('Cargando productos...');
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
}

getProducts().then(data => {
    console.log('Opc1: ', data)
});

async function getMyProducts() {
    const Myproducts = await getProducts();
    console.log(Myproducts)
}

getMyProducts();


const pedidoPizza = new Promise((resolve, reject) => {
  if (statusPedido()) {
    resolve('Success')
  }
  else {
    reject('Error')
  }
});

pedidoPizza
  .then(mensaje => {
    console.log(mensaje)
  })
  .catch(error => {
    console.log(error)
  });


