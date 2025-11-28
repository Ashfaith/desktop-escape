import { useState } from "react";

const Password = ({ onUnlock }) => {
  const password = "EyesOnly-042!";
  const [inputValue, setInputValue] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);

  const checkPassword = (e) => {
    e.preventDefault();
    if (inputValue === password) {
      onUnlock();
    } else {
      setIsIncorrect(true);
      setTimeout(() => setIsIncorrect(false), 3000);
    }
  };

  return (
    <div className="w-[400px] h-[300px] flex flex-col items-center justify-center">
      <div className="text-black text-xl font-bold mb-6">PASSWORD REQUIRED</div>
      <div>
        <input
          type="password"
          id="enteredPassword"
          className="border bg-blue-500 p-2 m-2"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkPassword(e);
            }
          }}
        />
        <button
          onClick={checkPassword}
          className="bg-blue-500 text-white p-2 m-2 rounded"
        >
          Unlock
        </button>
      </div>
      <div className="mt-4 h-8">
        {isIncorrect && (
          <p className="text-red-600 text-l">INCORRECT PASSWORD! TRY AGAIN!</p>
        )}
      </div>
    </div>
  );
};

export default Password;
