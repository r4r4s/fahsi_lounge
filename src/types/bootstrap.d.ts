declare module 'bootstrap' {
  interface CollapseOptions {
    toggle?: boolean;
  }

  export class Collapse {
    constructor(element: Element, options?: CollapseOptions);
    static getInstance(element: Element): Collapse | null;
    hide(): void;
  }
}
