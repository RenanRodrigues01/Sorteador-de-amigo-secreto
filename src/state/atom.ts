import {atom} from "recoil"

export const listaDeparticipantesState = atom<string[]>({
    key: "listaDeparticipantes",
    default: []
})