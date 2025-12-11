import { useState } from "react";
import {apiAxios} from "../api/apiAxios";
 const useApi = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const result = async function (method, url, data = null) {
        setLoading(true);
        try {
           const response = await apiAxios({
               method,
               url,
               data
           });

           return  response.data;
        } catch (error) {
            setError(error);
            return null;
        } finally {
            setLoading(false);
        }
    };
    return { 
        loading,
        error,
        get: (param="") => result("get", "/allUsers"+param),
        post: (data) => result("post", "/allUsers", data),
        patch: (param, data) => result("patch", "/allUsers/"+param, data),
        deleteUser: (id) => result("delete", "/allUsers/" + id)
    };
};
export default useApi