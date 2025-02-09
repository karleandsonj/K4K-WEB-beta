/* Scroll do ASIDE */

const customScroll = document.getElementById('custom-scroll');
const scrollContent = document.querySelector('.scroll-content');
const scrollUp = document.querySelector('.scroll-up');
const scrollDown = document.querySelector('.scroll-down');

scrollUp.addEventListener('click', () => {
  scrollContent.scrollTop -= 50; // Ajuste o valor conforme necessário
});

scrollDown.addEventListener('click', () => {
  scrollContent.scrollTop += 50; // Ajuste o valor conforme necessário
});

/* FIM DO Scroll do ASIDE */

/* ------------------------------------------------------------------------------------------------------- */

/* Ativar SECTION */

function showSection(sectionId) {
  
  var sections = document.querySelectorAll("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(sectionId).style.display = "block";
  
}

function consultarCNPJ(secConsultaCNPJ) {
  
  var sections = document.querySelectorAll("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(secConsultaCNPJ).style.display = "block";
}

function showSpedModific(spedModificaçao) {
  let mainSpedModificaçao = document.querySelector('.mainSpedModificaçao')
  var sections = document.querySelectorAll("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(spedModificaçao).style.display = "block";
  mainSpedModificaçao.style.display = 'block';

  abrirAbasSped();
}

/* FIM DO Ativar SECTION */

/* ------------------------------------------------------------------------------------------------------- */

/* Reload ao clicar na LOGO ou nos X */

function reloadPage() {
  location.reload();
}

/* FIM DO Reload ao clicar na LOGO ou nos X */

/* ------------------------------------------------------------------------------------------------------- */

/*  */

function configurarPesquisa(inputElement, tabelaElement) {
  inputElement.addEventListener('input', function () {
    const termoPesquisa = inputElement.value.toLowerCase();
    const linhas = tabelaElement.getElementsByTagName('tr');

    for (let i = 0; i < linhas.length; i++) {
      const linha = linhas[i];
      const colunas = linha.getElementsByTagName('td');
      let corresponde = false;

      for (let j = 0; j < colunas.length; j++) {
        const coluna = colunas[j];
        if (coluna) {
          const texto = coluna.textContent.toLowerCase();

          if (texto.includes(termoPesquisa)) {
            corresponde = true;
            break;
          }
        }
      }

      if (corresponde) {
        linha.style.display = '';
      } else {
        linha.style.display = 'none';
      }
    }
  });
}

/* PESQUISA */
document.addEventListener('DOMContentLoaded', function () {
  const inputPesquisasga = document.getElementById('pesquisa_sga');
  const tbodysga = document.getElementById('tabela_sga');
  configurarPesquisa(inputPesquisasga, tbodysga);

  const inputPesquisasgaboxnew = document.getElementById('pesquisa_sgaboxnew');
  const tbodysgaboxnew = document.getElementById('tabela_sgaboxnew');
  configurarPesquisa(inputPesquisasgaboxnew, tbodysgaboxnew);

  const inputPesquisasobox = document.getElementById('pesquisa_sobox');
  const tbodysobox = document.getElementById('tabela_sobox');
  configurarPesquisa(inputPesquisasobox, tbodysobox);

  const inputPesquisasgabox2010 = document.getElementById('pesquisa_sgabox2010');
  const tbodysgabox2010 = document.getElementById('tabela_sgabox2010');
  configurarPesquisa(inputPesquisasgabox2010, tbodysgabox2010);

  const inputPesquisasgalite = document.getElementById('pesquisa_sgalite');
  const tbodysgalite = document.getElementById('tabela_sgalite');
  configurarPesquisa(inputPesquisasgalite, tbodysgalite);

  const inputPesquisagourmet = document.getElementById('pesquisa_gourmet');
  const tbodygourmet = document.getElementById('tabela_gourmet');
  configurarPesquisa(inputPesquisagourmet, tbodygourmet);

  const inputPesquisasgaos = document.getElementById('pesquisa_sgaos');
  const tbodysgaos = document.getElementById('tabela_sgaos');
  configurarPesquisa(inputPesquisasgaos, tbodysgaos);

  const inputPesquisasgaotica = document.getElementById('pesquisa_sgaotica');
  const tbodysgaotica = document.getElementById('tabela_sgaotica');
  configurarPesquisa(inputPesquisasgaotica, tbodysgaotica);

  const inputPesquisasped = document.getElementById('pesquisa_sped');
  const tbodysped = document.getElementById('tabela_sped');
  configurarPesquisa(inputPesquisasped, tbodysped);

  const inputPesquisamonitor = document.getElementById('pesquisa_monitor');
  const tbodymonitor = document.getElementById('tabela_monitor');
  configurarPesquisa(inputPesquisamonitor, tbodymonitor);

  const inputPesquisarobot = document.getElementById('pesquisa_robot');
  const tbodyrobot = document.getElementById('tabela_robot');
  configurarPesquisa(inputPesquisarobot, tbodyrobot);

  const inputPesquisaetiquetas = document.getElementById('pesquisa_etiquetas');
  const tbodyetiquetas = document.getElementById('tabela_etiquetas');
  configurarPesquisa(inputPesquisaetiquetas, tbodyetiquetas);

  const inputPesquisadispositivo = document.getElementById('pesquisa_dispositivo');
  const tbodydispositivo = document.getElementById('tabela_dispositivo');
  configurarPesquisa(inputPesquisadispositivo, tbodydispositivo);

  const inputPesquisaimpressora = document.getElementById('pesquisa_impressora');
  const tbodyimpressora = document.getElementById('tabela_impressora');
  configurarPesquisa(inputPesquisaimpressora, tbodyimpressora);

  const inputPesquisatef = document.getElementById('pesquisa_tef');
  const tbodytef = document.getElementById('tabela_tef');
  configurarPesquisa(inputPesquisatef, tbodytef);

});
/* PESQUISA FIM */

// Fechar o card/modal quando o botão de fechar é clicado
const closeModalButtonForm = document.getElementById('closeModalForm');
const infoModalForm = document.getElementById('envioForm');

closeModalButtonForm.addEventListener('click', () => {
  infoModalForm.style.display = 'none';
});

// Função para adicionar classe de seleção ao link clicado e remover de outros links
function setSelected(link) {
  var links = document.querySelectorAll('.icons'); // Seleciona todos os links
  links.forEach(function (el) {
    el.classList.remove('selected'); // Remove a classe 'selected' de todos os links
  });
  link.classList.add('selected'); // Adiciona a classe 'selected' ao link clicado
}

const container = document.querySelector('.imagem-div-main');
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');

/* Function do CNPJ */

function removeCaracterCNPJ() {
  let inpCNPJ = document.querySelector('#inpCNPJid').value;

  let removeCaracCNPJ = inpCNPJ.replace(/[\.\,\-\/\\_\*\!\'\"\:\#\(\)\;\ ]/g, '');

  document.querySelector('#inpCNPJid').value = removeCaracCNPJ;

/*   console.log(removeCaracCNPJ); */
  
}


function pesquisaCNPJ() {
  removeCaracterCNPJ();

  let sites = document.querySelector('.divSitesConsulta');
  let pesquisa = document.querySelector('.divPesquisaCNPJ');
  let btnlimparPesquisa = document.querySelector('#limparPesquisa');
  let btnConsulta = document.querySelector('#pesquisarCNPJ');
  let inpCNPJ = document.querySelector('#inpCNPJid');
  let EmpresaInput = document.querySelector('.empresaInp');
  let EnderecoInput = document.querySelector('.enderInp');
  let loading = document.querySelector('.loadConsultCNPJ');
  let progressBar = document.querySelector('.progressbar');

  let CNPJ1 = inpCNPJ.value;

  if (CNPJ1 !== '') {
      // Reseta a barra de progresso e exibe o loading
      loading.style.display = 'block';
      resetProgressBar(); // Função para resetar a barra de progresso


      // Inicia a consulta
      consultarCNPJ(CNPJ1);

      async function consultarCNPJ(cnpjconst) {
          try {
              // Monta a URL com o CNPJ desejado
              const url = `https://brasilapi.com.br/api/cnpj/v1/`;
              let urlcnpj = url + cnpjconst;

              // Atualiza a barra de progresso para 20%
              updateProgressBar(20);

              // Faz a requisição à API
              const response = await fetch(urlcnpj);

              // Verifica se a resposta foi bem-sucedida
              if (!response.ok) {
                  throw new Error(`Erro na requisição: ${response.status}`);
              }

              // Atualiza a barra de progresso para 40%
              updateProgressBar(40);

              // Converte a resposta para JSON
              const dados = await response.json();

              // Atualiza a barra de progresso para 60%
              updateProgressBar(60);

              // Extrai os dados da resposta
              const { cnpj, razao_social, nome_fantasia, ddd_telefone_1, data_inicio_atividade, descricao_situacao_cadastral } = dados;
              const { cep, municipio, logradouro, codigo_municipio, numero, bairro, uf } = dados;

              // Exibe os dados da empresa
              EmpresaInput.innerHTML = `
                  <h4>EMPRESA</h4>
                  <p>CNPJ: ${cnpj}</p>
                  <p>Razão Social: ${razao_social}</p>
                  <p>Fantasia: ${nome_fantasia}</p>
                  <p>Telefone: ${ddd_telefone_1}</p>
                  <p>Data Abertura: ${data_inicio_atividade}</p>
                  <p>Situação: ${descricao_situacao_cadastral}</p>
                  <hr>
              `;

              // Exibe os dados do endereço
              EnderecoInput.innerHTML = `
                  <h4>ENDEREÇO</h4>
                  <p>CEP: ${cep}</p>
                  <p>Cidade: ${municipio} - ${uf}</p>
                  <p>Cod. Municipio: ${codigo_municipio}</p>
                  <p>Logradouro: ${logradouro}</p>
                  <p>Bairro: ${bairro}</p>
                  <p>Numero: ${numero}</p>
              `;

              // Atualiza a barra de progresso para 80%
              updateProgressBar(80);

              // Exibe a seção de pesquisa e oculta a seção de sites
              sites.style.display = 'none';
              pesquisa.style.display = 'block';
              btnlimparPesquisa.style.display = 'flex';
              btnConsulta.style.display = 'none';

              // Completa a barra de progresso
              updateProgressBar(100);
          } catch (erro) {
              // Em caso de erro, exibe uma mensagem e reseta a interface
              updateProgressBar(100, true); // Barra de erro
              setTimeout(() => {
                  alert('Erro ao consultar o CNPJ. Verifique o console para mais detalhes.');
                  console.error('Erro ao consultar o CNPJ:', erro);
                  limparPesquisa();
              }, 1000);
          } finally {
              // Reseta a barra de progresso e oculta o loading após 1 segundo
              setTimeout(() => {
                  resetProgressBar();
                  loading.style.display = 'none';
              }, 1000);
          }
      }
  } else {
      alert('Por favor, informe um CNPJ válido!');
  }
}

// Função para resetar a barra de progresso
function resetProgressBar() {
  let progressBar = document.querySelector('.progressbar');
  progressBar.value = 0;
  progressBar.classList.remove('progressbarErr');
}

// Função para atualizar a barra de progresso
function updateProgressBar(value, isError = false) {
  let progressBar = document.querySelector('.progressbar');
  progressBar.value = value;
  if (isError) {
      progressBar.classList.add('progressbarErr');
  } else {
      progressBar.classList.remove('progressbarErr');
  }
}

// Função para limpar a pesquisa e resetar a interface
function limparPesquisa() {
  let sites = document.querySelector('.divSitesConsulta');
  let pesquisa = document.querySelector('.divPesquisaCNPJ');
  let btnlimparPesquisa = document.querySelector('#limparPesquisa');
  let btnConsulta = document.querySelector('#pesquisarCNPJ');
  let EmpresaInput = document.querySelector('.empresaInp');
  let EnderecoInput = document.querySelector('.enderInp');
  let inpCNPJ = document.querySelector('#inpCNPJid');

  // Limpa os campos de exibição
  EmpresaInput.innerHTML = '';
  EnderecoInput.innerHTML = '';

  // Reseta o campo de entrada
  inpCNPJ.value = '';

  // Restaura a interface para o estado inicial
  sites.style.display = 'block';
  pesquisa.style.display = 'none';
  btnlimparPesquisa.style.display = 'none';
  btnConsulta.style.display = 'flex';

  // Reseta a barra de progresso
  resetProgressBar();
}

/* FIM Function do CNPJ */

/* ASSISTENTE SPED */

let txterros = document.getElementById("txterros");
let btnerros = document.getElementById("btnerros");
let btnlimpar = document.getElementById("btnlimpar");
let result = document.getElementById("resultado");
let resultDiv = document.getElementById("resultadoDiv");
let registro = document.getElementById("registro");
btnerros.addEventListener("click", () => {
    // Obtém o texto inserido no campo txterros
    let texto = txterros.value;
    let registro1 = registro.value;
    const input = texto;
    const marker = `|${registro1}|`;
    let startIndex = input.indexOf(marker); // Localiza a primeira ocorrência de |C170|
    let resultados = [];
    if (marker === '|C170|') {
      // Conjunto para armazenar valores únicos
      let resultadosSet = new Set();

      while (startIndex !== -1) {
          // Localiza o primeiro '|' após |C170|
          let primeiroPipe = input.indexOf("|", startIndex + marker.length);
          if (primeiroPipe !== -1) {
              // Localiza o segundo '|' após |C170| (o valor que queremos está entre esses dois pipes)
              let segundoPipe = input.indexOf("|", primeiroPipe + 1);
              if (segundoPipe !== -1) {
                  // Captura o valor entre os pipes
                  let resultado = input.substring(primeiroPipe + 1, segundoPipe).trim();
                  // Adiciona ao Set apenas se o valor não estiver vazio
                  if (resultado !== "") {
                      resultadosSet.add(resultado);
                  }
              }
          }
          // Procura a próxima ocorrência de |C170| após a atual
          startIndex = input.indexOf(marker, primeiroPipe + 1);
      }

      // Converte o Set para um array e exibe os resultados
      if (resultadosSet.size > 0) {
          result.innerHTML = Array.from(resultadosSet).join(", "); // Exibe cada resultado separado por vírgula
      } else {
          result.innerHTML = `Registro não encontrado! ${registro1}`;
      }

      resultDiv.style.display = 'block';
      txterros.style.height = 'calc(250px - 75px)';

    } else {
      result.innerHTML = `DEU ERRO AI MENÓ!`;
      resultDiv.style.display = 'block';
      txterros.style.height = 'calc(250px - 75px)';
    }
    
});
// Limpa o campo de texto ao clicar no botão "btnlimpar"
btnlimpar.addEventListener("click", () => {
    txterros.value = '';
    resultDiv.style.display = 'none';
    txterros.style.height = '250px';
    result.innerText = '';
});


function copyResSPED() {
  var resultado = document.getElementById("resultado");
  if (!resultado || !resultado.textContent.trim()) {
      alert("Nada para copiar!");
      return;
  }
  
  var tempInput = document.createElement("textarea");
  tempInput.value = resultado.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  
  var iconCopySped = document.getElementById("iconCopySped");
  if (iconCopySped) {
      iconCopySped.textContent = "✔️";
      setTimeout(() => {
          iconCopySped.textContent = "📄";
      }, 2000);
  }
}


function ativarAbasSped(element) {
  // Remove a classe 'spedAtivo' de todos os <li> da navbar
  document.querySelectorAll('.navbarSPED li').forEach(li => li.classList.remove('spedAtivo'));

  // Adiciona a classe 'spedAtivo' ao item clicado
  element.classList.add('spedAtivo');

  abrirAbasSped();
}

function abrirAbasSped() {
  let spedAtivo = document.querySelector('.spedAtivo');
  let spedAvisosAssit = document.querySelector('#spedAvisosAssit');
  let spedErrosAssit = document.querySelector('#spedErrosAssit');
  let spedOutrosAssit = document.querySelector('#spedOutrosAssit');
  let desativar = document.querySelectorAll('.desativar');

  spedAtivo = spedAtivo.textContent;

  console.log(spedAtivo);
  
  if (spedAtivo === 'Avisos') {
    for (var i = 0; i < desativar.length; i++) {
      desativar[i].style.display = "none";
    }
    spedAvisosAssit.style.display = 'block';

  } else if (spedAtivo === 'Erros') {
    for (var i = 0; i < desativar.length; i++) {
      desativar[i].style.display = "none";
    }
    spedErrosAssit.style.display = 'block';

  } else if (spedAtivo === 'Outros') {
    for (var i = 0; i < desativar.length; i++) {
      desativar[i].style.display = "none";
    }
    spedOutrosAssit.style.display = 'block';
  }
}

/*  */

function ativarAbasSgaCia(element) {
  // Remove a classe 'sgaeCiaAtivo' apenas dos elementos da navbar SGA/CIA
  document.querySelectorAll('.navSgaCia li').forEach(li => li.classList.remove('sgaeCiaAtivo'));

  // Adiciona a classe 'sgaeCiaAtivo' ao item clicado
  element.classList.add('sgaeCiaAtivo');

  abrirAbasSGAeCIA(); // Certifique-se de que essa função não interfere na outra aba
}

function abrirAbasSGAeCIA() {
  let sgaeCiaAtivo = document.querySelector('.sgaeCiaAtivo');
  let abaServSGA = document.querySelector('.abaServSGA');
  let abaSgaPDV = document.querySelector('.abaSgaPDV');
  let abaSOBOX = document.querySelector('.abaSOBOX');
  let abasgabox = document.querySelector('.abasgabox');
  let abadispositivo = document.querySelector('.abadispositivo');
  let desativar = document.querySelectorAll('.desativar');

  sgaeCiaAtivo = sgaeCiaAtivo.textContent;

  console.log(sgaeCiaAtivo);
  
  if (sgaeCiaAtivo === 'Servidor(SGA)') {
    for (var i = 0; i < desativar.length; i++) {
      desativar[i].style.display = "none";
    }
    abaServSGA.style.display = 'block';

  } 
  else if (sgaeCiaAtivo === 'SGAPDV') {
    for (var i = 0; i < desativar.length; i++) {
      desativar[i].style.display = "none";
    }
    abaSgaPDV.style.display = 'block';

  } 
  else if (sgaeCiaAtivo === 'SOBOX(2010)') {
    for (var i = 0; i < desativar.length; i++) {
      desativar[i].style.display = "none";
    }
    abaSOBOX.style.display = 'block';
  }
  else if (sgaeCiaAtivo === 'SGABOX(2010)') {
    for (var i = 0; i < desativar.length; i++) {
      desativar[i].style.display = "none";
    }
    abasgabox.style.display = 'block';
  }
  else if (sgaeCiaAtivo === 'Dispositivo') {
    for (var i = 0; i < desativar.length; i++) {
      desativar[i].style.display = "none";
    }
    abadispositivo.style.display = 'block';
  }
   
}