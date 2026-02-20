import { memo, useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Task, TasksResponse } from "../../types/entities/task";
import {
  ButtonsWrapper,
  PageButtonsWrapper,
  TaskWrapper,
} from "./TaskList.styles";

export const TaskList: React.FC = () => {
  const [limit, setLimit] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);

      try {
        const response = (
          await axiosClient.get<TasksResponse>(`/todos-pagination`, {
            params: {
              page: currentPage,
              limit: limit,
            },
          })
        ).data;
        setTasks(response.tasks);
        setTotalPage(response.totalPages);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const getButtons = () => {
    let buttons: React.ReactNode[] = [];

    for (let i: number = 1; i <= totalPage; i++) {
      buttons.push(
        <button
          style={{ backgroundColor: currentPage === i ? "#FF7A00" : "" }}
          key={`buttons-${i}`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <ButtonsWrapper>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Назад
        </button>
        <PageButtonsWrapper>{getButtons()}</PageButtonsWrapper>
        <button onClick={goToNextPage} disabled={currentPage === totalPage}>
          Вперед
        </button>
      </ButtonsWrapper>
      {isLoading && <p>Загрузка...</p>}
      {!isLoading &&
        (!tasks.length ? (
          <p>Задач нет</p>
        ) : (
          <TaskWrapper>
            {tasks.map((task) => (
              <div>
                <p>
                  Задача #{task.id} | {task.title}
                </p>
                <p>{task.description}</p>
                <input type="checkbox" checked={task.is_completed} />
              </div>
            ))}
          </TaskWrapper>
        ))}
      <Text />
    </div>
  );
};

const Text: React.FC = memo(() => (
  <div>
    <p>Ререндер</p>
    <p>Ререндер</p>
  </div>
));
