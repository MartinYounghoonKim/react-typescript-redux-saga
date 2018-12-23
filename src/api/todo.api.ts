import axios from 'axios';

export function ajaxGet () {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:2403/todos/')
            .then(res => {
                if (res.status === 200) {
                    resolve({
                        data: res.data,
                        status: res.status,
                        isSuccess: res.status === 200,
                    });
                } else {
                    reject({
                        status: res.status,
                    })
                }
            });
    })
}

export function ajaxPost (payload: any) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:2403/todos/', payload)
            .then(res => {
                if (res.status === 200) {
                    resolve({
                        data: res.data,
                        status: res.status,
                        isSuccess: res.status === 200,
                    });
                } else {
                    reject({
                        status: res.status,
                    })
                }
            });
    })
}

export function ajaxPut (payload: any) {
    return new Promise((resolve, reject) => {
        const { id, text } = payload
        axios.put(`http://localhost:2403/todos/${id}`, { text })
            .then(res => {
                if (res.status === 200) {
                    resolve({
                        data: res.data,
                        status: res.status,
                        isSuccess: res.status === 200,
                    });
                } else {
                    reject({
                        status: res.status,
                    })
                }
            });
    })
}

export function ajaxDelete (id: any) {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:2403/todos/${id}`)
            .then(res => {
                if (res.status === 200) {
                    resolve({
                        data: res.data,
                        status: res.status,
                        isSuccess: res.status === 200,
                    });
                } else {
                    reject({
                        status: res.status,
                    })
                }
            });
    })
}

export default {
    ajaxGet,
    ajaxPost,
    ajaxPut,
    ajaxDelete
}
