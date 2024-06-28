const users = [];

function register(username, password) {
    const user = { username, password };
    users.push(user);
    return user;
}

module.exports = register;