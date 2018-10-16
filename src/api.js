import axios from "axios";
export const rootURL = "https://jeet007.pythonanywhere.com";
const loginURL = `${rootURL}/api-token-auth/`;
const userDetailsURL = `${rootURL}/userauth/user/`;
const classroomURL = `${rootURL}/classroom/`;

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

export function addClassroom(token, classroom){
    // console.log(token, classroom);
    return axios.post(classroomURL, {
            "name": classroom
        },
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
        }
    )
    .then((res)=>{
        // console.log(res);
        return res;
    })
    .catch((err)=>{
        // console.log(err);
        return err.response.data;
    });
}

export function getUserClassroom(token){
    // console.log(token, classroom);
    return axios.get(classroomURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
        }
    )
    .then((res)=>{
        // console.log(res);
        return res;
    })
    .catch((err)=>{
        // console.log(err);
        return err.response.data;
    });
}
