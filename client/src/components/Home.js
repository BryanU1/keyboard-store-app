import { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    const url = 'http://localhost:5000/api/';
    fetch(url)
      .then((res) => res.text())
      .then((text) => setData(text))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <p>Home page</p>
      <p>{data}</p>
    </div>
  );
}

export default Home;