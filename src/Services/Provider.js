import axios from 'axios';

const Provider_API_BASE_URL = "http://localhost:8080/prov/providers";

class Provider {

    getEmployees(){
        return axios.get(Provider_API_BASE_URL);
    }

    createEmployee(providers){
        return axios.post(Provider_API_BASE_URL, providers);
    }

    getEmployeeById(providers){
        return axios.get(Provider_API_BASE_URL + '/' + providers);
    }

    updateEmployee(providersId,providers){
        return axios.put(Provider_API_BASE_URL + '/' + providersId,providers);
    }

    deleteEmployee(providersId,providers){
        return axios.delete(Provider_API_BASE_URL + '/' + providersId,providers);
    }
}

export default new Provider();