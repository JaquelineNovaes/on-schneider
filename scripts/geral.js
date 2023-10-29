/*EFEITO DE CARREGAMENTO DA PÁGINA*/
document.addEventListener("DOMContentLoaded", function () {
    const spinnerContainer = document.getElementById("spinnerContainer");
    
    // Mostra o spinner de carregamento ao carregar a página
    spinnerContainer.style.display = "flex";

    // Simula um atraso de carregamento (substitua isso pela lógica de carregamento real)
    setTimeout(function () {
        // Esconde o spinner de carregamento após o carregamento estar completo
        spinnerContainer.style.display = "none";
    }, 500); // Tempo de simulação em milissegundos
});