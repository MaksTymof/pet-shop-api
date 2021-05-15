const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const fs = require('file-system');

var products=[]
for(i = 0; i < 100; i++){
  var images=[]
   for( j = 0; j < 1; j++){
      var image = faker.image.animals()
      images.push(image)
    }
    var product = {
      _id: uuidv4(),
      title: faker.commerce.productName(),
      images: images,
      description: faker.lorem.paragraphs(),
      price: Math.floor(Math.random() * 320)
    }
    products.push(product)

}
fs.writeFileSync( "../lists/products.json", JSON.stringify(products))
