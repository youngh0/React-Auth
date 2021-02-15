const uri = 'https://react-js-sample-api.kmuwink.net';

export async function signUp(username, email, password,lastName, firstName){
    const response = await fetch(uri + '/user/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            last_name: lastName,
            first_name: firstName
        }),
    });
    return await response.json();
}

export async function signIn(username, password){
    const response = await fetch(uri + '/api-token-auth/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    });
    const res = await response.json()


    return res
}
export async function readInfo(){
    const response = await fetch(uri + '/user/', {
        method: 'get',
        headers: {
            Authorization : `Token ${localStorage.getItem('token')}`,
        },
    });
    console.log(await response.json())
}

export async function postFeed(content){
    const response = await fetch(uri + '/feed/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Token ${localStorage.getItem('token')}`,
        },
        body:JSON.stringify({
            content : content
        })
    });
    // console.log(response)
    return await response.json()

}

export async function getDetailFeed(id){
    const response = await fetch(uri + '/feed/'+id+'/', {
        method: 'get',
        headers: {
            Authorization : `Token ${localStorage.getItem('token')}`,
        }
    });
    return await response.json()
    // return await response.json();
}
export async function getFeedComment(id){
    const response = await fetch(uri + '/feed/'+id+'/comment', {
        method: 'get',
        headers: {
            Authorization : `Token ${localStorage.getItem('token')}`,
        }
    });

    return await response.json()
}

export async function postComment(id, content){
    const response = await fetch(uri + '/feed/'+id+'/comment/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            content : content
        }),
    });

}

export async function deleteComment(commnetID, routeID){
    const response = await fetch(uri + '/feed/'+routeID+'/comment/'+commnetID+'/', {
        method: 'Delete',
        headers: {

            Authorization : `Token ${localStorage.getItem('token')}`,
        },

    });

    console.log(response)
    // return comment
}

