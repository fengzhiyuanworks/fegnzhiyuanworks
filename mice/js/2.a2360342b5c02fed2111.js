webpackJsonp([2],{2204:function(t,e,o){"use strict";function i(t){o("Ni/C"),o("lm/L")}Object.defineProperty(e,"__esModule",{value:!0});var a=o("aq+/"),s=o("r0/9"),n=o("/Xao"),r=i,c=n(a.a,s.a,!1,r,"data-v-3d079e1c",null);e.default=c.exports},"3cXf":function(t,e,o){t.exports={default:o("I4CF"),__esModule:!0}},"8Dba":function(t,e){t.exports={bedTypeList:{1000000:"大床",2000000:"双床",3000000:"三床",4000000:"四床",5000000:"大/双床",A000000:"单床",B000000:"上下铺",C000000:"通铺",D000000:"榻榻米",E000000:"水床",F000000:"圆床",G000000:"拼床",H000000:"炕"},currencyList:{1:"CNY",2:"HKD",3:"MOP",4:"USD",5:"TWD",6:"THB",7:"SGD",8:"MYR",9:"JPY",10:"KRW",11:"CAD",12:"EUR",13:"PHP",14:"VND",15:"KPW",16:"KHR",17:"INR",18:"BUK",19:"NPR",20:"MVR",21:"LKR",22:"PRK",23:"GBP",24:"RUB",25:"CHF",26:"AED",27:"AUD",28:"IDR",29:"NZD",30:"SAR",31:"IRR",32:"IQD",33:"TRL",34:"KWD",35:"BDT",36:"BND",37:"FJD",38:"LAK",39:"SEK",40:"OMR"},hotelstarList:{19:"五星",29:"豪华型",39:"四星",49:"高档型",59:"三星",64:"舒适型",66:"经济型",69:"二星",79:"二星以下"},breakfastNumArr:["床位早","无早","单早","双早","三早","四早","五早","六早","七早","八早","九早","多早","美式早","全食宿","特惠全食宿","含早","含1早1份半餐","早午餐","欧陆早","自助早餐","全食宿","含1份半餐1份全餐","英式早","半食宿","爱尔兰早","半食宿+饮料","全食宿+饮料","不含早","苏格兰早","膳食自理","十早","十一早","十二早","十三早","十四早","十五早"]}},I4CF:function(t,e,o){var i=o("0nnt"),a=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},KC8N:function(t,e,o){e=t.exports=o("BkJT")(!0),e.push([t.i,".mb-5[data-v-3d079e1c]{margin-top:-.5rem!important}","",{version:3,sources:["E:/1.Fzy/100-Project/2017-9/MICE 2.0/mice-dev/src/components/orderfill.vue"],names:[],mappings:"AACA,uBACE,2BAA+B,CAChC",file:"orderfill.vue",sourcesContent:["\n.mb-5[data-v-3d079e1c] {\n  margin-top: -0.5rem !important;\n}\n\n"],sourceRoot:""}])},McgL:function(t,e,o){e=t.exports=o("BkJT")(!0),e.push([t.i,".bg1 .f-model-card{width:30%!important;background-color:#ccc!important}","",{version:3,sources:["E:/1.Fzy/100-Project/2017-9/MICE 2.0/mice-dev/src/components/orderfill.vue"],names:[],mappings:"AACA,mBACE,oBAAsB,AACtB,+BAAkC,CACnC",file:"orderfill.vue",sourcesContent:["\n.bg1 .f-model-card {\n  width: 30% !important;\n  background-color: #ccc !important;\n}\n"],sourceRoot:""}])},"Ni/C":function(t,e,o){var i=o("McgL");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("8bSs")("e1df5542",i,!0)},"aq+/":function(t,e,o){"use strict";var i=o("3cXf"),a=o.n(i),s=o("WcSs"),n=o.n(s),r=o("MvGc"),c=o("8Dba"),l=o.n(c);e.a={data:function(){return{abc:"",isbg:!0,F_addMsg:!1,stepFlag:!1,stepFlag1:!1,iScostDetail:!1,isDestinSome:!1,isSubmit:!1,isOut:!1,isBtype:!1,roomnight:"",num:"",roomPrice:0,addtionCost:0,roomQuantity:1,limitMax:"",limitMin:"",limitArr:[],showSubTitle:!0,tempArr:[],bookingFlag:!0,additionalInfoTypeList:["特别提示","提示信息","促销信息","预订条款","入住条款","取消条款","预订间数条款"],RestrictTypeList:["可取消","不可取消","限时取消"],validate:{1:!1,2:!1,3:!1},isSub:!1,guaranCost:"",req_booking:{roomQuantity:1,remark:"",orderSum:"",checkInDate:"",checkOutDate:"",payMethod:"",roomTypeId:"",additionChargeDTOList:[],guestDTOList:[{phone:"",email:"",guestName:"",firstName:"",lastName:""}],isImmediatelyConfirm:"",supplyWay:"",commodityId:"",hotelId:"",contacterDTO:{contactEmail:"",contactName:"",contactPhone:""},pricePlanId:"",bedDesc:"",roomRateDetailDTOList:[],bedTypeIds:"",token:"",guaranteeMethod:3,guaranteeFee:""},additionitem:{additionChargeId:"",priceOrg:0,price:10,num:1,name:"网费",days:1,currency:"1",pricePlanId:"",type:3},guaranDate:{guaranteeFee:"",guaranteeFeeInfo:""},additionList:[],model:{limitArr:[]},indexDate:""}},filters:{breakfastFilter:function(t){var e=l.a.breakfastNumArr;if(""!==t)return e[t+1]},dateFilter:function(t){if(t){var e=t.split("-");return e[1]+"/"+e[2]}},numFilter:function(t,e){return n()(t).diff(n()(e),"days")}},watch:{roomQuantity:function(t,e){var o=this;this.req_booking.roomQuantity=t,t!=e&&(o.roomPrice=0,o.model.commodityItemDTOList&&o.model.commodityItemDTOList.forEach(function(e,i){o.roomPrice+=parseInt(e.salePrice*t)}),o.getGuaran())},req_booking:{handler:function(t,e){var o=this;o.addtionCost=0,t.additionChargeDTOList.forEach(function(t,e){o.addtionCost+=t.price*t.num*t.days}),2==this.model.userType&&o.req_booking.guestDTOList[0].guestName&&11==o.req_booking.contacterDTO.contactPhone.length||1==this.model.userType&&o.req_booking.guestDTOList[0].guestName&&o.req_booking.contacterDTO.contactName&&11==o.req_booking.contacterDTO.contactPhone.length?this.isSub=!0:this.isSub=!1},deep:!0}},created:function(){o.i(r.b)(),this.Qinfo();var t=this;setTimeout(function(){t.stepFlag=!0},500),setTimeout(function(){t.stepFlag1=!0},550)},mounted:function(){var t=this;setTimeout(function(){$(".div1 button").on("click",function(){$(this).toggleClass("click_btn")}),$("#txtCall").click(function(){console.log(t.indexDate.telePhone),window.location.href="tel:"+t.indexDate.telePhone})},600)},methods:{contentChgSameCode:function(){2==this.model.userType&&this.req_booking.guestDTOList[0].guestName&&11==this.req_booking.contacterDTO.contactPhone.length||1==this.model.userType&&this.req_booking.guestDTOList[0].guestName&&this.req_booking.contacterDTO.contactName&&11==this.req_booking.contacterDTO.contactPhone.length?this.isSub=!0:this.isSub=!1},contentChg1:function(t){console.log(t),this.req_booking.guestDTOList[0].guestName=t,this.contentChgSameCode()},contentChg2:function(t){console.log(t),this.contentChgSameCode()},contentChg3:function(t){console.log(t),this.contentChgSameCode()},Qinfo:function(){var t=this,e=this.$route.query;t.indexDate=e,e.firstDayQuotaNum>5?this.limitMax=5:this.limitMax=e.firstDayQuotaNum;var i={pricePlanId:e.pricePlanId,pricePlanName:e.pricePlanName,commodityId:e.commodityId,roomTypeId:e.roomTypeID,roomTypeName:e.roomTypeName,checkInDate:e.checkInDate,checkOutDate:e.checkOutDate,roomQuantity:1,firstDayQuotaNum:e.firstDayQuotaNum,payMethod:e.payMethod};this.$ajax.post("/hotel/order/preBooking",i).then(function(i){if(1==i.data.result){t.model=i.data.model,t.getGuaran(),t.model.roomQuantity?(t.limitMin=t.model.roomQuantity,t.showSubTitle=!0):(t.limitMin=1,t.showSubTitle=!1),t.limitArr.push(t.limitMin),t.limitArr.push(t.limitMax),t.model.limitArr=t.limitArr,3==i.data.model.canBooking?(o.i(r.a)("暂不可订"),t.$router.push("/index")):2==i.data.model.canBooking?alert("产品变价"):1==i.data.model.canBooking&&function(){t.roomnight=n()(t.model.checkOutDate).diff(n()(t.model.checkInDate),"days"),t.req_booking.hotelId=t.model.hotelId,t.req_booking.roomQuantity=t.model.roomQuantity,t.req_booking.pricePlanId=e.pricePlanId,t.req_booking.checkInDate=t.model.checkInDate,t.req_booking.checkOutDate=t.model.checkOutDate,t.req_booking.commodityId=t.model.commodityId,t.req_booking.roomTypeId=t.model.roomTypeId,t.req_booking.payMethod=t.model.payMethodKey,t.req_booking.bedTypeIds=t.model.bedTypesIds,t.req_booking.bedDesc=t.model.bedTypeDesc,t.req_booking.isImmediatelyConfirm=t.model.canImmediate,2==t.model.userType&&(t.req_booking.guestDTOList[0].guestName=t.model.checkInName),1==t.model.userType?(t.req_booking.contacterDTO.contactName=t.model.linker,t.req_booking.contacterDTO.contactPhone=t.model.linkerMobilePhone):2==t.model.userType&&(t.req_booking.contacterDTO.contactPhone=t.model.mobile),t.req_booking.supplyWay=t.model.supplyWay,t.req_booking.token=t.model.token,t.additionList=[],t.model.additionChargeIncomeList&&(t.additionList=t.model.additionChargeIncomeList.map(function(e){return{additionChargeId:e.additionChargeId,priceOrg:"",price:e.salePrice,name:e.additionChargeName,currency:t.model.settleCurrencyEnum,pricePlanId:e.pricePlanId,type:e.additionChargeType,num:1,days:1}})),t.req_booking.roomRateDetailDTOList=t.model.commodityItemDTOList.map(function(t){return{breakfastNum:t.breakfastNum,salePrice:t.salePrice,saleDate:t.saleDate,currency:t.baseCurrency,basePrice:t.basePrice,fullPrice:t.salePrice}}),i.data.model.commodityItemDTOList.forEach(function(e,o){t.roomPrice+=e.salePrice*t.model.roomQuantity});var a=Math.ceil(t.roomPrice/i.data.model.commodityItemDTOList.length/t.model.roomQuantity);t.indexDate.salePrice;a!=t.indexDate.salePrice&&o.i(r.a)("请注意价格变动"),2==this.model.userType&&t.req_booking.guestDTOList[0].guestName&&11==t.req_booking.contacterDTO.contactPhone.length||1==this.model.userType&&t.req_booking.guestDTOList[0].guestName&&t.req_booking.contacterDTO.contactName&&11==t.req_booking.contacterDTO.contactPhone.length?t.isSub=!0:t.isSub=!1}()}else 0==i.data.result&&setTimeout(function(){t.$router.push("/index")},1e3)}).catch(function(t){})},getGuaran:function(){var t=this,e={checkInDate:this.model.checkInDate,checkOutDate:this.model.checkOutDate,commodityId:this.model.commodityId,channelCode:"",distributorCode:"",arrivalTime:this.model.arrivalEarlyTime+"-"+this.model.arrivalLateTime,roomNum:this.roomQuantity,commodityItemDTOList:this.model.commodityItemDTOList};t.$ajax.post("/hotel/order/validateGuaranteeFee",e).then(function(e){1==e.data.result&&(t.guaranDate=e.data.model,t.req_booking.guaranteeFee=e.data.model.guaranteeFee)}).catch(function(t){})},booking:function(){var t=this;if(t.isSub){F.loading.show(),t.getDate();var e=JSON.parse(a()(this.req_booking));if($(".sw_ctr").hasClass("on")){var i=[];e.remark&&i.push(e.remark),$(".div1 button").each(function(){$(this).hasClass("click_btn")&&i.push($(this).text())}),e.remark=i.join(",")}else e.remark="";console.log(a()(e)),this.bookingFlag&&(this.bookingFlag=!1,this.$ajax.post("/hotel/order/booking",e).then(function(e){if(setTimeout(function(){t.bookingFlag=!0},700),1==e.data.result){var i=e.data.model;if(1==t.model.buttonType||3==t.model.buttonType)F.loading.hide(),o.i(r.a)("下单成功"),t.$router.push("/Order/"+i.orderCode+"/0");else if(2==t.model.buttonType){var a=window.location.host;window.location.href="http://"+a+"/miceMobile/payPage.html?orderCode="+i.orderCode+"&token="+i.token}}else setTimeout(function(){F.loading.hide(),t.$router.push("/index")},500)}).catch(function(e){setTimeout(function(){F.loading.hide(),t.bookingFlag=!0},700)}))}},getDate:function(){var t=this;if(1!=this.model.isEngGuest){var e=this.req_booking.guestDTOList[0].guestName.split("/");this.req_booking.guestDTOList[0].firstName=e[0],this.req_booking.guestDTOList[0].lastName=e[1]}2==t.model.userType&&(t.req_booking.contacterDTO.contactName=t.req_booking.guestDTOList[0].guestName),t.req_booking.guestDTOList[0].phone=t.req_booking.contacterDTO.contactPhone,this.req_booking.orderSum=this.addtionCost+this.roomPrice,t.req_booking.roomRateDetailDTOList=t.model.commodityItemDTOList.map(function(t){return{breakfastNum:t.breakfastNum,salePrice:t.salePrice,saleDate:t.saleDate,currency:t.baseCurrency,basePrice:t.basePrice,fullPrice:t.salePrice}})},checkaddation:function(t,e){var o=this,i=$(e.target).parent().parent(),a=i.find(".iconflag"),s=i.next();a.hasClass("icon-Artboard9")?(a.addClass("icon-Artboard11").removeClass("icon-Artboard9"),a.hasClass("icon-Artboard11")&&(o.req_booking.additionChargeDTOList.forEach(function(e,i){e.type==t.type&&o.req_booking.additionChargeDTOList.splice(i,2)}),s.hide())):(a.addClass("icon-Artboard9").removeClass("icon-Artboard11"),a.hasClass("icon-Artboard9")&&(o.req_booking.additionChargeDTOList.push(t),s.show()))},checkaddation2:function(t){var e=$(t.target).parent().parent();e.find(".iconflag");e.next().toggle()},callTel:function(){var t=this;o.i(r.a)('<span><p>若需5间以上 请联系酒店</p></span><sapn id="tel">Call</sapn>',3e3,"notice-skin"),setTimeout(function(){$("#tel").click(function(){window.location.href="tel:"+t.indexDate.telePhone})},20)},costDetail:function(){this.iScostDetail=!0},destinSome:function(){var t=this;this.isDestinSome=!0,this.tempArr=JSON.parse(a()(this.req_booking.additionChargeDTOList)),setTimeout(function(){$(".ds-scoll .badChose").find(".iconflag").addClass("icon-Artboard11").removeClass("icon-Artboard9"),$(".ds-scoll .badChose .badChose_body").hide(),t.req_booking.additionChargeDTOList.forEach(function(t,e){$(".ds-scoll .badChose").each(function(e,o){t.type==$(o).attr("data-type")&&($(".ds-scoll .badChose").eq(e).find(".iconflag").addClass("icon-Artboard9").removeClass("icon-Artboard11"),$(".ds-scoll .badChose").eq(e).find(".badChose_body").show())})})},500)},closeDestinSome:function(){this.req_booking.additionChargeDTOList=this.tempArr,this.isDestinSome=!1},chgFill:function(){var t=$(this.$refs.sw_ctr);event.stopPropagation(),t.hasClass("on")?(t.children(".btn").css("margin-left","0.002rem"),t.children(".base_aux").css("opacity","1"),t.children(".base").css("background","#f3f3f3"),t.parents(".orderFill_p02").next(".mnore_Div").hide()):(t.children(".btn").css("margin-left","0.34rem"),t.children(".base_aux").css("opacity","0"),t.children(".base").css("background","#4BD663"),t.parents(".orderFill_p02").next(".mnore_Div").show()),t.toggleClass("on")},cancel:function(){this.$router.go(-1)}}}},"lm/L":function(t,e,o){var i=o("KC8N");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("8bSs")("440ddc2a",i,!0)},"r0/9":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("header",{staticClass:"per_center mb0"},[o("div",{staticClass:"pre_title"},[o("a",{staticClass:"icon-Artboard7",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.isOut=!0}}})])]),t._v(" "),o("div",{staticClass:"fixBox1"},[o("div",{staticClass:"order_msg mb15"},[o("h4",[t._v(t._s(t.indexDate.roomTypeName))]),t._v(" "),o("div",{staticClass:"msg_mian"},[o("div",{staticClass:"msg_l"},[o("div",{staticClass:"limit-word"},[t._v(t._s(t.indexDate.pricePlanName))]),t._v(" "),o("p",[t._v(t._s(t.model.bedTypeDesc)+" "),o("span",[t._v("|")]),t._v("\n              "+t._s(t._f("breakfastFilter")(t.model.commodityItemDTOList&&t.model.commodityItemDTOList[0].breakfastNum)))]),t._v(" "),o("p",[t._v(t._s(t._f("dateFilter")(t.model.checkInDate))+"入住 － "+t._s(t._f("dateFilter")(t.model.checkOutDate))+"离店 共"),o("i",[t._v(t._s(t.roomnight))]),t._v("晚")])]),t._v(" "),o("div",{staticClass:"msg_r"},[o("div",{staticClass:"msg_r_img"},[o("img",{attrs:{src:t.indexDate.imgUrls,alt:""},on:{error:t.errorLoadImg}})])])]),t._v(" "),o("div",{staticClass:"order_status"},[o("i",{staticClass:"icon-Artboard3"}),t._v(" "),t.model.restrictDTO?o("span",[t._v(t._s(t.model.restrictDTO&&t.RestrictTypeList[t.model.restrictDTO.cancelRestrictType+1]))]):t._e(),t._v(" "),o("span",[t._v(t._s(1==t.model.canImmediate?"即时确认":"待确认"))]),t._v(" "),o("span",[t._v(t._s("PRE_PAY"==t.model.payMethod?"在线付":"到店付"))])]),t._v(" "),t.guaranDate.guaranteeFeeInfo?o("p",{staticClass:"order_status order_status_hauto"},[o("i",{staticClass:"icon-Artboard3"}),t._v(" "),o("span",{attrs:{id:"txtCall"}},[t._v("该产品需要提供 "+t._s(t.model.settleCurrencyEnum)+t._s(t.guaranDate.guaranteeFee)+" 的担保金额,"),o("i",{staticClass:"colorf60 "},[t._v("请联系酒店")]),t._v(",完成线下担保！")])]):t._e()]),t._v(" "),t.model.limitArr.length>0?o("inputStep",{attrs:{limitNum:t.model.limitArr,showSubtitle:t.showSubTitle,modalTitle:"选择房间数量",showLast:!0,modalFun:t.callTel,text:"房间数"},model:{value:t.roomQuantity,callback:function(e){t.roomQuantity=e},expression:"roomQuantity"}},[o("p",{on:{click:t.callTel}},[t._v("若需5间以上,"),o("i",{staticStyle:{color:"red"}},[t._v("请联系酒店客服")])])]):t._e(),t._v(" "),1==t.model.userType?[t.model.isEngGuest&&1==t.model.isEngGuest&&t.stepFlag?o("inputText",{attrs:{cladss:"iptStyle",title:"入住人"},on:{validate:function(e){t.validate[1]=!0},contentChg:t.contentChg1},model:{value:t.req_booking.guestDTOList[0].guestName,callback:function(e){t.$set(t.req_booking.guestDTOList[0],"guestName",e)},expression:"req_booking.guestDTOList[0].guestName"}}):t._e(),t._v(" "),t.model.isEngGuest&&1!=t.model.isEngGuest&&t.stepFlag?o("inputText",{staticClass:"iptStyle",attrs:{title:"入住人",placeholders:"姓/名 拼音 例:huang/xiaoming"},on:{validate:function(e){t.validate[1]=!0},contentChg:t.contentChg1},model:{value:t.req_booking.guestDTOList[0].guestName,callback:function(e){t.$set(t.req_booking.guestDTOList[0],"guestName",e)},expression:"req_booking.guestDTOList[0].guestName"}}):t._e()]:t._e(),t._v(" "),2==t.model.userType?[t.model.isEngGuest&&1==t.model.isEngGuest&&t.stepFlag?o("inputText",{attrs:{cladss:"iptStyle",val:t.model.checkInName,title:"入住人"},on:{validate:function(e){t.validate[1]=!0},contentChg:t.contentChg1},model:{value:t.req_booking.guestDTOList[0].guestName,callback:function(e){t.$set(t.req_booking.guestDTOList[0],"guestName",e)},expression:"req_booking.guestDTOList[0].guestName"}}):t._e(),t._v(" "),t.model.isEngGuest&&1!=t.model.isEngGuest&&t.stepFlag?o("inputText",{staticClass:"iptStyle",attrs:{val:t.model.checkInName,title:"入住人",placeholders:"姓/名 拼音 例:huang/xiaoming"},on:{validate:function(e){t.validate[1]=!0},contentChg:t.contentChg1},model:{value:t.req_booking.guestDTOList[0].guestName,callback:function(e){t.$set(t.req_booking.guestDTOList[0],"guestName",e)},expression:"req_booking.guestDTOList[0].guestName"}}):t._e()]:t._e(),t._v(" "),2!=t.model.userType&&t.stepFlag?o("inputText",{staticClass:"iptStyle",attrs:{val:t.model.linker,title:"联系人"},on:{validate:function(e){t.validate[2]=!0},contentChg:t.contentChg2},model:{value:t.req_booking.contacterDTO.contactName,callback:function(e){t.$set(t.req_booking.contacterDTO,"contactName",e)},expression:"req_booking.contacterDTO.contactName"}}):t._e(),t._v(" "),1==t.model.userType?[t.stepFlag1?o("inputText",{staticClass:"iptStyle",attrs:{val:t.model.linkerMobilePhone,title:"联系电话",type:"tel"},on:{validate:function(e){t.validate[3]=!0},contentChg:t.contentChg2},model:{value:t.req_booking.contacterDTO.contactPhone,callback:function(e){t.$set(t.req_booking.contacterDTO,"contactPhone",e)},expression:"req_booking.contacterDTO.contactPhone"}}):t._e()]:t._e(),t._v(" "),2==t.model.userType?[t.stepFlag1?o("inputText",{staticClass:"iptStyle",attrs:{val:t.model.mobile,title:"联系电话",type:"tel"},on:{validate:function(e){t.validate[3]=!0},contentChg:t.contentChg3},model:{value:t.req_booking.contacterDTO.contactPhone,callback:function(e){t.$set(t.req_booking.contacterDTO,"contactPhone",e)},expression:"req_booking.contacterDTO.contactPhone"}}):t._e()]:t._e(),t._v(" "),o("div",{staticClass:"orderFill_p02 borderTop borderBottom bb",on:{click:t.chgFill}},[o("span",{staticClass:"colorgray "},[t._v("特殊要求")]),t._v(" "),o("span",{ref:"sw_ctr",staticClass:"sw_ctr"},[o("span",{staticClass:"base"}),t._v(" "),o("span",{staticClass:"btn"})])]),t._v(" "),o("div",{staticClass:"mnore_Div  animated fadeIn"},[o("p",{staticClass:"colorf60"},[t._v("尽量满足您的要求，实际以酒店提供为准")]),t._v(" "),t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1),t._v(" "),o("div",{staticClass:"div"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.req_booking.remark,expression:"req_booking.remark"}],attrs:{placeholder:"请输入其他特殊要求"},domProps:{value:t.req_booking.remark},on:{input:function(e){e.target.composing||t.$set(t.req_booking,"remark",e.target.value)}}})])]),t._v(" "),t.additionList.length>0?o("div",{staticClass:"add_msg"},[o("a",{staticClass:"add_msg_head",attrs:{href:"javascript:void(0)"},on:{click:t.destinSome}},[o("span",[t._v("附加费用")]),t._v(" "),o("i",{staticClass:"icon-Artboard6"})]),t._v(" "),t._l(t.req_booking.additionChargeDTOList,function(e){return o("div",{staticClass:"add_msg_body"},[o("p",[o("span",{staticClass:"msg_body_l"},[t._v(t._s(e.name))]),t._v(" "),o("span",{staticClass:"msg_body_c"},[t._v(t._s(e.num)+"份/天,"+t._s(e.days)+"天")]),t._v(" "),o("span",{staticClass:"msg_body_r"},[o("i",[t._v(t._s(t.model.settleCurrencyEnum))]),t._v(t._s(e.num*e.days*e.price))])])])})],2):t._e(),t._v(" "),t._m(2,!1,!1),t._v(" "),o("div",{staticClass:"p_tb03rem"},t._l(t.model.pricePlanAdditionalInfoList,function(e){return o("div",{staticClass:"To_travel_article Tnot1"},[7!=e.additionalInfoType&&8!=e.additionalInfoType?o("p",[o("span",[t._v(t._s(t.additionalInfoTypeList[e.additionalInfoType-1]))]),t._v(t._s(e.content))]):t._e()])})),t._v(" "),o("p",{staticClass:"h100"})],2),t._v(" "),o("footer",{staticClass:"orderFill_bottom_p"},[o("span",{staticClass:"orderFill_bottom_p_span",on:{click:t.costDetail}},[t._v("总额"),o("span",{staticClass:"cur"},[t._v(t._s(t.model.settleCurrencyEnum)),o("i",[t._v(t._s(t.addtionCost+t.roomPrice))])]),o("span",{staticClass:"colorf60 ft1s"},[t._v("明细")])]),t._v(" "),2==t.model.buttonType?o("a",{staticClass:"blueBtn fr J_Reminder",class:[{op4:!t.isSub}],attrs:{href:"javascript:void(0)"},on:{click:t.booking}},[t._v("去支付")]):t._e(),t._v(" "),1==t.model.buttonType?o("a",{staticClass:"blueBtn fr J_Reminder",class:[{op4:!t.isSub}],attrs:{href:"javascript:void(0)"},on:{click:t.booking}},[t._v("提交订单")]):t._e(),t._v(" "),3==t.model.buttonType?o("a",{staticClass:"blueBtn fr J_Reminder",class:[{op4:!t.isSub}],attrs:{href:"javascript:void(0)"},on:{click:function(e){t.isBtype=!0}}},[t._v("线下支付")]):t._e()]),t._v(" "),o("div",{staticClass:"hide_body02"}),t._v(" "),o("transition",{attrs:{name:"slideUD"}},[t.isDestinSome?o("div",{staticClass:"destinSomeContent"},[o("header",{staticClass:"per_center mb0"},[o("div",{staticClass:"pre_title"},[o("a",{staticClass:"icon-ArtboardCopy Return-ds",attrs:{href:"javascript:void(0)"},on:{click:t.closeDestinSome}})]),t._v(" "),o("div",{staticClass:"order_msg"},[o("h4",{staticClass:"fw7 mt7"},[t._v("选择附加项")])])]),t._v(" "),o("div",{staticClass:"ds-scoll"},t._l(t.additionList,function(e,i){return o("div",{staticClass:"badChose",attrs:{"data-type":e.type}},[o("div",{staticClass:"badChose_head"},[o("div",{staticClass:"badChose_head2"},[o("span",[o("i",{staticClass:"iconflag icon-Artboard11"}),t._v(t._s(e.name))]),t._v(" "),o("span",[o("i",{staticClass:"ft1s a1"},[t._v("价格")]),t._v(" "),o("i",{staticClass:"ft1s"},[t._v(t._s(t.model.settleCurrencyEnum))]),t._v(" "),o("i",{staticClass:"ft3"},[t._v(t._s(e.price*e.num*e.days))])])]),t._v(" "),o("div",{staticClass:"badChose_head1"},[o("div",{staticClass:"badChose_head1_l",on:{click:function(o){t.checkaddation(e,o)}}}),t._v(" "),o("div",{staticClass:"badChose_head1_r",on:{click:function(e){t.checkaddation2(e)}}})])]),t._v(" "),o("div",{staticClass:"badChose_body openFlag"},[o("inputStep",{staticClass:"badChose_body_s slideInDown",attrs:{limitNum:[1,99],optionNum:99,modalTitle:e.name,text:"份/天"},model:{value:e.num,callback:function(o){t.$set(e,"num",o)},expression:"additem.num"}}),t._v(" "),o("inputStep",{staticClass:"badChose_body_s slideInDown",attrs:{optionNum:99,modalTitle:e.name,limitNum:[1,t.roomnight],text:"天"},model:{value:e.days,callback:function(o){t.$set(e,"days",o)},expression:"additem.days"}})],1)])})),t._v(" "),o("footer",{staticClass:"orderFill_bottom_p"},[o("a",{staticClass:"allBtn J_Reminder",attrs:{href:"javaScript:void(0)"},on:{click:function(e){t.isDestinSome=!1}}},[t._v("\n            确定("),o("i",{staticClass:"ft1s mr0"},[t._v(t._s(t.model.settleCurrencyEnum))]),t._v(t._s(t.addtionCost)+")")])])]):t._e()]),t._v(" "),o("transition",{attrs:{name:"slideUD"}},[t.iScostDetail?o("div",{staticClass:"bedmsg"},[o("header",{staticClass:"per_center mb0 ds-head"},[o("div",{staticClass:"pre_title"},[o("a",{staticClass:"icon-ArtboardCopy",on:{click:function(e){t.iScostDetail=!1}}})]),t._v(" "),o("h3",{staticClass:"mt35"},[t._v("费用明细")])]),t._v(" "),o("section",{staticClass:"ds-body"},[o("ul",{staticClass:"cost-d-list clearfix"},[o("li",[o("span",[t._v("房费")])]),t._v(" "),t._l(t.model.commodityItemDTOList,function(e){return o("li",[o("span",[t._v(t._s(e.saleDate))]),t._v(" "),o("span",[o("i",{staticClass:"ft1"},[t._v(t._s(t.model.settleCurrencyEnum))]),t._v(" "+t._s(e.salePrice)+" × "+t._s(t.model.roomQuantity)+" ")])])}),t._v(" "),o("li",{staticClass:"mb15"},[o("span",[t._v("房费小计")]),t._v(" "),o("span",[o("i",{staticClass:"ft1"},[t._v(t._s(t.model.settleCurrencyEnum))]),t._v(t._s(t.roomPrice))])])],2),t._v(" "),t.req_booking.additionChargeDTOList.length>0?o("ul",{staticClass:"cost-d-list clearfix"},[o("li",[o("span",[t._v("附加费")])]),t._v(" "),t._l(t.req_booking.additionChargeDTOList,function(e){return o("li",[o("span",[t._v(t._s(e.name))]),t._v(" "),o("span",[o("i",{staticClass:"ft1"},[t._v(t._s(t.model.settleCurrencyEnum))]),t._v(" "+t._s(e.price)+" × "+t._s(e.num)+"份/天 "+t._s(e.days)+"天")])])}),t._v(" "),o("li",{staticClass:"mb15"},[o("span",[t._v("附加费小计")]),t._v(" "),o("span",[o("i",{staticClass:"ft1"},[t._v(t._s(t.model.settleCurrencyEnum))]),t._v(t._s(t.addtionCost))])])],2):t._e(),t._v(" "),o("div",{staticClass:"Totalnum"},[o("span",[t._v("总计")]),t._v(" "),o("span",[o("i",{staticClass:"ft1"},[t._v(t._s(t.model.settleCurrencyEnum))]),t._v(t._s(t.addtionCost+t.roomPrice))])])]),t._v(" "),o("div",{staticClass:"ds-foot ",attrs:{to:"/pay"},on:{click:function(e){t.iScostDetail=!1}}},[t._v("关闭\n          "),o("Ripple")],1)]):t._e()]),t._v(" "),o("modal",{attrs:{onOk:t.cancel,isShow:t.isOut,iShead:!1},on:{close:function(e){t.isOut=!1}}},[o("div",{staticClass:"modal-txt"},[t._v("是否放弃本次预订?")])]),t._v(" "),o("modal",{attrs:{onOk:t.goPay,isShow:t.isSubmit,iShead:!1},on:{close:function(e){t.isSubmit=!1}}},[o("div",{staticClass:"modal-txt"},[t._v("价格变动,由¥898变为¥998")]),t._v(" "),o("div",{staticClass:"modal-txt"},[t._v("是否继续预订?")])]),t._v(" "),o("modal",{attrs:{onOk:t.booking,isShow:t.isBtype,iShead:!1},on:{close:function(e){t.isBtype=!1}}},[o("div",{staticClass:"modal-txt"},[t._v("目前仅支持人民币在线交易")]),t._v(" "),o("div",{staticClass:"modal-txt"},[t._v("请联系酒店线下付款?")])])],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"div1 clearfix"},[o("button",{},[t._v("尽量安排大床房")]),t._v(" "),o("button",{},[t._v("尽量双床房")]),t._v(" "),o("button",{},[t._v("尽量安排安静房")]),t._v(" "),o("button",{},[t._v("尽量安排无烟房")]),t._v(" "),o("button",{},[t._v("尽量安排高层楼层")]),t._v(" "),o("button",{},[t._v("尽量安排相邻")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"orderFill_p02_O pr dn"},[o("span",{staticClass:"orderFill_inp01 bg_sanjiao"},[t._v("当日"),o("em",[t._v("19:00-20:00")])]),t._v(" "),o("span",[t._v("您所选的是酒店地时间")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mnore_infDiv"},[o("p",{staticClass:"orderFill_p02"},[o("span",{staticClass:"colorgray"},[t._v("姓名"),o("i",{staticClass:"notice_x"},[t._v("*")])]),t._v(" "),o("input",{staticClass:"orderFill_inp01",attrs:{type:"text",value:"",placeholder:"请输入您的姓名"}})]),t._v(" "),o("p",{staticClass:"orderFill_p02"},[o("span",{staticClass:"colorgray"},[t._v("邮箱"),o("i",{staticClass:"notice_x"},[t._v("*")])]),t._v(" "),o("input",{staticClass:"orderFill_inp01",attrs:{type:"text",value:"",placeholder:"请输入正确的邮箱地址"}})])])}],s={render:i,staticRenderFns:a};e.a=s}});
//# sourceMappingURL=2.a2360342b5c02fed2111.js.map