import { useState } from "react";
import "./App.css";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSubmit = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
  };

  return (
    <div style={{ padding: 200 }}>
      <input
        value={job}
        type="text"
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button onClick={handleSubmit}> Add </button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
