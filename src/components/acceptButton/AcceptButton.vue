<template>
    <button class='accept-button' @click="onClick">
        <a class="text" href="#">
            <b><slot></slot></b>
        </a>
    </button>
</template>
<script src='./AcceptButton.ts'></script>
<style src='./AcceptButton.css'></style>