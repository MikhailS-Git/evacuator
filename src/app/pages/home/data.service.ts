import { Injectable } from "@angular/core";
import { ICardData } from "src/app/components/card/card";
import { listDemoItem } from "./home";
import { IListData } from "src/app/components/list/list";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    listItems: ICardData[] = [];
    listDemoData: IListData = {
        items: this.listItems,
        paginator: true,
        itemsPerPage: 5
    }

    initListItems(number: number) {
        const item = JSON.parse(JSON.stringify(listDemoItem));
        let idCounter = item.id;
        for (let i = 0; i < number; i++) {
            this.listItems.push({
                ...item,
                id: idCounter++,
                picture: i%2 ? 'assets/img/car-2.jpg' : 'assets/img/car-1.jpg'
            })
        }

        this.listDemoData = {
            ...this.listDemoData,
            items: this.listItems
        }
      }
}