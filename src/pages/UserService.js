class UserService {
    createUser = async (userData) => {
      try {
        const response = await fetch('http://localhost:5000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to create user');
        }
  
        const user = await response.json();
        return user;
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    };
  
    fetchUser = async (userId) => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${userId}`);
  
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
  
        const user = await response.json();
        return user;
      } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
      }
    };
  }
  
  export default UserService;