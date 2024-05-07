// App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

const AppContent = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <main className={isDarkMode ? "dark-mode bg-black" : ""}>
        <Navbar />
        <div className="flex">
          <div className="lg:w-56 w-12">
            <Sidebar />
          </div>
          <div className="flex flex-col">
            <div className="mt-16 ml-1 flex justify-center">
              <Outlet />
            </div>
            <footer className="p-1 fixed bottom-0 w-full bg-slate-300 right-0 mt-3 text-center">
              © 2023 @Dhaka.witness. All rights reserved.
            </footer>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
