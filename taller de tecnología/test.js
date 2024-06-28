const register = require('./auth/register');
const login = require('./auth/login');
const addProduct = require('./products/addProduct').addProduct;
const sellProduct = require('./products/sellProduct');

// Registrar un usuario
const user = register('user1', 'password1');
console.log('Registered User:', user);

// Intentar iniciar sesión
const loginMessage = login('user1', 'password1');
console.log('Login:', loginMessage);

// Agregar un producto
const product = addProduct('Product1', 'Description of Product1', 100, 10);
console.log('Added Product:', product);

// Intentar vender un producto
const sellMessage = sellProduct('Product1', 5);
console.log('Sell Product:', sellMessage);

// Verificar el stock después de la venta
console.log('Product Stock After Sale:', product);