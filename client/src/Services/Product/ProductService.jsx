const base_url = "http://localhost:8080/api/products"

const ProductService = {
    getAllProducts: async (token) => {
        try {
            const response = await fetch(`${base_url}/`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Products: ", data);
            return data;
        } catch (error) {
            console.error(`Error getting products: ${error}`);
            throw error;
        }
    },

    getAllByCat: async (token, category) => {

    },

    getOne: async (token, id) => {
        try {
            const response = await fetch(`${base_url}/${id}`, {
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
    },

    createProduct: async (token, product) => {
        try {
            const response = await fetch(`${base_url}/`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
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
    },

    deleteOne: async (token, id) => {
        try {
            const response = await fetch(`${base_url}/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });

            if (!response.ok) {
                {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }

            return true;
        } catch (error) {
            console.error(`Error getting user: ${error}`);
            throw error;
        }
    }
}

export default ProductService;