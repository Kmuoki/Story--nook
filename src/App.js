import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#E1D7C6] text-[#4B2E39] p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#4B2E39]">Story Nook</h1>
        <p className="text-xl text-[#FF6B6B]">Your Cozy Book Café</p>
      </header>
      <main className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Book 1 Title</h2>
          <p className="text-md mt-2">A gripping story of adventure and mystery.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Book 2 Title</h2>
          <p className="text-md mt-2">A journey through a fantastical world.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Book 3 Title</h2>
          <p className="text-md mt-2">An emotional exploration of love and loss.</p>
        </div>
      </main>
    </div>
  );
}

export default App;