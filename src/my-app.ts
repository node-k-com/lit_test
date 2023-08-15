import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-app")
export class MyApp extends LitElement {
  @property({ type: String })
  test = "";

  render() {
    return html`
      <div>
        <div>
          <p>----------------slot----------------</p>
        </div>
        <div>
          <p>外部CSSの影響を受けないmy-appのpタグ</p>
        </div>
        ${this.test === "" ? "" : html`<p>${this.test}</p>`}
        <div>
          <slot></slot>
        </div>
        <div>
          <p>----------------slot----------------</p>
        </div>
      </div>
    `;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
    }

    p {
      color: red;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app": MyApp;
  }
}
