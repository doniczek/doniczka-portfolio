'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);


  function getCurrentTime() {
    if (typeof window === 'undefined') {
      return '';
    }

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="min-h-screen">
      <section className="container mx-auto my-8 p-8 bg-white dark:bg-blue-500 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold mb-4"><a href='https://github.com/doniczek' className='hover:text-gray-300'>@doniczka</a> <span className='text-gray-500'>{currentTime}</span></h2>
        <p className="text-gray-200">
          Witam na mojej stronie! Nazywam się Miłosz i jestem pasjonatem programowania.
          Posiadam umiejętności w <span className="text-blue-400">typescript</span>, <span className='text-yellow-400'>javascript</span>
        </p><br></br>
        <h2>Technologie z których korzystam:</h2>
      </section>
      <section className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-2xl dark:bg-blue-400">
        <h2 className="text-2xl font-bold mb-4">Projekty</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Nazwa Projektu 1</h3>
          <p className="text-gray-700">Opis projektu. [Dodaj krótki opis projektu oraz użyte technologie.]</p>
          <a href="#" className="text-blue-500 hover:underline">Zobacz więcej</a>
        </div>
        { }
      </section>
    </div>

  );
}
