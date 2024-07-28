import {create} from 'zustand';

type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

export const useTaskStore = create<TaskStore>(set => ({
  tasks: [],
  addTask: task => set(state => ({tasks: [...state.tasks, {...task}]})),
}));
