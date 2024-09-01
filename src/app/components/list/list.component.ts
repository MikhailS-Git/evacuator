import { Component, Input, OnChanges } from '@angular/core';
import { IListData } from './list';
import { ICardData } from '../card/card';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {
    /** Входящие данные */
    @Input() data?: IListData;

    /** Элементы списка */
    items: ICardData[] = [];
    /** Количество элементов в списке */
    totalItems: number = 0;
    /** Количество видимых элементов на одной странице */
    itemsPerPage: number = 4;
    /** Флаг отображения пагинатора */
    showPaginator: boolean = false;
    /** Индекс текущей страницы */
    currentPageIndex: number = 0;
    /** Список видимых элементов */
    visibleItems: ICardData[] = [];
    /** Общее количество страниц */
    totalPages: number = 0;
    /** Количество отображаемых в пагинаторе страниц */
    numberOfPagesVisible = 4;
    /** Отображаемые в пагинаторе страницы */
    visiblePages: number[] = [];
    /** Флаг обратной сортировки элементов (по id) */
    isSortReverse: boolean = false;

  constructor() { }

  ngOnChanges(): void {
    if (this.data) {
        this.items = [...this.data.items];
        this.showPaginator = this.data.paginator ?? this.showPaginator;
        if (this.showPaginator) {
            this.itemsPerPage = this.data.itemsPerPage ?? this.itemsPerPage;
            this.initPaginator();
        } else {
            this.visibleItems = this.items;
        }
    }
  }

  /** Инициализация пагинатора */
  initPaginator() {
    if (this.data && this.items.length) {
       this.totalItems = this.items.length;       
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.initVisibleItems();
        this.initVisiblePages();
    }
  }

  /** Инициализация видимых элементов на текущей странице */
  initVisibleItems() {
    if (this.data && this.items.length) {
        const firstItemIndex = this.currentPageIndex * this.itemsPerPage;
        const lastItemIndex = firstItemIndex + this.itemsPerPage;
        this.visibleItems = this.items.slice(firstItemIndex, lastItemIndex);
    }
  }

  /** Инициализация видимых страниц пагинатора */
  initVisiblePages(isPrevPageClicked = false) {
    if (!this.visiblePages.length) {
        for (let i = 0; i < this.numberOfPagesVisible; i++) {
            this.visiblePages.push(i + 1);
        }
    } else {
        const firstVisiblePage = isPrevPageClicked ?
            this.visiblePages[0] - this.numberOfPagesVisible < 1 ?
                1 : this.visiblePages[0] - this.numberOfPagesVisible
            : this.visiblePages[this.visiblePages.length - 1] + 1;
        this.visiblePages.length = 0;
            for (let i = 0; i < this.numberOfPagesVisible && (firstVisiblePage + i) <= this.totalPages; i++) {
                this.visiblePages.push(firstVisiblePage + i);
            }
    }
  }

  /** Нажатие на страницу в пагинаторе */
  onPageClick(index: number) {
    this.currentPageIndex = index;
    this.initVisibleItems();
  }

  /** Нажатие на кнопку "Назад"  в пагинаторе */
  onPrevPageClick() {
    this.initVisiblePages(true);
  }

  /** Нажатие на кнопку "Вперед"  в пагинаторе */
  onNextPageClick() {
    this.initVisiblePages();
  }

  /** Смена сортировки элементов */
  sortItems() {
    this.isSortReverse = !this.isSortReverse;
    if (this.isSortReverse) {
        this.items.sort((a, b) => {
            return b.id - a.id
        })
    } else {
        this.items.sort((a, b) => {
            return a.id - b.id
        })
    }
    this.initVisibleItems();
  }

}
