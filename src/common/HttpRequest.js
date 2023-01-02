import {useExecuteRequest, usePrepareMutation} from "./TanstackQueryInterface";

export class HttpRequestBuilder {
    #method; //TODO enum
    #url;
    #headers;
    #key = [];
    #queryParams;
    #mutable = false;
    #enabled = true;

    get() {
        this.#method = "GET";
        return this;
    }

    post() {
        this.#method = "POST";
        return this;
    }

    put() {
        this.#method = "PUT";
        return this;
    }

    delete() {
        this.#method = "DELETE";
        return this;
    }

    url(url) {
        this.#url = url;
        return this;
    }

    headers(headers) {
        this.#headers = headers;
        return this;
    }

    enabled(enable) {
        this.#enabled = enable
        return this;
    }

    mutable() {
        this.#mutable = true;
        return this;
    }

    key(key) {
        this.#key = key;
        return this;
    }

    build() {
        return new HttpRequest(this.#method, this.#url, this.#headers, this.#key, this.#queryParams, this.#mutable, this.#enabled).get();
    }

}

export class HttpRequest {
    method;
    url;
    headers;
    key;
    queryParams;
    pathParams;
    enabled;

    constructor(method, url, headers, key, queryParams, pathParams, enabled) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.key = key.slice();
        this.queryParams = queryParams;
        this.pathParams = pathParams;
        this.enabled = enabled;
    }

    buildUrl() {
        Object.entries(this.pathParams).forEach(([key, value]) => {
            if (this.url.includes(`:${key}`)) {
                this.url = this.url.replace(`:${key}`, value);
            }
        });
    }

    get(mutable = false) {
        return (mutable) ? useExecuteRequest(this) : usePrepareMutation(this);
    }

}