export type WidgetType = "user" | "order" | "earnings" |"balance";

export interface WidgetData {
  type: WidgetType;
  title: string;
  counter: number;
  isMoney: boolean;
  link: string;
}

export const WIDGETS_DATA: WidgetData[] = [
  {
    type: "user",
    title: "users",
    counter: 1400,
    isMoney: false,
    link: "See all users"
  },
  {
    type: "order",
    title: "orders",
    counter: 75,
    isMoney: false,
    link: "See all orders"
  },
  {
    type: "earnings",
    title: "earnings",
    counter: 2750,
    isMoney: true,
    link: "View net earnings"
  },
  {
    type: "balance",
    title: "balance",
    counter: 15800,
    isMoney: true,
    link: "View net balance"
  }
]