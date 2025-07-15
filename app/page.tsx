import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 text-center font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-pink-600">🎉 Happy Birthday! 🎂</h1>
        <p className="text-lg text-pink-800 mt-4">Wishing you a day filled with love, joy, and laughter!</p>
        <div className="text-9xl mt-5">🎂</div>
      </div>
    </div>
  );
}
