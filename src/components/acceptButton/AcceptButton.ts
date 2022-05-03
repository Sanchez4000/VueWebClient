import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class AcceptButton extends Vue {
    private onClick() {
        this.$emit('on-click');
    }
}
