export interface ICardData {
    id: number;
    name: string;
    picture: string;
    dataItems: ICardDataItems[];
    phone: string;
    fax: string;
    place: string;
    text: string;
}

export interface ICardDataItems {
    name: string;
    value: string;
}