import BaseComponent from '@/components/BaseComponent';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class MenuItemWithImage extends BaseComponent {
    @Prop({
        type: String,
        default: 'left',
    }) private imageDirection!: string;
    @Prop({
        type: String,
        default: '',
        required: true,
    }) private imagePath!: string;
}
