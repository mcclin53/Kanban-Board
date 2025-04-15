import { UserLogin } from "../interfaces/UserLogin";

const API_BASE = 'https://kanban-board-kmym.onrender.com';

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('${API_BASE}/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();

    if(!response.ok) {
      throw new Error('User info not retreived');
    }
    return data;
  } catch (err) {
    console.log('Error on user login: ', err);
    return Promise.reject('Failed to fetch user info');
  }
};

export { login };
