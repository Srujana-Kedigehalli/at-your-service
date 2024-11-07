// Create a new file: src/utils/api.js
export const fetchWithAuth = async (endpoint) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  };