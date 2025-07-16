const checks = document.querySelectorAll(".check");
checks.forEach( target => {
    target.addEventListener("click", function(){
        this.style.color = "#ccc";
        this.parentNode.style.color = "#ccc";
        this.parentNode.style.textDecoration = "line-through";
    });
});