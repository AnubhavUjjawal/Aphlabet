import axios from "axios";
const rootURL = "https://jeet007.pythonanywhere.com";
const loginURL = `${rootURL}/api-token-auth/`;
const userDetailsURL = `${rootURL}/userauth/user/`;

export function getApiToken(user, pass){
    let data = {
        "username": user,
        "password": pass
    };
    return axios.post(loginURL, data)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                return err;
            });
}

export function getUserDetails(token){
    return axios.get(userDetailsURL, { headers: {
        "Authorization": `JWT ${token}`
        }})
        .then((res)=>{
            // console.log(res);
            return res;
        })
        .catch((err)=>{
            // console.log(err);
            return err;
        });
}