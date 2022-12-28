import {executeRequest, prepareMutation} from "./TanstackQueryInterface";

export class HttpRequestBuilder {
    #method: string; //TODO enum
    #url: string;
    #headers: Object;

    #key: Array<string> = [];

    #queryParams: Object;
    #mutable: boolean = false;

    #enabled: boolean = true;

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

    url(url: string) {
        this.#url = url;
        return this;
    }

    headers(headers: Object) {
        this.#headers = headers;
        return this;
    }

    enabled(enable: boolean) {
        this.#enabled = enable
        return this;
    }

    mutable() {
        this.#mutable = true;
        return this;
    }

    key(key: Array<string>) {
        this.#key = key;
        return this;
    }

    build() {
        return new HttpRequest(this.#method, this.#url, this.#headers, this.#key, this.#queryParams, this.#mutable, this.#enabled).get();
    }

}

export class HttpRequest {
    method: string;
    url: string;
    headers: Object;

    key: Array<String>;

    queryParams: Object;

    pathParams: Object;

    enabled: boolean;

    constructor(method: string, url: string, headers: Object, key: Array<string>, queryParams: Object, pathParams: Object, enabled: boolean) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.key = key.slice();
        this.queryParams = queryParams;
        this.pathParams = pathParams;
        this.enabled = enabled;
    }

    buildUrl() {
        Object.entries(this.pathParams).forEach(([key, value]:Array<String>) => {
            if (this.url.includes(`:${key}`)) {
                this.url = this.url.replace(`:${key}`, value);
            }
        });
    }

    get(mutable: boolean = false) {
        return (mutable) ? executeRequest(this) : prepareMutation(this);
    }

}