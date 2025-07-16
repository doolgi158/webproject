document.getElementById("word").addEventListener("keydown", e => {
    if(e.key === "Enter") {
        e.preventDefault();
console.log(e);
        const word = e.target;
        const result = document.getElementById("result");

        result.value += word.value + "\n";

        word.value = "";
        word.focus();
    }
});

document.getElementById("btnPrint").addEventListener("click", () => {
    const width = parseInt(document.getElementById("widthTxt").value);
    const height = parseInt(document.getElementById("heightTxt").value);
    const color = document.getElementById("color").value;
    const contents = document.getElementById("contentsTxt").value.trim();
    const display = document.getElementById("display");

    display.style.backgroundColor = color;
    display.style.width = `${width}px`;
    display.style.height = `${height}px`;
    display.innerHTML = contents;

    // 텍스트 중앙 정렬
    display.style.display = "flex";
    display.style.justifyContent = "center";    // 수평 중앙
    display.style.alignItems = "center";    // 수직 중앙
});