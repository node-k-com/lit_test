import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("tailwind-test")
export class TailwindTest extends LitElement {
  protected render() {
    return html`
      <div>
        <div>
          <p class="text-cyan-500">Shadow DOMを使っていないpタグ</p>
        </div>
      </div>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tailwind-test": TailwindTest;
  }
}
