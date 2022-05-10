import axios from 'axios';
import Vue from 'vue';
import Component from 'vue-class-component';
import BaseComponent from '../BaseComponent';

@Component
export default class TestRemoteRequest extends BaseComponent {
    private isRequestSuccess: boolean = false;
    private isButtonClicked: boolean = false;

    private cookieName: string = '';
    private cookieValue: string = '';

    private sendTestRequest(): void {
        this.isButtonClicked = true;

        this.sendPost('https://localhost:7193/api/AnyTest/RemoteResponseTest', 'test').then((response) => {
            this.isRequestSuccess = response.status === 200;
        })
            .catch((exception) => {
                this.isRequestSuccess = false;
            });

        /* axios.post('https://localhost:7193/api/AnyTest/RemoteResponseTest').then((response) => {
            this.isRequestSuccess = response.status === 200;
        })
        .catch((exception) => {
            this.isRequestSuccess = false;
        }); */
    }

    private setCookie(): void {
        if (this.cookieName.length === 0) return;
        if (this.cookieValue.length === 0) return;

        const curCookie = this.cookieName + '=' + escape(this.cookieValue);
        if ((this.cookieName + '=' + escape(this.cookieValue)).length <= 4000) {
            document.cookie = curCookie;
        } else if (confirm('Cookie превышает 4KB и будет вырезан !')) {
            document.cookie = curCookie;
        }
    }

    private showCookies(): void {
        alert(document.cookie);
    }
}
