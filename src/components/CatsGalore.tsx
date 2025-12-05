import { useEffect, useState } from "react";

const catImgs = [
  "cat0.png",
  "cat1.png",
  "cat2.png",
  "cat3.png",
  "cat4.png",
  "cat5.png",
  "cat6.png",
  "cat7.png",
  "cat8.png",
  "cat9.png",
  "cat10.png",
  "cat11.png",
  "cat12.png",
  "cat13.png",
  "cat14.png",
  "cat15.png",
  "cat16.png",
  "cat17.png",
  "cat18.png",
  "cat19.png",
  "cat20.png",
];

const Cats = () => {
  const [timedCats, setTimedCats] = useState([]);

  useEffect(() => {
    setTimedCats([]);

    const newPos = catImgs.map((_, index) => {
      const x = Math.random() * window.innerWidth - 100;
      const y = Math.random() * window.innerHeight - 100;
      return { x, y, index };
    });

    const delayPerCat = 250;
    const timers: number[] = newPos.map((pos, i) =>
      setTimeout(() => {
        setTimedCats((prev) => [...prev, pos]);
      }, i * delayPerCat)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
      setTimedCats([]);
    };
  }, []);

  const closeCat = (index) => {
    // Call the parent function to close the cat
    setTimedCats((prev) => prev.filter((cat) => cat.index !== index));
  };

  return (
    <>
      {timedCats.map(({ x, y, index }) => (
        <div
          key={index}
          onClick={() => closeCat(index)}
          style={{
            position: "absolute",
            left: x,
            top: y,
            zIndex: 1000,
          }}
        >
          <img
            src={`/cats/${catImgs[index]}`}
            className="size-88"
            alt={`Cat ${index}`}
          />
        </div>
      ))}
    </>
  );
};

export default Cats;
