const formulario = document.getElementById("formulario");
const mensagem = document.getElementById('mensagem');

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const especialidade = document.getElementById("especialidade").value;
    const data = document.getElementById("data").value;

    const turnoSelecionado = document.querySelector('input[name="turno"]:checked'

    );

    const jaPaciente = document.getElementById("ja_paciente").checked;

    const temConvenio = document.getElementById("convenio").checked;

    if (
        nome === "" || 
        email === "" || 
        telefone === ""||
        especialidade ===""||
        data === ""|| 
        !turnoSelecionado
    ) {
        mensagem.textContent= "Por favor, preencha nome,e-mail, telefone, especialidade, data e turno antes de enviarr";
        mensagem.className = "erro";
        return;
    }
    mensagem.textContent = "Formulário enviado com sucesso! Obigada," + nome + ".";
    mensagem.className = "sucesso";
    formulario.reset();
});
