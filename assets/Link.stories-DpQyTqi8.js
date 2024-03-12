import"./Link-BOXQSjwr.js";import"./lit-element-KtrydcFn.js";import"./Text-DgyPOMwC.js";const k={title:"Components/Link",component:"sn-wc-link",argTypes:{onClick:{action:"onClick"},type:{control:{type:"select"},options:["Inline","Outline","Solid"]},size:{control:{type:"radio"},options:["Regular","Medium","Large"]},target:{control:{type:"select"},options:["_self","_blank"]},href:{control:{type:"text"}}}},e={args:{label:"See more",type:"Inline"}},n={args:{label:"See more",type:"Outline",onClick:function(){alert("Outline button clicked!")}}},o={args:{label:"See more",type:"Solid",onClick:function(m){console.log(m),alert("Solid button click")}}};var t,r,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'See more',
    type: "Inline"
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var i,s,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'See more',
    type: "Outline",
    onClick: function () {
      alert("Outline button clicked!");
    }
  }
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'See more',
    type: "Solid",
    onClick: function (e) {
      console.log(e);
      alert("Solid button click");
    }
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const y=["Inline","Outline","Solid"];export{e as Inline,n as Outline,o as Solid,y as __namedExportsOrder,k as default};
