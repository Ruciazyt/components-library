declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }

  // 这个文件存在的原因是TS默认不支持.vue类型的模块。