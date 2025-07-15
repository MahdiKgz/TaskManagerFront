interface OverView {
  value: number;
  type: "completed" | "in-progress" | "todo";
}

export type OverViewType = OverView[];
