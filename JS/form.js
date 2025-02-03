

// Adicione um listener de evento ao textarea
const textarea = document.getElementById('texto-3'); // substitua 'texto-1' pelo ID real do seu textarea

textarea.addEventListener('keydown', function (e) {
    // Verifique se a tecla pressionada é a tecla "Tab"
    if (e.key === 'Tab') {
        e.preventDefault(); // Impede o comportamento padrão da tecla "Tab" (mudar para o próximo campo)

        // Insira uma tabulação na posição atual do cursor no textarea
        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Insira a tabulação na posição atual do cursor
        this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);

        // Posicione o cursor após a tabulação
        this.selectionStart = this.selectionEnd = start + 1;
    }
});

/* ------------------------------------------------------------------- */






/* ------------------------------------------------------------------- */


// Função para exibir a lista de anexos
function exibiranexo() {
    var input2 = document.getElementById('anexoimpt');
    var anexoList = document.getElementById('anexoList');

    // Limpa o conteúdo anterior
    anexoList.innerHTML = '';

    // Verifica se há arquivos selecionados
    if (input2.files && input2.files.length > 0) {
        // Converte o FileList para um array para facilitar o manuseio
        let filesArray = Array.from(input2.files);

        filesArray.forEach((file, index) => {
            // Cria o item da lista para cada arquivo
            var listItem = document.createElement('li');
            listItem.textContent = file.name;
            listItem.classList.add('list-anx');

            // Cria o botão de exclusão e associa a função passando o índice
            var deleteButton = document.createElement('a');
            deleteButton.className = 'excluiranx1';
            deleteButton.textContent = '🗑️';
            deleteButton.style.cursor = 'pointer';
            deleteButton.onclick = function () {
                excluirAnexo(index);
            };

            // Adiciona o botão ao item e o item à lista
            listItem.appendChild(deleteButton);
            anexoList.appendChild(listItem);

            // Adiciona um separador (linha horizontal) após o item
            var hrElement = document.createElement('hr');
            hrElement.className = 'hr-form';
            anexoList.appendChild(hrElement);
        });

        anexoList.style.display = 'block'; // Exibe a lista
    } else {
        anexoList.style.display = 'none'; // Oculta se não houver arquivos
    }
}

// Função para excluir um anexo pelo seu índice
function excluirAnexo(index) {
    var inputanx = document.getElementById("anexoimpt");

    // Converte o FileList para um array
    let filesArray = Array.from(inputanx.files);

    // Remove o arquivo no índice informado
    filesArray.splice(index, 1);

    // Cria um novo DataTransfer para recriar o FileList
    var dataTransfer = new DataTransfer();
    filesArray.forEach(function(file) {
        dataTransfer.items.add(file);
    });

    // Atualiza o input com os arquivos restantes
    inputanx.files = dataTransfer.files;

    // Atualiza a exibição da lista de anexos
    exibiranexo();
}


/* ------------------------------------------------------------------- */

const meuFormulario = document.getElementById('meu-formulario');
const camposDeTexto = meuFormulario.querySelectorAll('input');

// Adiciona event listeners para o evento "keydown" nos campos de texto
camposDeTexto.forEach(function (campo) {
    campo.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede o comportamento padrão (envio do formulário)
        }
    });
});


//adicionado para inserir caracter § sempre que tiver uma quebra de linha nos textarea
document.getElementById('submit').addEventListener('click', function () {

    console.log('Botão "Enviar" clicado.');
    const textarea1 = document.getElementById('texto-1');
    const textarea2 = document.getElementById('texto-2');
    const textarea3 = document.getElementById('texto-3');
    const text1 = textarea1.value;
    const text2 = textarea2.value;
    const text3 = textarea3.value;
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');
    const lines3 = text3.split('\n');
    const formattedText1 = lines1.join('§');
    const formattedText2 = lines2.join('§');
    const formattedText3 = lines3.join('§');
    textarea1.value = formattedText1;
    textarea2.value = formattedText2;
    textarea3.value = formattedText3;
});

