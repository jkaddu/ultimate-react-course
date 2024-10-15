export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start getting ready for your arrival!</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.ceil((numPacked / numItems) * 100);

  if (!items.length)
    return (
      <p className="stats">
        <em>Time to start getting ready. </em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything packed! ✈️"
          : ` You have ${numItems} items on your list and already packed ${numPacked}. (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
