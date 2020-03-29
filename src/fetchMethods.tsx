export function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export function getData(url = '') {
    return fetch(url).then(response=>response.json());
}

export function postDataToken(url = '', token = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer' + token,
        },
        body: JSON.stringify(data),
    })
}

export function getDataToken(url = '', token = '') {
    return fetch(url, {
        headers: {
            'Authorization': 'Bearer' + token,
        },
    });
}