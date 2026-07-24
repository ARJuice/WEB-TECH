'use client';

import { useState } from "react";

export default function FormPage() {
  const [task, setTask] = useState("");

  return (
    <main>
      <h1>Task Form</h1>
      <form onSubmit={(event) => { event.preventDefault(); alert("Saved task: " + task); }}>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Task name..."
        />
        <button type="submit">Save Task</button>
      </form>
    </main>
  );
}