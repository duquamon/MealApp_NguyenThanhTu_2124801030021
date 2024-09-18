export type RootStackParamList = {
  Menu: undefined; // Màn hình Menu không có tham số
  MealsOverview: { categoryId: string }; // Màn hình MealsOverview có tham số categoryId
  // Các màn hình khác nếu có
};
