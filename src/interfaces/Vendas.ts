export interface Venda {
    id: number;
    vendedor_id: number;
    valor: number;
    data: string;

}

export interface Paginacao<T> {
    current_page: number;
    data: T[];
    last_page: number;
    per_page: number;
    total: number;
}
