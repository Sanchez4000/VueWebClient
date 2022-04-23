import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TestView extends Vue {
    private userInput: string = '';

    private toLower(text: string): string {
        return text.toLowerCase();
    }
}
