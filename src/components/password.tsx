import { useState } from "react";

interface PasswordProps {
  setIsPasswordCorrect: (value: boolean) => void;
  setIsIncorrect: (value: boolean) => void;
}

const Password = ({ setIsPasswordCorrect, setIsIncorrect }: PasswordProps) => {
  const pos = { x: 200, y: 150 };

  const password = "secret";

  const [inputValue, setInputValue] = useState("");

  const checkPassword = (e: Event) => {
    e.preventDefault();
    if (inputValue === password) {
      setIsPasswordCorrect(true);
    } else {
      setIsIncorrect(true);
      setTimeout(() => setIsIncorrect(false), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-black text-xl font-bold mb-6">PASSWORD REQUIRED</div>
      <form onSubmit={checkPassword}>
        <input
          type="password"
          id="enteredPassword"
          className="border bg-blue-500 p-2 m-2"
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 m-2 rounded"
        >
          Unlock
        </button>
      </form>
    </div>
  );
};

export default Password;
