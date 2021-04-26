

document.getElementById("btm_primary").addEventListener('click', () => {

	 var xhr = new XMLHttpRequest(); 
	 var dateans = xhr.open('GET', "https://your-scorpion.ru/wp-content/uploads/2026/03/26.4.2021-Project_Max_S_Social_Network.json", true);
	 console.log(dateans);	

	 testJSON(xhr);



	})




	function testJSON (xhr, newUserList) { xhr.onreadystatechange = () => {
		if (xhr.readyState !== 4 ) {
		return;
		console.log('4');
		return newUserList;
		}

		if (xhr.status !== 200) {
			    console.log('error ' + xhr.status)
			} else {
			    console.log('Ok!', xhr.responseText);
			    var text = xhr.responseText;
			    document.querySelector('.textLayer').innerHTML = text;
			    	 let dataFigma = JSON.parse(text);
	 				 console.log (typeof dataFigma);
                     newUserList = JSON.parse(JSON.stringify(dataFigma));
                     return newUserList;









					class ProductList {
					    #goods;
					    #allProducts;


					     constructor(container = '.products') {
					       console.log('constructor');
					          this.container = container;

					          this.#goods = [];
					          this.#fetchGoods();
					          //this.#allProducts = [];
					          this.#render();
					     }


					 #fetchGoods() {
					         this.#goods = dataFigma;
					     }

					     #render() {
					         const block = document.querySelector(this.container);

					         this.#goods.forEach((product) => {
					             const productObject = new ProductItem(product);
					             console.log(productObject);
					             //this.#allProducts.push(productObject);
					         });
					     }
					}


					class ProductItem {
					    constructor(product, img) {
					        this.title = product.title;
					        this.price = product.price;
					        this.id = product.id;
					        this.img = img;
					    }

					    render() {
					        return `<div class="product-item" data-id="${this.id}">
					                  <img src="${this.img}" alt = "Some img"> 
					                  <h3>${this.title}</h3>
					                  <p>${this.price}</p>
					                  <button class = "btn">Добавить в корзину</button>
					                  </div>`;
					    };
					}

					const productList = new ProductList();












			}
		}
	xhr.send();
	console.log(xhr);
	}


