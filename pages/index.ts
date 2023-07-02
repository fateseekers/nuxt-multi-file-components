import {Component, Vue} from "vue-facing-decorator";
import Button from "~/components/button/Button";

@Component({
    name: 'index',
    components: {
        Button
    }
})
export default class IndexPage extends Vue {}
