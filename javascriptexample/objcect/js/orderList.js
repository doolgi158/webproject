document.getElementById("getSum").addEventListener("click", () => {
    const number1 = document.getElementById("book1").value;
    const number2 = document.getElementById("book2").value;
    const number3 = document.getElementById("book3").value;

    let allBooks = document.getElementById("abook");
    let sumAllBooks = document.getElementById("sabook");

    allBooks.value = parseInt(number1) + parseInt(number2) + parseInt(number3);
    sumAllBooks.value = (parseInt(number1) * 25000) + (parseInt(number2) * 27000) + (parseInt(number3) * 25000);
});

let allBooks = 0;
let sumAllBooks = 0;

document.getElementById("book1").addEventListener("keyup", e => {
    const number = e.target;
    const sum = document.getElementById("sbook1");

    sum.value = parseInt(number.value) * 25000;

    allBooks += parseInt(number.value);
    sumAllBooks += parseInt(sum.value);

    document.getElementById("abook").value = allBooks;
    document.getElementById("sabook").value = sumAllBooks;
});

document.getElementById("book2").addEventListener("keyup", e => {
    const number = e.target;
    const sum = document.getElementById("sbook2");

    sum.value = parseInt(number.value) * 27000;
    
    allBooks += parseInt(number.value);
    sumAllBooks += parseInt(sum.value);

    document.getElementById("abook").value = allBooks;
    document.getElementById("sabook").value = sumAllBooks;
});

document.getElementById("book3").addEventListener("keyup", e => {
    const number = e.target;
    const sum = document.getElementById("sbook3");

    sum.value = parseInt(number.value) * 25000;

    allBooks += parseInt(number.value);
    sumAllBooks += parseInt(sum.value);
    
    document.getElementById("abook").value = allBooks;
    document.getElementById("sabook").value = sumAllBooks;
});

document.getElementById("clear").addEventListener("click", () => {
    const number = document.querySelectorAll("input[type='number']");
    number.forEach(num => {
        num.value = 0;
    });

    allBooks = 0;
    sumAllBooks = 0;
});