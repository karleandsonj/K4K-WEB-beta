// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJELZHaAKseWOnVaAJtW4-JOwznZ44zg0",
  authDomain: "k4k-2024.firebaseapp.com",
  projectId: "k4k-2024",
  storageBucket: "k4k-2024.appspot.com",
  messagingSenderId: "620044143217",
  appId: "1:620044143217:web:90d6ad71edc587179a69d0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Variáveis globais
var fileItem = [];
var fileName = [];

function getFile(event) {
  fileItem = event.target.files;
  fileName = [];

  for (let i = 0; i < fileItem.length; i++) {
    fileName.push(fileItem[i].name);
  }

  // Atualizando a interface com o nome dos arquivos
  document.getElementById("imgimpt2").innerHTML = fileName.join(", ");
}

function uploadImage() {
  return new Promise((resolve, reject) => {
    if (!fileItem.length) {
      // Não há imagens anexadas, então resolver a promessa imediatamente
      resolve([]);
      return;
    }

    // Lista para armazenar as URLs das imagens
    let urls = [];

    let uploadedCount = 0;

    for (let i = 0; i < fileItem.length; i++) {
      // Referência para o local de armazenamento da imagem no Firebase Storage
      let storageRef = firebase.storage().ref("imagens/" + fileName[i]);

      // Criando a tarefa de upload
      let uploadTask = storageRef.put(fileItem[i]);

      // Monitorando o progresso do upload
      uploadTask.on(
        "state_changed",
        function(snapshot) {},
        function(error) {
          // Exibir mensagem de erro caso o upload falhe
          document.getElementById("imgimpt2").value = "Erro ao enviar a imagem: " + error.message;
          reject("Erro ao enviar a imagem: " + error.message);
        },
        function() {
          // Upload finalizado com sucesso
          // Obter a URL da imagem para download
          uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
            // Adicionar a URL ao array de URLs
            urls.push(url);
            uploadedCount++;

            // Se todas as imagens forem enviadas, resolver a promessa com as URLs
            if (uploadedCount === fileItem.length) {
              document.getElementById("imgimpt2").value = urls.join("§");
              console.log("URLs das imagens:", urls);
              resolve(urls);
            }
          });
        }
      );
    }
  });
}

function exibirImagem() {
  var input4 = document.getElementById("imgimpt");
  var filenames1 = [];

  // Coleta os nomes dos arquivos selecionados
  for (var i = 0; i < input4.files.length; i++) {
    filenames1.push(input4.files[i].name);
  }

  // Atualiza o título do input com os nomes dos arquivos selecionados
  input4.title = "Imagens selecionadas: " + filenames1.join(", ");

  var input1 = document.getElementById("imgimpt");
  var imgContainer = document.getElementById("imgimpt-container");

  // Limpa o conteúdo anterior
  imgContainer.innerHTML = "";

  // Verifica se algum arquivo foi selecionado
  if (input1.files && input1.files.length > 0) {
    for (var i = 0; i < input1.files.length; i++) {
      var reader = new FileReader();

      // Utiliza uma IIFE para capturar o valor correto de img
      (function(imgIndex) {
        reader.onload = function(e) {
          var img = document.createElement("img");

          img.title = input1.files[imgIndex].name;

          // Atribui um id único para cada imagem
          img.id = "img-preview" + imgIndex;

          img.src = e.target.result;
          img.className = "img-preview";

          // Cria um botão de exclusão para cada imagem
          var deleteButton = document.createElement("a");
          deleteButton.innerHTML = `<img src="IMG/lixo1.png" class="lixo1">`;
          deleteButton.className = "lixeiraIMG";
          deleteButton.onclick = function() {
            excluirImagem(imgIndex); // Correção aqui: removi o segundo argumento
          };

          // Cria um contêiner para a imagem e o botão de exclusão
          var container = document.createElement("div");
          container.className = "image-container";
          container.id = "image-container-" + imgIndex;
          container.appendChild(img);
          container.appendChild(deleteButton);

          imgContainer.appendChild(container);
        };
      })(i);

      reader.readAsDataURL(input1.files[i]);
    }

    // Exibe o contêiner
    imgContainer.style.display = "flex";
  } else {
    // Oculta o contêiner se nenhum arquivo estiver selecionado
    imgContainer.style.display = "none";
  }
}

function getFile(event) {
  // Converte o FileList para um array
  fileItem = Array.from(event.target.files);
  fileName = fileItem.map(file => file.name);

  // Atualizando a interface com o nome dos arquivos
  document.getElementById("imgimpt2").innerHTML = fileName.join(", ");
}

function excluirImagem(imgIndex) {
  var input1 = document.getElementById("imgimpt");

  // Remove o arquivo do array global
  fileItem.splice(imgIndex, 1);
  fileName.splice(imgIndex, 1);

  // Atualiza o input de arquivos usando DataTransfer
  var dataTransfer = new DataTransfer();
  fileItem.forEach(function(file) {
    dataTransfer.items.add(file);
  });
  input1.files = dataTransfer.files;

  // Atualiza o título do input com os nomes restantes
  input1.title = 'Imagens selecionadas: ' + fileName.join(', ');

  // Atualiza a exibição das imagens
  exibirImagem();
}
