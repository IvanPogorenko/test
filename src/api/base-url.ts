import axios from "axios";

export const apiBaseUrl = axios.create({
    baseURL: "https://ofc-test-01.tspb.su/test-task"
});