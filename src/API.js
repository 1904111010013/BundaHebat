import axios from "axios";

const token = localStorage.getItem('token');
axios.defaults.baseURL = 'https://bundahebat.herokuapp.com/api/';
axios.defaults.headers.common = {'auth-token': token, 'Accept': 'application/json'}

export default axios;