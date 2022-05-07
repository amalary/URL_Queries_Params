// temporary, simulated database

const product = [
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

    // It will take in an array as an argument 

    // It will return an object that contains {id as a key} and {the items as the value}; 

    #populateItems(startingData) {

        return startingData.reduce(( acc, item, idx ) => {
            this.#currentId = idx;
            acc[this.#currentId] = new this.#Model(item, idx) 
            return acc
        }, {}); 
    
    
    }; 
    
    #generateId(){
        return ++this.#currentId
    }; 

    // Will return an array with all items availible in this.items 
    // return array 

    find(){
        return Object.values(this.#items); 
    }

    /**
   * @description Will return item match with the itemId
   * @param { string } itemId
   * @param { function } callBack Will return error or item
   * @returns function;
   */

    findById(itemId,callBack) { 
        if(!itemId) return console.log('Missing Id in first argument')

        if(typeof callBack !== 'function') {
            return console.log('Missing function in second argument')

        }; 
        let error; 
        const item = this.#items[itemId]; 

        if(!item){
            error = {message: `item with id ${itemId} cant't be found`}; 
        }
        return callBack(error,item); 
    }; 

    /**
 * @param {object} data
 * @param { function } callBack Will return error or item
 * @returns function;
*/

    create(data, callBack) {

        if(!data) return console.log('Missing data in first argument');

        if(typeof callBack !== "function" ) {
            return console.log('Missing function in second argument')
        }
        let error, newItem

        const isEmpty = Object.keys(data).every(field => data[field] === ""); 

        if(isEmpty) {
            error = {message: 'you have empty fields'}; 
        }
        else{

            newItem = new this.#Model(data,this.#generateId()); 

            this.#items[newItem.id] = newItem; 
        }
        return callBack(error,newItem); 

    };

    /**
   * @param {string} itemId
   * @param { function } callBack Will return error or item
   * @returns function;
   */

    findByIdAndDelete(itemId, callback) { 
        let error = null;
        const item = this.#items[itemId]
        const isDeleted = delete this.#items[itemId]; 

        if(!isDeleted) {
            error = {message: `Item with id ${itemId} has not been found`}
        }
        return callBack(error,item); 
    }; 

    findByIdUpdate(itemId,data,callBack) {
        let error = null; 
        const item = this.#items[itemId]; 

        if(!item) { 
            error = {message: `item cannot be found`}
        }
        else{
            this.#items[itemId] = {
                item, 
                data,
            }
        }
        return callBack(error,this.#items[itemId])
    }






};

module.exports = new Collection (Product, [
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
      }, ]
    ); 
    
    
    



