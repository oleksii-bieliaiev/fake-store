"use client";

import { useEffect, useState } from "react";
import HeaderNav from "../components/HeaderNav";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Login from "../components/Login";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    setToken(storedToken ?? null);
    setIsLoading(false);
  }, []);



  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-3xl font-bold text-black animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen m-7">
      <HeaderNav setToken={setToken} />
      <div className="flex-1">
        {token ? (
          <Products />
        ) : (
          <div className="flex items-center justify-center h-[78vh]">
            <Login token={token} setToken={setToken} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

