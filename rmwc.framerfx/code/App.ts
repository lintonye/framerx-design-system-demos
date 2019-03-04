import { Override, Data } from "framer";

const data = Data({ currentPage: 0 });

export const Tabs: Override = () => ({
  onActivate(evt) {
    const index = evt.detail.index;
    if (data.currentPage !== index) data.currentPage = index;
  },
  activeTabIndex: data.currentPage
});

export const Page: Override = () => ({
  currentPage: data.currentPage,
  onChangePage(page) {
    if (page !== data.currentPage) data.currentPage = page;
  }
});
