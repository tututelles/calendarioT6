const { google } = require('googleapis');
require('dotenv').config(); // Carrega o arquivo .env se estiver em desenvolvimento

function getGoogleAuthClient() {
  try {
    // Converte a string da variável de ambiente de volta para objeto JSON
    const credentials = JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS);

    const auth = new google.auth.GoogleAuth({ credentials: credentials,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    return auth;
  } catch (error) {
    console.error('Erro ao processar as credenciais do Google:', error);
    throw error;
  }
}

export const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "seu-id",
  appId: "seu-id"
};
