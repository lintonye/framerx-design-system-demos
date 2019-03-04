import { Override, Data } from "framer";

const data = Data({ currentPage: 0 });

export const Tabs: Override = () => ({
  onActivate(evt) {
    data.currentPage = evt.detail.index;
  },
  activeTabIndex: data.currentPage
});

export const Page: Override = () => ({
  currentPage: data.currentPage
});
