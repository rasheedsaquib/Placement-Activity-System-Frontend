import axios from 'axios';

const Client_API_BASE_URL = "http://localhost:8080/clt/clients";

class Client {

    getEmployees(){
        return axios.get(Client_API_BASE_URL);
    }

    createEmployee(clients){
        return axios.post(Client_API_BASE_URL, clients);
    }

    getEmployeeById(clients){
        return axios.get(Client_API_BASE_URL + '/' + clients);
    }

    updateEmployee(clientsId,clients){
        return axios.put(Client_API_BASE_URL + '/' + clientsId,clients);
    }

    deleteEmployee(clientsId,clients){
        return axios.delete(Client_API_BASE_URL + '/' + clientsId,clients);
    }
}

export default new Client();