export type Member = { id: string; name: string };
export type TTaskData = {
  id: string;
  status: string;
  badge?: string;
  title: string;
  description?: string;
  members: Member[];
};
export type BoardData = {
  id: string;
  status: string;
  count: string;
  tasks: TTaskData[];
};
