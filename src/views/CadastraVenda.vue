<template>
    <div class="container mt-4">
        <h2>Cadastrar Venda</h2>

        <form @submit.prevent="cadastrar">
            <div class="mb-3">
                <label for="valor" class="form-label">Valor da Venda (R$)</label>
                <input type="number" class="form-control" v-model="form.valor" id="valor" required min="0.01"
                    step="0.01" />
            </div>

            <div class="mb-3">
                <label for="vendedor" class="form-label">UUID do Vendedor</label>
                <input type="text" class="form-control" v-model="form.vendedor" id="vendedor" required />
            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading">
                {{ loading ? 'Salvando...' : 'Cadastrar Venda' }}
            </button>
        </form>

        <div v-if="mensagem" class="alert alert-success mt-3">
            {{ mensagem }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { cadastraVenda } from '../services/vendaService';

const form = ref({
    valor: '',
    vendedor: ''
});

const loading = ref(false);
const mensagem = ref('');

const cadastrar = async () => {
    loading.value = true;
    mensagem.value = '';
    try {
        await cadastraVenda(form.value);
        mensagem.value = 'Venda cadastrada com sucesso!';
        form.value = { valor: '', vendedor: '' };
    } catch (error) {
        console.error('Erro ao cadastrar venda', error);
        mensagem.value = error.response?.data?.message || 'Erro ao cadastrar venda. Verifique os dados.';
    } finally {
        loading.value = false;
    }
};
</script>