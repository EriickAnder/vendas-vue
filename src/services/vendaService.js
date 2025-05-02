import api from '../api/api';

export async function listarVendas(pagina = 1) {
    const response = await api.get(`/venda?page=${pagina}`);
    return response.data;
}


export async function cadastraVenda(payload) {
    const response = await api.post('/venda', payload);
    return response.data;
}

export async function listarVendasPorVendedor(uuid) {
    const response = await api.get(`/venda/${uuid}/vendas`);
    return response.data;
}

export async function enviarEmailParaVendedor(uuid) {
    const response = await api.get(`/email/${uuid}`);
    return response.data;
}