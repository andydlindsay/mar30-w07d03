import React from 'react';
import axios from 'axios';

const Effect = () => {
  const [counter, setCounter] = React.useState(0);
  const [search, setSearch] = React.useState('');
  const [classes, setClasses] = React.useState([]);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    console.log('useEffect fired!');
    document.title = `clicked ${counter} times!`;
  }, [counter]);

  React.useEffect(() => {
    myRef.current = counter;
    const interval = setInterval(() => {
      console.log(`counter is currently: ${myRef.current}`);
    }, 3000);

    const cleanup = () => {
      console.log('interval cleared');
      clearInterval(interval);
    };

    return cleanup;
  });

  React.useEffect(() => {
    axios
      .get('https://www.dnd5eapi.co/api/classes')
      .then((result) => {
        console.log(result.data);
        setClasses(result.data.results);
      });
  }, []);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  

  return (
    <div>
      <h2>Effect Component</h2>
      <p>{counter}</p>
      <button onClick={clickHandler}>Click Me!</button>

      <div>
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        { classes.map((c) => {
            return (
              <div>
                <h2>{c.name}</h2>
                <a href="#">{c.url}</a>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Effect;
