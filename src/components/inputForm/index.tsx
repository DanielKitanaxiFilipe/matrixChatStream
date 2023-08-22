import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "./style.css";
const firebaseConfig = {
  apiKey: "AIzaSyCjDTG224EHdO0at5UrEtpC9Yfueqmj-tE",
  authDomain: "matrixchatstream.firebaseapp.com",
  projectId: "matrixchatstream",
  storageBucket: "matrixchatstream.appspot.com",
  messagingSenderId: "679305518758",
  appId: "1:679305518758:web:8cc4e37a0c1b6b5ceb5e67",
  measurementId: "G-FVSK4E17BL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Obter uma instância do Firestore

export default function InputForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      // Enviar a mensagem para a coleção "menseger" no Firestore
      await addDoc(collection(db, "menseger"), {
        text: message,
        timestamp: new Date(),
      });

      setMessage(""); // Limpar o campo de mensagem após o envio

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div className="inputForm">
      <div className="inputForm2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="button">
            enviar
          </button>
        </form>
      </div>
    </div>
  );
}
