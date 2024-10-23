export type Photo = {
    _id?: string,
    filename: string,
    path: string,
    mimetype: string,
    caption: string
}

export const DefaultPhoto: Photo = {
    _id: undefined,
    filename: '',
    path: '',
    mimetype: '',
    caption: ''
}