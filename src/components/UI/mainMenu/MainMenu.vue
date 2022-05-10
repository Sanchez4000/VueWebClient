<template>
    <div id="main-menu">
        <div id="header">
            <h1>Menu header</h1>
        </div>
        <a v-for="item in menuList" :key="item.id" :href="item.link">
            <menu-item-with-image
                :imagePath="item.imagePath"
                :imageDirection="'left'"
            >
                {{item.label}}
            </menu-item-with-image>
        </a>

        <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/test">Test Page</router-link> -->
    </div>
</template>
<script src="./MainMenu.ts"></script>
<style src="./MainMenu.css" scoped></style>