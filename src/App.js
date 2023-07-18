import { useState, useRef } from "react";
import "./App.css";

function App() {
  const storageJobs = JSON.parse(localStorage.getItem("job"));

  const [jobs, setJobs] = useState(storageJobs ?? []);
  const [job, setJob] = useState("");

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

  return (
    <div style={{ padding: 200 }}>
      <input
        ref={inputRef}
        value={job}
        type="text"
        placeholder="Nhập việc bàn muốn làm"
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />

      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
