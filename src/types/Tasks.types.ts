export type Member = { id: string; name: string };
export type TTaskData = {
  _id: string;
  status: string;
  title: string;
  description: string;
  user: string;
};
export type TTaskState = {
  tasks: TTaskData[];
  loading: boolean;
  error: string | null;
};
export type BoardData = {
  id: string;
  status: string;
  count: string;
  tasks: TTaskData[];
};
export type TTaskApi = {
  status: string;
  title: string;
  description: string;
  user: string;
};
export type TDeleteTaskParam = { id: string };

export type TTaskDeleteResponse = { message: string };
export type TTaskResponse = {
  title: string;
  description: string;
  status: string;
  user: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
};
