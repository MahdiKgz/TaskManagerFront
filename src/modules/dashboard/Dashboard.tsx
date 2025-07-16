import useOverview from "@/src/hooks/useOverview";
import React, { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import Input from "../sharedComponents/Input";
import RadialProgress from "./components/RadialProgress";
import Loading from "../sharedComponents/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

function DashboardModule() {
  const { methods, disabled, overViews, isOverViewLoading } = useOverview();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const toastMessage = searchParams.get("toastMessage");
    if (toastMessage === "alreadyLoggedIn") {
      toast.error("شما قبلا با نام کاربری خود وارد شده اید!");
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete("toastMessage");
      router.replace(`/dashboard?${newSearchParams.toString()}`);
    }
  }, [searchParams, router]);

  return (
    <FormProvider {...methods}>
      <form className="flex items-start flex-col gap-20">
        <div className="w-full flex items-start flex-col gap-6">
          <h1 className="font-bold text-2xl">اطلاعات شخصی</h1>
          <div className="w-full flex flex-col sm:flex-row items-start gap-8">
            <Input name="name" label="نام:" disabled={disabled} />
            <Input name="username" label="نام کاربری:" disabled={disabled} />
            <Input name="email" label="ایمیل:" disabled={disabled} />
          </div>
        </div>
        <div className="w-full flex items-start flex-col gap-6">
          <h1 className="font-bold text-2xl">وضعیت تسک ها</h1>
          <div className="w-full flex flex-col md:flex-row flex-wrap items-start gap-5 justify-around">
            {isOverViewLoading && <Loading />}
            {!isOverViewLoading &&
              overViews?.map(({ type, value }, index) => (
                <RadialProgress key={index} type={type} value={value} />
              ))}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default DashboardModule;
