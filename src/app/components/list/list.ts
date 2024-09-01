import { ICardData } from "../card/card";

export interface IListData {
    items: ICardData[];
    paginator?: boolean;
    itemsPerPage?: number;
}