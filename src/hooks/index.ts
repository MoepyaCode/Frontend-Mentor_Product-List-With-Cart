import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../store";
import { getTotalPrice } from "./products";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppState>()
export {
    getTotalPrice
}