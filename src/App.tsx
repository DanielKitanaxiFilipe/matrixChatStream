import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import InputForm from "./components/inputForm";
import MatrixRain from "./components/matrixRain";

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
const db = getFirestore(app);

interface Message {
  text: string;
  timestamp: any; // Ou o tipo correto para o carimbo de data/hora
}
function App() {
  const [divVisible, setDivVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]); // Define o tipo do estado como Message[]

  const handleDoubleClick = () => {
    setDivVisible(!divVisible);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menseger"));
        const messagesData = querySnapshot.docs.map(
          (doc) => doc.data() as Message
        ); // Define o tipo dos dados como Message
        setMessages(messagesData);
      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
      }
    };

    fetchMessages();
  }, [db]);

  return (
    <>
      <div className="main-screen" onDoubleClick={handleDoubleClick}>
        {divVisible && <InputForm />}
        <MatrixRain text={messages.map((message) => message.text).join("")} />
      </div>
    </>
  );
}

export default App;
