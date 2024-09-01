export interface IFooterNavItem {
    title: string;
    link: string;
}

export const footerNavItems: IFooterNavItem[] = [
    { title: 'Вызвать эвакуатор', link: '/home' },
    { title: 'Добавить эвакуатор на сайт', link: '/create-add' },
    { title: 'Помощь', link: '/about' },
    { title: 'Правила оплаты', link: '/about' },
    { title: 'Защита персональных данных', link: '/home' },
]