/* FORM ABRIR CORRIGIR NO HIDDEN DO CSS O DISPLAY DEPOIS */
const openFormButton = document.getElementById('openForm');
const envioForm = document.getElementById('envioForm');
const openAnexo = document.getElementById('openAnexo');
const openErro = document.getElementById('openErro');
const AbrirAnexo = document.getElementById('form_anexo');
const AbrirErro = document.getElementById('form_erro');
const desfoque = document.getElementById('desfoque');
const closeModalButtonForm1 = document.getElementById('closeModalForm');

const senhaContainer = document.getElementById('senhaContainer');
const senhaInput = document.getElementById('senhaInput');
const verificarSenhaButton = document.getElementById('verificarSenha');
const butcard = document.getElementById('but_card');
const butalert = document.getElementById('but_alert');


const philips = '1';

// Função para abrir o campo de senha
function abrirSenhaContainer() {
    senhaContainer.style.display = 'block';
    butcard.style.display = 'none';
    butalert.style.display = 'none';

    // Adicione um ouvinte de evento ao documento para fechar o módulo de senha ao clicar fora dele
    document.addEventListener('click', fecharSenhaContainerAoClicarFora);

    // Foque no campo de senha (assumindo que você tenha um campo de senha)
    const campoSenha = document.getElementById('senhaInput'); // Substitua 'campoSenha' pelo ID do seu campo de senha
    if (campoSenha) {
        campoSenha.focus();
    }
}


// Função para fechar o campo de senha
function fecharSenhaContainer() {
    senhaContainer.style.display = 'none';
    butcard.style.display = '';
    butalert.style.display = '';

    // Remova o ouvinte de evento do documento
    document.removeEventListener('click', fecharSenhaContainerAoClicarFora);
}

// Função para verificar a senha
function verificarSenha() {
    const senhaInserida = senhaInput.value;

    if (senhaInserida === philips) {
        // Senha correta, execute o código desejado
        envioForm.style.display = 'block';
        AbrirErro.style.display = 'block';
        AbrirAnexo.style.display = 'none';
        desfoque.style.display = 'block';
    } else {
        // Senha incorreta, exiba uma mensagem de erro
        alert('Senha incorreta. Por favor, tente novamente.');
        location.reload(); // Isso recarregará a página
    }
}

// Adicione um ouvinte de evento ao botão "Cad. Erro" para abrir o campo de senha
openFormButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Impedir a propagação do evento para o documento
    abrirSenhaContainer();
});

// Adicione um ouvinte de evento ao botão "Verificar" para verificar a senha
verificarSenhaButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Impedir a propagação do evento para o documento
    verificarSenha();
});

// Ouvinte de evento de teclado para o campo de senha
senhaInput.addEventListener('keydown', function (e) {
    // Verifique se a tecla pressionada é a tecla "Enter" (código de tecla 13)
    if (e.key === 'Enter') {
        verificarSenha();
    }
});

// Função para fechar o campo de senha ao clicar fora dele
function fecharSenhaContainerAoClicarFora(e) {
    if (!senhaContainer.contains(e.target)) {
        fecharSenhaContainer();
    }
}

// Impedir a propagação de cliques dentro do módulo de senha para evitar o fechamento imediato
senhaContainer.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Adicione um ouvinte de evento ao documento para fechar o campo de senha ao clicar fora dele
document.addEventListener('click', function () {
    fecharSenhaContainer();
});


// Adicione um ouvinte de evento ao botão "Verificar" para verificar a senha
verificarSenhaButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Impedir a propagação do evento para o documento
    verificarSenha();
});

// Função para fechar o módulo de senha ao clicar fora dele
function fecharSenhaContainerAoClicarFora(e) {
    if (!senhaContainer.contains(e.target)) {
        fecharSenhaContainer();
    }
}

// Impedir a propagação de cliques dentro do módulo de senha para evitar o fechamento imediato
senhaContainer.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Adicione um ouvinte de evento ao documento para fechar o módulo de senha ao clicar fora dele
document.addEventListener('click', function () {
    fecharSenhaContainer();
});

