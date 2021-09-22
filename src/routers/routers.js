import { List } from "pages";
import Modal from "components/Modal"
export const routers = [
    { path: "/", Component: List, isExact: true },
    { path: "/detail/:status/:id", Component: Modal, isExact: true }];
