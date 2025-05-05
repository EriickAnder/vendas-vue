import api from '../api/api';
import { Venda, Paginacao } from '../interfaces/Vendas';
import { VendaPayload } from '../interfaces/VendaPayload';

export async function listarVendas(pagina = 1): Promise<Paginacao<Venda>> {
    const response = await api.get<Paginacao<Venda>>(`/venda?page=${pagina}`);
    return response.data;
}

export async function cadastraVenda(payload: VendaPayload): Promise<Venda> {
    const response = await api.post<Venda>('/venda', payload);
    return response.data;
}

export async function listarVendasPorVendedor(uuid: string): Promise<Venda[]> {
    const response = await api.get<Venda[]>(`/venda/${uuid}/vendas`);
    return response.data;
}

export async function enviarEmailParaVendedor(uuid: string): Promise<{ success: boolean; message: string }> {
    const response = await api.get<{ success: boolean; message: string }>(`/email/${uuid}`);
    return response.data;
}
