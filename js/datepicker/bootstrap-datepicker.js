/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function(e){function t(){return new Date(Date.UTC.apply(Date,arguments))}function n(){var e=new Date;return t(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}var r=function(t,n){var r=this;this.element=e(t),this.language=n.language||this.element.data("date-language")||"en",this.language=this.language in i?this.language:"en",this.isRTL=i[this.language].rtl||!1,this.format=s.parseFormat(n.format||this.element.data("date-format")||"mm/dd/yyyy"),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&this.component.length===0&&(this.component=!1),this._attachEvents(),this.forceParse=!0,"forceParse"in n?this.forceParse=n.forceParse:"dateForceParse"in this.element.data()&&(this.forceParse=this.element.data("date-force-parse")),this.picker=e(s.template).appendTo(this.isInline?this.element:"body").on({click:e.proxy(this.click,this),mousedown:e.proxy(this.mousedown,this)}),this.isInline?this.picker.addClass("datepicker-inline"):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.isRTL&&(this.picker.addClass("datepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),e(document).on("mousedown",function(t){e(t.target).closest(".datepicker").length===0&&r.hide()}),this.autoclose=!1,"autoclose"in n?this.autoclose=n.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose")),this.keyboardNavigation=!0,"keyboardNavigation"in n?this.keyboardNavigation=n.keyboardNavigation:"dateKeyboardNavigation"in this.element.data()&&(this.keyboardNavigation=this.element.data("date-keyboard-navigation")),this.viewMode=this.startViewMode=0;switch(n.startView||this.element.data("date-start-view")){case 2:case"decade":this.viewMode=this.startViewMode=2;break;case 1:case"year":this.viewMode=this.startViewMode=1}this.todayBtn=n.todayBtn||this.element.data("date-today-btn")||!1,this.todayHighlight=n.todayHighlight||this.element.data("date-today-highlight")||!1,this.weekStart=(n.weekStart||this.element.data("date-weekstart")||i[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.startDate=-Infinity,this.endDate=Infinity,this.daysOfWeekDisabled=[],this.setStartDate(n.startDate||this.element.data("date-startdate")),this.setEndDate(n.endDate||this.element.data("date-enddate")),this.setDaysOfWeekDisabled(n.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled")),this.fillDow(),this.fillMonths(),this.update(),this.showMode(),this.isInline&&this.show()};r.prototype={constructor:r,_events:[],_attachEvents:function(){this._detachEvents(),this.isInput?this._events=[[this.element,{focus:e.proxy(this.show,this),keyup:e.proxy(this.update,this),keydown:e.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:e.proxy(this.show,this),keyup:e.proxy(this.update,this),keydown:e.proxy(this.keydown,this)}],[this.component,{click:e.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:e.proxy(this.show,this)}]];for(var t=0,n,r;t<this._events.length;t++)n=this._events[t][0],r=this._events[t][1],n.on(r)},_detachEvents:function(){for(var e=0,t,n;e<this._events.length;e++)t=this._events[e][0],n=this._events[e][1],t.off(n);this._events=[]},show:function(t){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.update(),this.place(),e(window).on("resize",e.proxy(this.place,this)),t&&(t.stopPropagation(),t.preventDefault()),this.element.trigger({type:"show",date:this.date})},hide:function(t){if(this.isInline)return;this.picker.hide(),e(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||e(document).off("mousedown",this.hide),this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this.element.trigger({type:"hide",date:this.date})},remove:function(){this._detachEvents(),this.picker.remove(),delete this.element.data().datepicker},getDate:function(){var e=this.getUTCDate();return new Date(e.getTime()+e.getTimezoneOffset()*6e4)},getUTCDate:function(){return this.date},setDate:function(e){this.setUTCDate(new Date(e.getTime()-e.getTimezoneOffset()*6e4))},setUTCDate:function(e){this.date=e,this.setValue()},setValue:function(){var e=this.getFormattedDate();this.isInput?this.element.prop("value",e):(this.component&&this.element.find("input").prop("value",e),this.element.data("date",e))},getFormattedDate:function(e){return e==undefined&&(e=this.format),s.formatDate(this.date,e,this.language)},setStartDate:function(e){this.startDate=e||-Infinity,this.startDate!==-Infinity&&(this.startDate=s.parseDate(this.startDate,this.format,this.language)),this.update(),this.updateNavArrows()},setEndDate:function(e){this.endDate=e||Infinity,this.endDate!==Infinity&&(this.endDate=s.parseDate(this.endDate,this.format,this.language)),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(t){this.daysOfWeekDisabled=t||[],e.isArray(this.daysOfWeekDisabled)||(this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)),this.daysOfWeekDisabled=e.map(this.daysOfWeekDisabled,function(e){return parseInt(e,10)}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return;var t=parseInt(this.element.parents().filter(function(){return e(this).css("z-index")!="auto"}).first().css("z-index"))+10,n=this.component?this.component.offset():this.element.offset();this.picker.css({top:n.top+this.height,left:n.left,zIndex:t})},update:function(){var e,t=!1;arguments&&arguments.length&&(typeof arguments[0]=="string"||arguments[0]instanceof Date)?(e=arguments[0],t=!0):e=this.isInput?this.element.prop("value"):this.element.data("date")||this.element.find("input").prop("value"),this.date=s.parseDate(e,this.format,this.language),t&&this.setValue();var n=this.viewDate;this.date<this.startDate?this.viewDate=new Date(this.startDate):this.date>this.endDate?this.viewDate=new Date(this.endDate):this.viewDate=new Date(this.date),n&&n.getTime()!=this.viewDate.getTime()&&this.element.trigger({type:"changeDate",date:this.viewDate}),this.fill()},fillDow:function(){var e=this.weekStart,t="<tr>";while(e<this.weekStart+7)t+='<th class="dow">'+i[this.language].daysMin[e++%7]+"</th>";t+="</tr>",this.picker.find(".datepicker-days thead").append(t)},fillMonths:function(){var e="",t=0;while(t<12)e+='<span class="month">'+i[this.language].monthsShort[t++]+"</span>";this.picker.find(".datepicker-months td").html(e)},fill:function(){var n=new Date(this.viewDate),r=n.getUTCFullYear(),o=n.getUTCMonth(),u=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,a=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,f=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,l=this.endDate!==Infinity?this.endDate.getUTCMonth():Infinity,c=this.date&&this.date.valueOf(),h=new Date;this.picker.find(".datepicker-days thead th:eq(1)").text(i[this.language].months[o]+" "+r),this.picker.find("tfoot th.today").text(i[this.language].today).toggle(this.todayBtn!==!1),this.updateNavArrows(),this.fillMonths();var p=t(r,o-1,28,0,0,0,0),d=s.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(d),p.setUTCDate(d-(p.getUTCDay()-this.weekStart+7)%7);var v=new Date(p);v.setUTCDate(v.getUTCDate()+42),v=v.valueOf();var m=[],g;while(p.valueOf()<v){p.getUTCDay()==this.weekStart&&m.push("<tr>"),g="";if(p.getUTCFullYear()<r||p.getUTCFullYear()==r&&p.getUTCMonth()<o)g+=" old";else if(p.getUTCFullYear()>r||p.getUTCFullYear()==r&&p.getUTCMonth()>o)g+=" new";this.todayHighlight&&p.getUTCFullYear()==h.getFullYear()&&p.getUTCMonth()==h.getMonth()&&p.getUTCDate()==h.getDate()&&(g+=" today"),c&&p.valueOf()==c&&(g+=" active");if(p.valueOf()<this.startDate||p.valueOf()>this.endDate||e.inArray(p.getUTCDay(),this.daysOfWeekDisabled)!==-1)g+=" disabled";m.push('<td class="day'+g+'">'+p.getUTCDate()+"</td>"),p.getUTCDay()==this.weekEnd&&m.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(m.join(""));var y=this.date&&this.date.getUTCFullYear(),b=this.picker.find(".datepicker-months").find("th:eq(1)").text(r).end().find("span").removeClass("active");y&&y==r&&b.eq(this.date.getUTCMonth()).addClass("active"),(r<u||r>f)&&b.addClass("disabled"),r==u&&b.slice(0,a).addClass("disabled"),r==f&&b.slice(l+1).addClass("disabled"),m="",r=parseInt(r/10,10)*10;var w=this.picker.find(".datepicker-years").find("th:eq(1)").text(r+"-"+(r+9)).end().find("td");r-=1;for(var E=-1;E<11;E++)m+='<span class="year'+(E==-1||E==10?" old":"")+(y==r?" active":"")+(r<u||r>f?" disabled":"")+'">'+r+"</span>",r+=1;w.html(m)},updateNavArrows:function(){var e=new Date(this.viewDate),t=e.getUTCFullYear(),n=e.getUTCMonth();switch(this.viewMode){case 0:this.startDate!==-Infinity&&t<=this.startDate.getUTCFullYear()&&n<=this.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==Infinity&&t>=this.endDate.getUTCFullYear()&&n>=this.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.startDate!==-Infinity&&t<=this.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==Infinity&&t>=this.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}},click:function(n){n.stopPropagation(),n.preventDefault();var r=e(n.target).closest("span, td, th");if(r.length==1)switch(r[0].nodeName.toLowerCase()){case"th":switch(r[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var i=s.modes[this.viewMode].navStep*(r[0].className=="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,i);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,i)}this.fill();break;case"today":var o=new Date;o=t(o.getFullYear(),o.getMonth(),o.getDate(),0,0,0),this.showMode(-2);var u=this.todayBtn=="linked"?null:"view";this._setDate(o,u)}break;case"span":if(!r.is(".disabled")){this.viewDate.setUTCDate(1);if(r.is(".month")){var a=r.parent().find("span").index(r);this.viewDate.setUTCMonth(a),this.element.trigger({type:"changeMonth",date:this.viewDate})}else{var f=parseInt(r.text(),10)||0;this.viewDate.setUTCFullYear(f),this.element.trigger({type:"changeYear",date:this.viewDate})}this.showMode(-1),this.fill()}break;case"td":if(r.is(".day")&&!r.is(".disabled")){var l=parseInt(r.text(),10)||1,f=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth();r.is(".old")?a===0?(a=11,f-=1):a-=1:r.is(".new")&&(a==11?(a=0,f+=1):a+=1),this._setDate(t(f,a,l,0,0,0,0))}}},_setDate:function(e,t){if(!t||t=="date")this.date=e;if(!t||t=="view")this.viewDate=e;this.fill(),this.setValue(),this.element.trigger({type:"changeDate",date:this.date});var n;this.isInput?n=this.element:this.component&&(n=this.element.find("input")),n&&(n.change(),this.autoclose&&(!t||t=="date")&&this.hide())},moveMonth:function(e,t){if(!t)return e;var n=new Date(e.valueOf()),r=n.getUTCDate(),i=n.getUTCMonth(),s=Math.abs(t),o,u;t=t>0?1:-1;if(s==1){u=t==-1?function(){return n.getUTCMonth()==i}:function(){return n.getUTCMonth()!=o},o=i+t,n.setUTCMonth(o);if(o<0||o>11)o=(o+12)%12}else{for(var a=0;a<s;a++)n=this.moveMonth(n,t);o=n.getUTCMonth(),n.setUTCDate(r),u=function(){return o!=n.getUTCMonth()}}while(u())n.setUTCDate(--r),n.setUTCMonth(o);return n},moveYear:function(e,t){return this.moveMonth(e,t*12)},dateWithinRange:function(e){return e>=this.startDate&&e<=this.endDate},keydown:function(e){if(this.picker.is(":not(:visible)")){e.keyCode==27&&this.show();return}var t=!1,n,r,i,s,o;switch(e.keyCode){case 27:this.hide(),e.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;n=e.keyCode==37?-1:1,e.ctrlKey?(s=this.moveYear(this.date,n),o=this.moveYear(this.viewDate,n)):e.shiftKey?(s=this.moveMonth(this.date,n),o=this.moveMonth(this.viewDate,n)):(s=new Date(this.date),s.setUTCDate(this.date.getUTCDate()+n),o=new Date(this.viewDate),o.setUTCDate(this.viewDate.getUTCDate()+n)),this.dateWithinRange(s)&&(this.date=s,this.viewDate=o,this.setValue(),this.update(),e.preventDefault(),t=!0);break;case 38:case 40:if(!this.keyboardNavigation)break;n=e.keyCode==38?-1:1,e.ctrlKey?(s=this.moveYear(this.date,n),o=this.moveYear(this.viewDate,n)):e.shiftKey?(s=this.moveMonth(this.date,n),o=this.moveMonth(this.viewDate,n)):(s=new Date(this.date),s.setUTCDate(this.date.getUTCDate()+n*7),o=new Date(this.viewDate),o.setUTCDate(this.viewDate.getUTCDate()+n*7)),this.dateWithinRange(s)&&(this.date=s,this.viewDate=o,this.setValue(),this.update(),e.preventDefault(),t=!0);break;case 13:this.hide(),e.preventDefault();break;case 9:this.hide()}if(t){this.element.trigger({type:"changeDate",date:this.date});var u;this.isInput?u=this.element:this.component&&(u=this.element.find("input")),u&&u.change()}},showMode:function(e){e&&(this.viewMode=Math.max(0,Math.min(2,this.viewMode+e))),this.picker.find(">div").hide().filter(".datepicker-"+s.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}},e.fn.datepicker=function(t){var n=Array.apply(null,arguments);return n.shift(),this.each(function(){var i=e(this),s=i.data("datepicker"),o=typeof t=="object"&&t;s||i.data("datepicker",s=new r(this,e.extend({},e.fn.datepicker.defaults,o))),typeof t=="string"&&typeof s[t]=="function"&&s[t].apply(s,n)})},e.fn.datepicker.defaults={},e.fn.datepicker.Constructor=r;var i=e.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today"}},s={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(e){return e%4===0&&e%100!==0||e%400===0},getDaysInMonth:function(e,t){return[31,s.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(e){var t=e.replace(this.validParts,"\0").split("\0"),n=e.match(this.validParts);if(!t||!t.length||!n||n.length==0)throw new Error("Invalid date format.");return{separators:t,parts:n}},parseDate:function(n,s,o){if(n instanceof Date)return n;if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(n)){var u=/([-+]\d+)([dmwy])/,a=n.match(/([-+]\d+)([dmwy])/g),f,l;n=new Date;for(var c=0;c<a.length;c++){f=u.exec(a[c]),l=parseInt(f[1]);switch(f[2]){case"d":n.setUTCDate(n.getUTCDate()+l);break;case"m":n=r.prototype.moveMonth.call(r.prototype,n,l);break;case"w":n.setUTCDate(n.getUTCDate()+l*7);break;case"y":n=r.prototype.moveYear.call(r.prototype,n,l)}}return t(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),0,0,0)}var a=n&&n.match(this.nonpunctuation)||[],n=new Date,h={},p=["yyyy","yy","M","MM","m","mm","d","dd"],d={yyyy:function(e,t){return e.setUTCFullYear(t)},yy:function(e,t){return e.setUTCFullYear(2e3+t)},m:function(e,t){t-=1;while(t<0)t+=12;t%=12,e.setUTCMonth(t);while(e.getUTCMonth()!=t)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)}},v,m,f;d.M=d.MM=d.mm=d.m,d.dd=d.d,n=t(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0);var g=s.parts.slice();a.length!=g.length&&(g=e(g).filter(function(t,n){return e.inArray(n,p)!==-1}).toArray());if(a.length==g.length){for(var c=0,y=g.length;c<y;c++){v=parseInt(a[c],10),f=g[c];if(isNaN(v))switch(f){case"MM":m=e(i[o].months).filter(function(){var e=this.slice(0,a[c].length),t=a[c].slice(0,e.length);return e==t}),v=e.inArray(m[0],i[o].months)+1;break;case"M":m=e(i[o].monthsShort).filter(function(){var e=this.slice(0,a[c].length),t=a[c].slice(0,e.length);return e==t}),v=e.inArray(m[0],i[o].monthsShort)+1}h[f]=v}for(var c=0,b;c<p.length;c++)b=p[c],b in h&&!isNaN(h[b])&&d[b](n,h[b])}return n},formatDate:function(t,n,r){var s={d:t.getUTCDate(),D:i[r].daysShort[t.getUTCDay()],DD:i[r].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:i[r].monthsShort[t.getUTCMonth()],MM:i[r].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};s.dd=(s.d<10?"0":"")+s.d,s.mm=(s.m<10?"0":"")+s.m;var t=[],o=e.extend([],n.separators);for(var u=0,a=n.parts.length;u<a;u++)o.length&&t.push(o.shift()),t.push(s[n.parts[u]]);return t.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};s.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+s.headTemplate+"<tbody></tbody>"+s.footTemplate+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+"</table>"+"</div>"+"</div>",e.fn.datepicker.DPGlobal=s}(window.jQuery);