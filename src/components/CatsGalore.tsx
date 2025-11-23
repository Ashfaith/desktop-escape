// CatsGalore.tsx
import { useEffect, useState } from "react";

const catHeads = [
  "cat-head0.png",
  "cat-head1.png",
  "cat-head2.png",
  "cat-head3.png",
  "cat-head4.png",
  "cat-head5.png",
  "cat-head6.png",
  "cat-head7.png",
  "cat-head8.png",
  "cat-head9.png",
  "cat-head10.png",
  "cat-head11.png",
  "cat-head12.png",
  "cat-head13.png",
  "cat-head14.png",
  "cat-head15.png",
];

const Cats = () => {
  const [timedCats, setTimedCats] = useState([]);

  useEffect(() => {
    setTimedCats([]);

    const newPos = catHeads.map((_, index) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return { x, y, index };
    });

    const delayPerCat = 150; // .15 seconds between each cat appearing
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
            src={`/cats/${catHeads[index]}`}
            className="size-52"
            alt={`Cat ${index}`}
          />
        </div>
      ))}
    </>
  );
};

export default Cats;
