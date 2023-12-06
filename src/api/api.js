import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: `http://localhost:8080`
})

export const authApi = {
    login(username, password) {
        return instance.post('/auth/login', {username, password})
            .then(response => response.data);
    },
}

export const materialApi = {
    getAllMaterials() {
        return instance.get('/material', {headers: {"Authorization": `Bearer ${Cookies.get('jwt')}`}})
            .then(response => response.data)
    },
    addMaterial(name, weight, purchaseCost) {
        return instance.post('/material', {name, weight, purchaseCost})
            .then(response => response.data)
    }
}