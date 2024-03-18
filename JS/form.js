

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

function exibirImagem() {
    var input1 = document.getElementById('imgimpt');
    var imgContainer = document.getElementById('imgimpt-container');

    // Limpa o conteúdo anterior
    imgContainer.innerHTML = '';

    // Verifica se algum arquivo foi selecionado
    if (input1.files && input1.files.length > 0) {
        for (var i = 0; i < input1.files.length; i++) {
            var reader = new FileReader();

            // Utiliza uma IIFE para capturar o valor correto de img
            (function (imgIndex) {
                reader.onload = function (e) {
                    var img = document.createElement('img');

                    img.title = input1.files[imgIndex].name; // Corrigido aqui

                    // Atribui um id único para cada imagem
                    img.id = 'img-preview' + imgIndex;

                    img.src = e.target.result;
                    img.className = 'img-preview';

                    // Cria um botão de exclusão para cada imagem
                    var deleteButton = document.createElement('a');
                    deleteButton.innerHTML = `<img src="IMG/lixo1.png" class="lixo1">`;
                    deleteButton.className = 'lixeiraIMG';
                    deleteButton.onclick = function () {
                        excluirImagem(imgIndex);
                    };


                    // Cria um contêiner para a imagem e o botão de exclusão
                    var container = document.createElement('div');
                    container.className = 'image-container'; // Adiciona uma classe para o contêiner
                    container.appendChild(img);
                    container.appendChild(deleteButton);

                    imgContainer.appendChild(container);
                };
            })(i);

            reader.readAsDataURL(input1.files[i]);
        }

        // Exibe o contêiner
        imgContainer.style.display = 'flex';
    } else {
        // Oculta o contêiner se nenhum arquivo estiver selecionado
        imgContainer.style.display = 'none';
    }
}

function excluirImagem(imgIndex) {
    var inputimg = document.getElementById("imgimpt");
    inputimg.value = ""; // Limpa o valor do input
    verificarInput('imgimpt', '.excluirimg'); // Oculta o botão novamente

    var imgContainer = document.getElementById('imgimpt-container');

    // Remove a imagem e o botão de exclusão correspondentes ao índice
    var containerToRemove = document.getElementById('img-preview' + imgIndex);
    imgContainer.removeChild(containerToRemove.parentNode); // Remove o contêiner que envolve a imagem e o botão

    if (imgContainer.childElementCount === 0) {
        // Se não houver mais imagens no contêiner, oculta-o
        imgContainer.style.display = 'none';
    }
}



/* ------------------------------------------------------------------- */


function exibiranexo() {
    var input2 = document.getElementById('anexoimpt');
    var anexoList = document.getElementById('anexoList');

    // Limpa o conteúdo anterior
    anexoList.innerHTML = '';

    // Verifica se algum arquivo foi selecionado
    if (input2.files && input2.files.length > 0) {
        for (var i = 0; i < input2.files.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = input2.files[i].name;
            listItem.classList.add('list-anx');

            // Adiciona o botão de exclusão
            var deleteButton = document.createElement('a');
            deleteButton.className = 'excluiranx1';
            deleteButton.textContent = '🗑️';
            deleteButton.onclick = function () {
                excluirAnexo(this.parentElement);
            };

            // Adiciona o item da lista e o botão de exclusão à lista de anexos
            listItem.appendChild(deleteButton);
            anexoList.appendChild(listItem);

            // Adiciona uma linha hr
            var hrElement = document.createElement('hr');
            hrElement.className = 'hr-form'; // Substitua 'suaClasse' pelo nome da classe desejada
            anexoList.appendChild(hrElement);
        }

        anexoList.style.display = 'block'; // Exibe a lista de anexos
    } else {
        anexoList.style.display = 'none'; // Oculta a lista se nenhum arquivo estiver selecionado
    }
}

function excluirAnexo(item) {
    var inputanx = document.getElementById("anexoimpt");
    inputanx.value = ""; // Limpa o valor do input

    var anxContainer = document.getElementById('anexoList');

    // Remove o item da lista
    anxContainer.removeChild(item);

    // Remove o próximo elemento se for um <hr>
    var nextElement = item.nextSibling;
    if (nextElement && nextElement.nodeType === 1 && nextElement.tagName.toLowerCase() === 'hr') {
        anxContainer.removeChild(nextElement);
    }

    // Oculta o contêiner se não houver mais anexos
    if (anxContainer.children.length === 0) {
        anxContainer.style.display = 'none';
    }
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