import { Axios } from "axios";


const api = Axios.create({
    baseURL: "http://localhost:500",
    headers: {
        "content-type": "application/json"
    }
});


async function MakeRequestToApi({method='get', payload={}, url='/', headers={}}) {
    const {data} = await api.request({
        method: method,
        data: payload,
        url: url || '/',
        headers: headers,
    })
    return data
}



export {MakeRequestToApi,api}