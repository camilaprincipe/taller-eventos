document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");

    btn.addEventListener("click", (event) => {
        alert("Hola! Soy el div");
        event.stopPropagation();
    });
    
});







