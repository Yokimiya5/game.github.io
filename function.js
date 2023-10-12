var h4 = document.getElementsByTagName('h4')[0];
var img = document.getElementsByTagName('img');
var li = document.getElementsByTagName('li');
var aim = 0;
        //掷骰子
        h4.onclick = function () {
            num = Math.floor(Math.random() * 10);
            document.getElementsByTagName('p')[0].innerHTML = '你随机选中的数字是：' + num + '<br>😀狗头像将移动' + num + '步';
            //如果num大于5，就等于5，这样我们有50%的概率(随机数字5,6,7,8,9,10)让玩家直接走出格触发我们的恐怖图片
            if (num >= 5) {
                num = 5;
                aim = li[num].offsetLeft;
                //设定一个交kok得函数，用于执行狗头像闪烁效果
                kok();
            } else {
                aim = li[num].offsetLeft; //随机数序号的li格子的左边距等于头像最终移动距离
                   //设定一个交kok得函数，用于执行狗头像闪烁效果
                kok();
            }
        }

        function kok() {
            //设置图片消失然后出现在下一个格子的效果，一闪一闪.........500ms一次
            setInterval(
                function () {
                
                //如果狗头像的左边距离小于最终目标移动距离
                if (img[0].offsetLeft <aim && aim-10>img[0].offsetLeft) 
                {
                    //就每次加10px的移动距离向前移动
                    img[0].style.marginLeft = img[0].offsetLeft + 10 + 'px';
                } 
                else
                {
                    //最终目标距离赋值给狗头像的左边距
                    img[0].style.marginLeft = aim-8+'px';
                    if (num == 5) {
                        document.getElementById('all').style.display = "none";
                        img[1].style.display = "block";
                        document.getElementsByTagName('audio')[0].play();
                    }
                }
            }
            , 500);
        }
