export const VALIDATION_RULES = {
  name: {
    required: "نام الزامی است",
    minLength: {
      value: 3,
      message: "نام باید حداقل ۳ کاراکتر باشد",
    },
    maxLength: {
      value: 18,
      message: "نام باید حداکثر ۱۸ کاراکتر باشد",
    },
  },
  username: {
    required: "نام کاربری الزامی است",
    minLength: {
      value: 3,
      message: "نام کاربری باید حداقل ۳ کاراکتر باشد",
    },
  },
  email: {
    required: "ایمیل الزامی است",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "آدرس ایمیل نامعتبر است",
    },
  },
  password: {
    required: "رمز عبور الزامی است",
  },
  role: {
    required: "نقش الزامی است",
  },
};
