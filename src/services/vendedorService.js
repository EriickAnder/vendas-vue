import api from '../api/api';

export async function listarVendedores() {
    const response = await api.get('/vendedor');
    return response.data;
}
export async function cadastrarVendedor(vendedor) {
    return (await api.post('/vendedor', vendedor)).data;
}