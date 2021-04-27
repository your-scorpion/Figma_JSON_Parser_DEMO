const API = 'https://jsonplaceholder.typicode.com';
document.getElementById("btm_primary").addEventListener('click', () => {
	 var xhr = new XMLHttpRequest(); 
	 var dateans = xhr.open('GET', "https://jsonplaceholder.typicode.com/todos", true);
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
                     newUserList = JSON.parse(JSON.stringify(dataFigma, null, '\t'));
                     return newUserList;
		  }
		}
	xhr.send();
	}




class ProductList {
  #properties;
  #allProperties;

  constructor(container = '.products') {
    console.log('constructor');
    this.container = container;
    this.#properties = [];
    this.#allProperties = [];

    this.#get_properties_from_json()
        .then((data) => {
          this.#properties = [...data];
          this.#render();
        });
  }


  #get_properties_from_json() {
    return fetch(`${API}/todos`)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
  }

  #render() {
    const block = document.querySelector(this.container);

    this.#properties.forEach((product) => {
      const productObject = new Properties_set(product);
      console.log(productObject);
      this.#allProperties.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
  }
}

class Properties_set {
  constructor(product) {
    this.userId = product.userId;
    this.id = product.id;
    this.title = product.title;
    this.completed = product.completed;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <div class="desc">
                  <h3>${this.userId}</h3>
                  <p>${this.id} \u20bd</p>
 				  <p>${this.title} \u20bd</p>
 				  <h5>${this.completed} \u20bd</h5>
              </div>
          </div>`;
  }
}

const productList = new ProductList();
