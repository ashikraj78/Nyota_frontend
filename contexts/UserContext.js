import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = localStorage.getItem("nyota");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("nyota", JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
