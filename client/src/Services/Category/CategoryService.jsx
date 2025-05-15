const base_url = "http://localhost:8080/api/categories"

const UserService = {
    getAllCategories: async (token) => {
        try {
            const response = await fetch(`${base_url}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error getting user: ${error}`);
            throw error;
        }
    }


};