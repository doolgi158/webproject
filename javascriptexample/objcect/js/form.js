document.getElementById("signUp").addEventListener("click", () => {
    const name = document.getElementById("user_name");
    if(name.value.replace(/\s/g, "") === "") {
        alert("이름을 입력해 주세요.");
        name.value = "";
        name.focus();
        return;
    }
    
    // 라디오 버튼의 입력여부 검사. !(not): 부정연산자. true->false / false->true
    const genderType = document.getElementsByName("gender");
    if(!genderType[0].checked && !genderType[1].checked){
        alert("성별을 선택해 주세요.");
        return;
    }

    const selectJob = document.getElementById("job");
    if(selectJob.value === ""){
        alert("직업을 선택해 주세요.");
        return;
    }

    const checkHobby = document.getElementsByName("hobby");
    let chk = false;
    for(let i =0; i < checkHobby.length; i++) {
        if(checkHobby[i].checked) {
            chk = true;
            break;
        }
    }

    if(!chk) {
        alert("취미를 선택해 주세요.");
        return;
    }

    let str = inputData();
    str += "\n\n입력하신 내용이 맞습니까?\n[취소를 누르면 모든 데이터가 사라집니다.]";
    // 입력확인하기
    if (confirm(str)) {
        return;
    }else {
        document.getElementById("form").reset();
        return;
    }
});

function inputData(){
    let result = `▶ 이름 : ${document.getElementById("user_name").value}`;
    const gender = document.getElementsByName("gender");
    let sex;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            sex = gender[i].value;
        }
    }
    result += `\n▶ 성별 : ${sex}`
    result += `\n▶ 직업 : ${document.getElementById("job").value}`;

    const hobby = document.getElementsByName("hobby");
    let hby = "";
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            hby += hobby[i].value + " ";
        }
    }
    result += `\n▶ 취미 : ${hby}`;
    
    return result;
}