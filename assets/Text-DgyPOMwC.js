var a=Object.defineProperty;var f=(e,t,s)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var n=(e,t,s)=>(f(e,typeof t!="symbol"?t+"":t,s),s);import{s as r,i,x as c}from"./lit-element-KtrydcFn.js";class o extends r{constructor(){super(),this.styles={}}static get properties(){return{label:{type:String},styles:{type:Object}}}render(){return c`
      <p part="sn-wc-text" class=${["sn-wc-text"].join(" ")}>
        <slot></slot>
      </p>
    `}}n(o,"styles",i`
  @font-face {
    font-family: 'Lato';
    src: url('data:application/font-woff;charset=utf-8;base64,[Base64 encoded .woff file]') format('woff'),
        url('data:application/font-woff2;charset=utf-8;base64,[Base64 encoded .woff2 file]') format('woff2'),
        url('data:application/font-truetype;charset=utf-8;base64,[Base64 encoded .ttf file]') format('truetype');
     font-weight: normal;
     font-style: normal;
  }
  *{
    padding: 0;
    margin: 0;
    font-family: "Lato",sans-serif;
    font-style: normal;
    font-weight: 400;
  }
    :host {
      --sn-wc-font-size: 16px;
      --sn-wc-text-color: #1f1f1f;
      --sn-wc-line-height: 24px;
      --sn-wc-padding-x: 0px;
      --sn-wc-padding-y: 0px;
    }
    .sn-wc-text {
      font-size: var(--sn-wc-font-size);
      color: var(--sn-wc-text-color);
      line-height: var(--sn-wc-line-height);
    }
  `);customElements.define("sn-wc-text",o);
