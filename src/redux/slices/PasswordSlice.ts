import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { setUser } from "./authSlice"
import { UserWithoutConfirm } from "@/src/types/Auth.types"

interface PasswordState {
  loading: boolean
  error: string | null
  success: boolean
}

const initialState: PasswordState = {
  loading: false,
  error: null,
  success: false,
}

export const editPasswordThunk = createAsyncThunk(
  "password/editPassword",
  async (
    passwordData: { password?: string; newPassword?: string; confirmNewPassword?: string },
    { rejectWithValue, getState, dispatch },
  ) => {
    try {
      console.log("editPasswordThunk: شروع فراخوانی API واقعی برای تغییر رمز عبور.")
      const state = getState() as any
      const token = state.auth.user?.token
      const userId = state.auth.user?._id

      if (!token) {
        toast.error("توکن احراز هویت یافت نشد. لطفاً دوباره وارد شوید.")
        return rejectWithValue("توکن احراز هویت یافت نشد.")
      }

      if (!userId) {
        toast.error("شناسه کاربری یافت نشد. لطفاً دوباره وارد شوید.")
        return rejectWithValue("شناسه کاربری یافت نشد.")
      }

      const response = await fetch(`/profile/edit-password/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: passwordData.password,
          newPassword: passwordData.newPassword,
          confirmNewPassword: passwordData.confirmNewPassword,
        }),
      })

      console.log("editPasswordThunk: فراخوانی fetch کامل شد، در حال پردازش پاسخ.")

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.message || "خطا در تغییر رمز عبور.")
        return rejectWithValue(data.message || "خطای ناشناخته.")
      }

      if (data.user) {
        dispatch(setUser(data.user as UserWithoutConfirm))
        toast.success("رمز عبور و اطلاعات کاربری با موفقیت به‌روز شد!")
      } else {
        toast.error("عملیات نا موفق!")
      }

      return true
    } catch (error: any) {
      toast.error("مشکلی در ارتباط با سرور پیش آمد: " + error.message)
      return rejectWithValue(error.message || "خطای ناشناخته.")
    }
  },
)

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    resetPasswordState: (state) => {
      state.loading = false
      state.error = null
      state.success = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editPasswordThunk.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(editPasswordThunk.fulfilled, (state) => {
        state.loading = false
        state.success = true
        state.error = null
      })
      .addCase(editPasswordThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
        state.success = false
      })
  },
})

export const { resetPasswordState } = passwordSlice.actions
export default passwordSlice.reducer
