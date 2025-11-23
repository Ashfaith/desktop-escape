import { useState } from "react";

const Password = () => {
  const password = "EyesOnly-042!";

  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false);

  const checkPassword = (e: Event) => {
    e.preventDefault();
    if (inputValue === password) {
      setIsPasswordCorrect(true);
    } else {
      setIsIncorrect(true);
      setTimeout(() => setIsIncorrect(false), 3000);
    }
  };

  return !isPasswordCorrect ? (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-black text-xl font-bold mb-6">
          PASSWORD REQUIRED
        </div>
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
      <div className="mt-4 h-8">
        {isIncorrect && (
          <p className="text-red-600 text-l">INCORRECT PASSWORD! TRY AGAIN!</p>
        )}
      </div>
    </>
  ) : (
    <div className="text-black text-2xl font-bold">MAP CONTENT GOES HERE</div>
  );
};

export default Password;
