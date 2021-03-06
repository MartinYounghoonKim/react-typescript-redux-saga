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

export function ajaxPost (text: string) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:2403/todos/', { text })
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

export function ajaxPut (payload: { id: string; text?: string; isDone?: boolean; }) {
    return new Promise((resolve, reject) => {
        const { id, text, isDone } = payload
        axios.put(`http://localhost:2403/todos/${id}`, { text, isDone })
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

export function ajaxDelete (id: string) {
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
