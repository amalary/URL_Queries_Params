// temporary, simulated database

const products = [
    {
    name: 'Boyfriend Jeans',
    price: 168,
    image:
    'https://cdn.shopify.com/s/files/1/1176/4142/products/2015-06-11-Ashley_Look11_50080_23637.jpg?v=1471037731',
  }, {
      name: 'Knitted Cashmere Pullover',
      price: 418.60,
      image:
  'https://cdn.shopify.com/s/files/1/1176/4142/products/Look_08_21926_0541_1.jpg?v=1471032586',
  }, {
      name: 'Azur Bracelet in Blue Azurite',
      price: 168,
      image:
  'https://cdn.shopify.com/s/files/1/1176/4142/products/2015-05-08_Laydown_Look2_14120_21584.jpg?v=1471027398',
  }, ];


class Product {
    constructor(data,id) {
        this.id = id;
        this.name = data.name; 
        this.price = data.price; 
        this.image = data.image;
    }
}; 

class Collection {
    #Model
    #currentId
    #items

    constructor(model,startingData) {
        this.#Model = model; 
        this.#currentId = 0;
        this.#items = this.#populateItems(startingData); 
    }

};

// It will take in an array as an argument 

// It will return an object that contains {id as a key} and {the items as the value}; 

#populateItems(startingData); {

    return startingData.reduce(( acc, item, idx ) => {
        this.#currentId = idx;
        acc[this.#currentId] = new this.#Model(item, idx) 
        return acc
    }, {}); 


}; 