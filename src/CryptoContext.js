import { cleanup } from "@testing-library/react";
import React, { createContext, useContext, useEffect, useState } from "react";

const crypto = createContext();

const ContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("ILS");
  const [Symbol, setSymbol] = useState("₪");

  useEffect(() => {
    if (currency === "ILS") {
      setSymbol("₪");
    } else if (currency === "USD") {
      setSymbol("$");
    }

    return () => {
      cleanup();
    };
  }, [currency]);

  return (
    <crypto.Provider value={{ currency, Symbol, setCurrency }}>
      {children}
    </crypto.Provider>
  );
};

export default ContextProvider;

export const CryptoState = () => {
  return useContext(crypto);
};
