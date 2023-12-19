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

export interface LatestWorkResponse {
  workReportId: string;
  workReportStartDate: string;
  workReportEndDate: string;
  eventScheduleId: string;
  eventScheduleStartDate: string;
  eventScheduleEndDate: string;
}
