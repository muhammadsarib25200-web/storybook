import "./card.css";

export default function Card({heading, desc, btn}) {
  return (
    <div className="card">
      <h2>{heading}</h2>

      <p>
       {desc}
      </p>

      <button>{btn}</button>
    </div>
  );
}