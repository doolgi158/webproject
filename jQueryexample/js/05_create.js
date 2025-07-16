let number = 1;

$("button:eq(0)").on("click", function() {
    // 새로운 요소의 생성
    let li1 = $("<li>").css("color", "red").html("추가항목" + (number++));
    li1.addClass("liEvent");
    let li2 = $("<li>").css("color", "green").html("추가항목" + (number++));
    li2.addClass("liEvent");
    let li3 = $("<li>").css("color", "blue").html("추가항목" + (number++));
    li3.addClass("liEvent");

    // 새로 생성된 요소에 대한 이벤트 추가
    li1.click(function() {
        $(this).remove();
    });

    li2.click(function() {
        $(this).remove();
    });

    li3.click(function() {
        $(this).remove();   // 이벤트가 발상한 li 자체를 삭제
    });

    // $("ul").append(li1);    // ul 태그에 동적요소로 추가한 li 태그 추가
    // $("ul").append(li2);
    // $("ul").append(li3);
    // 위와 동일한 표현
    $("ul").append(li1).append(li2).append(li3)
});

// 동적 요소에 이벤트 처리
// $(document).on("click", ".liEvent", function(){
//     $(this).remove();
// });

$("button:eq(1)").on("click", function() {
    $("ul").empty();    // ul 태그를 두고 하위 요소만 삭제
    // $("ul").remove();   // ul 태그를 포함하여 하위 요소 삭제
})