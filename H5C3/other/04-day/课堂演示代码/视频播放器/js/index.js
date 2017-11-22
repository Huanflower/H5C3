/*
* @Author: dhl
* @Date:   2017-10-25 14:40:35
* @Last Modified by:   dhl
* @Last Modified time: 2017-10-25 16:17:02
*/

// 获取video标签
var video=document.querySelector("video");

//获取当前总时长控件
var total_time=document.querySelector(".total_time");

var current_time=document.querySelector(".current_time");

var progress=document.querySelector(".progress");

//获取当前播放按钮
var play=document.querySelector(".play a");

// 当前进度条
var line=document.querySelector(".line");

//全屏效果
var full=document.querySelector(".full");

var totalTime=0;

var currentTime=0;

var progress_width=0;


//当视频资源可以播放的时候
video.addEventListener("canplay", function(){

	 //显示视频控件
	 this.style.display="block";

	 //获取总时长
	 totalTime=this.duration;
	     var h=Math.floor(totalTime/3600); 
		 var m=Math.floor(totalTime/60%60);
		 var s=Math.floor(totalTime%60);

	 	 h=h>=10?h:"0"+h;
	 	 m=m>=10?m:"0"+m;
	 	 s=s>=10?s:"0"+s;

	 total_time.innerHTML=h+":"+m+":"+s;


	 //设置播放事件
	 play.onclick=function(){
	 	  var state=video.paused;
	 	  if(state){

	 	  	 //暂停状态 要播放
	 	  	 video.play();

	 	  }else {
	 	  	 //播放状态 要进行暂停
	 	  	 video.pause();
	 	  }
	 	  play.classList.toggle("fa-pause");
	 }


	 //获取当前播放时间
	 video.addEventListener("timeupdate",function(){

	 	 currentTime=video.currentTime;
	 	 var h=Math.floor(currentTime/3600); 
		 var m=Math.floor(currentTime/60%60);
		 var s=Math.floor(currentTime%60);
	 	 h=h>=10?h:"0"+h;
	 	 m=m>=10?m:"0"+m;
	 	 s=s>=10?s:"0"+s;
	 	 current_time.innerHTML=h+":"+m+":"+s;


	 	 //加载进度条（当前时间/总时长*100=宽度%）
	 	
	 	  progress_width=currentTime/totalTime*100+"%";

	 	  progress.style.width=progress_width;

	 })

	 //跳播
	 line.onclick=function(e){
	 	//设置当前播放时间位置
	 	video.currentTime=e.offsetX/this.clientWidth*totalTime;
	 }
	 // 全屏
	 full.onclick=function(){
	 	video.webkitRequestFullScreen();
	 }
});
