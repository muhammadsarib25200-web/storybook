import Taskbox from "./components/TaskBox/taskBox";

export default function Home() {
  const tasks = [
    "Learn React",
    "Learn JavaScript",
    "Learn Python",
  ];

  return (
    <div>
      <Taskbox tasks={tasks} />
    </div>
  );
}