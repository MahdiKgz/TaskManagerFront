import { QUESTIONS } from "@/src/constants/FAQuestions";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <div className="container flex flex-col gap-8 items-center justify-center gap-y-16 sm:gap-8 py-2 sm:py-3 my-16 sm:my-10">
      <h1 className="font-bold text-2xl text-center bg-gradient-to-l text-transparent bg-clip-text from-amber-200 to-amber-600">
        سوالات متداول
      </h1>
      <span className="text-gray-300 max-w-2xl text-center">
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
        ابزارهای کاربردی می باشد.
      </span>
      <div className="flex flex-col items-center gap-7 sm:gap-6">
        {QUESTIONS.map((question, index) => (
          <Accordion
            key={question.title}
            {...question}
            isOpened={index === 0 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}
