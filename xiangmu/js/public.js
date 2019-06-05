//格式化日期
function createDate(){
	var d = new Date();
	
	var y = d.getFullYear();
	var m = d.getMonth();
	var mydate = d.getDate();
	var day = d.getDay();
	var h = d.getHours();
	var mut = d.getMinutes();
	var s = d.getSeconds();
	
	switch(day){
		case 0:day = "星期日";break;
		case 1:day = "星期一";break;
		case 2:day = "星期二";break;
		case 3:day = "星期三";break;
		case 4:day = "星期四";break;
		case 5:day = "星期五";break;
		case 6:day = "星期六";break;
	}
	
	return y+"年"+createZero(m+1)+"月"+createZero(mydate)+" "+day+" "+createZero(h)+":"+createZero(mut)+":"+createZero(s);
}

//数值的补零
function createZero(n){
	if(n < 10){
		return "0"+n
	}else{
		return n
	}
}

//计算两个日期之间的差
function dateDiff(oldDate,newDate){
	var d1 = new Date(oldDate);
	var d2 = newDate ? new Date(newDate) : new Date();
	var t = Math.abs(d1-d2);
	
	var d = parseInt(t/1000/60/60/24);
	var h = parseInt((t-d*24*60*60*1000)/1000/60/60)
	var m = parseInt((t-d*24*60*60*1000-h*60*60*1000)/1000/60)
	var s = parseInt((t - d*24*60*60*1000-h*60*60*1000-m*60*1000)/1000)
	
	return {
		d:d,
		h:h,
		m:m,
		s:s
	};
}

//获取非行内样式
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,false)[attr];
	}
}


//阻止事件冒泡
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation()
	}else{
		e.cancelBubble = true;
	}
}

//阻止默认事件
function stopDefault(e){
	if(e.preventDefault){
		e.preventDefault()
	}else{
		e.returnValue = false
	}
}

//DOM2级事件绑定
function addEvent(ele,type,callback){
	if(ele.addEventListener){
		ele.addEventListener(type,callback)
	}else{
		ele.attachEvent("on"+type,callback)
	}
}

//DOM2级事件删除
function removeEvent(ele,type,foo){
	if(ele.removeEventListener){
		ele.removeEventListener(type,foo)
	}else{
		ele.detachEvent("on"+type,foo)
	}
}




