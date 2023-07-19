import { useEffect, useState } from "react";

function Content() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
  });
  return (
    <div style={{ padding: 50 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default Content;
