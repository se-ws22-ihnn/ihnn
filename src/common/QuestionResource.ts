import {HttpRequestBuilder} from "./HttpRequest";

export class QuestionResource {
    static BASE_URL = "https://api.ihnn.x5f.de/questions";
    static BASE_KEY = ["question"];

    static getQuestion(id: string) {
        return new HttpRequestBuilder()
            .url(QuestionResource.BASE_URL+`/${id}`)
            .get()
            .key(QuestionResource.BASE_KEY)
            .build();
    }

    allQuestions() {
        return new HttpRequestBuilder()
            .url(QuestionResource.BASE_URL)
            .get()
            .key(QuestionResource.BASE_KEY)
            .build();
    }

    deleteQuestion(id: string) {
        return new HttpRequestBuilder()
            .url(QuestionResource.BASE_URL + `/${id}`)
            .key(QuestionResource.BASE_KEY)
            .delete()
            .mutable()
            .build();
    }

    createQuestion() {
        return new HttpRequestBuilder()
            .url(QuestionResource.BASE_URL)
            .post()
            .key(QuestionResource.BASE_KEY)
            .mutable()
            .build();
    }
}