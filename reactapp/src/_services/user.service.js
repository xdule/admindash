

export const userService={
    login,
    logout

};


function login(Email,password)
{
    console.log("ses");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, password })
    };

    return fetch('/users/login/', requestOptions).then(handleResponse).then(user=>{
        localStorage.setItem('user',JSON.stringify(user));
        console.log(JSON.stringify(user));
        return user;}        
        );


}

function logout()
{
    localStorage.removeItem('user');
}



function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}