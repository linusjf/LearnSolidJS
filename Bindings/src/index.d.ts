declare module "solid-js" {
  namespace JSX {
  interface Directives {
    ClickOutside: [ () => any, (v: any) => any ];
  }
  }
}
