
document.body.addEventListener('touchstart', function(){
	//event.preventDefault()
});
document.body.addEventListener('touchmove', function(){
	//event.preventDefault()
});



//初始化日历
function CreateCalendar(selector, args){
	 this._args = $.extend({
		theme : null,
	 	display : 'bottom',
	 	swipeDirection : 'vertical',
	 	multiSelect : false,
        selectDate : new Date(),
        selectedValues : new Date(),
        minDate : new Date(),
        maxDate : null,
        marked : [],
        onDayChange : null,
        onMonthLoaded : null,
        changedHide : true
    }, ( args || {} ) );
	this.dom = selector instanceof $ ? selector : $( selector );
	this._init();
}

CreateCalendar.prototype = {

	_init : function(){
		var self = this;
		var opt = {
	        theme: self._args.theme?self._args.theme:'mobiscroll', //皮肤样式
	        buttons: [],
	        mode: 'scroller', //日期选择模式
	        layout: 'liquid',
	        swipeDirection: self.swipeDirection,
	        display: self._args.display,
	   		events: true,
	        lang : 'zh',
	        multiSelect : self._args.multiSelect?true:false,
	        selectedValues: self._args.selectedValues ,
	        dateFormat: 'yy-mm-dd', // 日期格式
	        endYear: self._args.selectedValues.getFullYear() + 1, //结束年份
	        minDate: self._args.minDate,
	        maxDate: self._args.maxDate,
	        marked: self._args.marked,
	        showDivergentDays: self._args.showDivergentDays?true:false,
	        //readonly : true,
	        onDayChange : function(day, inst){
	        	if(self._args.onDayChange){
	        		self._args.onDayChange(day, inst);
	        		self._args.changedHide && self.dom.mobiscroll('hide');
	        	}
	        },
	        onCancel: function(){
		    },
		    onSelect : function(d){

		    },
		    onMonthLoaded : function(year, month, inst){
		    	if(self._args.onMonthLoaded){
		    		self._args.onMonthLoaded(year, month, inst);
		    	}
			}
	    }
	    this.dom.mobiscroll().calendar(opt);
	},
	/*
	* 设置选择的值
	* @date {Date Object}
	* @textDom {jQuery Object}
	* @isSimple {boolean} 是否为简单模式，如：2015-1-8
	*/
	setResult : function(date, textDom, isSimple){

		var day = date.getDay();
    	if(day==0){
    		day ='星期日';
    	}else if(day==1){
    		day = '星期一'
    	}else if(day==2){
    		day = '星期二'
    	}else if(day==3){
    		day = '星期三'
    	}else if(day==4){
    		day = '星期四'
    	}else if(day==5){
    		day = '星期五'
    	}else if(day==6){
    		day = '星期六'
    	}

    	if(isSimple===true){
    		textDom.html( date.getFullYear() + '-' + (date.getMonth() +1) + '-' + date.getDate());
    	}else{
    		textDom.html( date.getFullYear() + '年' + (date.getMonth() +1) + '月' + date.getDate() + ' &nbsp;' + day);
    	}
	}
}



