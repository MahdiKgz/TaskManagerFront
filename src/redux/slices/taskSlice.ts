import { TTaskData ,TTaskState} from "@/src/types/Tasks.types";
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

const initialState: TTaskState = {
  tasks: [
    {
      _id: "task-1",
      status: "todo",
      title: "رابط کاربری داشبورد",
      description: "شروع یک کسب‌وکار جدید مثل بندبازی روی تک‌چرخه است!",
      user:""
     
    },
    {
      _id: "task-2",
      status: "todo",
      title: "API پرداخت",
      description: "پیاده‌سازی سیستم پرداخت آنلاین",
            user:""

    },
    {
      _id: "task-3",
      status: "in-progress",
      title: "تست واحد",
      description: "نوشتن تست‌های واحد برای کامپوننت‌ها",
            user:""

    },
  ],
  loading: false,
  error: null,
}

 const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // 🔥 تغییر status تسک (برای drag & drop)
    updateTaskStatus: (
      state,
      action: PayloadAction<{ taskId: string; newStatus: "todo" | "in-progress" | "completed" }>,
    ) => {
      const { taskId, newStatus } = action.payload
      const task = state.tasks.find((t) => t._id === taskId)
      if (task) {
        task.status = newStatus
      }
    },

    // 🔥 مرتب‌سازی تسک‌ها (برای drag & drop)
    reorderTasks: (state, action: PayloadAction<TTaskData[]>) => {
      state.tasks = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔥 حالت‌های مختلف API call
      .addCase(createTask.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false
        // 🔥 اضافه کردن تسک جدید به لیست
        const newTask: Task = {
        //   id: action.payload._id || Math.random().toString(36).slice(2, 9),
          status: action.payload.status,
          title: action.payload.title,
          description: action.payload.description,
          user: action.payload.user,
        }
        state.tasks.push(newTask)
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "خطا در ایجاد تسک"
      })
  },
})

export const { updateTaskStatus, reorderTasks } = taskSlice.actions
export default taskSlice.reducer
