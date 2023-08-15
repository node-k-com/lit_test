import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-app-child")
export class MyAppChild extends LitElement {
  @property({ type: String })
  title = "";

  count = 1;
  customClass = "custom";

  render() {
    return html`
      <div class="${this.count === 0 ? this.customClass : ""}">
        <div>
          <p>外部CSSとmy-appの影響を受けないmy-app-childのpタグ</p>
        </div>
        <div>
          <p>${this.title}</p>
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
      color: blue;
    }

    .custom {
      background-color: aliceblue;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app-child": MyAppChild;
  }
}
