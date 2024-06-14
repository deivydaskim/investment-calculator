export default function Input({label, id, value, onChangeFn}) {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type="number"
        id={id}
        onChange={onChangeFn}
        value={value}
      />
    </label>
  );
}
