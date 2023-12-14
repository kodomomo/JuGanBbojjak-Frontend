interface dropdownType {
  initialState: string;
  option: string[];
}

export const monthDropDownItem: dropdownType = {
  initialState: "월",
  option: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
};

export const dayDropDownItem: dropdownType = {
  initialState: "일",
  option: ["1일", "2일", "3일", "4일", "5일"],
};
