import {create} from 'zustand';

export type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  bookmarked: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  toggleComplete: (id: string) => void;
  toggleBookmark: (id: string) => void;
  deleteTask: (id: string) => void;
};

export const useTaskStore = create<TaskStore>(set => ({
  tasks: [],
  addTask: task => set(state => ({tasks: [...state.tasks, {...task}]})),
  updateTask: task =>
    set(state => ({
      tasks: state.tasks.map(taskItem =>
        taskItem.id === task.id ? task : taskItem,
      ),
    })),
  toggleComplete: id =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    })),
  toggleBookmark: id =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? {...task, bookmarked: !task.bookmarked} : task,
      ),
    })),
  deleteTask: id =>
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    })),
}));
