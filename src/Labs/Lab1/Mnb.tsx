export default function Mnb({ d = ["c"] }) {
    const a = ["b", 1];
    const e = [...a, ...d, ...a];
    return (
      <div>
        <p>{e}</p>
      </div>
    );
  }