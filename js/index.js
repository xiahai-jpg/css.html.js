// 获取当前文档中指定id的元素,id元素里面的li元素
var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById('lists').getElementsByTagName('ul');
console.log(lists);
// 遍历
for(var i = 0; i<tabs.length;i++){
    tabs[i].onclick = showlist;
}



function showlist() {
    for(var i = 0; i<tabs.length;i++){
    //    this 代表咱们点击的对象，我们点第一个，就代表第一个
        if(tabs[i] === this){
            tabs[i].className='active';
            lists[i].className = 'active';
        }else{
            tabs[i].className='';
            lists[i].className = '';
        }
       
        // 设置为空，就相当于点击时没有效果
        // tabs[i].className='';

    }
  }
  var seckilnav = document.getElementById('seckilnav')
  window.onscroll = function () {  
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop <= 260){
        seckilnav.className = "seckill-nav"
           
        }else{
            seckilnav.className = "seckill-nav seckill-flexd"
        }
    }
    