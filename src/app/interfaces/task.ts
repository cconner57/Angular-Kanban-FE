export interface Boards {
  board: Board[];
}

export interface Board {
  id: string;
  column: Column[];
  title: string;
}

export interface Column {
  id: string;
  color: string;
  task: Task[];
  title: string;
}

export interface Task {
  id: string;
  column: string;
  subTask: SubTask[];
  title: string;
}

export interface SubTask {
  id: string;
  description: string;
  finished: boolean;
}
