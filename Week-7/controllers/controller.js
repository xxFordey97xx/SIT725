const User = require('../models/model');

exports.getUsers = (req, res) => {
  const users = User.getAllUsers();

  const userList = users.map(user => {
    return `<li><strong>${user.name}</strong> - ${user.email}</li>`;
  }).join('');

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User List</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>User List</h1>
      <ul>
        ${userList}
      </ul>
    </body>
    </html>
  `);
};