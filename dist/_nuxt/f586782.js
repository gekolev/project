(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(e,t,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(86).default)("d649ce50",content,!0,{sourceMap:!1})},354:function(e,t,n){"use strict";n(352)},355:function(e,t,n){var o=n(85)((function(i){return i[1]}));o.push([e.i,".subtitle[data-v-1825ef36]{font-weight:300;font-size:3em;color:#2e495e;word-spacing:5px}",""]),o.locals={},e.exports=o},363:function(e,t,n){"use strict";n.r(t);n(37),n(33),n(11),n(22),n(19),n(60);var o={data:function(){return{selectedValue:""}},created:function(){this.selectedValue=this.$i18n.locale},methods:{onChange:function(e){this.$router.replace(this.switchLocalePath(e))}}},l=(n(354),n(73)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"bg-black"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedValue,expression:"selectedValue"}],staticClass:"bg-black text-white outline-none cursur-pointer",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedValue=t.target.multiple?n:n[0]},function(t){return e.onChange(e.selectedValue)}]}},e._l(e.$i18n.locales,(function(n,o){return t("option",{key:o,domProps:{value:n.code}},[e._v(e._s(n.name))])})),0)])])}),[],!1,null,"1825ef36",null);t.default=component.exports}}]);