function TimeOut(option){
	//var opt = option || {};
	this.elem = $(option.selector); //选择器
	this.maxtime = option.maxtime; //倒计时秒
	this.callback = option.callback; //倒计时结束时callback
	this.timeback = option.timeback; //剩余多少时间时callback
	this.timebacktt = option.timebacktt;
	this.mselem = option.mselem || "";


	this.timeouttxt = option.timeouttxt || '<li class="ff">00</li><li>时</li><li class="ff">00</li><li>分</li><li class="ff">00</li><li>秒</li>';//增加倒计时结束时显示的文字这一参数
	this.settime();
	this.mselem && this.maxtime>0 && this.setMs();
}
TimeOut.prototype = {
	settime : function(){
		if(this.maxtime>=0){
			var  day = Math.floor(this.maxtime/(60*60*24)),
				hour = Math.floor(this.maxtime/(60*60)%24),
				minutes = Math.floor(this.maxtime/60%60),
				seconds = Math.floor(this.maxtime%60),
				msg = "",
				dayTxt = "0",
				hourTxt = "0";
			day<10 ? day = "0" + day : day;
			hour<10 ? hour = "0"+hour : hour;
			if(this.maxtime>3600){
				dayTxt = day;
				hourTxt = hour;
			}


			seconds<10 ? seconds = "0" + seconds : seconds;
			minutes<10 ? minutes = "0" + minutes : minutes;
			if(this.maxtime < 300){
				msg = '<li class="ff">00</li><li>时</li><li class="ff">' + minutes + '</li>'  +'<li>分</li><li class="ff">' + seconds + '</li><li>秒</li>';
			} else{

				var d = Number(dayTxt);
				var dayHtml = '<li class="ff">' + dayTxt + '</li><li>天</li>';
				if(!d){
					dayHtml = '';
				}
				msg = dayHtml + '<li class="ff">' + hourTxt + '</li><li>时</li>' + '<li class="ff">' + minutes + '</li>'  +'<li>分</li><li class="ff" >' + seconds + '</li><li>秒</li>';
			}
			this.elem.html(msg);
			this.maxtime--;
			this.elem.attr("data-time",this.maxtime);
			 if(this.maxtime<this.timebacktt){
			 	this.timeback && this.timeback();
			 }
			 if(this.maxtime<1){
			 	this.callback && this.callback();
			 }
		}else{
			clearInterval(this.timer);
			this.elem.html(this.timeouttxt);//增加倒计时结束时显示的文字这一参数
		}
		if(typeof(this.timer)!="undefined"){
			return;
		}
		this.setInter()
	},
	setInter:function(){
		var that = this;
		this.timer = setInterval(function(){that.settime()},1000);
	},
	clear:function(){
		var that = this;
		if(typeof(this.timer)!="undefined"){
			clearInterval(this.timer);
		}
	},
	setMs:function(){
		var ms = 9,
			that = this;
		var setMs = setInterval(function(){
			that.mselem.html(" . "+ms);
			ms--;
			if(ms<0){
				ms = 9;
			}
		},100);
	}
}
	document.body.addEventListener('touchstart', function () {});

	$(".backBtn_lx,.backBtn,.home_btn,.back_btn,.choseHotel_btn,.return_btn").on('click',function(){
		history.go(-1);
	});




