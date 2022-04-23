<template>
    <div>
        <h1>Это тестовое роутинговое вью на вью</h1>
        Скажите привет!
        <input v-model="userInput"/> {{userInput}}
        <p v-if="toLower(userInput).includes('привет')">Ну здарова!</p>
        <p><a href="./">Home</a></p>
    </div>
</template>
<script src='./TestView.ts'></script>