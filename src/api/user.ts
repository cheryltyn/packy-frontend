import { LoginData, SignupData } from '../types/types.ts';

const BASE_URL = 'http://localhost:3000/user'
// import.meta.env.VITE_BASE_URL;

export async function createUser(userData: SignupData): Promise<boolean> {
  try {
      const fullURL = `${BASE_URL}/signup`;
      const response = await fetch(fullURL, {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
              "Content-Type": "application/json",
          },
      });

      if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      // Return true if signup was successful
      return true;
  } catch (error) {
      console.error('Error creating user:', error);
      // Return false if signup fails
      return false;
  }
}
 
  export async function handleLogin(userData: LoginData) {
    try {
        const fullURL = `${BASE_URL}/login`;  
        console.log('logging in')
        const response = await fetch(fullURL, {
            method: "POST",
            body: JSON.stringify(userData), 
            headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
            //Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
            if (!response.ok) {
                throw new Error(`Failed to login: ${response.statusText}`);
            }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      console.log('Data from backend:', data);
      return data
    } catch (error) {
      console.error('Error fetching login:', error);
      return error
    }
  }
 
  export async function editUser(userData) {
    try {
        const fullURL = `${BASE_URL}/edituser`;  
        const response = await fetch(fullURL, {
            method: "PUT",
            body: JSON.stringify(userData), 
            headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
            //Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
            if (!response.ok) {
                throw new Error(`Failed to login: ${response.statusText}`);
            }
      
      const data = await response.json();
      // localStorage.setItem('token', data.token);
      console.log('Data from backend:', data);
      return data
    } catch (error) {
      console.error('Error fetching login:', error);
      return error
    }
  }
 
  
  export async function deleteUser(userEmail) {
    try {
        const fullURL = `${BASE_URL}/deleteuser?email=${userEmail}`;  
        const response = await fetch(fullURL, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
            //Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
            if (!response.ok) {
                throw new Error(`Failed to delete the user: ${response.statusText}`);
            }
      
      const data = await response.json();
      localStorage.removeItem('token');
      console.log('Data from backend:', data);
      return data
    } catch (error) {
      console.error('Error fetching login:', error);
      return error
    }
  }
 