var DivScroll = function( layerNode ){
        //如果没有这个元素的话，那么将不再执行下去

        if ( document.getElementsByClassName( layerNode ).length==0 ) return ;
        this.popupLayer =document.getElementsByClassName(layerNode) ;
        this.startX = 0 ;
        this.startY = 0 ;
        for(var i=0;i< this.popupLayer.length;i++){
        	 this.popupLayer[i].addEventListener('touchstart', function (e) {
	            this.startX = e.changedTouches[0].pageX;
	            this.startY = e.changedTouches[0].pageY;
	        }, false);
	        // 仿innerScroll方法
	        this.popupLayer[i].addEventListener('touchmove', function (e) {

	            e.stopPropagation();

	            var deltaX = e.changedTouches[0].pageX - this.startX;
	            var deltaY = e.changedTouches[0].pageY - this.startY;

	            // 只能纵向滚
	            if(Math.abs(deltaY) < Math.abs(deltaX)){
	                e.preventDefault();
	                return false;
	            }

	            if( this.offsetHeight + this.scrollTop >= this.scrollHeight){
	                if(deltaY < 0) {
	                    e.preventDefault();
	                    return false;
	                }
	            }
	            if(this.scrollTop === 0){
	                if(deltaY > 0) {
	                    e.preventDefault();
	                    return false;
	                }
	            }
	            // 会阻止原生滚动
	            // return false;
	        },false);
        }


    }



       var provinceList;
	   function citySelect(selector,args){
		   this.dom = selector instanceof $ ? selector : $( selector );
		   this.args=args;
		   this.init();
		}
		citySelect.prototype={
			init:function(){
				var _self=this;
				$.ajax({
					url:_self.args.provinceUrl,
					type:"get",
					success:function(r){
						provinceList=r;
					}
				})
				this.dom.on('click',function(){
					_self.province=_self.dom.find('.citySelectProvince');
					_self.city=_self.dom.find('.citySelectCity');
					_self.provinceCode=_self.province.attr("code");
					_self.provinceName=_self.province.val();
					_self.cityCode=_self.city.attr("code");
					_self.cityName=_self.city.val();
					_self.show();
				})
				this.showHtml();
			},
			showHtml:function(){
				var _self=this;
				if($(".citySelectPop").length<1){
					var cityBox=$('<div class="citySelect hide citySelectPop"></div>');
					this.cityBox=cityBox;
					var cityBoxmain=$('<div class="citySelect_main"></div>');
					this.closeBtn=$('<i class="closeBtnText">×</i>');
					var boxTitle=$('<h3 class="citySelect_title borderBottom">所在地区</h3>');
					boxTitle.append(this.closeBtn);
					var boxTab=$('<div class="citySelect_tab borderBottom"></div>');
					this.boxProvenceTab=$('<span class="colorYellow selectProvenceTab">请选择</span>');
					this.boxCityTab=$('<span class="selectCityTab hide">请选择</span>');
					boxTab.append(this.boxProvenceTab);
					boxTab.append(this.boxCityTab);
					var citySelect_List=$('<div class="citySelect_List"></div>');
					this.citySelect_provinc=$('<ul class="citySelect_province"></ul>');
					this.citySelect_city=$('<ul class="citySelect_city"></ul>');
					citySelect_List.append(this.citySelect_provinc);
					citySelect_List.append(this.citySelect_city);
					cityBoxmain.append(boxTitle);
					cityBoxmain.append(boxTab);
					cityBoxmain.append(citySelect_List);
					cityBox.append(cityBoxmain);
					$("body").append(cityBox);
					this.closeBtn.on('click',function(){
						_self.close();
					});
					this.boxProvenceTab.on('click',function(){
						_self.boxProvenceTab.addClass("colorYellow");
						_self.boxCityTab.removeClass("colorYellow");
						_self.citySelect_city.removeClass("citySelect_show");
					});
					this.boxCityTab.on('click',function(){
						_self.boxProvenceTab.removeClass("colorYellow");
						_self.boxCityTab.addClass("colorYellow");
						_self.citySelect_city.addClass("citySelect_show");
					});

					this.citySelect_provinc.on('click',"li",function(){
						if(!$(this).hasClass("colorYellow")){
							_self.provinceCode=$(this).attr("code");
							_self.provinceName=$(this).html();
							_self.boxProvenceTab.html(_self.provinceName);
							_self.boxCityTab.html("请选择");
							_self.cityAjax(_self.provinceCode);
							$(this).addClass("colorYellow").siblings().removeClass("colorYellow");
							_self.citySelect_provinc.prepend($(this));
						};
						_self.boxProvenceTab.removeClass("colorYellow");
						_self.boxCityTab.addClass("colorYellow").removeClass("hide");
						_self.citySelect_city.addClass("citySelect_show");
					});

					this.citySelect_city.on('click',"li",function(){
						_self.cityCode=$(this).attr("code");
						_self.cityName=$(this).html();
						_self.boxCityTab.html(_self.cityName)
						_self.select();
					});
					$("body,html").on('click',function(){
						_self.close();
					});
					this.dom.on('click',function(event){
						event.stopPropagation();
					});
					$(".citySelect_main").on('click',function(event){
						event.stopPropagation();
					});
				};

			},
			show:function(){
				var _self=this;
				this.cityBox.removeClass("hide");
				if(_self.citySelect_provinc.find("li").length>0||!provinceList) return;
				_self.citySelect_provinc.html("");
				for(var i in provinceList){
					_self.citySelect_provinc.append('<li code="'+i.code+'">'+i.name+'</li>');
				};
			},
			cityAjax:function(key){
				var _self=this;
				_self.citySelect_city.html("");
				$.ajax({
					url:_self.args.cityUrl+"?pronvinceCode="+key,
					type:"get",
					success:function(r){
						for(var c in r){
							_self.citySelect_city.append('<li code="'+c.code+'">'+c.name+'</li>');
						}
					}
				})
			},
			close:function(){
				$(".citySelectPop").addClass("hide");
			},
			select:function(){
				var _self=this;
				_self.province.val(_self.provinceName).attr("code",_self.provinceCode);
				_self.city.val(_self.cityName).attr("code",_self.cityCode);
				this.args.select(_self.provinceName,_self.provinceCode,_self.cityName,_self.cityCode);
				_self.close();
			}
		}



