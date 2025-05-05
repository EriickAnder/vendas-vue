import api from '../api/api';
import { Vendedor, VendedorPayload } from '../interfaces/Vendedor';

export async function listarVendedores(): Promise<Vendedor[]> {
    const response = await api.get<Vendedor[]>('/vendedor');
    return response.data;
}

export async function cadastrarVendedor(vendedor: VendedorPayload): Promise<Vendedor> {
    const response = await api.post<Vendedor>('/vendedor', vendedor);
    return response.data;
}
