<template>

    <header>
        <h1>Projeto Vendas</h1>
    </header>

    <main>
        <div class="card">
            <h2>Bem-vindo!</h2>
            <p>Projeto de Vendas</p>
        </div>


    </main>

</template>
<script setup>
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    color: #333;
}

header {
    background-color: #1f2937;
    color: white;
    padding: 20px;
    text-align: center;
}

main {
    padding: 40px 20px;
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    margin-bottom: 20px;
}

.card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
}

.button {
    background-color: #3b82f6;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
}

.button:hover {
    background-color: #2563eb;
}
</style>