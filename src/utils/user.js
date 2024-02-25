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
  
  export function getUser() {
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
  
  // Function to update user's name and password in localStorage token
const updateToken = (name, password) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('token');

  if (token) {
    try {
      // Decode token to obtain user information
      const decodedToken = jwt_decode(token);

      // Update user's name and password in decoded token
      decodedToken.name = name;
      decodedToken.password = password;

      // Encode updated user information into new token
      const updatedToken = jwt_encode(decodedToken);

      // Store updated token back into localStorage
      localStorage.setItem('token', updatedToken);
    } catch (error) {
      console.error('Error decoding or encoding token:', error);
    }
  }
};