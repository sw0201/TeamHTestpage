/**main화면에 나타나는 독서명언 시간별로 바꾸기**/

var list = ["책 없는 방은 <br> 영혼 없는 육체와 같다. <span>_키케로</span>"];
list.push("내가 세계를 알게 <br>된 것은 책에 의해서였다. <span>_사르트르</span>");
list.push("약으로 병을 고치듯이 <br>독서로 마음을 다스린다. <span>_카이사르</span>");
list.push("한 시간 정도 독서하면<br>어떤 고통도 진정된다. <span>_몽테스키외</span>");
list.push("책이란 넓디넓은 시간의<br>바다를 지나가는 배이다. <span>_프랜시스 베이컨</span>");
list.push("책 속에는 과거의 모든<br>영혼이 가로누워 있다. <span>_칼라일</span>");
var num = 0;

setInterval(function() {
    if (num > 5) {
        num = num %6;
    }
    document.getElementById("write").innerHTML = list[num];
    num ++;
  },3000);
