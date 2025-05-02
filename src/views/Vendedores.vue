<template>
  <div>
    <h1>Vendedores</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Vendedor</th>
          <th scope="col">E-mail</th>
          <th scope="col">Ref</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="4" class="text-center">Carregando...</td>
        </tr>
        <tr v-else v-for="v in vendedores" :key="v.id">
          <th scope="row">{{ v.id }}</th>
          <td>{{ v.nome }}</td>
          <td>{{ v.email }}</td>
          <td>{{ v.uuid }}</td>
          <td>
            <router-link :to="`/vendedor/vendas/${v.uuid}`" class="btn btn-sm btn-outline-primary">
              Ver Vendas
            </router-link>
            <button class="btn btn-sm btn-outline-success" @click="enviarEmail(v.uuid)"
              :disabled="emailLoading === v.uuid">
              {{ emailLoading === v.uuid ? 'Enviando...' : 'Enviar E-mail' }}
            </button>
          </td>
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
import { listarVendedores } from '../services/vendedorService';
import { login } from '../services/authService';
import { enviarEmailParaVendedor } from '../services/vendaService';

const vendedores = ref([]);
const loading = ref(false);
const emailLoading = ref(null);

const pagination = ref({
  current_page: 1,
  last_page: 1,
  prev_page_url: null,
  next_page_url: null
});

async function enviarEmail(uuid) {
  try {
    emailLoading.value = uuid;
    await enviarEmailParaVendedor(uuid);
    alert('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    alert('Erro ao enviar e-mail.');
  } finally {
    emailLoading.value = null;
  }
}

async function carregarPagina(pagina = 1) {
  loading.value = true;
  try {
    const response = await listarVendedores(pagina);
    vendedores.value = response.data;
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