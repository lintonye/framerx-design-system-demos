import { Override, Data } from "framer"

const data = Data({ currentPage: 0, dialogOpen: false })

export const Tabs: Override = () => ({
    onActivate(evt) {
        const index = evt.detail.index
        if (data.currentPage !== index) data.currentPage = index
    },
    activeTabIndex: data.currentPage,
})

export const Page: Override = () => ({
    currentPage: data.currentPage,
    onChangePage(page) {
        if (page !== data.currentPage) data.currentPage = page
    },
})

export const Dialog: Override = () => ({
    open: data.dialogOpen,
})

export const DialogButton: Override = () => ({
    onClick() {
        data.dialogOpen = false
    },
})

export const BookButton: Override = () => ({
    onClick() {
        data.dialogOpen = true
    },
})

export function Scale(): Override {
    return {
        whileTap: { left: 0, top: 0, width: 700 },
        transition: { duration: 0.5 },
    }
}
