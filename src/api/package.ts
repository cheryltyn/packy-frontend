
const BASE_URL = 'http://localhost:3000/package'
// import.meta.env.VITE_BASE_URL;


export async function  getAll(userID: string, filter: string) {
  try {
    const fullURL = `${BASE_URL}/packages?userid=${userID}&filter=${filter}`;  
    const response = await fetch(fullURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
        //Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Packages not found for the specified user');
      }
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Data from backend:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error
  }
}

  
export async function createOne(createdData : any, userId : string) {
    try {
        const fullURL = `${BASE_URL}/newpackage?userid=${userId}`;  
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
      return res
    } catch (error) {
      console.error('Error creating data:', error);
      return error
    }
  }
  
export async function fetchOne(packageId : string) {
    try {
        const fullURL = `${BASE_URL}/fetchpackage?id=${packageId}`;  
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
      const res = await response.json();
      return res
    } catch (error) {
      console.error('Error creating data:', error);
      return error
    }
  }
  
  export async function editOne(packageId: string , updatedData : any) {
    try {
        const fullURL = `${BASE_URL}/editpackage?id=${packageId}`;  
        const response = await fetch(fullURL, {
            method: "PUT",
            body: JSON.stringify(updatedData),
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
      return res
    } catch (error) {
      console.error('Error creating data:', error);
      return error
    }
  }
  
  export async function deleteOne(packageId : string) {
    try {
        const fullURL = `${BASE_URL}/deletepackage?id=${packageId}`;  
        const response = await fetch(fullURL, {
            method: "DELETE",
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
      return res
    } catch (error) {
      console.error('Error creating data:', error);
      return error
    }
  }
  