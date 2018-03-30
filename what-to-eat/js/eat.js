var g_Interval = 1;
var g_PersonCount = 25;
var g_Timer;
var running = false;
function beginRndNum(trigger){
 if(running){
 running = false;
 clearTimeout(g_Timer); 
 $(trigger).val("开始");
 $('#ResultNum').css('color','#00cc75');
 }
 else{
 running = true;
 $('#ResultNum').css('color','black');
 $(trigger).val("停止");
 beginTimer();
 }
}

function updateRndNum(){
 var arr=[
 "云端",
 "粤菜",
 "嘉和一品",
 "杜小月",
 "西少爷",
 "心泰心厨",
 "热啊",
 "跃界",
 "渝是乎",
 "萨莉亚",
 "宏状元", 
 "外婆家",
 "鳗鱼饭",
 "面香"
 ]
 var num = Math.floor(Math.random()*g_PersonCount+1);
 var num2 = arr[num];//把random出来的数字变成数组下标
 $('#ResultNum').html(num2);
}

function beginTimer(){
 g_Timer = setTimeout(beat, g_Interval);
}

function beat() {
 g_Timer = setTimeout(beat, g_Interval);
 updateRndNum();
}