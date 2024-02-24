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
      const payload = JSON.parse(atob(token.split(".")[1])).payload;
      return payload;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  