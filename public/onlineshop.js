// IIFE - Immediately Invoked Function Expression
// Read More: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function() {
    var products = [];
    var pageTitle = document.getElementById('pageTitle');
    var productsTable = document.getElementById('productsTable');
    console.log(pageTitle);
  
    axios.get('http://localhost:3300/api/products')
      .then(function(res) {
        products = res.data;
        renderProducts(products);
      })
      .catch(function(err) {
        products = [];
      });
  
    var clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function(event) {
      var inputs = document.getElementsByClassName('form-control');
      for(var i = 0; i < inputs.length; ++i) {
        var item = inputs[i];
        item.value = '';
      }
    });
  
    var addProductForm = document.getElementById('addProductForm');
    addProductForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var nameInput = document.getElementById('name');
      var priceInput = document.getElementById('price');
      var descriptionInput = document.getElementById('description');
      var quantityInput = document.getElementById('quantity');
      var payload = {
        name: nameInput.value,
        price: priceInput.value,
        description: descriptionInput.value,
        quantity: quantityInput.value
      };
      axios.post('http://localhost:3300/api/products', payload)
        .then(function(res) {
          products = res.data;
          renderProducts(products);
        })
        .catch(function(err) {
          products = [];
        });
    });
  
    function renderProducts(products) {
      productsTable.innerHTML = '';
      var headers = ['Product Id', 'Name', 'Price', 'Description', 'Quantity'];
      var thead = document.createElement('tr');
      headers.forEach(function(header) {
        var td = document.createElement('td');
        td.textContent = header;
        thead.append(td);
      });
      productsTable.append(thead);
      products.forEach(function(product){
        var tr = document.createElement('tr');
        var tdId = document.createElement('td');
        var tdName = document.createElement('td');
        var tdPrice = document.createElement('td');
        var tdDescription = document.createElement('td');
        var tdQuantity = document.createElement('td');
        tdId.textContent = product.id;
        tdName.textContent = product.name;
        tdPrice.textContent = product.price;
        tdDescription.textContent = product.description;
        tdQuantity.textContent = product.quantity;
        
        tr.append(tdId);
        tr.append(tdName);
        tr.append(tdPrice);
        tr.append(tdDescription);
        tr.append(tdQunatity);
        productsTable.append(tr);
      });
    }
  
  })(); //- end of IIFE