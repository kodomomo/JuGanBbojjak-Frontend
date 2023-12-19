import { useQuery } from "react-query";
import { instace } from "..";
import { WeeklyListResponse } from "../../../models/Main";

const router = "/main";

export const getWeeklyList = (listType: string | undefined) => {
  return useQuery(
    [],
    async () => {
      const { data } = await instace.get<WeeklyListResponse>(
        `${router}?weekly-list-type=${listType}`
      );
      return data;
    },
    { enabled: !!listType }
  );
};
