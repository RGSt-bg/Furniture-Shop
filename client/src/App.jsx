import { useState, createContext } from "react";

import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import Footer from './components/footer/Footer.jsx';
import './styles/site.css';

export const AuthContext = createContext(false);

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <Header />
        <Main />
        <Footer />
      </AuthContext.Provider>
    </>
  );
};

export default App;
