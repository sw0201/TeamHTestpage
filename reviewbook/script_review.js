/**main화면에 나타나는 독서명언 시간별로 바꾸기**/

var list = ["책 없는 방은 <br> 영혼 없는 육체와 같다. <span>_키케로</span>"];
list.push("내가 세계를 알게 <br>된 것은 책에 의해서였다. <span>_사르트르</span>");
list.push("약으로 병을 고치듯이 <br>독서로 마음을 다스린다. <span>_카이사르</span>");
list.push("한 시간 정도 독서하면<br>어떤 고통도 진정된다. <span>_몽테스키외</span>");
list.push("책이란 넓디넓은 시간의<br>바다를 지나가는 배이다. <span>_프랜시스 베이컨</span>");
list.push("책 속에는 과거의 모든<br>영혼이 가로누워 있다. <span>_칼라일</span>");
var num = 0;
var listnum = 0;

setInterval(function() {
    if (num > 5) {
        num = num %6;
    }
    document.getElementById("write").innerHTML = list[num];
    num ++;
  },3000);

var retitlelist = ["1. 인플레이션에서 살아남기", "2. 역행자", "3. 감정어휘","4. 저만치 혼자서","5. 신기한 맛 도깨비식당 1",
"6. 창조적 사고의 놀라운 역사","7. 불멸의 열쇠","8. <한국 팝의 고고학> 세트","9. 오십의 주역공부","10. 공감하는 유전자"];
var reauthorlist = ["작가: 오건영", "작가: 자청", "작가: 유선경","작가: 김훈","작가: 김용세",
"작가: 슈테판 클라인","작가: 브라이언 무라레스쿠","작가: 신현준 外","작가: 김동완","작가: 요아힘 바우어"];
var reyearlist = ["출판사: 페이지2북스", "출판사: 웅진지식하우스", "출판사: 엔의서재","출판사: 문학동네","출판사: 꿈터",
"출판사: 어크로스","출판사: 흐름출판","출판사: 을유문화사 外","출판사: 다산초당","출판사: 매일경제신문사"];

function alertsubmit() {
  var found = null;
  var rate = document.getElementsByName("rateS");
for(var i=0;i<rate.length;i++) {
if(rate[i].checked == true)
  found = rate[i];
}
if(found != null)
  alert("소중한 " + found.value + "점과 후기 감사합니다.");
else
  alert("평점이 선택되지 않았습니다!");
}
setlistnum(function() {
    document.getElementsByClassName("reviewmain")[0].innerHTML = "변경";
});

function replace(e) {
	location.replace(e.value);
}