document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM cargado"); // Verifica si este mensaje aparece en la consola
    var registerButton = document.getElementById("register-button");
    if (registerButton) {
        console.log("Botón encontrado"); // Verifica si este mensaje aparece en la consola
        registerButton.addEventListener("click", function() {
            console.log("Clic en el botón"); // Verifica si este mensaje aparece en la consola
            window.location.href = "registrologin.html";
        });
    } else {
        console.error("No se encontró el botón");
    }
});
