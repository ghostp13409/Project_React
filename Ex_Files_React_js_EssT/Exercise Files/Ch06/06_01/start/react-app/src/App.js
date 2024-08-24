import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({name, location, avatar}){
  return(
    <div>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <img src={avatar} alt={name} height={150} />
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/ghostp13409`)
      .then((res) => res.json())
      .then(setData)
      .then(setLoading(false))
      .catch(setError);
  }, []);
  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>
  if(!data) return null;
  return (
    <GithubUser name={data.name} location={data.location} avatar={data.avatar_url} />
  )
  return <h1>Data</h1>;
}

export default App;
