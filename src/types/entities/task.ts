export type Task = {
  id: number;
  title: string;
  description: string;
  is_completed: boolean;
  created_at: Date;
};

export type TasksResponse = {
  tasks: Task[];
  totalPages: number;
};
