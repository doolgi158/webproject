function grade() {
    const kor = document.getElementById("korea");
    const eng = document.getElementById("english");
    const mth = document.getElementById("math");

    getSum(kor, eng, mth);
    getAvg(kor, eng, mth);
    getGrade(kor, eng, mth);
}

function getSum(kor, eng, mth) {
    const allsum = document.getElementById("sum");

    allsum.value = parseInt(kor.value) + parseInt(eng.value) + parseInt(mth.value);
}

function getAvg(kor, eng, mth) {
    const avg = document.getElementById("average");

    avg.value = (parseInt(kor.value) + parseInt(eng.value) + parseInt(mth.value)) / 3;
}

function getGrade(kor, eng, mth) {
    const isgrade = document.getElementById("grade-abc");
    const avg = (parseInt(kor.value) + parseInt(eng.value) + parseInt(mth.value)) / 3;

    if(avg >= 90) {
        isgrade.value = "A";
    }else if(avg >= 80) {
        isgrade.value = "B";
    }else if(avg >= 70) {
        isgrade.value = "C";
    }else if(avg >= 60) {
        isgrade.value = "D";
    }else if(avg >= 50){
        isgrade.value = "E";
    }else {
        isgrade.value = "F";
    }
}

let random = Math.floor(Math.random() * 10) + 1;
let count = 1;
function match() {
    const input = document.getElementById("guessnumber");
    const countnum = document.getElementById("countnumber");
    const hinttext = document.getElementById("hint");

    console.log(random);

    if(input.value > random){
        hinttext.value = "입력한 숫자가 높습니다."
    }else if(input.value < random){
        hinttext.value = "입력한 숫자가 낮습니다."
    }else {
        hinttext.value = "축하합니다. 정답입니다."
    }
    countnum.value = count;
    count += 1;

    input.focus();
}

function display() {
    const display = document.getElementById("h1toh6");
    
    for(let i = 1; i < 7; i++) {
        display.innerHTML += `<h${i}>Hello JavaScript</h${i}>`;
    }
    for(let i = 1; i < 4; i++) {
        display.innerHTML += `<img src="../image/${i}.jpg"/>`;
    }
}

function gugudan() {
    const gugu = document.getElementById("gugutable");
    let data = "";  
    for(let i = 2; i < 10; i++){
        data += "<table>";
        data += `<tr><th>${i}단</th></tr>`;
        for(let j = 1; j < 10; j++){
            data += `<tr><td>${i} x ${j} = ${i * j}</td></tr>`;
        }
        data += "</table>";
    }

    gugu.innerHTML = data;
}