// Sample model simulating a database, in real world would connect to my mongo database to fetch user data
const users = [
    { id: 1, name: 'User1', email: 'user1@example.com', image: '/images/user-image.png' },
    { id: 2, name: 'User2', email: 'user2@example.com', image: '/images/kitten-2.png' },
    { id: 3, name: 'User3', email: 'user3@example.com', image: '/images/kitten-3.png' },
    { id: 4, name: 'User4', email: 'user4@example.com', image: '/images/kitten.png' }
  ];
  
  exports.getAllUsers = () => {
    return users;
  };