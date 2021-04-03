import {atom} from "recoil"

export const counterAtom = atom({
    key: "counter",
    default: 0
})
export const loginAtom = atom({
    key: "login",
    default: "guest"
})