const users = require('./register');

function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        return "Login successful";
    } else {
        return "Login failed";
    }
}

module.exports = login;