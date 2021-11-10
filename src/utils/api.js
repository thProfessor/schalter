import axios from 'axios';

export default axios.create({
    baseURL:"https://interview-8e4c5-default-rtdb.firebaseio.com/",
});

// API Details -

// PUT  :(https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json)
// Body : 
// {
// UtkarshShukla : 10 
// }
// GET:(https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/UtkarshShukla.json)
// Response : 10