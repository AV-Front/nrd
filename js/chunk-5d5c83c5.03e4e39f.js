(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d5c83c5"],{"0b9e":function(e,t,r){"use strict";r("f140")},"4b51":function(e,t,r){"use strict";r("61da")},"51da":function(e,t,r){},"5fd2":function(e,t,r){"use strict";r("51da")},"61da":function(e,t,r){},"6b87":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("section",{staticClass:"order"},[t("div",{staticClass:"order__wrapper container"},[t("Title",{attrs:{"heading-size":1}},[e._v("Make order")]),t("div",{staticClass:"order__info"},[t("div",{staticClass:"order__info__title"},[e._v(e._s(e.itemForOrder.title)+":")]),t("div",{staticClass:"order__info__price"},[e._v(e._s(e.itemForOrder.price))])]),t("div",{staticClass:"order__address"},[t("div",{staticClass:"order__address__title"},[e._v("Address")]),t("OrderForm",{on:{submit:function(t){return e.submit(t)}}})],1)],1)])},n=[],l=r("0595"),i=r("4a4b"),s=function(){var e=this,t=e._self._c;return t("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e.error?t("p",{staticClass:"form__error"},[e._v(e._s(e.error))]):e._e(),t("div",{staticClass:"form__fields"},[t("Input",{attrs:{type:"text",placeholder:"Street",name:"street"},model:{value:e.street,callback:function(t){e.street=t},expression:"street"}}),t("Input",{attrs:{type:"text",placeholder:"House",name:"house"},model:{value:e.house,callback:function(t){e.house=t},expression:"house"}}),t("Input",{attrs:{type:"text",placeholder:"Flat",name:"flat"},model:{value:e.flat,callback:function(t){e.flat=t},expression:"flat"}})],1),t("Button",[e._v("Make order")])],1)},u=[],o=(r("14d9"),function(){var e=this,t=e._self._c;return t("button",{staticClass:"button",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),c=[],d={name:"Button",emits:["click"]},p=d,f=(r("0b9e"),r("2877")),m=Object(f["a"])(p,o,c,!1,null,null,null),v=m.exports,h=function(){var e=this,t=e._self._c;return t("label",{staticClass:"input",attrs:{for:e.name}},["checkbox"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:e.placeholder,name:e.name,autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},change:function(t){var r=e.value,a=t.target,n=!!a.checked;if(Array.isArray(r)){var l=null,i=e._i(r,l);a.checked?i<0&&(e.value=r.concat([l])):i>-1&&(e.value=r.slice(0,i).concat(r.slice(i+1)))}else e.value=n}}}):"radio"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:e.placeholder,name:e.name,autocomplete:"off",type:"radio"},domProps:{checked:e._q(e.value,null)},on:{input:function(t){return e.$emit("input",t.target.value)},change:function(t){e.value=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:e.placeholder,name:e.name,autocomplete:"off",type:e.type},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},function(t){return e.$emit("input",t.target.value)}]}})])},_=[],b={name:"Input",props:{value:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,required:!0},name:{type:String,required:!0}}},y=b,k=(r("5fd2"),Object(f["a"])(y,h,_,!1,null,null,null)),g=k.exports,x={name:"Form",components:{Input:g,Button:v},data(){return{street:null,house:null,flat:null,error:null}},methods:{onSubmit(){this.street&&this.house&&this.flat?(this.$emit("submit",{street:this.street,house:this.house,flat:this.flat}),this.error=null,this.street=null,this.house=null,this.flat=null,this.$router.push("/")):this.error="All fields are required"}}},O=x,S=(r("4b51"),Object(f["a"])(O,s,u,!1,null,null,null)),C=S.exports,w={name:"Order",components:{Title:i["a"],OrderForm:C},props:{id:{type:Number,required:!0}},data(){return{itemForOrder:null}},methods:{submit(e){alert(`YOUR PIZZA IS : ${JSON.stringify(this.itemForOrder)}\n         YOUR ADDRESS IS: ${JSON.stringify(e)}`)}},created(){this.itemForOrder=l.find(e=>e.id===this.id)}},F=w,A=(r("9c14"),Object(f["a"])(F,a,n,!1,null,null,null));t["default"]=A.exports},"9c14":function(e,t,r){"use strict";r("b4d2")},b4d2:function(e,t,r){},f140:function(e,t,r){}}]);
//# sourceMappingURL=chunk-5d5c83c5.03e4e39f.js.map