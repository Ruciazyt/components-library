import { App } from "vue";
import MyButton from "./button/index";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";

export { MyButton, SFCButton, JSXButton };

export default {
    install(app: App): void {
        app.component(MyButton.name, MyButton);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
    }
}