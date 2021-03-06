const { faker } = require('@faker-js/faker');
export const testData = {
    cookies :{
        'cartItems' : 'PrestaShop-a30a9934ef476d11b6cc3c983616e364'
    },
    search :{
        'criteria': 'shirt'
    },
    sendToAFriend : {
        'name': faker.name.findName(),
        'email': faker.internet.email(),
        'modalText': 'Send to a friend'
    },
    product :{
        'color': 'Blue',
        'size': 'M'
    },
    pageNavigation : {
        'dressPage' : 'Dresses',
        'shoppingCart': 'Your shopping cart',
        'authentication' : 'Authentication',
        'addresses' : 'Addresses',
        'shipping' : 'Shipping',
        'payment' : 'payment',
        'checkMethod' : 'Check',
        'bankMethod': ' Bank-wire payment.',
        'confirmation': 'Order confirmation',
        'comparison': 'Product Comparison'
    },
    paymentMethod : {
        'check' : 'check.',
        'bank': 'bank wire'
    },
    errorMessages : {
        'existingAccount' : 'An account using this email address has already been registered.'
    },
    urlContents : {
        'accountCreation' : 'account-creation',
        'product' : 'id_product',
        'productComparison' : 'products-comparison',
        'shoppingCart' : 'order'
    },
    accountCreation : {
        'gender': faker.name.gender(true),
        'email' : faker.internet.email(),
        'name': faker.name.firstName(),
        'surname' : faker.name.lastName(),
        'password' : faker.internet.password(),
        'day': faker.datatype.number(31),
        'month': faker.datatype.number(12),
        'year': faker.datatype.number({min: 1950, max: 2022}),
        'address': faker.address.streetAddress(),
        'city': faker.address.cityName(),
        'state': faker.datatype.number({max:50}),
        'postCode': faker.address.zipCode('#####'),
        'phoneNumber': faker.phone.phoneNumber('060 ########'),
        'alias' : faker.name.findName()
    },
    existingAccount : {
        'username': 'someoneNew@mailinator.com',
        'password': 'password'
    }
}