export function enviarEmail (){
    const form = document.querySelector("form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Houve um erro ao enviar a mensagem. Tente novamente.");
        }
    });
}