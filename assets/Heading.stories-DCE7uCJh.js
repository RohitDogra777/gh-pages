import{s as l,x as e}from"./lit-element-KtrydcFn.js";class c extends l{constructor(){super(),this.surface="Dark"}static get properties(){return{surface:{type:String},"heading-level":{type:String}}}getHeading(o){const s=o=="Dark"?"dark-surface":"white-surface";return this["heading-level"]=="1"?e`<h1 part="sn-wc-heading" class=${["sn-wc-heading",s].join(" ")}><slot></slot></h1>`:this["heading-level"]=="2"?e`<h2 part="sn-wc-heading" class=${["sn-wc-heading",s].join(" ")}><slot></slot></h2>`:this["heading-level"]=="3"?e`<h3 part="sn-wc-heading" class=${["sn-wc-heading",s].join(" ")}><slot></slot></h3>`:this["heading-level"]=="4"?e`<h4 part="sn-wc-heading" class=${["sn-wc-heading",s].join(" ")}><slot></slot></h4>`:this["heading-level"]=="5"?e`<h5 part="sn-wc-heading" class=${["sn-wc-heading",s].join(" ")} ><slot></slot></h5>`:this["heading-level"]=="6"?e`<h6 part="sn-wc-heading" class=${["sn-wc-heading",s].join(" ")} ><slot></slot></h6>`:e`<h1 part="sn-wc-heading" class=${["sn-wc-heading",s].join(" ")}><slot></slot></h1>`}render(){return e`
    <style>
    @import url('https://fonts.cdnfonts.com/css/gilroy-bold');
    *{
      font-family: 'gilroy-bold';
    }
    :host{
      font-size: inherit;
    }
    .sn-wc-heading{
      font-weight: bold;
      margin: 0px;
      padding:0px;
     }
     .white-surface{
        color:  #FFFFFF;
     }
     .dark-surface{
        color:  #1f1f1f;
     }
    </style>
    ${this.getHeading(this.surface)}
    `}}customElements.define("sn-wc-heading",c);const d={title:"Components/Heading",component:"sn-wc-heading",argTypes:{surface:{control:{type:"radio"},options:["Dark","White"]},"heading-level":{control:{type:"select"},options:["1","2","3","4","5","6"]}}},n=t=>e`
       <sn-wc-heading heading-level="${t["heading-level"]}" surface="${t.surface}">${t.text}</sn-wc-heading>
    `;n.args={"heading-level":"2",surface:"Dark",text:"Browse your Theme"};var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return html\`
       <sn-wc-heading heading-level="\${args['heading-level']}" surface="\${args.surface}">\${args.text}</sn-wc-heading>
    \`;
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const g=["Heading"];export{n as Heading,g as __namedExportsOrder,d as default};
