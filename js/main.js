const productos = [
    {
        id: "abrigo-01",
        titulo: "Abrigo Masculino",
        imagen: "./imagenes/abrigo1.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo Masculino",
        imagen: "./imagenes/abrigo2.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo Masculino",
        imagen: "./imagenes/abrigo3.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo Femenino",
        imagen: "./imagenes/abrigo4.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo Femenino",
        imagen: "./imagenes/abrigo5.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "abrigo-06",
        titulo: "Abrigo Femenino",
        imagen: "./imagenes/abrigo6.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 120000
    },
    {
        id: "sueter-01",
        titulo: "Sueter Masculino",
        imagen: "./imagenes/camiseta1.jpg",
        categoria: {
            nombre: "Sueter",
            id: "sueter"
        },
        precio: 100000
    },
    {
        id: "sueter-02",
        titulo: "Sueter Masculino",
        imagen: "./imagenes/camiseta2.jpg",
        categoria: {
            nombre: "Sueter",
            id: "sueter"
        },
        precio: 100000
    },
    {
        id: "sueter-03",
        titulo: "Sueter Masculino",
        imagen: "./imagenes/camiseta3.jpg",
        categoria: {
            nombre: "Sueter",
            id: "sueter"
        },
        precio: 100000
    },
    {
        id: "sueter-04",
        titulo: "Sueter Femenino",
        imagen: "./imagenes/camiseta4.jpg",
        categoria: {
            nombre: "Sueter",
            id: "sueter"
        },
        precio: 100000
    },
    {
        id: "sueter-05",
        titulo: "Sueter Femenino",
        imagen: "./imagenes/camiseta5.jpg",
        categoria: {
            nombre: "Sueter",
            id: "sueter"
        },
        precio: 100000
    },
    {
        id: "sueter-06",
        titulo: "Sueter Femenino",
        imagen: "./imagenes/camiseta6.jpg",
        categoria: {
            nombre: "Sueter",
            id: "sueter"
        },
        precio: 100000
    },
    {
        id: "bermuda-01",
        titulo: "Bermuda Masculina",
        imagen: "./imagenes/bermuda1.jpg",
        categoria: {
            nombre: "Bermuda",
            id: "bermuda"
        },
        precio: 60000
    },
    {
        id: "bermuda-02",
        titulo: "Bermuda Masculina",
        imagen: "./imagenes/bermuda2.jpg",
        categoria: {
            nombre: "Bermuda",
            id: "bermuda"
        },
        precio: 60000
    },
    {
        id: "bermuda-03",
        titulo: "Bermuda Masculina",
        imagen: "./imagenes/bermuda3.jpg",
        categoria: {
            nombre: "Bermuda",
            id: "bermuda"
        },
        precio: 60000
    },
    {
        id: "bermuda-04",
        titulo: "Bermuda Femenina",
        imagen: "./imagenes/bermuda4.jpg",
        categoria: {
            nombre: "Bermuda",
            id: "bermuda"
        },
        precio: 60000
    },
    {
        id: "bermuda-05",
        titulo: "Bermuda Femenina",
        imagen: "./imagenes/bermuda5.jpg",
        categoria: {
            nombre: "Bermuda",
            id: "bermuda"
        },
        precio: 60000
    },
    {
        id: "bermuda-06",
        titulo: "Bermuda Femenina",
        imagen: "./imagenes/bermuda6.jpg",
        categoria: {
            nombre: "Bermuda",
            id: "bermuda"
        },
        precio: 60000
    },
    {
        id: "pantalones-01",
        titulo: "Pantalones Masculinos",
        imagen: "./imagenes/pantalon1.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
        id: "pantalones-02",
        titulo: "Pantalones Masculinos",
        imagen: "./imagenes/pantalon2.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
        id: "pantalones-03",
        titulo: "Pantalones Masculinos",
        imagen: "./imagenes/pantalon3.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
        id: "pantalones-04",
        titulo: "Pantalones Femeninos",
        imagen: "./imagenes/pantalones4.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
        id: "pantalones-05",
        titulo: "Pantalones Femeninos",
        imagen: "./imagenes/pantalones5.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
    {
        id: "pantalones-06",
        titulo: "Pantalones Femeninos",
        imagen: "./imagenes/pantalones6.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 100000
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML ="";

    productosElegidos.forEach(producto => {

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

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        }else{
            cargarProductos(productos);
        }

    })
});

/*clima */
const api = {
    key: '31afe25115ee19510424a2ac0f07029c',
    url: `https://api.openweathermap.org/data/2.5/weather?id`
  }
  
  const card = document.getElementById('card')
  
  const city = document.getElementById('city');
  const date = document.getElementById('date');
  const tempImg = document.getElementById('temp-img');
  const temp = document.getElementById('temp');
  const weather = document.getElementById('weather');
  const range = document.getElementById('range');
  
  function updateImages(data) {
    const temp = toCelsius(data.main.temp);
    let src = 'images/temp-mid.png';
    if (temp > 26) {
      src = 'images/temp-high.png';
    } else if (temp < 20) {
      src = 'images/temp-low.png';
    }
    tempImg.src = src;
  }
  
  async function search(query) {
    try {
      const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
      const data = await response.json();
      card.style.display = 'block';
      city.innerHTML = `${data.name}, ${data.sys.country}`;
      data.innerHTML = (new Date()).toLocaleDateString();
      temp.innerHTML = `${toCelsius(data.main.temp)}c`;
      weather.innerHTML = data.weather[0].description;
      range.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
      updateImages(data);
    } catch (err) {
      console.log(err);
      alert('Hubo un error');
    }
  }
  
  function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }
  
  function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
  }
  
  const searchform = document.getElementById('search-form');
  const searchbox = document.getElementById('searchbox');
  searchform.addEventListener('submit', onSubmit, true);