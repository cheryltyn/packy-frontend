import { getUserData } from '../types/types.ts';

export function getToken() {
    const token = localStorage.getItem("token");
    if (!token) return null;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expiryTimeInSeconds = payload.exp;
      const currentTimeInSeconds = Math.floor(Date.now() / 1000); // Convert current time to seconds
      if (expiryTimeInSeconds < currentTimeInSeconds) {
        localStorage.removeItem("token");
        return null;
      }
      return token;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  
  export function getUser() : getUserData | null {
    const token = getToken();
    if (!token) return null;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1])).payload.user;

      return payload;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  

// export async function getUser() {
//   const token = getToken();
//   if (!token) return null;

//   try {
//       const payload = JSON.parse(atob(token.split('.')[1])).payload.user;
//       const updatedUserData = await fetchUser(payload._id);
//       payload.name = updatedUserData.name;
//       payload.password = updatedUserData.password;
//       console.log(updatedUserData);
//       return updatedUserData;
//   } catch (error) {
//       console.error('Error decoding token:', error);
//       return null;
//   }
// }
export function updateToken(data) {
  const token = getToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])).payload.user;
    payload.name=data.name
    payload.password=data.password
    return payload;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}