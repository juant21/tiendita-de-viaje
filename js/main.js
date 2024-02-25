 const productos =  [
    {
        id: "abrigo-01",
        titulo: "Abrigo Masculino 1",
        imagen: "./imaganes/Habrigo1.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo Masculino 2",
        imagen: "./imagenes/Habrigo2.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo Masculino 3",
        imagen: "./imagenes/Habrigo3.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        "precio": 120000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo Femenino 1 ",
        imagen: "./imagenes/Mabrigo1.jpg",
        categoria: {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        precio: 120000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo Femenino 2",
        imagen: "./imagenes/Mabrigo2.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        "precio": 120000
    },
    {
        id: "abrigo-06",
        titulo: "Abrigo Femenino 3",
        imagen: "./imagenes/Mabrigo3.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "pantalon-01",
        titulo: "Pantalón Masculino  1",
        imagen: "./imgenes/pantalon1.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        "precio": 100000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón Masculino 2 ",
        imagen: "./imagenes/pantalon2.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón Masculino 3",
        imagen: "./img/pantalon3.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        "precio": 100000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón Femenino 1",
        imagen: "./img/Mpantalones1.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón Femenino 2",
        imagen: "./imagenes/Mpantalones2.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
        id: "pantalon-06",
        titulo: "Pantalón Femenino 3",
        imagen: "./imagenes/Mpantalones3.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
       id: "bermuda-01",
        titulo: "Bermuda Masculina 1",
        imagen: "./imagenes/Bermudah1.jpg",
        categoria: {
            nombre: "Bermudas",
            id: "bermudas"
        },
        precio: 100000
    },
    {
        id: "bermuda-02",
        titulo: "Bermuda Masculina 2",
        imagen: "./imagenes/bermudah2.jpg",
        categoria: {
            nombre: "Bermudas",
            id: "bermudas"
        },
        precio: 100000
    },
    {
        id: "bermuda-03",
        titulo: "Bermuda Masculina 3",
        imagen: "./imagenes/bermudah3.jpg",
        categoria: {
            nombre: "Bermudas",
            id: "bermudas"
        },
        precio: 100000
    },
    {
        id: "bermuda-04",
        titulo: "Bermuda Femenina 1",
        imagen: "./imagenes/BermudaM1.jpg",
        categoria: {
            nombre: "Bermudas",
            id: "bermudas"
        },
        precio: 100000
    },
    {
        id: "bermuda-05",
    titulo: "Bermuda Femenina 2",
        imagen: "./imagenes/bermudaM2.jpg",
        categoria: {
            nombre: "Bermudas",
            id: "bermudas"
        },
        precio: 100000
    },
    {
        id: "bermuda-06",
        titulo: "Bermuda Femenina 3",
        imagen: "./imagenes/bermudaM3.jpg",
        categoria: {
            nombre: "Bermudas",
            id: "bermudas"
        },
        precio: 100000
    },
    {
        id:"camiseta-01",
        titulo:"Camiseta Masculina 1",
        imagen:"./imagenes/camiseta1.jpg",
        categoria: {
            nombre:"Camiseta",
            id: "camiseta"
        },
        precio: 90000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta Masculina 2",
        imagen: "./imagenes/camiseta2.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 90000
    },
    {
        id:"camiseta-03",
        titulo: "Camiseta Masculina 3",
        imagen:"./imagenes/camiseta3.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 90000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta Femenina 4",
        imagen: "./imagenes/camiseta4.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 90000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta Femenina 5",
        imagen: "./imagenes/camiseta5.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 90000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta Femenina 6",
        imagen: "./imagenes/camiseta6.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 90000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
              <h3 class="prducto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">agregar</button>
             </div>`
        ;
        contenedorProductos.append(div);
    })

}

cargarProductos();
