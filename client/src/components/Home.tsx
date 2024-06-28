import React from 'react';

const Home = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="max-w-72 md:max-w-screen-sm m-auto">
        <h1 className="text-slate-800 text-center mb-16">Let's Chat!</h1>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className="w-full outline-none bg-transparent text-xl md:text-2xl text-slate-800 placeholder:text-slate-300 px-3 py-2 border-b border-slate-800 mb-10"
          />
          <button className="btn-primary w-full">Enter The Room</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
