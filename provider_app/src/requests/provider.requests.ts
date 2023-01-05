export const Server = "http://192.168.0.14:3000";

const linkCreateProvider = "providers/create";
const urlCreateProvider = `${Server}/${linkCreateProvider}`;

type CreateProvider = {
    name: string;
    email: string;
    password: string;
}

const CreateRequest = (data: CreateProvider) => {
    const requestOptions: RequestInit = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            //'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
    }; // parses JSON response into native JavaScript objects
    return requestOptions;
}

export const Create = async (data:CreateProvider) => {
    try {
        console.log("FETCH TO:", urlCreateProvider, "WITH", data);
        const res = await fetch(urlCreateProvider, CreateRequest(data));
        return await res.json();
    } catch (error) {
        return console.log(error);
    }
}

const linkAuthenticateProvider = "providers/authenticate";
const urlAuthenticateProvider = `${Server}/${linkAuthenticateProvider}`;

type AuthenticateProvider = {
    email: string;
    password: string;
}

const AuthenticateRequest = (data:AuthenticateProvider) => {
    const requestOptions: RequestInit = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }; // parses JSON response into native JavaScript objects

    return requestOptions;
}

export const Authenticate = async (data:AuthenticateProvider) => {
    try {
        console.log("FETCH TO:", urlAuthenticateProvider, "WITH", data);
        const res = await fetch(urlAuthenticateProvider, AuthenticateRequest(data));
        return await res.json();
    } catch (error) {
        return console.log(error);
    }
}