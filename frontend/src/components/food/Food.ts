export type Food = {
    _id?: string,
    place: string,
    location: string,
    cuisine: string,
    rating: string,
    review:string,
}

export const DefaultFood: Food = {
    _id: undefined,
    place: '',
    location: '',
    cuisine: '',
    rating: '',
    review: ''
}