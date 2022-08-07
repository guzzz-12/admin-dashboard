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
    counter: 15,
    isMoney: false,
    link: "See all orders"
  },
  {
    type: "order",
    title: "orders",
    counter: 33,
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
    counter: 800,
    isMoney: true,
    link: "View net balance"
  },
  {
    type: "user",
    title: "users",
    counter: 150,
    isMoney: false,
    link: "View all users"
  },
  {
    type: "balance",
    title: "balance",
    counter: 3500,
    isMoney: true,
    link: "View net balance"
  },
  {
    type: "balance",
    title: "balance",
    counter: 240,
    isMoney: true,
    link: "View net balance"
  },
  {
    type: "user",
    title: "users",
    counter: 580,
    isMoney: false,
    link: "View all users"
  }
]