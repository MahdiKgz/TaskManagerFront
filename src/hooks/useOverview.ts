import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGetUserOverviewQuery } from "../redux/services/OverViewAPI";

export default function useOverview() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: overViews, isLoading: isOverViewLoading } =
    useGetUserOverviewQuery({
      userID: user?._id as string,
    });

  const methods = useForm({ defaultValues: { ...user } });

  const disabled = true;

  return { methods, disabled, overViews, isOverViewLoading };
}
