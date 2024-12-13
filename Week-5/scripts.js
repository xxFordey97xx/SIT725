document.getElementById('load-users-button').addEventListener('click', function() {
    fetch('/users')
      .then(response => response.json())
      .then(users => {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';

        userList.style.display = 'block';

        users.forEach(user => {
          const listItem = document.createElement('li');

          const userImage = document.createElement('img');
          userImage.src = user.image;
          userImage.alt = user.name;
          userImage.style.width = '100px';
          userImage.style.height = '100px';

          listItem.innerHTML = `
            <div>
              <strong>${user.name}</strong> - ${user.email}
            </div>
          `;

          listItem.prepend(userImage);
          userList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching users:', error));
  });