import axios from "axios";
export const rootURL = "https://garvitkataria10.pythonanywhere.com";
const loginURL = `${rootURL}/api-token-auth/`;
const userDetailsURL = `${rootURL}/userauth/user/`;
const classroomURL = `${rootURL}/classroom/`;
const joinClassroomURL = `${rootURL}/classroom/joinclassroom/`;
const announcementURL = `${rootURL}/announcement/`;
const allStudentsinClassURL = `${rootURL}/classroom/students/`;
const allModeratorsinClassURL = `${rootURL}/classroom/moderators/`;

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

export function addClassroom(token, classroomName, description=''){
    // console.log(token, classroom);
    return axios.post(classroomURL, {
            "name": classroomName,
            "description": description
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

export function joinClassroom(token, classroomCode){
    // console.log(token, classroom);
    return axios.post(joinClassroomURL, {
            "joinCode": classroomCode,
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
        return err;
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

export function addAnnouncement(token, classroomID, content=''){
    // console.log(token, classroom);
    return axios.post(announcementURL, {
            "content": content,
            "classroom_id": classroomID
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
        return err;
    });
}

export function getAnnouncements(token, classroom_id){
    // console.log(token, classroom);
    return axios.get(announcementURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params:{
                classroom_id: classroom_id
            }
        }
    )
    .then((res)=>{
        // console.log(res);
        return res;
    })
    .catch((err)=>{
        // console.log(err);
        return err;
    });
}

export function getAllStudentsinClass(token, classroom_id){
    // console.log(token, classroom);
    return axios.get(allStudentsinClassURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params:{
                id: classroom_id
            }
        }
    )
    .then((res)=>{
        // console.log(res);
        return res;
    })
    .catch((err)=>{
        // console.log(err);
        return err;
    });
}

export function getAllModeratorsinClass(token, classroom_id){
    // console.log(token, classroom);
    return axios.get(allModeratorsinClassURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params:{
                id: classroom_id
            }
        }
    )
    .then((res)=>{
        // console.log(res);
        return res;
    })
    .catch((err)=>{
        // console.log(err);
        return err;
    });
}

