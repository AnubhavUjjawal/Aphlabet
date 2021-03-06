import axios from "axios";
// export const rootURL = "http://10.0.34.255:8888";
// export const rootURL = "https://garvitkataria10.pythonanywhere.com"
// export const rootURL = "http://localhost:8000";
// export const rootURL = "http://35.200.250.64:8888";
export const rootURL = "http://localhost:8888";
const loginURL = `${rootURL}/api-token-auth/`;
const userDetailsURL = `${rootURL}/userauth/user/`;
const classroomURL = `${rootURL}/classroom/`;
const commentURL = `${rootURL}/comment/`;
const joinClassroomURL = `${rootURL}/classroom/joinclassroom/`;
const announcementURL = `${rootURL}/announcement/`;
const pollsURL = `${rootURL}/polls/`;
const pollsOptionsURL = `${rootURL}/poll_response/`;
const allStudentsinClassURL = `${rootURL}/classroom/students/`;
const allModeratorsinClassURL = `${rootURL}/classroom/moderators/`;
const allCommentsinAnnouncementURL = `${rootURL}/announcement/comment/`;
const resourcesURL = `${rootURL}/resources/`;
const assignmentURL = `${rootURL}/assignment/`;
const assignmentSubmissionURL = `${rootURL}/assignment/submission/`;
const storageURL = `${rootURL}/storage/`;
const notificationsURL = `${rootURL}/notification/`;
const storageAddDocument = `${rootURL}/storage/uploaddocument/`;

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

export async function upvoteDownvoteComment(token, type, comment_id, username){
    // type=2 for upvote, type=3 for downvote
    let data = {
        "type": type,
        "comment_id": comment_id,
    };
    if(type==2)
        data["upvote"] = username;
    else data["downvote"] = username;
    return axios.put(commentURL, 
        data,
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

export async function removeUpvoteDownvoteComment(token, type, comment_id, username){
    // type=1 for upvote, type=2 for downvote
    let data = {
        "type": type,
        "comment_id": comment_id,
    };
    if(type==1)
        data["remove_upvote"] = username;
    else data["remove_downvote"] = username;
    return axios.delete(`${commentURL}?type=${type}&comment_id=${comment_id}`,
        { 
            data,
            headers:{
                "Authorization": `JWT ${token}`
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

export async function deletePoll(token, poll_id){
    // console.log(token, classroom);
    return axios.delete(pollsURL,
        { 
            data:{
                poll_id: poll_id
            },
            headers:{
                "Authorization": `JWT ${token}`
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

export async function deleteAnnouncement(token, ann_id){
    // console.log(token, classroom);
    return axios.delete(pollsURL,
        { 
            data:{
                poll_id: poll_id
            },
            headers:{
                "Authorization": `JWT ${token}`
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

export async function submitPollResponse(token, pollID, pollOptionID){
    // console.log(token, classroom);
    return axios.post(pollsOptionsURL, {
            "poll_id": pollID,
            "poll_option_id": pollOptionID
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

export async function getPollResponse(token, pollID){
    // console.log(token, classroom);
    return axios.get(pollsOptionsURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params: {
                poll_id: pollID
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

export async function getLectures(token, classroom_id){
    // console.log(token, classroom);
    return axios.get(resourcesURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params:{
                classroom_id: classroom_id,
                type: "lecture"
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

export async function getResources(token, classroom_id){
    // console.log(token, classroom);
    return axios.get(resourcesURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params:{
                classroom_id: classroom_id,
                type: "resource"
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

export async function addLecture(token, classroomID, description, file){
    let form_data = new FormData();
    form_data.append("classroom_id", classroomID);
    form_data.append("description", description);
    form_data.append("is_lecture", "True");
    form_data.append("attachment", file);
    return axios.post(resourcesURL, 
        form_data,
        {
            headers:{
                "Authorization": `JWT ${token}`,
                'Content-Type': 'multipart/form-data'
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

export async function addResource(token, classroomID, description, file){
    let form_data = new FormData();
    form_data.append("classroom_id", classroomID);
    form_data.append("description", description);
    form_data.append("is_lecture", "False");
    form_data.append("attachment", file);
    return axios.post(resourcesURL, 
        form_data,
        {
            headers:{
                "Authorization": `JWT ${token}`,
                'Content-Type': 'multipart/form-data'
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

export async function addModerator(token, classroomID, moderators){
    // moderators is a []
    return axios.post(allModeratorsinClassURL, {
            "classroom_id": classroomID,
            "moderators": moderators
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

export async function deleteModerator(token, classroom_id, moderators){
    // moderators is an Array.
    return axios.put(allModeratorsinClassURL,
        {
            "classroom_id": classroom_id,
            "moderators_to_remove": moderators
        },
        { 
            headers:{
                "Authorization": `JWT ${token}`
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

export async function getAssignments(token, classroom_id){
    // console.log(token, classroom);
    return axios.get(assignmentURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params:{
                classroom_id: classroom_id,
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

export async function getAssignmentSubmissions(token, assignment_id){
    // console.log(token, classroom);
    return axios.get(assignmentSubmissionURL,
        {
            headers:{
                "Authorization": `JWT ${token}`
            },
            params:{
                assignment_id: assignment_id,
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

export async function addAssignment(token, classroomID, title, file, deadline, max_score){
    let form_data = new FormData();
    form_data.append("classroom_id", classroomID);
    form_data.append("title", title);
    form_data.append("deadline", deadline);
    form_data.append("attachment", file);
    form_data.append("max_score", max_score);
    return axios.post(assignmentURL, 
        form_data,
        {
            headers:{
                "Authorization": `JWT ${token}`,
                'Content-Type': 'multipart/form-data'
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

export async function submitAssignment(token, assignment_id, file){
    let form_data = new FormData();
    form_data.append("assignment_id", assignment_id);
    form_data.append("attachment", file);
    return axios.post(assignmentSubmissionURL, 
        form_data,
        {
            headers:{
                "Authorization": `JWT ${token}`,
                'Content-Type': 'multipart/form-data'
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

export async function submitAssignmentGrade(token, assignment_id, marks){
    /// marks is an Array() of {'username': 'xyz', 'score':88} Objects
    let data = {
        assignment_id: assignment_id,
        scores: marks
    }
    // console.log(data);
    return axios.put(assignmentSubmissionURL, 
        data,
        {
            headers:{
                "Authorization": `JWT ${token}`,
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

export async function getStorageDocs(token){
    // console.log(token, classroom);
    return axios.get(storageURL,
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

export async function addStorageDoc(token, file){
    let form_data = new FormData();
    form_data.append("document", file);
    return axios.post(storageAddDocument, 
        form_data,
        {
            headers:{
                "Authorization": `JWT ${token}`,
                'Content-Type': 'multipart/form-data'
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

export async function deleteStorageDocument(token, doc_id){
    // console.log(token, classroom);
    return axios.delete(`${storageAddDocument}?id=${doc_id}`,
        { 
            data:{
                id: doc_id
            },
            headers:{
                "Authorization": `JWT ${token}`
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

export async function softDeleteClassroom(token, classroom_id){
    // console.log(token, classroom);
    return axios.delete(`${classroomURL}?classroom_id=${classroom_id}`,
        { 
            data:{
                classroom_id: classroom_id
            },
            headers:{
                "Authorization": `JWT ${token}`
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

export async function getNotifications(token){
    // console.log(token, classroom);
    return axios.get(notificationsURL,
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

export async function readNotification(token, notification_id){
    // console.log(data);
    return axios.get(`${notificationsURL}?notification_id=${notification_id}`, 
        {
            
            headers:{
                "Authorization": `JWT ${token}`,
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