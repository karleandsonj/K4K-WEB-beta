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
        updateProgressBar(0);

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

document.addEventListener('DOMContentLoaded', function() {
  const xmlFileInput = document.getElementById("xmlFileInput-avisoSped");
  const fileNameSpan = document.getElementById("fileName");
  
  // Atualiza o nome do arquivo quando um arquivo é selecionado
  xmlFileInput.addEventListener('change', function() {
      if (this.files.length > 0) {
          fileNameSpan.textContent = `Nome: ${this.files[0].name}`;
      } else {
          fileNameSpan.textContent = 'Nenhum arquivo selecionado';
      }
  });
});

/* ASSISTENTE SPED - VERSÃO COM INPUT DE ARQUIVO */

// Elementos atualizados
const xmlFileInput = document.getElementById("xmlFileInput-avisoSped");
const btnerros = document.getElementById("btnerros");
const btnlimpar = document.getElementById("btnlimpar");
const result = document.getElementById("resultado");
const resultDiv = document.getElementById("resultadoDiv");
const registro = document.getElementById("registro");

btnerros.addEventListener("click", async () => {
  if (!xmlFileInput.files.length) {
    alert("Por favor, selecione um arquivo XML/JRPXML primeiro!");
    return;
  }

  const file = xmlFileInput.files[0];
  const registro1 = registro.value;
  
  try {
    const fileContent = await readFileContent(file);
    processXMLContent(fileContent, registro1);
  } catch (error) {
    console.error("Erro ao processar arquivo:", error);
    result.innerHTML = `Erro ao processar arquivo: ${error.message}`;
    resultDiv.style.display = 'block';
  }
});

// Função para ler o conteúdo do arquivo
function readFileContent(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = (error) => reject(error);
    
    reader.readAsText(file);
  });
}

// Função principal de processamento
function processXMLContent(input, registro1) {
  const marker = `|${registro1}|`;
  let startIndex = input.indexOf(marker);
  let resultados = [];

  if (marker === '|C170|') {
    let resultadosSet = new Set();

    while (startIndex !== -1) {
      let primeiroPipe = input.indexOf("|", startIndex + marker.length);
      if (primeiroPipe !== -1) {
        let segundoPipe = input.indexOf("|", primeiroPipe + 1);
        if (segundoPipe !== -1) {
          let resultado = input.substring(primeiroPipe + 1, segundoPipe).trim();
          if (resultado !== "") {
            resultadosSet.add(resultado);
          }
        }
      }
      startIndex = input.indexOf(marker, primeiroPipe + 1);
    }

    if (resultadosSet.size > 0) {
      result.innerHTML = Array.from(resultadosSet).join(", ");
    } else {
      result.innerHTML = `Registro ${registro1} não encontrado no arquivo!`;
    }
  } else {
    result.innerHTML = `Processamento para o registro ${registro1} não implementado!`;
  }

  resultDiv.style.display = 'block';
}

// Limpeza do formulário
btnlimpar.addEventListener("click", () => {
  try {
    const xmlFileInput = document.getElementById("xmlFileInput-avisoSped");
    const fileNameSpan = document.getElementById("fileName");
    
    if (!xmlFileInput || !fileNameSpan) {
      throw new Error("Elementos do formulário não encontrados");
    }
    
    xmlFileInput.value = '';
    fileNameSpan.textContent = 'Nenhum arquivo selecionado';
    resultDiv.style.display = 'none';
    result.innerText = '';
    
  } catch (error) {
    console.error("Erro ao limpar formulário:", error);
    alert("Erro para limpar!");
  }
});

function copyResSPED() {

  const result = document.getElementById("resultado");
  
  if (!result || !result.textContent.trim()) {
      alert("Show, Copiou nada!");
      return;
  }

  navigator.clipboard.writeText(result.textContent)
      .then(() => {
          const iconCopySped = document.getElementById("iconCopySped");
          if (iconCopySped) {
              iconCopySped.textContent = "✓ COPIADO";
              setTimeout(() => {
                  iconCopySped.textContent = "📄 COPIAR";
              }, 2000);
          }
      })
      .catch(err => {
          console.error("Falha ao copiar:", err);
          
          const textArea = document.createElement("textarea");
          textArea.value = result.textContent;
          document.body.appendChild(textArea);
          textArea.select();
          
          try {
              const successful = document.execCommand('copy');
              if (successful) {
                  const iconCopySped = document.getElementById("iconCopySped");
                  if (iconCopySped) {
                      iconCopySped.textContent = "✓ COPIADO";
                      setTimeout(() => {
                          iconCopySped.textContent = "📄 COPIAR";
                      }, 2000);
                  }
              } else {
                  alert("DEU ERRO AI MENO, SE VIRA");
              }
          } catch (err) {
              alert("DEU ERRO AI MENO, SE VIRA");
          }
          
          document.body.removeChild(textArea);
      });
}

