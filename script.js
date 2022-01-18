var productos = [
    {
    nombre: "harina",
    img: './img/products/harina.jpg',
    precio: 35
    },
    {
    nombre: "pan",
    img: './img/products/pan.jpg',
    precio: 25
    },
    {
    nombre: "papa",
    img: './img/products/papa.jpg',
    precio: 52
    },
    {
    nombre: "palta",
    img: './img/products/palta.jpg',
    precio: 55
    },
    {
    nombre: "fideos",
    img: './img/products/fideos.jpg',
    precio: 85
    },
    {
    nombre: "aceite",
    img: './img/products/aceite.jpg',
    precio: 350
    },
    {
    nombre: "sopa",
    img: './img/products/sopa.jpg',
    precio: 86
    },
    {
    nombre: "mermelada",
    img: './img/products/mermelada.jpg',
    precio: 108
    },
    {
    nombre: "porotos",
    img: './img/products/porotos.jpg',
    precio: 69
    },
    {
    nombre: "lentejas",
    img: './img/products/porotos.jpg',
    precio: 85
    },
    {
    nombre: "mandarina",
    img: './img/products/mandarina.jpg',
    precio: 43
    },
    {
    nombre: "banana",
    img: './img/products/banana.jpg',
    precio: 79
    },
    {
    nombre: "leche de almendras",
    img: './img/products/leche-almendras.jpg',
    precio: 145
    },
    {
    nombre: "papel higiénico",
    img: './img/products/papel-h.jpg',
    precio: 147
    },
    {
    nombre: "lavandina",
    img: './img/products/lavandina.jpg',
    precio: 55
    },
    {
    nombre: "alcohol en gel",
    img: './img/products/alcohol-gel.jpg',
    precio: 123
    },
    {
    nombre: "shampoo",
    img: './img/products/shampoo.jpg',
    precio: 400
    },
    {
    nombre: "arroz",
    img: './img/products/arroz.jpg',
    precio: 66
    },
    {
    nombre: "salsa de tomate",
    img: './img/products/salsa-tomate.jpg',
    precio: 35
    },
    ];

    var productShow = document.getElementById('productShow'),
    containerProducts = document.getElementById('container-products')
    

    /// ITERAR PRODUCTOS
    for(i = 0; i < productos.length; i++){

        ///CREO EL ELEMENTO PARA LAS TARJETAS
        let productCard = document.createElement('div');
        productCard.classList.add('cards');
        productCard.style = 'width: 150px;';

        ///ELEMENTO HIJO DE CARD (IMG)
        let productImg = document.createElement('img');
        productImg.classList.add('card-img-top');
        productImg.classList.add('cards-img-height')
        productImg.src = productos[i].img;
        /// Lo Hago HIJO de CARD
        productCard.appendChild(productImg);

        ///ELEMENTO HIJO DE CARD (CARDBODY)
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        ///LO HAGO HIJO DE CARD
        productCard.appendChild(cardBody);

        ///ELEMENTOS HIJOS DE CARD BODY (h5)
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        ///CREO NODO TEXTO
        let cardTitleText = document.createTextNode(productos[i].nombre);
        ///LOS UNO
        cardTitle.appendChild(cardTitleText);
        cardBody.appendChild(cardTitle);

        ///ELEMENTOS HIJOS DE CARD BODY (P/precio)
        let cardPrice = document.createElement('p')
        cardPrice.classList.add('card-text')
        let cardPriceText = document.createTextNode(productos[i].precio)
        cardPrice.appendChild(cardPriceText);
        cardBody.appendChild(cardPrice);

        ///ELEMENTOS HIJOS DE CARD BODY (BOTON)
        let cardButton = document.createElement('a');
        cardButton.classList.add('btn');
        cardButton.classList.add('btn-primary');
        cardButton.href = '#';
        let cardButtonText = document.createTextNode('Agregar al carrito');
        cardButton.appendChild(cardButtonText);
        cardBody.appendChild(cardButton);


        containerProducts.appendChild(productCard)
        }


    productShow.addEventListener('click', (event) => {
        event.preventDefault();

        if(containerProducts.classList.contains('active')){
        containerProducts.classList.remove('active')}
        else{
            containerProducts.classList.add('active');
        }

       
        
    })