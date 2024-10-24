// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";
export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("usd");
  const [toCur, setToCur] = useState("euro");

  useEffect(function () {
    async function fetchConversions() {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
        );
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchConversions();
  }, []);
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
