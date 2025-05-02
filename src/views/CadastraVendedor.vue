<template>
    <div class="container mt-4">
        <h2>Cadastrar Vendedor</h2>

        <form @submit.prevent="cadastrar">
            <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control" v-model="form.nome" id="nome" required />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" v-model="form.email" id="email" required />
            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading">
                {{ loading ? 'Salvando...' : 'Cadastrar' }}
            </button>
        </form>

        <div v-if="mensagem" class="alert alert-success mt-3">
            {{ mensagem }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { cadastrarVendedor } from '../services/vendedorService';

const form = ref({
    nome: '',
    email: '',

});

const loading = ref(false);
const mensagem = ref('');

const cadastrar = async () => {
    loading.value = true;
    mensagem.value = '';
    try {
        await cadastrarVendedor(form.value);
        mensagem.value = 'Vendedor cadastrado com sucesso!';
        form.value = { nome: '', email: '' };
    } catch (error) {
        console.error('Erro ao cadastrar vendedor', error);
        mensagem.value = 'Erro ao cadastrar. Verifique os dados.';
    } finally {
        loading.value = false;
    }
};
</script>