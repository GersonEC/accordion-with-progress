export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface TaskGroup {
  name: string;
  tasks: Task[];
}
