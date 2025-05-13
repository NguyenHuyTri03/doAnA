import { useAuth } from "../Auth/AuthContext"

const getUser = () => {
    const { authTokens } = useAuth();

    if (authTokens) {

    }
}