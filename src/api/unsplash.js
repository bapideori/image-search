import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID drLNyM4dJylWJi7_GN-QsfWepQ26-ABfoPDiSApHRf0'
     }

});
