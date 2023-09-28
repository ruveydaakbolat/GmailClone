import { month_tr } from "./constants.js";

export function getDate() {
  const date = new Date();

  const day = date.getDate();
  const monthIndex = date.getMonth();

  return day + " " + month_tr[monthIndex];
}
