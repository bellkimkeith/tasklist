import {create} from 'zustand';

type Task = {
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
  toggleComplete: (id: string) => void;
  toggleBookmark: (id: string) => void;
};

export const useTaskStore = create<TaskStore>(set => ({
  tasks: [],
  addTask: task => set(state => ({tasks: [...state.tasks, {...task}]})),
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
}));
