const fetchUserData = async () => {

  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const usersData = await response.json();

    const modifiedUsers = usersData.map(user => {
      return {
        name: user.name,
        username: user.username, 
        email: user.email,
        address: user.address.street,
        phone: user.phone,
        website: user.website,
        company: user.company.name
      }
    });

    console.log(modifiedUsers);

    const filteredUsers = modifiedUsers.filter(user => {
      if (user.email) {
        return user.email.includes('.biz') 
      }
    });

    console.log(filteredUsers);

    const sortedUsers = modifiedUsers.sort((a, b) => {
      return a.name && b.name ? a.name.localeCompare(b.name) : -1;
    });
    
    console.log(sortedUsers);

  } catch (error) {
    console.error(error);
  }

}

if (require.main === module) {
  fetchUserData();
}