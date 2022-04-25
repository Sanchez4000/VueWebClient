import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    components: {
        AcceptButton: require('@/components/acceptButton/AcceptButton.vue').default,
    },
})
export default class TestView extends Vue {
    private userInput: string = '';
    private email: string = '';
    private password: string = '';

    private toLower(text: string): string {
        return text.toLowerCase();
    }

    private login(): void {
        alert('not implemented');
    }
}
