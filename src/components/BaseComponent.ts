import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Vue from 'vue';

export default class BaseComponent extends Vue {
    protected sendPost(url: string, data?: any): Promise<AxiosResponse<any, any>> {

        const requestData = JSON.stringify({
            SessionId: '12345',
            Content: data,
        });

        const config: AxiosRequestConfig<string> = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        return axios.post(url, JSON.stringify(requestData), config);
    }

    protected getPlatform(): string {
        if (window.innerWidth > window.innerHeight) {
            return 'PC';
        } else {
            return 'Mobile';
        }
    }
}
