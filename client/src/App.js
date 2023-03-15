import { useEffect, useState } from "react";
import { createTodo, readTodos } from "./api";
import Preloader from "./components/Preloader";

function App() {
  const [todo, setTodo] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos;
      console.log(result);
    };
    fetchData();
  }, []);
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const result = await createTodo(todo);
    console.log(result);
  };
  return (
    <div>
      <div classname="container">
        <div className="row">
          <pre>{JSON.stringify(todo)}</pre>
          <form className="col s12" onSubmit={onSubmitHandler}>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">title</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                />
                <label htmlFor="icon_prefix">Title</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">description</i>
                <input
                  id="description"
                  type="tel"
                  className="validate"
                  onChange={(e) =>
                    setTodo({ ...todo, content: e.target.value })
                  }
                />
                <label htmlFor="description">content</label>
              </div>
            </div>
            <div className="row right-align">
              <button className="wave-effect.wave-light btn">Submit</button>
            </div>
          </form>
          <Preloader />
          <div class="collection">
            <a href="#!" class="collection-item">
              Alvin
            </a>
            <a href="#!" class="collection-item active">
              Alvin
            </a>
            <a href="#!" class="collection-item">
              Alvin
            </a>
            <a href="#!" class="collection-item">
              Alvin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