function ativarAbasSped(element) {
  document.querySelectorAll('.navbarSPED li').forEach(li => li.classList.remove('spedAtivo'));
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

  if (spedAtivo === 'Avisos') {
    desativar.forEach(el => el.style.display = "none");
    spedAvisosAssit.style.display = 'block';
  } else if (spedAtivo === 'Erros') {
    desativar.forEach(el => el.style.display = "none");
    spedErrosAssit.style.display = 'block';
  } else if (spedAtivo === 'Outros') {
    desativar.forEach(el => el.style.display = "none");
    spedOutrosAssit.style.display = 'block';
  }
}

function showSgaCiaAssist(secSgaCiaAssist) {
  let mainSgaCiaAssist = document.querySelector('.mainSgaCiaAssist')
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById(secSgaCiaAssist).style.display = "block";
  mainSgaCiaAssist.style.display = 'block';
  abrirAbasSGAeCIA();
}

function ativarAbasSgaCia(element) {
  document.querySelectorAll('.navSgaCia li').forEach(li => li.classList.remove('sgaeCiaAtivo'));
  element.classList.add('sgaeCiaAtivo');
  abrirAbasSGAeCIA();
}

function abrirAbasSGAeCIA() {
  let sgaeCiaAtivo = document.querySelector('.sgaeCiaAtivo');
  let desativar = document.querySelectorAll('.desativar');
  
  if (!sgaeCiaAtivo) return;
  
  sgaeCiaAtivo = sgaeCiaAtivo.textContent;
  desativar.forEach(el => el.style.display = "none");

  switch(sgaeCiaAtivo) {
    case 'Servidor(SGA)':
      document.querySelector('.abaServSGA').style.display = 'block';
      break;
    case 'Terminal(SGA)':
      document.querySelector('.abaTermSGA').style.display = 'block';
      break;
    case 'SGAPDV':
      document.querySelector('.abaSgaPDV').style.display = 'block';
      break;
    case 'SOBOX(2010)':
      document.querySelector('.abaSOBOX').style.display = 'block';
      break;
    case 'SGABOX(2010)':
      document.querySelector('.abasgabox').style.display = 'block';
      break;
    case 'Dispositivo':
      document.querySelector('.abadispositivo').style.display = 'block';
      break;
  }
}

// Gerenciamento de avisos
document.addEventListener('DOMContentLoaded', () => {
  let avisoDiv = document.querySelector('.avisoDiv');
  let avisoSGAeCIAList = document.querySelectorAll('.avisoSGAeCIA');

  if (!avisoDiv) return;

    document.addEventListener('click', (e) => {
    if (!avisoDiv.contains(e.target) && avisoDiv.style.display === 'block') {
      avisoDiv.style.display = 'none';
    }

    avisoSGAeCIAList.forEach((element) => {
      if (e.target === element) {
        avisoDiv.style.display = 'block';
      }
    });
  });
});

const selectServSga = document.querySelector('#selectServSga');
const resultSelectServSGA = document.querySelector('#resultSelectServSGA');