closeModalButtonForm1.addEventListener('click', () => {
    desfoque.style.display = 'none';
});

closeModalButtonForm1.addEventListener('click', () => {
    infoModalForm.style.display = 'none';
});

openAnexo.addEventListener('click', () => {
    AbrirAnexo.style.display = 'block';
    AbrirErro.style.display = 'none';
});

openErro.addEventListener('click', () => {
    AbrirAnexo.style.display = 'none';
    AbrirErro.style.display = 'block';
});

/* FORM FIM */

/* Inicio Ativar botão */

const link1 = document.getElementById('openErro');
const link2 = document.getElementById('openAnexo');
const divCadastroErros = document.getElementById('divCadastroErros');
const divAnexo = document.getElementById('divAnexo');
const openFormButton1 = document.getElementById('openForm');

openFormButton1.addEventListener('click', () => {
    link1.classList.add('active');
    link2.classList.remove('active');
});

link1.addEventListener('click', () => {
    /* openFormButton1.classList.add('active'); */
    link1.classList.add('active');
    link2.classList.remove('active');
});

link2.addEventListener('click', () => {
    link1.classList.remove('active');
    link2.classList.add('active');
});

/* Fim Ativar botão */


function verificarInput(inputId, botaoSelector) {
    var input = document.getElementById(inputId);
    var botaoExcluir = document.querySelector(botaoSelector);

    if (input.files.length > 0) {
        botaoExcluir.style.display = "flex";
    } else {
        botaoExcluir.style.display = "none";
    }
}


/* ------------------------------------------------------------------------------------------------ */

function generateUniqueID() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adicione 1 ao mês, pois os meses são baseados em zero
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    // Combine as informações da data e hora para criar o ID
    const uniqueID = `${day}${month}${year}${hours}${minutes}${seconds}`;

    return uniqueID;
}

// Gere o ID único
const uniqueID = generateUniqueID();

// Atualize o campo "uniqueID" no formulário
document.getElementById('uniqueID').value = uniqueID;

const scriptURL = 'https://script.google.com/macros/s/AKfycbwGu-dbdINKu1X6QXheLUqdSsN-5jBfPKTGUiiM-FzmkyXwd2XVeGXW39Jy_HxFq39gVA/exec'
const form = document.forms['meu-formulario']

let url = "https://script.google.com/macros/s/AKfycbx9WHMIBXeLZFXUE9Bzg8kVxMKvY1s49X7lllKtjdyF-wmTESk01UEy4bS2qEisNyV0tQ/exec";
let urlarq = "https://script.google.com/macros/s/AKfycbxSEY297qIr70StLM_TsUfKXcdPM8GbGoUTrf9MYX1lumUdG2tLn4ekK_FGwi2CNFiv6w/exec";
let file = document.getElementById("imgimpt");
let filearq = document.getElementById("anexoimpt");
let img = document.getElementById("imgimpt1");
let arq = document.getElementById("anexoimpt");
let progress = document.getElementById("progress");
let imageUrl = "";

