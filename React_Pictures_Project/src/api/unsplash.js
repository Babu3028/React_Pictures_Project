import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers :{
        Authorization : 'Client-ID MCN7DjWGT4A3ihtxjyCV-CKvbPrqVQAJss_4djvBWLo'
    }
})
