import{s as i,x as o}from"./lit-element-KtrydcFn.js";import"./Text-B49plGRa.js";import"./Link-WHwk9Asv.js";class n extends i{constructor(){super()}static get properties(){return{linkType:{type:String},imageSrc:{type:String},heading:{type:String},subHeading:{type:String},linkLabel:{type:String},handleClick:{type:Object}}}getCardComponent(){}render(){return`${this.type}`,o`
    <style>
    @font-face {
      font-family: 'Lato';
      src: url('data:application/font-woff;charset=utf-8;base64,[Base64 encoded .woff file]') format('woff'),
          url('data:application/font-woff2;charset=utf-8;base64,[Base64 encoded .woff2 file]') format('woff2'),
          url('data:application/font-truetype;charset=utf-8;base64,[Base64 encoded .ttf file]') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    .card {
      --bs-card-spacer-y: 16px;
      --bs-card-spacer-x: 16px;
      --bs-card-border-width: 1px;
      --bs-card-border-color: rgba(0, 0, 0, 0.175);
      --bs-card-border-radius: 0.575rem;
      --bs-card-bg: #fff;
      --bs-card-img-overlay-padding: 1rem;
      --bs-card-height: 350px;
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      height: var(--bs-card-height);
      word-wrap: break-word;
      background-color: var(--bs-card-bg);
      background-clip: border-box;
      border: var(--bs-card-border-width) solid var(--bs-card-border-color);
      border-radius: var(--bs-card-border-radius);
      margin-bottom: 18px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: box-shaddow 0.3s;
    }
    .card-body {
      flex: 1 1 auto;
      padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
      color: var(--bs-card-color);
    }
    .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: var(--bs-card-img-overlay-padding);
      border-radius: var(--bs-card-inner-border-radius);
    }
    
    .card-img,
    .card-img-top,
    .card-img-bottom {
      width: 100%;
    }
    
    .card-img,
    .card-img-top {
      border-top-left-radius: var(--bs-card-inner-border-radius);
      border-top-right-radius: var(--bs-card-inner-border-radius);
    }
    
    .card-img,
    .card-img-bottom {
      border-bottom-right-radius: var(--bs-card-inner-border-radius);
      border-bottom-left-radius: var(--bs-card-inner-border-radius);
    }
  
    .snow-storybook-card-image{
      height:140px;
      object-fit: cover;
  }
  .snow-storybook-card{
      max-width:401px;
  }
  
  @media screen and (max-width: 568px) {
      .snow-storybook-card-image{ 
        display: none;
      }
    .card{
        padding: 0px;
        height: auto;
      }
    }  
    </style>
  <div class="card snow-storybook-card">
    <img src=${this.imageSrc} class="snow-storybook-card-image">
    <div class="card-body">
     <sn-wc-heading heading-level="3" label="${this.heading}"></sn-wc-heading>
     <sn-wc-text type="sub-heading">${this.subHeading}</sn-wc-text>
     <sn-wc-link style="--sn-wc-margin-top:32px" type="${this.linkType}" label="${this.linkLabel}" @click="${this.handleClick}"></sn-wc-link>
    </div>
  </div>
    `}}customElements.define("sn-wc-card",n);const l={title:"Components/Card",component:"sn-wc-card",argTypes:{handleClick:{action:"onClick"},linkType:{options:["Inline","Outline","Solid"],control:{type:"radio"}}}},a={args:{linkType:"Solid",imageSrc:"data:image/jpeg;base64,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",heading:"Focus on work that matters",subHeading:"ServiceNow eliminates manual tasks with automated, intuitive experiences. Get answers, approvals, and insights when they really matter.ServiceNow eliminates manual tasks with automated, intuitive experiences. Get answers, approvals, and insights when they really matter.",linkLabel:"See more",handleClick:function(A){console.log(A),alert("Button clicked!")}}};var t,r,e;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    linkType: 'Solid',
    imageSrc: 'data:image/jpeg;base64,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',
    heading: "Focus on work that matters",
    subHeading: "ServiceNow eliminates manual tasks with automated, intuitive experiences. Get answers, approvals, and insights when they really matter.ServiceNow eliminates manual tasks with automated, intuitive experiences. Get answers, approvals, and insights when they really matter.",
    linkLabel: "See more",
    handleClick: function (e) {
      console.log(e);
      alert("Button clicked!");
    }
  }
}`,...(e=(r=a.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const m=["Default"];export{a as Default,m as __namedExportsOrder,l as default};
