import axios from 'axios';

const Admin_API_BASE_URL = "http://localhost:8080/adm/admins";

class Admin {

    getEmployees(){
        return axios.get(Admin_API_BASE_URL);
    }

    createEmployee(admins){
        return axios.post(Admin_API_BASE_URL, admins);
    }

    getEmployeeById(admins){
        return axios.get(Admin_API_BASE_URL + '/' + admins);
    }

    updateEmployee(adminsId,admins){
        return axios.put(Admin_API_BASE_URL + '/' + adminsId,admins);
    }

    deleteEmployee(adminsId,admins){
        return axios.delete(Admin_API_BASE_URL + '/' + adminsId,admins);
    }
}

export default new Admin();