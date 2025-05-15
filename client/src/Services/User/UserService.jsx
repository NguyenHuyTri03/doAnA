const base_url = "http://localhost:8080/api/user"

const UserService = {
    getCurrentUser: async (token, email) => {
        try {
            const response = await fetch(`${base_url}/me/${email}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error getting user: ${error}`);
            throw error;
        }
    }
}

export default UserService;