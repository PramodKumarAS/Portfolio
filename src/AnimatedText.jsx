import { useEffect, useState } from "react";

export default function AnimatedText({
  text,
  delay = 0,
  loopDelay = 10000
}) {
  const [iteration, setIteration] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setIteration((prev) => prev + 1);
    }, loopDelay);

    return () => clearInterval(interval);
  }, [loopDelay]);

  return (
    <p className="animated-text" key={iteration}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${delay + index * 0.08}s`
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}
