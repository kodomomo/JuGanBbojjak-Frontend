export interface WeeklyListRequest {
  weekly_list_type: string;
}

export interface WeeklyList {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
}

export interface WeeklyListResponse {
  weeklyList: WeeklyList[];
}