//日期
function dateNew(selector,args){
	    this.dom = selector instanceof $ ? selector : $( selector );
	    var dayNow=parseInt(new Date().getFullYear())+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate();
        this._defaults={
            minDay:dayNow,
            dateS:"",
            dateE:"",
	   		maxDay:"",
	   		dayNub:31,
	   		selected:""
        }
        $.extend(this._defaults, args);
        this.dayNow=dayNow;
        if(this._defaults.dateS&&this._defaults.dateE){
        	if(this._defaults.dateS.val()!=""){
        		this.dateS=this._defaults.dateS.val();
			}
			if(this._defaults.dateE.val()!=""){
        		this.dateE=this._defaults.dateE.val();
			}
			this._defaults.maxDay=this._defaults.maxDay?this._defaults.maxDay:this.addDate(this._defaults.minDay,90);
			this.returnMonth();
	   		this.showModel();
        }
	}
    dateNew.prototype={
    	Rnub:function(day){ //月份天数小于10时前面加0 例如:05
            if(parseInt(day)<10){
                return "0"+parseInt(day);
            }else{
                return day+"";
            }
        },
    	showModel:function(){  //显示日历,点击选择入离
    		var _self=this;
    		for(var i=0;i<this.monthNub;i++){
    			var monthS_y=parseInt(this._defaults.minDay.split("-")[0]);
				var monthS_m=parseInt(this._defaults.minDay.split("-")[1]);
				if(monthS_m+i>12){
					monthS_y++;
				}else{
					monthS_m+=i;
				};
				var dayBox=$("<div class='time_list radius_li'></div>");
				var dayT=$("<div class='time_title'><span>"+monthS_y+"年"+monthS_m+"月</span></div>");
				var dayL=$("<div class='month_list'></div>");
				var dayU=$("<ul class='clearfix date_flights'></ul>");
				var dateList=_self.new_Datepicker(monthS_y+"-"+monthS_m+"-1");
				//console.log(dateList)
				dateList.forEach(function(v){
					if(v.d==""){
						dayU.append("<li></li>");
					}else{
						if(_self.ComparisonSize(v.d,_self.dayNow)){
							if(_self.dateS&&_self.Comparison(_self.dateS,v.d)){
								_self.dateS_li=$("<li class='click_li click_li_S' date="+v.d+"><em class='dateBgL'></em><em class='dateBgR'></em><i>"+v.n+"<em>入</em></i></li>");
								dayU.append(_self.dateS_li);
							}else if(_self.dateE&&_self.Comparison(_self.dateE,v.d)){
								_self.dateE_li=$("<li class='click_li click_li_E' date="+v.d+"><em class='dateBgL'></em><em class='dateBgR'></em><i>"+v.n+"<em>离</em></i></li>")
								dayU.append(_self.dateE_li);
							}else{
								if(_self.ComparisonSizeBig(v.d,_self._defaults.maxDay)){
									dayU.append("<li class='colorYellow colorgray' date="+v.d+"><i>"+v.n+"</i></li>");
								}else{
									v.week?dayU.append("<li class='colorYellow' date="+v.d+"><em class='dateBgL'></em><em class='dateBgR'></em><i>"+v.n+"</i></li>"):dayU.append("<li date="+v.d+"><em class='dateBgL'></em><em class='dateBgR'></em><i>"+v.n+"</i></li>");

								}
							}
						}else{
							dayU.append("<li class='colorgray'><i>"+v.n+"</i></li>");
						}
					}
				});
				dayL.append(dayU);
				dayBox.append(dayT);
				dayBox.append(dayL);
				_self.dom.append(dayBox);
    		};
    		_self.areaList();
    		this.dom.find("li").on('click',function(){
    			if($(this).html()==""||$(this).hasClass("colorgray")||$(this).hasClass("colorgrayC")){
    				return;
    			}else{
    				var _thisDate=$(this).attr("date");
    				console.log(_self.dateS,_self.dateE)
    				if(_self.dateS&&!_self.dateE){
    					if(_self.ComparisonSizeBig(_self.dateS,_thisDate)){
    						_self.dateS_li.removeClass("click_li click_li_S click_li_Ss").find("i em").remove();
	    					$(this).removeClass("click_li_M").addClass("click_li click_li_S click_li_Ss").find("i").append("<em>入</em>");
	    					_self.dateS_li=$(this);
	    					_self.dateS=_thisDate;
    					}else if($(this).hasClass("click_li")){
    						return;
    					}else{
    						if(_self.dateE_li&&!_self.dateE_li.hasClass("click_li_S")){
	    						_self.dateE_li.removeClass("click_li click_li_E").find("i em").remove();
	    					}
	    					$(this).removeClass("click_li_M").addClass("click_li click_li_E").find("i").append("<em>离</em>");
	    					_self.dateS_li.removeClass("click_li_Ss");
	    					_self.dateE_li=$(this);
	    					_self.dateE=_thisDate;
	    					_self._defaults.dateS.val(_thisDate);
	    					_self._defaults.dateE.val(_self.dateS);
	    					_self._defaults.selected&&_self._defaults.selected(_self.dateS,_self.dateE,_self.formatDate(_self.dateS),_self.formatDate(_self.dateE),_self.DateDiff(_self.dateS,_self.dateE))
    					}
    				}else{
    					if(_self.dateS_li){
    						_self.dateS_li.removeClass("click_li click_li_S click_li_Ss").find("i em").remove();
    						_self.dateE_li.removeClass("click_li click_li_E").find("i em").remove();
    					}
    					$(this).removeClass("click_li_M").addClass("click_li click_li_S click_li_Ss").find("i").append("<em>入</em>");
    					_self.dateS_li=$(this);
    					_self.dateE="";
    					_self.dateS=_thisDate;
    				}
    				_self.areaList();
    			}
    		});

        },
        areaList:function(){ //给选中日期段加背景颜色
        	var _self=this;
        	if(!_self.dateS&&!_self.dateE) return;
        	this.dom.find("li").each(function(){
        		if($(this).html()==""||$(this).hasClass("colorgray")||$(this).hasClass("click_li")){
        			return
        		};
        		var _thisDate=$(this).attr("date");
        		if(_self.ComparisonSizeBig(_thisDate,_self.addDate(_self.dateS,_self._defaults.dayNub-1))&&_self.dateS&&!_self.dateE){
        			$(this).addClass("colorgrayC");
        		}else{
        			$(this).removeClass("colorgrayC");
        		}
        		if(_self.ComparisonSizeBig(_thisDate,_self.dateS)&&_self.ComparisonSizeBig(_self.dateE,_thisDate)){
        			$(this).addClass("click_li_M");
        		}else{
        			$(this).removeClass("click_li_M");
        		}
        	});
        },
        Comparison:function(a,b){ //比较日期a是否等于b
			var aD=a.split("-");
			var bD=b.split("-");
			if(aD[0]==bD[0]&&parseInt(aD[1])==parseInt(bD[1])&&parseInt(aD[2])==parseInt(bD[2])){
				return true;
			}else{
				return false;
			}
		},
		ComparisonSize:function(a,b){ //比较日期a是否小于b
			var aD=a.split("-");
			var bD=b.split("-");
			if(aD[0]<bD[0]){
				return false;
			}else if(parseInt(aD[1])<parseInt(bD[1])){
				return false;
			}else if(aD[0]==bD[0]&&parseInt(aD[1])==parseInt(bD[1])&&parseInt(aD[2])<parseInt(bD[2])){
				return false;
			}else{
				return true;
			}
		},
		ComparisonSizeBig:function(a,b){ //比较日期a是否大于b
			var aD=a.split("-");
			var bD=b.split("-");
			if(aD[0]>bD[0]){
				return true;
			}else if(parseInt(aD[1])>parseInt(bD[1])){
				return true;
			}else if(aD[0]==bD[0]&&parseInt(aD[1])==parseInt(bD[1])&&parseInt(aD[2])>parseInt(bD[2])){
				return true;
			}else{
				return false;
			}
		},
		formatDate:function(now){ //返回日期字符串 "5月23日"
			var nowDay=now.split("-");
			var year=nowDay[0];
			var month=nowDay[1];
			var date=nowDay[2];
			return this.Rnub(month)+"月"+this.Rnub(date)+"日";
		},
		DateDiff:function(startDate,endDate)  //返回入离的晚数
		{
		    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();
		    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();
		    var dates = Math.abs((startTime - endTime))/(1000*60*60*24);
		    return  dates;
		},
		addDate:function(day,num){ //日期加减
			if(typeof(day)=="string"){
				day = day.replace(/-/g,"/");
			}
			var a = new Date(day)
			a = a.valueOf()
			a = a + num * 24 * 60 * 60 * 1000;
			a = new Date(a);
			return this.getDate(a);
		},
		getDate:function(day){ 	//返回日期字符串 "2017-05-03"
			var year=day.getFullYear();
			var month=day.getMonth()+1;
			var date=day.getDate();
			return year+"-"+month+"-"+date;
		},
		returnMonth:function(){ //返回可选月份数量
			var monthS_y=parseInt(this._defaults.minDay.split("-")[0]);
			var monthS_m=parseInt(this._defaults.minDay.split("-")[1]);
			var monthE_y=parseInt(this._defaults.maxDay.split("-")[0]);
			var monthE_m=parseInt(this._defaults.maxDay.split("-")[1]);
			if(monthE_y>monthS_y){
				monthE_m+=12;
			}
			this.monthNub=(monthE_m-monthS_m+1);
		},
		new_Datepicker:function(day){ //返回当个月的天数集合
			var _day=day.split("-");
			var _oneDay=_day[0]+"/"+_day[1]+"/"+1;
			var dayNub=new Date(_day[0],_day[1],0).getDate();
			var oneWeek=new Date(_oneDay).getDay();
			var _dayList=[];
			switch(oneWeek){
				case 0:
				pushList(6);
				break;
				case 1:
				pushList(0);
				break;
				case 2:
				pushList(1);
				break;
				case 3:
				pushList(2);
				break;
				case 4:
				pushList(3);
				break;
				case 5:
				pushList(4);
				break;
				case 6:
				pushList(5);
				break;
			}

			function pushList(n){
				for(var i=0;i<n;i++){
					var monthDay={
						n:"",
						d:""
					};
					_dayList.push(monthDay)
				}
			};
			for(var d=1;d<dayNub+1;d++){
				var monthDay={
					n:d,
					d:_day[0]+"-"+_day[1]+"-"+d
				};
				if(new Date(_day[0]+"/"+_day[1]+"/"+d).getDay()==0||new Date(_day[0]+"/"+_day[1]+"/"+d).getDay()==6){
					monthDay.week=true;
				}else{
					monthDay.week=false;
				}
				_dayList.push(monthDay)
			};
			return _dayList;
		}
    }



export default{
  dateNew
}
