import {atom} from "recoil"

export const listaDeparticipantesState = atom<string[]>({
    key: "listaDeparticipantes",
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ""
})