// Cole aqui a configuração do app web do Firebase:
// Console do Firebase > Configurações do projeto > Seus apps > App da Web > "Config".
// Estes valores podem ficar públicos no site. Quem protege os dados são as regras do Firestore (firestore.rules).

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDz3JQZ3DuyfiXM7d0LL8-qcDFqtT4XocM",
    authDomain: "calendariot6.firebaseapp.com",
    projectId: "calendariot6",
    storageBucket: "calendariot6.firebasestorage.app",
    messagingSenderId: "282754627890",
    appId: "1:282754627890:web:b2ecd240b2c296851fff2b",
    measurementId: "G-J43VV7P93B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>