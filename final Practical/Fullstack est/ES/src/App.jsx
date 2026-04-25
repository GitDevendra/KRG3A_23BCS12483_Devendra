import React from "react";
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";

function App() {
  const user = {
    username: "Arjun",
    isLoggedIn: false,
  };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;