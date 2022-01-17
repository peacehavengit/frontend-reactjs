import axios from "axios";

let auth = {};

// Check Jwt-token here
auth.isLoggedIn = () => {
    let token = localStorage.getItem('token');
    console.log('token is avail',token);
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
        return token;
    }
}
// Logout 
auth.logout = () => {
    let token = localStorage.getItem('token');
    if (token) {
        localStorage.removeItem('token');
        this.props.history.push('/');
    }
}

export default auth;