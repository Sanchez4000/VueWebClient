import BaseComponent from '@/components/BaseComponent';
import Component from 'vue-class-component';

@Component({
    components: {
        'menu-item-with-image': require('@/components/UI/menuItemWithImage/MenuItemWithImage.vue').default,
    },
})
export default class MainMenu extends BaseComponent {
    private readonly menuList = [
        {
            id: 0,
            label: 'Home',
            link: '/',
            imagePath: 'assets/mainMenu/test-image-2.png',
        },
        {
            id: 1,
            label: 'About',
            link: '/about',
            imagePath: 'assets/mainMenu/test-image-2.png',
        },
        {
            id: 2,
            label: 'Test',
            link: '/test',
            imagePath: 'assets/mainMenu/test-image-2.png',
        },
    ];
}
