export type Note = {
    _id?: string,
    title: string,
    note: string,
}

export const DefaultNote: Note = {
    _id: undefined,
    title: '',
    note: ''
}