(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcf7da6c"],{"5cbd":function(e,t,a){"use strict";a("159b"),a("fb6a");var o={data:function(){return{isValid:!1}},methods:{validation:function(){var e=this,t=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(t).forEach((function(t){t.addEventListener("submit",(function(a){e.validated(a,t)})),t.addEventListener("change",(function(a){e.validated(a,t)}))}))},validated:function(e,t){t.classList.remove("was-validated"),t.checkValidity()?this.isValid=!0:(e.preventDefault(),e.stopPropagation(),this.isValid=!1),t.classList.add("was-validated")}},mounted:function(){this.validation()}};a("eeb4");const c=o;t["a"]=c},cf25:function(e,t,a){},d0a3:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),c={class:"container-fluid"},d={class:"text-end mb-3"},l=Object(o["createVNode"])("i",{class:"material-icons me-1"},"add_circle_outline",-1),i=Object(o["createTextVNode"])(" 新增優惠券 "),s=Object(o["createStaticVNode"])('<ul class="row g-0 list-unstyled rounded p-2 products-list-header text-nowrap"><li class="col-3 text-start">優惠券標題</li><li class="col-2">優惠碼</li><li class="col-1">折扣</li><li class="col">起始日</li><li class="col">截止日</li><li class="col-1">啟用</li><li class="col-2"></li></ul>',1),n={class:"list-group list-group-flush shadow-sm"},r={class:"col-3 text-start"},u={class:"col-2"},b={class:"col-1"},p={class:"col"},m={key:0,class:"d-block"},f={class:"col-1 text-success"},j={key:0,class:"material-icons fs-5"},O={class:"col-2 d-flex justify-content-start"},h=Object(o["createTextVNode"])(" 是否刪除 "),g={class:"text-danger"},v=Object(o["createTextVNode"])(" 優惠券？ "),V=Object(o["createVNode"])("small",{class:"text-muted"},"(刪除後將無法恢復)",-1);function N(e,t,a,N,y,D){var k=Object(o["resolveComponent"])("Pagination"),x=Object(o["resolveComponent"])("CouponModal"),C=Object(o["resolveComponent"])("DeleteModal");return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["createVNode"])("div",d,[Object(o["createVNode"])("button",{class:"btn btn-primary ms-auto",type:"button",onClick:t[1]||(t[1]=function(){return D.openModal&&D.openModal.apply(D,arguments)})},[l,i])]),s,Object(o["createVNode"])("ul",n,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(y.coupons,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:"list-group-item p-2",key:e.id},[Object(o["createVNode"])("div",r,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])("div",u,Object(o["toDisplayString"])(e.code),1),Object(o["createVNode"])("div",b,Object(o["toDisplayString"])(e.percent),1),Object(o["createVNode"])("div",p,Object(o["toDisplayString"])(D.getDate(e.start_date)),1),Object(o["createVNode"])("div",{class:["col",e.due_date<y.today?"text-danger":""]},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(D.getDate(e.due_date))+" ",1),e.due_date<y.today?(Object(o["openBlock"])(),Object(o["createBlock"])("small",m,"(已過期)")):Object(o["createCommentVNode"])("",!0)],2),Object(o["createVNode"])("div",f,[e.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",j,"check_circle")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",O,[Object(o["createVNode"])("button",{class:"btn btn-sm btn-outline-primary fs-7",type:"button",onClick:function(t){return D.openModal("edit",e)}}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{class:"btn btn-sm btn-outline-danger fs-7 ms-2 ms-md-3",type:"button",onClick:function(t){return D.openModal("delete",e)}}," 刪除 ",8,["onClick"])])])})),128))]),Object(o["createVNode"])(k,{pages:y.pages,onGetDatas:D.getCoupons},null,8,["pages","onGetDatas"]),Object(o["createVNode"])(x,{modalData:y.modalData,onUpdateData:D.updateCoupons},{title:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(y.modalTitle),1)]})),_:1},8,["modalData","onUpdateData"]),Object(o["createVNode"])(C,{modalData:y.deleteData,onDeleteData:D.deleteCoupon},{title:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(y.modalTitle),1)]})),default:Object(o["withCtx"])((function(){return[h,Object(o["createVNode"])("span",g,Object(o["toDisplayString"])(y.deleteData.title),1),v,V]})),_:1},8,["modalData","onDeleteData"])])}var y=a("5530"),D=(a("159b"),a("a397")),k=a("25f3"),x={class:"modal-dialog modal-dialog-centered"},C={class:"modal-content border-0"},_={class:"modal-header bg-dark p-3 text-light"},w=Object(o["createTextVNode"])("新增優惠券"),M=Object(o["createVNode"])("button",{type:"button",class:"btn-close me-1","data-bs-dismiss":"modal"},[Object(o["createVNode"])("i",{class:"material-icons"},"close")],-1),T={class:"modal-body"},$={class:"row g-2"},S={class:"col-5"},B=Object(o["createVNode"])("label",{for:"title",class:"form-label"},"優惠券標題",-1),U={class:"col-5"},A=Object(o["createVNode"])("label",{for:"code",class:"form-label"},"優惠碼",-1),L={class:"col"},q=Object(o["createVNode"])("label",{for:"percent",class:"form-label"},"折扣 (%)",-1),E=Object(o["createVNode"])("div",{class:"d-flex justify-content-between"},[Object(o["createVNode"])("label",{for:"start-date",class:"form-label col-6 m-0"},"起始日"),Object(o["createVNode"])("label",{for:"end-dete",class:"form-label col-6 m-0 ps-3"}," 截止日")],-1),P={class:"d-flex justify-content-between align-items-center"},G={class:"col"},I={class:"input-group"},J=Object(o["createVNode"])("i",{class:"far fa-calendar-alt fa-lg"},null,-1),F=Object(o["createVNode"])("div",{class:"col-1 text-center"},"～",-1),z={class:"col"},H={class:"input-group"},K=Object(o["createVNode"])("i",{class:"far fa-calendar-alt fa-lg"},null,-1),Q=Object(o["createVNode"])("hr",{class:"my-4"},null,-1),R={class:"d-flex align-items-center"},W=Object(o["createVNode"])("label",{class:"form-label m-0",for:"coupon-active"},"是否啟用",-1),X={class:"switch-group ms-2"},Y=Object(o["createVNode"])("div",{class:"ico_switch"},null,-1),Z={class:"modal-footer"},ee=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function te(e,t,a,c,d,l){var i=Object(o["resolveComponent"])("v-date-picker");return Object(o["openBlock"])(),Object(o["createBlock"])("form",{class:"modal fade needs-validation",id:"couponModal","data-bs-backdrop":"static","data-bs-keyboard":"false",novalidate:"",onSubmit:t[8]||(t[8]=Object(o["withModifiers"])((function(){}),["prevent"]))},[Object(o["createVNode"])("div",x,[Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",_,[Object(o["renderSlot"])(e.$slots,"title",{},(function(){return[w]})),M]),Object(o["createVNode"])("div",T,[Object(o["createVNode"])("div",$,[Object(o["createVNode"])("div",S,[B,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",placeholder:"輸入標題",id:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.datas.title=e}),required:""},null,512),[[o["vModelText"],d.datas.title,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",U,[A,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",placeholder:"輸入優惠碼",id:"code","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.datas.code=e}),required:""},null,512),[[o["vModelText"],d.datas.code,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",L,[q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",min:"0",max:"100",class:"form-control no-valid",id:"percent","onUpdate:modelValue":t[3]||(t[3]=function(e){return d.datas.percent=e})},null,512),[[o["vModelText"],d.datas.percent,void 0,{number:!0}]])]),E,Object(o["createVNode"])("div",P,[Object(o["createVNode"])("div",G,[Object(o["createVNode"])(i,{color:"indigo",class:"inline-block h-full",modelValue:d.datas.start_date,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.datas.start_date=e}),"model-config":d.modelConfig},{default:Object(o["withCtx"])((function(e){var t=e.inputValue,a=e.togglePopover;return[Object(o["createVNode"])("div",I,[Object(o["createVNode"])("input",{class:"form-control",id:"start-date",value:t},null,8,["value"]),Object(o["createVNode"])("button",{class:"btn btn-sm btn-outline-primary",onClick:function(e){return a()}},[J],8,["onClick"])])]})),_:1},8,["modelValue","model-config"])]),F,Object(o["createVNode"])("div",z,[Object(o["createVNode"])(i,{color:"indigo",class:"inline-block h-full",modelValue:d.datas.due_date,"onUpdate:modelValue":t[5]||(t[5]=function(e){return d.datas.due_date=e}),"model-config":d.modelConfig},{default:Object(o["withCtx"])((function(e){var t=e.inputValue,a=e.togglePopover;return[Object(o["createVNode"])("div",H,[Object(o["createVNode"])("input",{class:"form-control",id:"end-date",value:t},null,8,["value"]),Object(o["createVNode"])("button",{class:"btn btn-sm btn-outline-primary",onClick:function(e){return a()}},[K],8,["onClick"])])]})),_:1},8,["modelValue","model-config"])])])]),Q,Object(o["createVNode"])("div",R,[W,Object(o["createVNode"])("div",X,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"checkbox",id:"coupon-active",role:"button","onUpdate:modelValue":t[6]||(t[6]=function(e){return d.datas.is_enabled=e}),checked:d.datas.is_enabled?d.datas.is_enabled=1:d.datas.is_enabled=0,disabled:d.datas.due_date<d.today},null,8,["checked","disabled"]),[[o["vModelCheckbox"],d.datas.is_enabled]]),Y])])]),Object(o["createVNode"])("div",Z,[ee,Object(o["createVNode"])("button",{type:"submit",class:"btn btn-primary",onClick:t[7]||(t[7]=function(){return l.updateDatas&&l.updateDatas.apply(l,arguments)})}," 儲存 ")])])])],32)}var ae=a("5cbd"),oe={props:["modalData"],mixins:[ae["a"]],emits:["page-loading","push-message","update-data"],data:function(){return{datas:{},modelConfig:{type:"number"},today:new Date}},methods:{updateDatas:function(){this.isValid?this.datas.due_date<this.datas.start_date?alert("截止日不可小於起始日"):this.$emit("update-data",this.datas):alert("請填入優惠券標題和優惠碼")}},watch:{modalData:function(){this.datas=Object(y["a"])({},this.modalData),document.querySelector("form").classList.remove("was-validated"),this.validation()},datas:{handler:function(e,t){e.due_date<this.today&&(this.datas.is_enabled=0),e.due_date<e.start_date&&(this.datas.due_date=t.due_date)},deep:!0}}},ce=a("d959"),de=a.n(ce);const le=de()(oe,[["render",te]]);var ie=le,se=a("6da5"),ne={emits:["page-loading","push-message"],components:{CouponModal:ie,DeleteModal:se["a"]},data:function(){return{coupons:[],modal:{},modalData:{},deleteData:{},modalTitle:"",isModal:"",apiInfo:{method:"",id:""},today:new Date,pages:{}}},methods:{getCoupons:function(){var e=this;Object(D["o"])().then((function(t){t.data.success||e.$pushMessage(),e.coupons=t.data.coupons,e.pages=t.data.pagination,e.coupons.forEach((function(t){var a=t;t.due_date<e.today&&(a.is_enabled=0)})),e.$emitter.emit("page-loading",!1)})).catch((function(t){e.$emitter.emit("page-loading",!1),e.$pushMessage(t)}))},getDate:function(e){return Object(k["e"])(e)},updateCoupons:function(e){var t=this,a=this.apiInfo,o=a.method,c=a.id;switch(this.isModal){case"edit":o="put",c=e.id;break;default:o="post",c="";break}this.$emitter.emit("page-loading",!0),Object(D["w"])(o,{data:e},c).then((function(e){e.data.success&&(t.getCoupons(),t.modal.hide()),t.$pushMessage(e),t.$emitter.emit("page-loading",!1)})).catch((function(e){t.$emitter.emit("page-loading",!1),t.$pushMessage(e)}))},deleteCoupon:function(e){var t=this;this.$emitter.emit("page-loading",!0),Object(D["g"])(e.id).then((function(e){e.data.success&&(t.getCoupons(),t.modal.hide()),t.$pushMessage(e),t.$emitter.emit("page-loading",!1)})).catch((function(e){t.$emitter.emit("page-loading",!1),t.$pushMessage(e)}))},openModal:function(e,t){"edit"===e?(this.modal=Object(k["a"])("couponModal"),this.modalData=Object(y["a"])({},t),this.isModal="edit",this.modalTitle="編輯優惠券：".concat(t.id)):"delete"===e?(this.modal=Object(k["a"])("deleteModal"),this.deleteData=t,this.modalTitle="刪除優惠券：".concat(t.code)):(this.modal=Object(k["a"])("couponModal"),this.modalData={},this.modalTitle="新增優惠券",this.modalData={start_date:this.today.getTime(),due_date:this.today.getTime(),percent:100},this.isModal=""),this.modal.show()}},created:function(){this.$emitter.emit("page-loading",!0),this.getCoupons()}};const re=de()(ne,[["render",N]]);t["default"]=re},eeb4:function(e,t,a){"use strict";a("cf25")},fb6a:function(e,t,a){"use strict";var o=a("23e7"),c=a("861d"),d=a("e8b5"),l=a("23cb"),i=a("50c4"),s=a("fc6a"),n=a("8418"),r=a("b622"),u=a("1dde"),b=u("slice"),p=r("species"),m=[].slice,f=Math.max;o({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var a,o,r,u=s(this),b=i(u.length),j=l(e,b),O=l(void 0===t?b:t,b);if(d(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!d(a.prototype)?c(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return m.call(u,j,O);for(o=new(void 0===a?Array:a)(f(O-j,0)),r=0;j<O;j++,r++)j in u&&n(o,r,u[j]);return o.length=r,o}})}}]);
//# sourceMappingURL=chunk-dcf7da6c.04c7e9d0.js.map