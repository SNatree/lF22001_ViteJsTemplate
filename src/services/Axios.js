import axios from 'axios'
import { stringify } from 'querystring'
import routes from '../routes'
import LocalStorageService from './LocalStorageService'
const localStorageService = LocalStorageService.getService()

const baseURL = `http://${import.meta.env.VITE_ACC_API_HOST}:${import.meta.env.VITE_ACC_API_PORT}`
const defaultHeaders = { 'content-type': 'application/x-www-form-urlencoded', token: localStorageService.getItem('mfc_access_token') }
// axios.defaults.headers.common = { ...axios.defaults.headers.common, ...defaultHeaders }
// LocalstorageService
// Request interceptor for API calls
// axiosApiInstance.interceptors.request.use(
//     async config => {
//       const value = await redisClient.get(rediskey)
//       const keys = JSON.parse(value)
//       config.headers = {
//         'Authorization': `Bearer ${keys.access_token}`,
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//       return config;
//     },
//     error => {
//       Promise.reject(error)
//   });

// Response interceptor for API calls
axios.interceptors.response.use(
    (response) => {
        return response
    },
    function (error) {
        const originalRequest = error.config
        // console.log(error.response)
        // console.log(originalRequest.url)
        if (error.response.status === 401 && originalRequest.url !== `${baseURL}/api/v1/auth/login`) {
            LocalStorage.clearToken()
            routes.push('/login')
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)
// const defaultParms = { query: {}, params: {}, headers: {}, fullURL: false }

export default function useAxios() {
    const GET = async (url, { query = {}, params = {}, headers = {}, fullURL = false } = {}) => {
        let resp = null
        try {
            headers = { ...defaultHeaders, ...headers } /**spread operator [ES6]*/
            if (Object.keys(query).length > 0) {
                url = `${url}?${stringify(query)}` /**Template literals or Template String */
            }

            const options = {
                method: 'GET',
                headers: headers,
                url: !fullURL ? `${baseURL}${url}` : `${url}`,
                params,
            }
            resp = await axios(options)
        } catch (error) {
            // console.error(error)
            resp = error['response']
            // console.log("error", error["response"]["status"]);
            // console.log("error", error["response"]["statusText"]);
            // console.log("error", error["response"]["data"]);
        }
        return resp
    }

    const POST = async (url, { query = {}, params = {}, data = {}, headers = {}, fullURL = false } = {}) => {
        let resp = null
        try {
            headers = {
                ...defaultHeaders,
                'content-type': 'application/json; charset=utf-8;',
                ...headers,
            }
            if (Object.keys(query).length > 0) {
                url = `${url}?${stringify(query)}`
            }
            const options = {
                method: 'POST',
                headers: headers,
                url: !fullURL ? `${baseURL}${url}` : `${url}`,
                params,
                data,
            }
            resp = await axios(options)
        } catch (error) {
            // console.error(error)
            resp = error['response']
        }
        return resp
    }

    const PUT = async (url, { query = {}, params = {}, data = {}, headers = {}, fullURL = false } = {}) => {
        let resp = null
        try {
            headers = { ...defaultHeaders, ...headers }
            if (Object.keys(query).length > 0) {
                url = `${url}?${stringify(query)}`
            }
            const options = {
                method: 'PUT',
                headers: headers,
                url: !fullURL ? `${baseURL}${url}` : `${url}`,
                params,
                data,
            }
            resp = await axios(options)
        } catch (error) {
            // console.error(error)
            resp = error['response']
        }
        return resp
    }

    const PATCH = async (url, { query = {}, params = {}, data = {}, headers = {}, fullURL = false } = {}) => {
        let resp = null
        try {
            headers = { ...defaultHeaders, ...headers }
            if (Object.keys(query).length > 0) {
                url = `${url}?${stringify(query)}`
            }
            const options = {
                method: 'PATCH',
                headers: headers,
                url: !fullURL ? `${baseURL}${url}` : `${url}`,
                params,
                data,
            }
            resp = await axios(options)
        } catch (error) {
            // console.error(error)
            resp = error['response']
        }
        return resp
    }

    const DELETE = async (url, { query = {}, params = {}, headers = {}, fullURL = false } = {}) => {
        let resp = null
        try {
            headers = { ...defaultHeaders, ...headers }
            if (Object.keys(query).length > 0) {
                url = `${url}?${stringify(query)}`
            }

            const options = {
                method: 'DELETE',
                headers: headers,
                url: !fullURL ? `${baseURL}${url}` : `${url}`,
                params,
            }
            resp = await axios(options)
        } catch (error) {
            // console.error(error)
            resp = error['response']
        }
        return resp
    }

    const DOWNLOAD = async (url, { query = {}, params = {}, headers = {}, responseType = 'blob', fullURL = false } = {}) => {
        let resp = null
        try {
            headers = { ...defaultHeaders, ...headers } /**spread operator [ES6]*/
            if (Object.keys(query).length > 0) {
                url = `${url}?${stringify(query)}` /**Template literals or Template String */
            }

            const options = {
                method: 'GET',
                headers: headers,
                url: !fullURL ? `${baseURL}${url}` : `${url}`,
                params,
                responseType: responseType,
            }
            resp = await axios(options)
        } catch (error) {
            resp = error['response']
        }
        return resp
    }
    return {
        GET,
        POST,
        PUT,
        PATCH,
        DELETE,
        DOWNLOAD,
    }
}
