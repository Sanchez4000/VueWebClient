<template>
    <div id="menu-item-with-image">
        <div v-if="imageDirection === 'left'">
            <img :src="imagePath"/>
        </div>
        <div>
            <slot></slot>
        </div>
        <div v-if="imageDirection === 'right'">
            <img :src="imagePath"/>
        </div>
    </div>
</template>
<script src="./MenuItemWithImage.ts"></script>
<style src="./MenuItemWithImage.css" scoped></style>