form.addEventListener('submit', e => {
    e.preventDefault();

    addloading();
    let loadinganx = document.getElementById("loadinganx");
    loadinganx.style.display = 'block'; // Mostra o elemento de carregamento

    let files = file.files;
    let filesarq = filearq.files;

    const fileNames = [];

    // Função para enviar o arquivo anexo e processar a resposta
    const sendAttachmentToDrive = (filearq, index) => {
        return new Promise((resolve, reject) => {
            let fr1 = new FileReader();
            fr1.addEventListener('loadend', () => {
                let res1 = fr1.result;
                let spt1 = res1.split("base64,")[1];
                let obj1 = {
                    base64: spt1,
                    type: filearq.type,
                    name: filearq.name,
                    index: index // Passa o índice para manter a ordem
                }
                // Esta linha envia uma solicitação POST para o URL especificado na variável "url", com o objeto "obj" como corpo da solicitação.
                fetch(urlarq, {
                    method: "POST",
                    body: JSON.stringify(obj1)
                })
                    // Esta linha aguarda a resposta do servidor e a converte para JSON
                    .then(response => response.json())
                    .then(data1 => {
                        fileNames[index] = filearq.name; // Define o nome no índice correto
                        resolve(data1);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
            fr1.readAsDataURL(filearq);

        });
    }



    // Array de promessas para enviar todos os anexos
    const attachmentPromises = Array.from(filesarq).map((filearq, index) => sendAttachmentToDrive(filearq, index));

    // Promessas para envio de imagens e anexos
    const promises = [...attachmentPromises];

    Promise.all(promises)
        .then(data => {

            const attachmentUrls = data.filter(item => item.anexoId).map(item => "https://drive.google.com/u/0/uc?id=" + item.anexoId + "&export=download");

            const nomearq1 = document.getElementById("nomearq1");
            nomearq1.value = fileNames.join('§'); // Concatena os nomes dos arquivos em uma única string

            const anexoimpt2 = document.getElementById("anexoimpt2");
            anexoimpt2.value = attachmentUrls.join('§'); // Concatena os URLs dos anexos em uma única string

            return uploadImage()
                .then(imageUrls => {
                    // Aqui você tem as URLs das imagens, se houver, e pode fazer o que precisar com elas
                    // Por exemplo, adicionar as URLs ao formulário
                    const imgimpt2 = document.getElementById("imgimpt2");
                    imgimpt2.value = imageUrls.join('§'); // Concatena os URLs das imagens em uma única string

                    // Agora que as imagens e anexos foram enviados, você pode enviar o formulário.
                    sendForm();
                })
                .catch(error => {
                    console.error('Erro ao enviar imagens:', error);
                    // Se ocorrer um erro no upload das imagens, continue enviando o formulário sem as imagens
                    sendForm();
                });
        })
        .catch(error => {
            console.error('Erro ao enviar anexos:', error);
        });
});

function sendForm() {

    // Aqui você deve colocar a lógica para enviar o formulário
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.status === 200) {
                // Atualize a imagem no formulário com o URL da imagem
                // No caso de várias imagens, você pode atualizar uma área do formulário ou uma lista de miniaturas, por exemplo.
                console.log('Formulário enviado com sucesso');
                removeloading(); // Remova o alerta de sucesso após o sucesso
            } else {
                console.error('Erro no servidor:', response.status);
            }
        })
        .catch(error => console.error('Erro na requisição:', error.message));
}


const addloading = () => {
    const load = document.querySelector('#load');
    load.innerHTML = `
        <div class="loader">
            <div class="justify-content-center jimu-primary-loading">
            </div> 
        </div>`;

}

const reloadButton = document.querySelector('#reloadButton');
const divToClose = document.querySelector('#alerta1');
const removeloading = () => {
    let loadinganx = document.getElementById("loadinganx");
    loadinganx.style.display = 'none'; // Mostra o elemento de carregamento
    let loadinganxenv = document.getElementById("loadinganxenv");
    loadinganxenv.style.display = 'block'; // Mostra o elemento de carregamento
    const alerta = document.querySelector('#alerta');
    alerta.innerHTML = `
        <div class="d-flex justify-content-center mt-5 h-100" id="alerta1">
            <div class="d-flex align-items-center align-self-center card p-3 text-center cookies">
                <span class="mt-2"><b>Informações salvas com sucesso</b><br><b>Se não aparecer Press "F5"<br> <i>OBRIGADO!</i></b></span>
                <button class="btn btn-dark mt-3 px-4" type="button" id="reloadButton">✔️</button>
            </div>
        </div>`;

    const reloadButton = document.querySelector('#reloadButton');
    const divToClose = document.querySelector('#alerta1');

    reloadButton.addEventListener('click', function () {
        setTimeout(function () {
            divToClose.style.display = 'none';
        });

        setTimeout(function () {
            location.reload();
        }, 2000); // 2000 milissegundos = 2 segundos


    });

}

/* FIM API para enviar Form para Planilha "FORM" */