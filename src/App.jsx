import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {

  const [persons, setPersons] = useState(data);

  const resetList = () => {
    setPersons(data);
  }

  const clearList = () => {
    setPersons([]);
  }

  return (
    <>
      <main>
        <section className="container">
          <h3>{persons.length} Birthdays Today</h3>
          <List list={persons} />
          <div style={{display: 'flex', flexDirection: 'row', columnGap: '30px'}}>
            <button type='button' onClick={clearList} className='btn btn-block'>Clear List</button>
            <button type='button' onClick={resetList} className='btn btn-block'>Reset</button>
          </div>
        </section>
      </main>
    </>
  )
};
export default App;