const atualizar = () => {
  resultSelectServSGA.innerHTML = 
  selectServSga.value === 'ConfigServSga' ? 
    `
    <h3>Check-List</h3>
    <button class="btnExportPdfConfSgaserv" onclick="exportToPDF()" title="Salvar em PDF">💾 PDF</button> 
    <div class="passosConfigSistem">
        <label>
            <input type="checkbox" value="1"> Instalar Firebird
        </label>
        <label>
            <input type="checkbox" value="2"> Configurar Compartilhamento e Rede
        </label>
        <label>
            <input type="checkbox" value="3"> Configurar Portas Firewall
        </label>
        <label>
            <input type="checkbox" value="5"> fazer aquela parada
        </label>
        <label>
            <input type="checkbox" value="6"> instalar aquela outra
        </label>
        <label>
            <input type="checkbox" value="7"> cofigurar aquela la
        </label>      
        <label>
            <input type="checkbox" value="8"> abrir sistema
        </label>      
    </div>                
    ` : 
  selectServSga.value === 'PortaFirewall' ? 
    `
    <div class="divCopyPortasFirewall">
      <h5>PORTAS DO FIREWALL <span class="ajudaConfigPortaFire" id="ajudaConfigPortaFireCopy">❔</span></h5> 
      <br/>
      <p id="txtPortFireCopy">65123, 65100, 64123, 9092, 4899, 4096, 3050,992, 993, 995, 587, 465, 445, 80, 21</p>
      <button onclick="copyToPortFire()" id="btnCopyPortFire"> 📄Copiar </button>
      <br/>
      <hr/>
      <br/>
      <h5>DOWNLOAD DO .BAT <span class="ajudaConfigPortaFire" id="ajudaConfigPortaFireDown">❔</span></h5> 
      <button> ↡ Download </button>
    </div>
    ` : 
    ''; //DEFAULT
};

document.addEventListener('DOMContentLoaded', atualizar);
selectServSga.addEventListener('change', atualizar);

let ajudaSpedAviso = document.querySelector('#ajudaAvisoSped');
let spanAvisoSped = document.querySelector('.spanAvisoSped');
let pAvisoSped = document.querySelector('.pAvisoSped');
let fecharAba = document.querySelector('.fechar-aba');
let registro1 = document.querySelector('#registro');

// Abre o aviso quando clicar no ajudaSpedAviso
ajudaSpedAviso.addEventListener('click', (event) => {
  event.stopPropagation(); // Impede que o clique propague para o document
  if (registro1.value === 'C170') {
    spanAvisoSped.style.display = 'block';
    pAvisoSped.innerHTML = `Essa opção ira trazer todos os produtos que constam o 'CST PIS e COFINS' invalido para a operação! <br><br> Obs. Salvar as informações do validador SPED no modelo XML/JRPXML`
  }
});

// Fecha o aviso quando clicar no botão fechar
fecharAba.addEventListener('click', () => {
  spanAvisoSped.style.display = 'none';
});

// Fecha o aviso quando clicar em qualquer lugar fora dele
document.addEventListener('click', (event) => {
  if (!spanAvisoSped.contains(event.target)) {
    spanAvisoSped.style.display = 'none';
  }
});

// Impede que o clique dentro do spanAvisoSped feche o aviso
spanAvisoSped.addEventListener('click', (event) => {
  event.stopPropagation();
});

/* EXPORTAR PARA PDF */

function exportToPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Título do documento
  const title = "Configurações do Sistema SGA Servidor";
  doc.setFontSize(18);
  doc.text(title, 10, 15);
  
  // Lista de checkboxes
  let yPosition = 30;
  doc.setFontSize(12);
  
  // Captura todos os checkboxes
  const checkboxes = document.querySelectorAll('#resultSelectServSGA input[type="checkbox"]');
  
  checkboxes.forEach(checkbox => {
    const label = checkbox.nextSibling.textContent.trim();
    const status = checkbox.checked ? " - OK" : " - faltou";
    
    // Adiciona cada item como texto simples
    doc.text(`${label} ${status}`, 10, yPosition);
    yPosition += 7; // Espaço entre linhas
  });
  
  // Adiciona data no rodapé
  const date = new Date().toLocaleString();
  doc.setFontSize(10);
  doc.text(`Documento gerado em: ${date}`, 10, doc.internal.pageSize.getHeight() - 10);
  
  // Salva o PDF
  doc.save('check-config-sga-serv.pdf');
}


function copyToPortFire() {
  const txtPortFireCopy = document.getElementById("txtPortFireCopy").innerText;
  const tempInput = document.createElement("textarea");
  tempInput.value = txtPortFireCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

}

const btnCopyPortFire = document.querySelector("#btnCopyPortFire");
btnCopyPortFire.addEventListener('click', () => {
  btnCopyPortFire.innerText = 'Copiado ✔';
  setTimeout(() => {
    btnCopyPortFire.innerText = 'Copiar';
  }, 2000);

  copiar();
});