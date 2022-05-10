import Component from 'vue-class-component';
import BaseComponent from '../BaseComponent';

@Component({
    components: {
        'main-menu': require('@/components/UI/mainMenu/MainMenu.vue').default,
    },
})
export default class Root extends BaseComponent {

}
