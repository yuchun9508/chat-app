import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const userNameInput = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = userNameInput.current?.value.trim();
    if (userName && isValid) {
      sessionStorage.setItem('userName', userName);
      navigate('/chat-room');
    } else {
      setIsValid(false);
    }
  };

  const validatePattern = (e) => {
    const userNameRegex = /^[0-9A-Za-z]{3,16}$/;
    setIsValid(userNameRegex.test(e.target.value));
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="w-72 md:w-1/3 m-auto">
        <h1 className="text-slate-800 text-center mb-16">Let's Chat!</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={userNameInput}
            type="text"
            placeholder="Enter your name"
            className={`${
              isValid !== false ? 'border-slate-800' : 'border-red-500'
            } w-full outline-none bg-transparent text-xl md:text-2xl text-slate-800 placeholder:text-slate-300 px-3 py-2 border-b`}
            onChange={validatePattern}
          />
          <p
            className={`${
              isValid !== false && 'invisible'
            } text-sm text-red-500 pt-1`}
          >
            Please enter 3-16 numbers or alphabets.
          </p>
          <button className="btn-primary w-full mt-8">Enter The Room</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
