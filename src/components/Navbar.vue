<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="">Projeto Vendas</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/vendedores">Vendedores</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/novo-vendedor">Novo Vendedor</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " to="/vendas">Vendas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " to="/nova-venda">Nova Venda</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>