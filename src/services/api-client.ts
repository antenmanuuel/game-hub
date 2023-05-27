import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '9feea5f5599a44668bf6bb02ce84bdeb'
    }
})