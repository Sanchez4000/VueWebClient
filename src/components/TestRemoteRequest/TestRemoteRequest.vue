<template>
    <div>
        <button @click="sendTestRequest">Click me!</button>
        <h1 v-if="isRequestSuccess == true && isButtonClicked == true">It work!</h1>
        <h1 v-if="isRequestSuccess == false && isButtonClicked == true">It isn't work!</h1>
        <h1 v-if="isButtonClicked == false">Click the button</h1>

        <div><label>Cookie Name:<input v-model="cookieName"/></label></div>
        <div><label>Cookie Value:<input v-model="cookieValue"/></label></div>
        <div><button @click="setCookie">Set cookie</button></div>
        <div><button @click="showCookies">Show cookies</button></div>
    </div>
</template>
<script src='./TestRemoteRequest.ts'></script>