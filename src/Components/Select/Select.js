export default function Select({ types, handleTypeChange }) {
  return (
    <select onChange={(e) => handleTypeChange(e.target.value)}>
      <option value="">Filter by Type</option>
      <option value="all">All</option>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
