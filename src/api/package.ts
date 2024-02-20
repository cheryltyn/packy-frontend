
const BASE_URL = 'http://localhost:3000'
// import.meta.env.VITE_BASE_URL;

export async function getAll() {
    try {
        const fullURL = `${BASE_URL}/packages`;  
        const response = await fetch(fullURL, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
            //Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
      const data = await response.json();
      console.log('Data from backend:', data);
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
      return error
    }
  }
  
export async function createOne(createdData) {
    try {
        const fullURL = `${BASE_URL}/newpackage`;  
        const response = await fetch(fullURL, {
            method: "POST",
            body: JSON.stringify(createdData),
            headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
            //Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
      const res = await response.json();
      console.log(res);
      return res
    } catch (error) {
      console.error('Error creating data:', error);
      return error
    }
  }
  
