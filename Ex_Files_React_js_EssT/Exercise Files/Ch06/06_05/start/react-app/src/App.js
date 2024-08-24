import "./App.css";

const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Rose", elevation: 10874 },
  { name: "Tallac", elevation: 10753 },
  { name: "Rubicon", elevation: 10653 },
  { name: "Jackson", elevation: 10651 },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty()
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <List 
      data={tahoe_peaks} 
      renderEmpty={<p>This list is Empty.</p>} 
      renderItem={item=> (
        <>
        {item.name} - {item.elevation}ft
        </>
      )}
      />

    </div>
  );
}

export default App;
