import axios from 'axios';

const Seeker_API_BASE_URL = "http://localhost:8080/seek/seekers";

class Seeker {

    getEmployees(){
        return axios.get(Seeker_API_BASE_URL);
    }

    createEmployee(seekers){
        return axios.post(Seeker_API_BASE_URL, seekers);
    }

    getEmployeeById(seekers){
        return axios.get(Seeker_API_BASE_URL + '/' + seekers);
    }

    updateEmployee(seekersId,seekers){
        return axios.put(Seeker_API_BASE_URL + '/' + seekersId,seekers);
    }

    deleteEmployee(seekersId,seekers){
        return axios.delete(Seeker_API_BASE_URL + '/' + seekersId,seekers);
    }
}

export default new Seeker();