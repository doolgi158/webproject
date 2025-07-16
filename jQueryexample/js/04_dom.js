$("td:eq(4)").css("background", "#ffff00");
$("td").eq(2).css("background", "#ff0000");

// eq(n) 함수는 n번째 index 요소를 반환
// 현재 요소의 다음 요소 반환
$("td:eq(4)").next().css("background-color", "#00ff00");

// 현재 요소의 이전 요소 반환
$("td").eq(4).prev().css("background", "#0000ff");

// 현재 요소의 부모 요소 반환
$("td:eq(4)").parent().css("color", "#ffffff");
$("td:eq(4)").parent().next().css("color", "#ff0000");
$("td").eq(4).parent().prev().css("color", "#0000ff");

// children() 현재 요소의 자식 요소 반환
$("td:eq(4)").parent().next().children().css("text-decoration", "underline");

$("td").eq(4).parent().next().children().eq(1).css("font-weight", "bold");

// $(".item:eq(0)").on("click", () => {
//     const back = document.getElementById("area");
//     back.style.backgroundImage = "url('../image/tree-1.jpg')";
// });

$(".item > a").on("click", function(event) {
    event.preventDefault();

    let image = $(this).html();
    $(this).parent().parent().parent().css({
        "background-image" : "url('" + image + "')"
    });
});