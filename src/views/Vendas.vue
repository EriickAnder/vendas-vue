<template>
    <div>
      <h1>Vendas</h1>
  
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UUID</th>
            <th scope="col">Valor</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="4" class="text-center">Carregando...</td>
          </tr>
          <tr v-else v-for="v in vendas" :key="v.id">
            <th scope="row">{{ v.id }}</th>
            <td>{{ v.uuid }}</td>
            <td>R$ {{ Number(v.valor).toFixed(2) }}</td>
            <td>{{v.created_at }}</td>
          </tr>
        </tbody>
      </table>
  
      <nav aria-label="Page navigation example" v-if="!loading && pagination.last_page > 1">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: !pagination.prev_page_url }">
            <a class="page-link" href="#" @click.prevent="carregarPagina(pagination.current_page - 1)">Anterior</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">{{ pagination.current_page }}</a>
          </li>
          <li class="page-item disabled">
            <a class="page-link" href="#">de {{ pagination.last_page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: !pagination.next_page_url }">
            <a class="page-link" href="#" @click.prevent="carregarPagina(pagination.current_page + 1)">Próxima</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { listarVendas } from '../services/vendaService';
  import { login } from '../services/authService';
  
  const vendas = ref([]);
  const loading = ref(false);
  
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    prev_page_url: null,
    next_page_url: null
  });
  

  async function carregarPagina(pagina = 1) {
    loading.value = true;
    try {
      const response = await listarVendas(pagina);
      vendas.value = response.data;
      pagination.value = {
        current_page: response.current_page,
        last_page: response.last_page,
        prev_page_url: response.prev_page_url,
        next_page_url: response.next_page_url
      };
    } finally {
      loading.value = false;
    }
  }
  
  onMounted(async () => {
    await login(); 
    await carregarPagina(1);
  });
  </script>
  