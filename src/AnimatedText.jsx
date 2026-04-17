export default function AnimatedText({ text, delay = 0, wordDelay = 0.18 }) {
  const words = text.split(" ");

  return (
    <p className="animated-text">
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${delay + index * wordDelay}s`
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}
