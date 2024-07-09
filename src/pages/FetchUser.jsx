import axios from 'axios';

const FetchUser = async (token) => {
  try {
    const response = await axios.get('http://localhost:8080/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data', error);
    return null;
  }
};

export default FetchUser;
