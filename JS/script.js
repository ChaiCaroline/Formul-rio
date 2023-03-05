const formularioEscolha = document.getElementById('menu-escolha')
const ir = document.querySelector('.escolha-IR');
const imposto = document.getElementById('imposto');
const fundo = document.querySelectorAll('#fundo');
const informacao = document.querySelectorAll('.informacao');

const formulario = document.getElementById('IR');

const name = document.getElementById("input-name");
const telefone = document.getElementById('input-phone');
const email = document.getElementById('input-email');
const endereco = document.getElementById('input-endereco');
const titulo = document.getElementById('input-titulo');
const selecionarIR = document.getElementById('select-ano-ir');
const declaracaoIR = document.getElementById('input-ir');
const depedenteSim = document.getElementById('sim-dep');
const depedenteNao = document.getElementById('nao-dep');
const depedenteCPF = document.getElementById('input-dependentes-cpf');
const depedenteNome = document.getElementById('input-dependentes-nome');
const radiosDependentes = document.getElementsByName('drone')

const mensagemName = document.getElementById('name-verificar');
const mensagemTelefone = document.getElementById('tel-verificar');
const mensagemEmail = document.getElementById('email-verificar');
const mensagemEndereco = document.getElementById('endereco-verificar');
const mensagemTitulo = document.getElementById('titulo-verificar');
const mensagemIR = document.getElementById('ir-verificar');
const mensagemIRDeclaracao = document.getElementById('ir-verificar-declaraca');
const mensagemDepedentes = document.getElementById('dependentes-verificar');
const mensagemInformacaoDepedentes = document.getElementById('depedentes-verificar-informacoes');

let submitFormulario = 0;

fundo.forEach(element => {
    element.addEventListener('mouseout', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (element == fundo[0]) {
            informacao[0].style.display = 'none';
        } else if (element == fundo[1]) {
            informacao[1].style.display = 'none';
        } else {
            informacao[2].style.display = 'none';
        }


    })
});

fundo.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (element == fundo[0]) {
            informacao[0].style.display = 'flex';
        } else if (element == fundo[1]) {
            informacao[1].style.display = 'flex';
        } else {
            informacao[2].style.display = 'flex';
        }


    })
});

ir.addEventListener('click', () => {
    formularioEscolha.style.display = 'none';
    imposto.style.display = 'flex';
});

radiosDependentes.forEach(element => {

    element.addEventListener('change', (event) => {
        if (event.target.value === 'sim') {
            depedenteCPF.removeAttribute("disabled");
            depedenteNome.removeAttribute("disabled");
        }
    })
});


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    submitFormulario = 0;

    if (submitFormulario < 5) {

        if (telefone.value === '' || telefone.value.length < 10) {
            mensagemTelefone.textContent = "Digite um Telefone Correto";
            telefone.classList.add('error')
        } else {
            telefone.classList.remove('error');
            mensagemTelefone.textContent = ''
            telefone.classList.add('sucess');
            submitFormulario++
        }

        if (name.value === '' || name.value.length < 8) {
            mensagemName.textContent = "Digite nome";
            name.classList.add('error')
        } else {
            name.classList.remove('error');
            mensagemName.textContent = ''
            name.classList.add('sucess');
            submitFormulario++
        }

        if (endereco.value === '' || endereco.value.length < 15) {
            mensagemEndereco.textContent = "Digite Endereço completo";
            endereco.classList.add('error')
        } else {
            endereco.classList.remove('error');
            mensagemEndereco.textContent = ''
            endereco.classList.add('sucess');
            submitFormulario++
        }

        if (selecionarIR.value != 'Seleciona-opcao') {
            selecionarIR.classList.remove('error');
            mensagemIR.textContent = ''
            selecionarIR.classList.add('sucess');
            declaracaoIR.removeAttribute("disabled");
            submitFormulario++

        } else {
            mensagemIR.textContent = "Selecione uma opção";
            selecionarIR.classList.add('error')
        }

    }

    if (submitFormulario === 5) {
        formulario.submit()
    }

});
