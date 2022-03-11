var productos = [
    {
    nombre: "Harina",
    img: './img/products/harina.jpg',
    precio: 35
    },
    {
    nombre: "Pan",
    img: './img/products/pan.jpg',
    precio: 25
    },
    {
    nombre: "Papa",
    img: './img/products/palta.jpg',
    precio: 52
    },
    {
    nombre: "Palta",
    img: './img/products/palta.jpg',
    precio: 55
    },
    {
    nombre: "Fideos",
    img: './img/products/fideos.jpg',
    precio: 85
    },
    {
    nombre: "Aceite",
    img: './img/products/aceite.jpg',
    precio: 350
    },
    {
    nombre: "Sopa",
    img: './img/products/sopa.jpg',
    precio: 86
    },
    {
    nombre: "Mermelada",
    img: './img/products/mermelada.jpg',
    precio: 108
    },
    {
    nombre: "Porotos",
    img: './img/products/porotos.jpg',
    precio: 69
    },
    {
    nombre: "Lentejas",
    img: './img/products/porotos.jpg',
    precio: 85
    },
    {
    nombre: "Mandarina",
    img: './img/products/mandarina.jpg',
    precio: 43
    },
    {
    nombre: "Banana",
    img: './img/products/banana.jpg',
    precio: 79
    },
    {
    nombre: "Leche de almendras",
    img: './img/products/leche-almendras.jpg',
    precio: 145
    },
    {
    nombre: "Papel higiénico",
    img: './img/products/papel-h.jpg',
    precio: 147
    },
    {
    nombre: "Lavandina",
    img: './img/products/lavandina.jpg',
    precio: 55
    },
    {
    nombre: "Alcohol en gel",
    img: './img/products/alcohol-gel.jpg',
    precio: 123
    },
    {
    nombre: "Shampoo",
    img: './img/products/shampoo.jpg',
    precio: 400
    },
    {
    nombre: "Arroz",
    img: './img/products/arroz.jpg',
    precio: 66
    },
    {
    nombre: "Salsa de tomate",
    img: './img/products/salsa-tomate.jpg',
    precio: 35
    },
    ];

    var carrito = [];

    //CAMBIO DE PAGINA
    var homeShow = document.getElementById('home'),
    aboutShow = document.getElementById('aboutShow')


    // VARIABLES PARA LA TIENDA
    var productShow = document.getElementById('productShow'),
    containerProducts = document.getElementById('container-products'),
    cartShow = document.getElementById('cartShow')


    //VARIABLES PARA CARRITO
    var overlayCart = document.getElementById('overlay-cart'),
    cartTableBody = document.getElementById('cart-table-body'),
    btnCloseCart = document.getElementById('btn-close-popup-cart'),
    btnTotal = document.getElementById('calcular-total'),
    valorTotal = 0;

    /// ITERAR PRODUCTOS
    for(i = 0; i < productos.length; i++){

        ///CREO EL ELEMENTO PARA LAS TARJETAS
        let productCard = document.createElement('div');
        productCard.classList.add('cards');
        

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
        let cardPriceText = document.createTextNode('$' + productos[i].precio)
        cardPrice.appendChild(cardPriceText);
        cardBody.appendChild(cardPrice);

        ///ELEMENTOS HIJOS DE CARD BODY (BOTON)
        let cardButton = document.createElement('a');
        cardButton.classList.add('btn');
        cardButton.classList.add('btn-primary');
        cardButton.href = '#';
        cardButton.id = i;
        cardButton.onclick = () => {
            
            cardButton.classList.add('disabled')
            carrito.push(cardButton.id);
        }
        let cardButtonText = document.createTextNode('Agregar al carrito');
        cardButton.appendChild(cardButtonText);
        cardBody.appendChild(cardButton);


        containerProducts.appendChild(productCard)
        }

 /// MOSTRAR PRODUCTOS
    productShow.addEventListener('click', (event) => {
        event.preventDefault();

    ///NECESITO MODIFICAR EL ACTIVE DEL NAV


        if(containerProducts.classList.contains('active')){
        containerProducts.classList.remove('active')}
        else{
            containerProducts.classList.add('active');
        }

       
        
    })

      
    ///FALTA FUNCIONALIDADES DEL CARRITO
    /// Y MEJORAR LAS FUNCIONALIDADES

    /// MOSTRAR CARRITO



    cartShow.addEventListener('click', (event) => {
        event.preventDefault();
        overlayCart.classList.add('active')
        

            //ITERAR CARRITO

    for(i = 0; i < carrito.length; i++){
        
        var finder = carrito[i];
        var trCart = document.createElement('tr');
        ///LE AGREGO UN ID A CADA BLOQUE PARA PODER LOCALIZARLO
        trCart.setAttribute("id", "article" + i)
        let thCart = document.createElement('th');
        let thCart1Txt = document.createTextNode(i + 1);
        thCart.appendChild(thCart1Txt);
        trCart.appendChild(thCart);

        let tdCart2 = document.createElement('td')
        let tdCart2Txt = document.createTextNode(productos[finder].nombre);
        tdCart2.appendChild(tdCart2Txt);
        trCart.appendChild(tdCart2);

        var tdCart3 = document.createElement('td')
        let tdCart3Txt = document.createTextNode(productos[finder].precio);
         /// VAMOS CALCULANDO EL VALOR TOTAL
        tdCart3.setAttribute("id", "valor" + i)
        valorTotal = valorTotal + productos[finder].precio
        tdCart3.appendChild(tdCart3Txt);
        trCart.appendChild(tdCart3);

        let tdCart4 = document.createElement('button');

        /// FIJARSE COMO ELIMINAR EL ELEMENTO !!!!!!!!!!!!
        tdCart4.addEventListener('click', () => {
            let idToDelete = tdCart4.parentNode.id;
            ///Obtengo el elemento por el id asignado
            let toRemove = document.getElementById(idToDelete)
            ///Remuevo el elemento del dom
            cartTableBody.removeChild(toRemove);
            ///Resto el elemento del valor total
            let elementToRest = tdCart3.id;
            console.log(elementToRest)
            
            ///Remuevo el elemento del array carrito
            carrito.splice(idToDelete, 1);
            
        })
        trCart.appendChild(tdCart4);

        cartTableBody.appendChild(trCart);
        
    }

            /// BOTON CERRAR CARRITO
            btnCloseCart.addEventListener('click', () => {
                overlayCart.classList.remove('active');
                valorTotal = 0;
                btnTotal.innerHTML = 'Calcular total'
                //CIERRO Y ELIMINO LOS NODOS HIJOS?
                while (cartTableBody.firstChild){
                cartTableBody.removeChild(cartTableBody.firstChild);
            }
            })
    
 //// TENGO LOS VALORES Y LOS PUEDO PROYECTAR
    btnTotal.addEventListener('click', () => {
        btnTotal.innerHTML = 'Total $ '+ valorTotal;
    })
    })


