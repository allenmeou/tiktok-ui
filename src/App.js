import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [job, setJob] = useState("");

  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("job")) || [];
    return storageJobs;
  });

  const inputRef = useRef();

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("job", jsonJobs);

      return newJobs;
    });
    setJob("");
    inputRef.current.focus();
  };

  const handleEdit = (job) => {
    console.log(job);
    const liElement = document.querySelector("li");
    liElement.innerHTML = "";
    // setJob(job);

    const inputEditEl = document.querySelector(".inputEdit");
    const buttonSubmitEditEl = document.querySelector(".submitEdit");
    if (handleEdit) {
      liElement.style.display = "none";
      inputEditEl.style.display = "block";
      buttonSubmitEditEl.style.display = "block";
      setJob((prev) => [...prev, job]);
    }
  };

  const handleDelete = () => {
    console.log("handleDelete");
  };

  return (
    <div style={{ padding: 200 }}>
      <h2>To do list </h2>
      <input
        ref={inputRef}
        value={job}
        type="text"
        className="inputTask"
        placeholder="new task"
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <div className="app" key={index}>
            <input type="checkbox" name="" id="" />
            <li>{job}</li>
            <input
              type="text"
              className="inputEdit"
              style={{ display: "none" }}
            />
            <button
              className="submitEdit"
              onClick={handleSubmit}
              style={{ display: "none" }}
            >
              Add
            </button>
            <button onClick={() => handleEdit(job)}>edit</button>
            <button onClick={handleDelete}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
