<template>
    <div class="container mt-4">
        <h2>Vendas do Vendedor</h2>

        <div v-if="carregando">Carregando vendas...</div>

        <table v-else class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>UUID</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="vendas.length === 0">
                    <td colspan="4" class="text-center">Nenhuma venda encontrada.</td>
                </tr>
                <tr v-else v-for="(v, index) in vendas" :key="v.uuid">
                    <td>{{ index + 1 }}</td>
                    <td>{{ v.uuid }}</td>
                    <td>R$ {{ Number(v.valor).toFixed(2) }}</td>
                    <td>{{ formatarData(v.created_at) }}</td>
                </tr>
            </tbody>
        </table>

        <nav aria-label="Navegação de páginas" v-if="!carregando && paginacao.last_page > 1">
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: !paginacao.prev_page_url }">
                    <a class="page-link" href="#"
                        @click.prevent="carregarPagina(paginacao.current_page - 1)">Anterior</a>
                </li>
                <li class="page-item active">
                    <span class="page-link">{{ paginacao.current_page }}</span>
                </li>
                <li class="page-item disabled">
                    <span class="page-link">de {{ paginacao.last_page }}</span>
                </li>
                <li class="page-item" :class="{ disabled: !paginacao.next_page_url }">
                    <a class="page-link" href="#"
                        @click.prevent="carregarPagina(paginacao.current_page + 1)">Próxima</a>
                </li>
            </ul>
        </nav>

        <router-link to="/" class="btn btn-secondary mt-3">Voltar</router-link>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { login } from '../services/authService';
import { listarVendasPorVendedor } from '../services/vendaService';


const route = useRoute();
const uuid = route.params.uuid;

const vendas = ref([]);
const carregando = ref(false);

const paginacao = ref({
    current_page: 1,
    last_page: 1,
    prev_page_url: null,
    next_page_url: null
});

function formatarData(data) {
    return new Date(data).toLocaleString();
}

async function carregarPagina(pagina = 1) {
    carregando.value = true;
    try {
        const response = await listarVendasPorVendedor(uuid, pagina);
        vendas.value = response.data;

        paginacao.value = {
            current_page: response.current_page,
            last_page: response.last_page,
            prev_page_url: response.prev_page_url,
            next_page_url: response.next_page_url
        };
    } finally {
        carregando.value = false;
    }
}

onMounted(async () => {
    await login();
    await carregarPagina(1);
});
</script>