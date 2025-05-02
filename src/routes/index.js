import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue';
import Vendedores from '../views/Vendedores.vue';
import CadastraVendedor from '../views/CadastraVendedor.vue';
import CadastraVenda from '../views/CadastraVenda.vue';
import Vendas from '../views/Vendas.vue';
import VendasVendedor from '../views/VendasVendedor.vue';

const routes = [
    { path: '/home', name: 'Home', component: Home },
    { path: '/vendedores', name: 'Vendedores', component: Vendedores },
    { path: '/novo-vendedor', name: 'CadastraVendedor', component: CadastraVendedor },
    { path: '/vendas', name: 'Vendas', component: Vendas },
    { path: '/nova-venda', name: 'CadastraVenda', component: CadastraVenda },
    {
        path: '/vendedor/vendas/:uuid', name: 'VendasVendedor', component: VendasVendedor
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router