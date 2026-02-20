import { TaskList } from "../components/TaskList/TaskList";

export const Main: React.FC = () => {
  return (
    <>
      <p>Главная страница</p>
      <p>Список задач</p>
      <TaskList />
    </>
  );
};
