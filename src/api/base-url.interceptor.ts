import {apiBaseUrl} from "./base-url";

export const baseUrlInterceptor = async(url: string) => {
    const targetUrl = apiBaseUrl.defaults.baseURL + url;
    console.log(targetUrl)
    try {
        const response = await fetch(targetUrl);

        if (!response.ok) {
            throw Error(`error, status:${response.status}`);
        }

        return response.json()
    } catch (e) {
        throw Error(`error, error:${e}`);
    }
}