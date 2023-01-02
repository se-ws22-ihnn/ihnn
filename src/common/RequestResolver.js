import {HttpRequest} from "./HttpRequest";
import axios from "axios";


export class PostPayload {

    payload;
    queryParams;
    pathParams;

    constructor(payload, queryParams, pathParams) {
        this.payload = payload;
        this.queryParams = queryParams;
        this.pathParams = pathParams;
    }
}

const handleGet = (request) => {
    return async () => {
        const response = await axios({
            method: request.method,
            url: request.url,
            headers: request.headers,
            params: request.queryParams,
            paramsSerializer: (params) => {
                return new URLSearchParams(params).toString();
            }
        })
        return response.data;
    }
}

const handleAll = (request) => {
    return async (postPayload) => {
        let {payload, queryParams, pathParams} = postPayload ?? {};

        if (pathParams) {
            request.buildUrl();
        }

        const response = await axios({
            method: request.method,
            url: request.url,
            data: payload,
            headers: request.headers,
            params: {...request.queryParams, ...queryParams},
            paramsSerializer: (params) => {
                return new URLSearchParams(params).toString();
            }
        })
        return response.data;
    }
}

export const handleRequest = (request) => {
    switch (request.method) {
        case "GET":
            return handleGet(request);
        case "POST":
        case "DELETE":
        case "PUT":
        case "PATCH":
            return handleAll(request);
        default:
            throw new Error("Unsupported method");
    }
}