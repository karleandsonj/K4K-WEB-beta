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
var fileItem;
var fileName;
var uploadTask;

function getFile(e) {
  fileItem = e.target.files;
  fileName = [];
  
  for (let i = 0; i < fileItem.length; i++) {
    fileName.push(fileItem[i].name);
  }

  // Atualizando a interface com o nome dos arquivos
  document.getElementById("imgimpt2").innerHTML = "";
  for (let i = 0; i < fileName.length; i++) {
    document.getElementById("imgimpt2").innerHTML += fileName[i] + "<br>";
  }
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