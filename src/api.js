import axios from "axios";
export const rootURL = "http://ec2-13-233-132-28.ap-south-1.compute.amazonaws.com:8080";
const loginURL = `${rootURL}/api-token-auth/`;
const userDetailsURL = `${rootURL}/userauth/user/`;
const classroomURL = `${rootURL}/classroom/`;
const joinClassroomURL = `${rootURL}/classroom/joinclassroom/`;
const announcementURL = `${rootURL}/announcement/`;
const pollsURL = `${rootURL}/polls/`;
const allStudentsinClassURL = `${rootURL}/classroom/students/`;
const allModeratorsinClassURL = `${rootURL}/classroom/moderators/`;
const allCommentsinAnnouncementURL = `${rootURL}/announcement/comment/`;

export async function getApiToken(user, pass){
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

export async function getUserDetails(token){
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

export async function addClassroom(token, classroomName, description=''){
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

export async function joinClassroom(token, classroomCode){
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

export async function getUserClassroom(token){
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

export async function addAnnouncement(token, classroomID, content=''){
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

export async function getAnnouncements(token, classroom_id){
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

export async function getAllStudentsinClass(token, classroom_id){
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

export async function getAllModeratorsinClass(token, classroom_id){
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

export async function getAllCommentsInAnnouncement(token, announcement_id){
    // console.log(token, classroom);
    return axios.get(allCommentsinAnnouncementURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params:{
                id: announcement_id
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

export async function addCommentToAnnouncement(token, announcement_id, comment_text){
    // console.log(announcement_id, comment_text);
    return axios.post(allCommentsinAnnouncementURL, {
            "announcement_id": announcement_id,
            "content": comment_text,
            "comment_id": "",
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

export async function getPolls(token, classroom_id){
    // console.log(token, classroom);
    return axios.get(pollsURL,
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

export async function addPollOption(token, parentPollID, poll_option_text=''){
    // console.log(token, classroom);
    return axios.post(pollsURL, {
            "type": 2,
            "parent_poll_id": parentPollID,
            "poll_option_text": poll_option_text
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

export async function addPoll(token, classroomID, poll_text=''){
    // console.log(token, classroom);
    return axios.post(pollsURL, {
            "type": 1,
            "classroom_id": classroomID,
            "poll_text": poll_text
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

export async function addResource(token, classroomID, attachment="", description=''){
    // console.log(token, classroom);
    return axios.post(announcementURL, {
            "type": type,
            "classroom_id": classroomID,
            "poll_text": poll_text
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