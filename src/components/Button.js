export default function Button({ handleClick, children }) {
  return (
    <button onClick={handleClick} className="button">
      {children}
    </button>
  );
}
