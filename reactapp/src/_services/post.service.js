

export const postService={
    getAll,
    getSingle,
    deleteSingle,
    getSize,
    UpdatePost,
    CreatePost

};


function getAll(page=1,size=10)
{
    var bearer= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE1NTkxNzkwOTV9.ClQCtCCpf4jWCR21rtXTjqssv4SYM52pebjclvzqQUM';
    console.log("ses");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'Authorization': bearer},
        body: JSON.stringify({ page, size })
    };

    return fetch('/post/allpost', requestOptions).then(handleResponse).then(post=>{ return post;}        
        );


}

function getSingle(id)
{
    var bearer= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE1NTkxNzkwOTV9.ClQCtCCpf4jWCR21rtXTjqssv4SYM52pebjclvzqQUM';
    console.log("ses");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'Authorization': bearer},
        body: JSON.stringify({ id })
    };

    return fetch('/post/singlepost', requestOptions).then(handleResponse).then(post=>{ return post;}  
        );

}

function deleteSingle(id)
{
    var bearer= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE1NTkxNzkwOTV9.ClQCtCCpf4jWCR21rtXTjqssv4SYM52pebjclvzqQUM';
    console.log("ses");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'Authorization': bearer},
        body: JSON.stringify({ id })
    };

    return fetch('/post/delete', requestOptions).then(handleResponse).then(response=>{ return response;}        
        );


}

function UpdatePost(id,title,content)
{
    var bearer= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE1NTkxNzkwOTV9.ClQCtCCpf4jWCR21rtXTjqssv4SYM52pebjclvzqQUM';
    console.log(content);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'Authorization': bearer},
        body: JSON.stringify({'idpost': id ,title, content})
    };
    console.log(requestOptions.body);

    return fetch('/post/updatePost', requestOptions).then(handleResponse).then(response=>{ return response;}        
        );


}


function CreatePost(title,content)
{
    var bearer= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE1NTkxNzkwOTV9.ClQCtCCpf4jWCR21rtXTjqssv4SYM52pebjclvzqQUM';
    console.log(content);
    const Post=JSON.stringify({title,content});

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'Authorization': bearer},
        body: JSON.stringify({Post, status:"OK"})
    };
    console.log(requestOptions.body);

    return fetch('/post/createPost', requestOptions).then(handleResponse).then(response=>{ return response;}        
        );


}




function getSize()
{
    var bearer= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE1NTkxNzkwOTV9.ClQCtCCpf4jWCR21rtXTjqssv4SYM52pebjclvzqQUM';
    console.log("ses");
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , 'Authorization': bearer}
       // body: JSON.stringify({ page, size })
    };

    return fetch('/post/getSize', requestOptions).then(handleResponse).then(post=>{ return post;}        
        );


}



function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
             //   logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}