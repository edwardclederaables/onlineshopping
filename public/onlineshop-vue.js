(function() {
    var onlineShopVue = new Vue({
      el: '#onlineShopVue',
      data: {
        name: null,
        price: null,
        description: null,
        quantity: null,
        products: []
      },
      created: function() {
        var self = this;
        axios.get('http://localhost:3300/api/products')
          .then(function(res) {
            self.products = res.data;
          })
          .catch(function(err) {
            self.products = [];
          });
      },
      methods: {
        addProduct: function() {
          var self = this;
          var payload = {
            name: self.name,
            price: self.price,
            description: self.description,
            quantity: self.quantity
          };
          axios.post('/api/products', payload)
            .then(function(res) {
              self.products = res.data;
              self.clear();
              
            })
            .catch(function(err) {
            });
        },
        
        clear: function() {
          this.name = null;
          this.price = null;
          this.description = null;
          this.quantity = null;
        },
        deleteProduct: function(product) {
          var self = this;
          axios.delete('/api/products/' + product.id)
            .then(function(res) {
             
              var index = -1;
              for(var i = 0; i < self.products.length; ++i) {
                if(Number(self.products[i].id) === Number(product.id)) {
                  index = i;
                  break;
                }
              }
              self.products.splice(index, 1);
            })
            .catch(function(err) {
            });
        },
        editProduct: function(product) {
          var self = this;
          axios.put('/api/products/' + product.id)
            .then(function(res) {
             
              var index = -1;
              for (i = 0; i < products.length; i++) {
                if (products[i].id == id) {
                    products[i].name = req.body.name;
                    products[i].price = req.body.price;
                    products[i].description = req.body.description;
                    products[i].quantity = req.body.quantity;
                    break;
                }
               
                
              }
              store.set('products', products);
              res.json(store.get('products'));
            })
            .catch(function(err) {
            });
        } 
      }
    });
    console.log(onlineShopVue);
  })();