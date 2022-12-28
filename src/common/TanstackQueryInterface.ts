import {useMutation, useQuery} from "@tanstack/react-query";
import {HttpRequest} from "./HttpRequest";
import {handleRequest} from "./RequestResolver";


export const executeRequest = (httpRequest: HttpRequest) => {
    const query = useQuery(httpRequest.key, handleRequest(httpRequest), {
        enabled: httpRequest.enabled
    });
    return new QueryInterface(query.data, query.isLoading, query.error, query.refetch, undefined);
}

export const prepareMutation = (httpRequest: HttpRequest) => {
    const mutation = useMutation(handleRequest(httpRequest));

    return new QueryInterface(mutation.data, mutation.error, mutation.isLoading, undefined, mutation.mutateAsync);
}

export class QueryInterface {
    data

    isLoading

    error

    reload

    #mutateCallback

    constructor(data, isLoading, error, reload, mutateCallback) {
        this.data = data;
        this.isLoading = isLoading;
        this.error = error;
        this.reload = reload;
        this.#mutateCallback = mutateCallback;
    }

    async mutate(payload = undefined, options = {}) {
        return this.#mutateCallback(payload, options);
    }

}