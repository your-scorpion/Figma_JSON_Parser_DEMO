

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

		class ProductList {
			#goods;
			#allProducts;
			}
		  }
		}
	xhr.send();
	}


