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

/* FIM DO Ativar SECTION */

/* ------------------------------------------------------------------------------------------------------- */

/* Reload ao clicar na LOGO */

function reloadPage() {
  location.reload();
}

/* FIM DO Reload ao clicar na LOGO */

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

    let CNPJ1 = inpCNPJ.value;

    if (CNPJ1 != '') {

      consultarCNPJ(CNPJ1);

      async function consultarCNPJ(cnpjconst) {
        try {
          // Monta a URL com o CNPJ desejado
          const url = `https://brasilapi.com.br/api/cnpj/v1/`;
          let urlcnpj = url + cnpjconst;
          
          // Faz a requisição à API
          const response = await fetch(urlcnpj);
          
          // Verifica se a resposta foi bem-sucedida
          if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
          }
          
          // Converte a resposta para JSON
          const dados = await response.json();
          
          // Exibe os dados no console ou faça o que desejar com eles

          const consCNPJ = dados;

          const {cnpj, razao_social, nome_fantasia, ddd_telefone_1, data_inicio_atividade, descricao_situacao_cadastral } = consCNPJ;
          const { cep, municipio, logradouro, codigo_municipio, numero, bairro, uf } = consCNPJ;

          EmpresaInput.innerHTML += `<h4>EMPRESA</h4>` +
          `<p>CNPJ: ${cnpj}</p>` + 
          `<p>Razão Social: ${razao_social}</p>` + 
          `<p>Fantasia: ${nome_fantasia}</p>` + 
          `<p>Telefone: ${ddd_telefone_1}</p>` + 
          `<p>Data Abertura: ${data_inicio_atividade}</p>` + 
          `<p>Situação: ${descricao_situacao_cadastral}</p> <hr>` 

          EnderecoInput.innerHTML += `<h4>ENDEREÇO</h4>` +
          `<p>CEP: ${cep}</p>` +
          `<p>Cidade: ${municipio} - ${uf}</p>` +
          `<p>Cod. Municipio: ${codigo_municipio}</p>` +
          `<p>Logradouro: ${logradouro}</p>` +
          `<p>Bairro: ${bairro}</p>` +
          `<p>Numero: ${numero}</p>`

          sites.style.display = 'none';
          pesquisa.style.display = 'block';
          btnlimparPesquisa.style.display = 'flex';
          btnConsulta.style.display = 'none';

        } catch (erro) {
          alert(`Erro ao consultar o CNPJ`, erro);
          console.log(`Erro ao consultar o CNPJ`, erro);
          limparPesquisa();
        }
      }

    } else {
      alert('Precisa informar um CNPJ valido!')
    }

}

function limparPesquisa() {
    let sites = document.querySelector('.divSitesConsulta');
    let EmpresaInput = document.querySelector('.empresaInp');
    let EnderecoInput = document.querySelector('.enderInp');
    let pesquisa = document.querySelector('.divPesquisaCNPJ');
    let btnlimparPesquisa = document.querySelector('#limparPesquisa');
    let btnConsulta = document.querySelector('#pesquisarCNPJ');
    let inpCNPJ = document.querySelector('#inpCNPJid');

    sites.style.display = 'block';
    pesquisa.style.display = 'none';
    EmpresaInput.innerHTML = '';
    EnderecoInput.innerHTML = '';
    btnlimparPesquisa.style.display = 'none';
    btnConsulta.style.display = 'flex';
    inpCNPJ.value = '';
}

/* FIM Function do CNPJ */